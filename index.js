const express = require('express');
const app = express();


function sum_it(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a+b
    })
};
function multiply_it(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a*b
    })
};
function devide_it(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a/b
    })
};
function subtract_it(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans:a-b
    })
};

app.get('/sum',sum_it);
app.get('/multiply',multiply_it);
app.get('/devide',devide_it);
app.get('/subtract',devide_it);

app.listen(3000);