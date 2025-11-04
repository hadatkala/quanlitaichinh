const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1';

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || '*', // Cho phép tất cả origins hoặc chỉ định URL cụ thể
    credentials: true
}));
app.use(express.json());
app.use(express.static(__dirname));

// Database setup
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Database connected');
        initDatabase();
    }
});

function initDatabase() {
    // Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        email TEXT NOT NULL,
        email_verified INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Verification codes table
    db.run(`CREATE TABLE IF NOT EXISTS verification_codes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        code TEXT NOT NULL,
        expires_at DATETIME NOT NULL,
        used INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // User data table (for financial data)
    db.run(`CREATE TABLE IF NOT EXISTS user_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        data TEXT,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create admin user if not exists
    bcrypt.hash(ADMIN_PASSWORD, 10, (err, hash) => {
        if (!err) {
            db.run(`INSERT OR IGNORE INTO users (username, password_hash, email, email_verified) 
                   VALUES (?, ?, ?, ?)`, 
                   [ADMIN_USERNAME.toLowerCase(), hash, 'admin@system.local', 1],
                   function(insertErr) {
                       if (insertErr) {
                           console.error('Error creating admin user:', insertErr);
                       } else {
                           if (this.changes > 0) {
                               console.log('✅ Admin user created: username="admin", password="1"');
                           } else {
                               // Check if admin exists and update password if needed
                               db.get('SELECT * FROM users WHERE LOWER(username) = ?', [ADMIN_USERNAME.toLowerCase()], async (err, row) => {
                                   if (!err && row) {
                                       const valid = await bcrypt.compare(ADMIN_PASSWORD, row.password_hash);
                                       if (!valid) {
                                           // Update password
                                           db.run('UPDATE users SET password_hash = ? WHERE LOWER(username) = ?', 
                                                  [hash, ADMIN_USERNAME.toLowerCase()],
                                                  (updateErr) => {
                                                      if (!updateErr) {
                                                          console.log('✅ Admin password updated to "1"');
                                                      }
                                                  });
                                       } else {
                                           console.log('✅ Admin user exists and password is correct');
                                       }
                                   }
                               });
                           }
                       }
                   });
        }
    });
}

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Hoặc dùng SMTP khác
    auth: {
        user: process.env.EMAIL_USER, // Email của bạn
        pass: process.env.EMAIL_PASSWORD // App password hoặc password
    }
});

// Helper function to send password reset email
function sendPasswordResetEmail(email, code) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Mã đặt lại mật khẩu',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #667eea;">Đặt lại mật khẩu</h2>
                <p>Xin chào,</p>
                <p>Bạn đã yêu cầu đặt lại mật khẩu. Mã xác nhận của bạn là:</p>
                <div style="background: #f8f9fa; padding: 20px; text-align: center; margin: 20px 0; border-radius: 8px;">
                    <h1 style="color: #667eea; font-size: 36px; letter-spacing: 10px; margin: 0;">${code}</h1>
                </div>
                <p>Mã này sẽ hết hạn sau 10 phút.</p>
                <p>Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="color: #666; font-size: 12px;">Đây là email tự động, vui lòng không trả lời.</p>
            </div>
        `
    };

    return transporter.sendMail(mailOptions);
}

// API Routes

// Register (no email verification needed)
app.post('/api/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Validation
        if (!username || !password || !email) {
            return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
        }

        // Check if username exists
        db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
            if (err) {
                return res.status(500).json({ error: 'Lỗi server' });
            }
            if (row) {
                return res.status(400).json({ error: 'Tên đăng nhập đã tồn tại' });
            }

            // Hash password
            const passwordHash = await bcrypt.hash(password, 10);

            // Create user directly (no email verification)
            db.run(
                'INSERT INTO users (username, password_hash, email, email_verified) VALUES (?, ?, ?, ?)',
                [username, passwordHash, email, 1],
                (err) => {
                    if (err) {
                        return res.status(500).json({ error: 'Lỗi tạo tài khoản' });
                    }

                    res.json({ 
                        success: true, 
                        message: 'Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.' 
                    });
                }
            );
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Forgot password - send reset code
app.post('/api/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Vui lòng nhập email' });
        }

        // Check if user exists
        db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
            if (err) {
                return res.status(500).json({ error: 'Lỗi server' });
            }
            if (!row) {
                return res.status(400).json({ error: 'Email không tồn tại trong hệ thống' });
            }

            // Generate 4-digit code
            const code = Math.floor(1000 + Math.random() * 9000).toString();
            const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

            // Save verification code
            db.run(
                'INSERT INTO verification_codes (username, email, code, expires_at) VALUES (?, ?, ?, ?)',
                [row.username, email, code, expiresAt.toISOString()],
                async (err) => {
                    if (err) {
                        return res.status(500).json({ error: 'Lỗi lưu mã xác nhận' });
                    }

                    // Send email
                    try {
                        await sendPasswordResetEmail(email, code);
                        res.json({ 
                            success: true, 
                            message: 'Mã đặt lại mật khẩu đã được gửi đến email của bạn',
                            email: email
                        });
                    } catch (emailError) {
                        console.error('Email error:', emailError);
                        res.status(500).json({ 
                            error: 'Không thể gửi email. Vui lòng thử lại sau.',
                            debug: process.env.NODE_ENV === 'development' ? emailError.message : undefined
                        });
                    }
                }
            );
        });
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Reset password with code
app.post('/api/reset-password', async (req, res) => {
    try {
        const { code, email, newPassword } = req.body;

        if (!code || !email || !newPassword) {
            return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
        }

        // Find verification code
        db.get(
            'SELECT * FROM verification_codes WHERE code = ? AND email = ? AND used = 0 AND expires_at > datetime("now")',
            [code, email],
            async (err, row) => {
                if (err) {
                    return res.status(500).json({ error: 'Lỗi server' });
                }
                if (!row) {
                    return res.status(400).json({ error: 'Mã xác nhận không đúng hoặc đã hết hạn' });
                }

                // Hash new password
                const passwordHash = await bcrypt.hash(newPassword, 10);

                // Update password
                db.run(
                    'UPDATE users SET password_hash = ? WHERE username = ?',
                    [passwordHash, row.username],
                    (err) => {
                        if (err) {
                            return res.status(500).json({ error: 'Lỗi đặt lại mật khẩu' });
                        }

                        // Mark code as used
                        db.run('UPDATE verification_codes SET used = 1 WHERE id = ?', [row.id]);

                        res.json({ 
                            success: true, 
                            message: 'Đặt lại mật khẩu thành công! Bạn có thể đăng nhập với mật khẩu mới.' 
                        });
                    }
                );
            }
        );
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Login (handles both admin and regular users)
app.post('/api/login', (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
        }

        // Query with case-insensitive username
        db.get('SELECT * FROM users WHERE LOWER(username) = LOWER(?)', [username], async (err, user) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: 'Lỗi server' });
            }
            if (!user) {
                return res.status(401).json({ error: 'Tên đăng nhập hoặc mật khẩu không đúng' });
            }

            // Check password
            const validPassword = await bcrypt.compare(password, user.password_hash);
            if (!validPassword) {
                return res.status(401).json({ error: 'Tên đăng nhập hoặc mật khẩu không đúng' });
            }

            // Check if admin
            const isAdmin = username.toLowerCase() === ADMIN_USERNAME.toLowerCase();

            // Generate JWT token
            const token = jwt.sign(
                { username: user.username, id: user.id, isAdmin: isAdmin },
                JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.json({
                success: true,
                token: token,
                username: user.username,
                isAdmin: isAdmin
            });
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Get users list (Admin only)
app.get('/api/admin/users', authenticateToken, (req, res) => {
    if (req.user.username.toLowerCase() !== ADMIN_USERNAME.toLowerCase() && !req.user.isAdmin) {
        return res.status(403).json({ error: 'Không có quyền truy cập' });
    }

    db.all(
        'SELECT username, email, created_at FROM users WHERE LOWER(username) != ? ORDER BY created_at DESC',
        [ADMIN_USERNAME.toLowerCase()],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: 'Lỗi server' });
            }
            res.json({ users: rows });
        }
    );
});

// Delete user (Admin only)
app.delete('/api/admin/users/:username', authenticateToken, (req, res) => {
    if (req.user.username.toLowerCase() !== ADMIN_USERNAME.toLowerCase() && !req.user.isAdmin) {
        return res.status(403).json({ error: 'Không có quyền truy cập' });
    }

    const { username } = req.params;
    
    db.run('DELETE FROM users WHERE username = ?', [username], function(err) {
        if (err) {
            return res.status(500).json({ error: 'Lỗi server' });
        }
        // Also delete user data
        db.run('DELETE FROM user_data WHERE username = ?', [username]);
        res.json({ success: true, message: 'Đã xóa tài khoản' });
    });
});

// Save user data
app.post('/api/user/data', authenticateToken, (req, res) => {
    const { data } = req.body;
    const username = req.user.username;

    db.run(
        'INSERT OR REPLACE INTO user_data (username, data, updated_at) VALUES (?, ?, datetime("now"))',
        [username, JSON.stringify(data)],
        (err) => {
            if (err) {
                return res.status(500).json({ error: 'Lỗi lưu dữ liệu' });
            }
            res.json({ success: true });
        }
    );
});

// Get user data
app.get('/api/user/data', authenticateToken, (req, res) => {
    const username = req.user.username;

    db.get('SELECT data FROM user_data WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Lỗi lấy dữ liệu' });
        }
        if (row && row.data) {
            res.json({ data: JSON.parse(row.data) });
        } else {
            res.json({ data: null });
        }
    });
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Chưa đăng nhập' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token không hợp lệ' });
        }
        req.user = user;
        next();
    });
}

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`JWT Secret: ${JWT_SECRET.substring(0, 20)}...`);
    console.log('\n⚠️  Lưu ý: Cần cấu hình email trong file .env');
});

