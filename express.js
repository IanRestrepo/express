const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/home',(req,res)=> {
    res.end('Route Home')
})

app.get('/hello/:username', (req,res)=> {
    res.send(`Hello, ${req.params.username}`)
})

app.get('/add/:x/:y', (req, res)=>{
    const x = Number(req.params.x)
    const y = Number(req.params.y)
    const result = x + y;
    res.send(`The Result is: ${result}`)
})

// 404
app.use((req, res)=> {
    res.send('ERROR 404 - PAGE NOT FOUND')
})



app.listen(3000);
console.log('Server on port 3000')