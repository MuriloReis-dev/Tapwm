let sql = require ('mssql'); 
let connSQLServer = function(){
    const sqlConfig = { 
        user: 'DS2612020', 
        password: '01924099246Mm@', 
        database:'LP2', 
        server: 'APOLO', 
        options:{ 
            encrypt: false, 
            trustServerCertificate: true 
        } 
    } 
    return sql.connect(sqlConfig); 
}

module.exports = function(){ 
    console.log('O autoload carregou o módulo de conexão com o bd'); 
    return connSQLServer; 
} 
