const config = {
    user: 'devadmin',
    password: 'dev@1234',
    server: 'devsqldbserver.database.windows.net',
    database: 'Beam',
    encrypt: true,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

const config1 = {
    user: 'dev',
    password: 'dev@123',
    server: 'localhost\\sqlexpress12',
    database: 'EFT',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

const sql = require('mssql');

sql.connect(config1).then(pool => {
    // Query
    console.log('Im here');
    
    return pool.request()
    .input('input_parameter', sql.Int, value)
    .query('select * from users where id = @input_parameter')
}).then(result => {
    console.log(result)
    return pool.request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name')
}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})

sql.on('error', err => {
    console.log(err);     
})