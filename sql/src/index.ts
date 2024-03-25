// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();

async function insertUsersTable(username:string, password:string, email:string) {
    try {
        await client.connect();
        const query = {
            text: 'INSERT INTO users2(username, password, email) VALUES($1, $2, $3)',
            values: [username, password, email]                     //prevents sql injection
        };
        const result = await client.query(query);
        console.log(result);
    } catch (err) {
        console.error('Error inserting user:', err);
    } finally {
        await client.end();
    }
}

insertUsersTable('neha', 'Neha@12344', 'neha@gmail.com');
