import path from 'path'

module.exports = {
    production : {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname,'src','database','databse.sqlite')  // __dirname is a global variable
        },
        migrations: {
            directory : path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        useNullAsDefault: true,
    },
    development : {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname,'src','database','databse.sqlite')  // __dirname is a global variable
        },
        migrations: {
            directory : path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        useNullAsDefault: true, 
    }
}