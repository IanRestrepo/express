# Notas

con express puedes enviar archivos directamente al usuario con la función de sendFile(<FilePath>, <ObjectRoot>)

```js
const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.listen(3000);
console.log('Server on port 3000')
```

## Express Routing
```js
app.get('/home',(req,res)=> {
    res.end('Route Home')
})
```
De manera literal solo tenemos que definir el path como primer parametro de petición en nuestro codigo express

# Status Handling of 404

Si deseamos utilizar un 404 personalizado lo unico que debemos de hacer es utilizar el app.use a lo ultimo de nuestro codigo, esto porque Express pasara por cada una de las rutas y al ver que no existe tal ruta entonces usara este meth para poder enviarnos una respuesta, ejemplo:

```js

// const express = require('express');

// const app = express();

// app.get('/', (req, res)=> {
//     res.sendFile('./static/index.html', {
//         root: __dirname
//     })
// })

// app.get('/home',(req,res)=> {
//     res.end('Route Home')
// })

app.use((req, res)=> {
    res.send('ERROR 404 - PAGE NOT FOUND')
})

app.listen(3000);
console.log('Server on port 3000')

```

# Request Params

Supongamos que estamos creando una Red Social y tenemos diferentes usuarios, tenemos una pagina que saluda al usuario dependiendo de el nombre de su perfil, es decir, si estamos en el perfil del usuario "Ian" o ('mysocialnet.work'/hello/Ian), entonces deberia de mostrarme en el front-end un " Hola Ian "

Es más que obvio que si creamos una pagina manualmente por cada usuario se haria un codígo in-mantenible y seria in-escalable por lo que Express nos da un concepto llamado Request Params, o ( POR ASI DECIRLO ) Rutas dinamicas, veamos un ejemplo

```js

app.get('/hello/Ian', (req,res) => {
    res.send('Este es un codigo In mantenible y in escalable')
})

// Peroo ahora con los Request Params de Express:

app.get('/hello/:<variableName>', (req,res)=> {
    res.send('En Variable Name puedes poner lo que desees, es el mismo concepto de un parametro de una función normal!')
})
```