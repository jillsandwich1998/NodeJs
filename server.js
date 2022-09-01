const express = require('express');


/**
 * Driver: Select * from users;
 * 
 * Query Builders: table("users").select('*').where('')
 */




const app = express();
app.use(express.json());

/** MÉTODOS 
 * GET: buscar ou listar uma informação no backend;
 * POST: Criar uma informação no backend;
 * PUT: Alterar uma informação no backend;
 * DELETE: Deletar uma informação no backend;
 */


/**
 * Parâmetros:
 * QUERY: parâmetros nomeados enviados na rota;
 * Route params: parametros utilzados para identificar um recurso
 * Request body: corpo da requisição
 * 
 */



app.get('/users/', (req, res) =>{
    const params = req.query;
    console.log(params)
    res.json(params);
})


app.post('/users/:id', (req, res) =>{
    const params = req.params;
    console.log(params)
    res.json(params);
})

app.post('/users', (req, res) =>{
    const params = req.body;
    console.log(params)
    res.json(params);
})




app.listen(3001);

