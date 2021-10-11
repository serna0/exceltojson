const express = require('express');
const fileUpload = require("express-fileupload");
require('dotenv').config();

/**************************************************************************************************************************/

// Crear servidor
const app = express();

// Public, sirve para agregar toda la app
app.use( express.static('public') );

// Parseo del body
app.use( express.json() );
        // app.use( express.urlencoded({ extended: true }));

/* Carga de archivos */
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

/************************************************ Routes *******************************************************************/

app.use('/api/exceltojson',  require('./routes/excelJson') );


/**************************************************************************************************************************/

app.listen( process.env.PORT , () => {
    console.log(`Run: localhost:${ process.env.PORT }`);
})