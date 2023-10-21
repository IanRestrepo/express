const express = require('express');

const app = express();
app.use(express.json());
app.disable('x-powered-by');

const products = [
    {
        "id": 1,
        "productName": "PC GAMER 2500 RTX 6090",
        "productDescription": "Lorem ipsum"
    }
];

app.get('/products', (req, res) => {
    res.json(products)
});

app.post('/products', (req, res) => {
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.end(`Producto Creado: ${JSON.stringify(newProduct)}`);
});

app.put('/products', (req, res) => {
    res.end('Actualizando productos');
});

app.delete('/products', (req, res) => {
    res.end('Eliminando productos');
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const productFound = products.find((product) => {
       return product.id === id
    })

    if (!productFound){
        res.status(404)
        res.send('Ups! no se ha encontrado el producto que buscaste - ERROR 404');
        
    } else {
        res.json(productFound);
    }

});

app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const produductToDelete = products.find((p) => p.id !== id);

    if(!produductToDelete) {
        res.status(404);
        res.send('Product Not found')
    } else {
        res.status(200);
        res.end('Product Deleted')
    }
})

app.listen(3000, () => {
    console.log(`Server listening on port: 3000`)
})