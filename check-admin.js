// Script để kiểm tra và tạo admin user
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
        process.exit(1);
    }
    
    console.log('Checking admin user...');
    
    // Check if admin exists
    db.get('SELECT * FROM users WHERE LOWER(username) = ?', ['admin'], async (err, row) => {
        if (err) {
            console.error('Error:', err);
            db.close();
            process.exit(1);
        }
        
        if (row) {
            console.log('Admin user exists:');
            console.log('  Username:', row.username);
            console.log('  Email:', row.email);
            console.log('\nTesting password...');
            
            const valid = await bcrypt.compare('1', row.password_hash);
            if (valid) {
                console.log('✅ Password "1" is correct!');
            } else {
                console.log('❌ Password "1" is incorrect!');
                console.log('Updating password...');
                
                const hash = await bcrypt.hash('1', 10);
                db.run('UPDATE users SET password_hash = ? WHERE LOWER(username) = ?', [hash, 'admin'], (err) => {
                    if (err) {
                        console.error('Error updating password:', err);
                    } else {
                        console.log('✅ Password updated successfully!');
                    }
                    db.close();
                });
            }
        } else {
            console.log('Admin user not found. Creating...');
            
            const hash = await bcrypt.hash('1', 10);
            db.run(
                'INSERT INTO users (username, password_hash, email, email_verified) VALUES (?, ?, ?, ?)',
                ['admin', hash, 'admin@system.local', 1],
                (err) => {
                    if (err) {
                        console.error('Error creating admin:', err);
                    } else {
                        console.log('✅ Admin user created successfully!');
                        console.log('  Username: admin');
                        console.log('  Password: 1');
                    }
                    db.close();
                }
            );
        }
    });
});

