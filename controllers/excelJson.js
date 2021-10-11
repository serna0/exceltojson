const { validationResult } = require('express-validator');
const path = require('path');
const { uploadFile, ExcelToJson } = require('../helpers');
const fs = require('fs');

/* Program Logic */

const convertToJson = async (req, res) => {

    /* Comprobar que venga el file */
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo ) {
        res.status(400).json({ msg: 'Requires an excel file' });
        return;
    }

    /* Subir archivo */
    const name = await uploadFile( req.files );
    const info = await ExcelToJson ( name );

    /* Borrar archivoBasura */
    const pathDelete = `./uploads/${ name }`;
    try{
        fs.unlinkSync( pathDelete );
    }catch( err ){
        return res.json({
            ok: false,
            msg: 'File not deleted'
        });
    }

    /* Mostrar nombre */
    res.json({
        name,
        datajson: info
    })


}

/**************************************************************************************************************************/

module.exports = {
    convertToJson
}