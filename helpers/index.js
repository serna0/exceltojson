const uploadFile = require('./upload-file');
const ExcelToJson = require('./excelToJson');

module.exports = {
    ...uploadFile,
    ...ExcelToJson
} 