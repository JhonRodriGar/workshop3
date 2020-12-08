const express = require('express'); /* Vamos a requerir expres, importamos framework express *porque ya est[a instalado()] */
const app = express(); /* Crea una variable que acceda a expres. Todo lo vamos a almacenar en variable expres */
const port = 3000; /* Crea variable para definir el puerto y le asigna valor 3000 */

/* Nos traemos de express el metodo get para retornar una respuesta */
/* Cuando el cliente ingrese a la ruta '/' */
app.get('/', (req, res) => { /* Llama método get (path, delet son otros) get solo devolver información */
  res.send('Hello World!'); /* Cuando llegue a esa ruta va a retornar un mensaje */
})

/* Nos traemos de express el método listen para levantar el proyecto en el puerto definido */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})