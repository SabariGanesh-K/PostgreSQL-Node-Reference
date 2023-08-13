require('dotenv').config();
const express = require('express');
const db = require('./db')
const app = express();
app.use(express.json())
app.get('/api/v1/restaurants',async(req,res)=>{
    try{
        console.log("fetching restauarant");
        const result = await db.query('SELECT * FROM HOTELS;')

        res.status(200).json({
            status:"success",
            len:result.rows.length,
            data:result.rows


        })
    }
    catch(e){
        console.log("error",e);
        

    }
})

app.post('/api/v1/restaurants',async(req,res)=>{
    try{
        console.log("adding..")
        const result = await db.query('INSERT INTO HOTELS (NAME,ID) VALUES ($1,$2);',[req.body.name,req.body.id]);
        console.log("resulting:-",result);
        res.status(200).json({
            status:"success",
            data:`Data added.`

        })
    }
    catch(e){
        console.log(e);
    }
})



const port  = process.env.PORT || '3000'

app.listen(port,()=>{
    console.log("listening at : ",port);
})