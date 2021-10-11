const path = require('path');
const { v4: uuidv4 } = require('uuid');

const uploadFile = ( files, extenesValidas = ['xlsx', 'xlsm', 'xlsb'], carpeta = '' ) => {

    return new Promise((resolve, reject) => {

        /* Establecemos la propiedad del file */
        const { archivo } = files;

        /* Comprobar que sea un xlsx mediante la extension y separar por el punto */
        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[ nombreCortado.length - 1 ];

        if ( !extenesValidas.includes( extension ) ) {
            return reject( 'Requires an excel file .xlsx' );
        }

        /* Construccion del Path donde se guardaran y generar name alatorio */
        const nombreTemp = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads/', carpeta, nombreTemp); //archivo.name

        /* Subir arcjovp de xlsx */
        archivo.mv(uploadPath, (err) => {
            if (err) {
                reject( err );
            }

            resolve( nombreTemp );

        });

    });

}


module.exports = {
    uploadFile
}