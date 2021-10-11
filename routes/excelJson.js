const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');// check: middleware se encarga de validar un campo en particular

/**************************************************************************************************************************/
const { convertToJson } = require('../controllers/excelJson');

/**************************************************************************************************************************/

router.post(
    '/',
    convertToJson
);

/**************************************************************************************************************************/
module.exports = router;