const express = require('express')
const app = express()
const port = 3001
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'datanase'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

let sql = `CREATE TABLE nomes (nome varchar(255) NULL)
    ENGINE=InnoDB
    DEFAULT CHARSET=latin1
    COLLATE=latin1_swedish_ci;
`;
connection.query(sql)


connection.end()

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    
    sql = `INSERT INTO people(name) values('Allison')`
    
    connection.query(sql)
    
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
