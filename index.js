const express = require("express");
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

function dodaj(obj,tab) {
let query = `INSERT INTO ${tab} parametr`;  
    query+='(imie, nazwisko, plec data, cokolwiek)'
    query+='VAULES('
    query+= obj.imie
    query+= obj.nazwisko
    query+= ")"
    connection.query(query)
}

function aktaualizuj(id,obj,tab) {
    let query = `UPDATE INTO ${tab} parametr`;  
    query+='(imie, nazwisko, plec data, cokolwiek)'
    query+='VAULES('
    query+= obj.imie
    query+= obj.nazwisko
    query+= ")"
    query+= `WHERE id=${id}`
    connection.query(query)
  connection.query(query);
}

function usun(id,tab){
let query = `DELETE FROM ' ${tab} "WHERE id=${id}`;  
    connection.query(query);
}


function pobierz(parametr,tab) {
  if(parametr){
    parametr = 'WHERE `name` = "Page" AND `age` > 45';
  }

 let query = `SELECT * FROM ${tab} parametr`;  
  connection.query(
      query,
      function(err, results, fields) {
        console.log(results); 
        console.log(fields);
        return fields;
      }
  )
}



app.get("/", (req, res) => {
  res.send(data());
});

app.listen(8080);
