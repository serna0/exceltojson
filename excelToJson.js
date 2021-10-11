const XLSX = require('xlsx');

/**************************************************************************************************************************/

const ExcelToJson = () => {
    /* Obtener el archivo Excel */
    var excelXLSX = XLSX.readFile('./lsg_stats_2021_q2.xlsx');

    /* Obtener el nombre */
    var excelData = excelXLSX.SheetNames;

    excelData.forEach(function(y) {

        var worksheet = excelXLSX.Sheets[y];
        var headers = {};
        var data = [];

        for(z in worksheet) {
            if(z[0] === '!') continue;

            //Anula la columna, fila y valor
            var tt = 0;
            for (var i = 0; i < z.length; i++) {
                if (!isNaN(z[i])) {
                    tt = i;
                    break;
                }
            };
            var col = z.substring(0,tt);
            var row = parseInt(z.substring(tt));
            var value = worksheet[z].v;

            //Tienda nombres de encabezados
            if(row == 1 && value) {
                headers[col] = value;
                continue;
            }

            if(!data[row]) data[row]={};
            data[row][headers[col]] = value;
        }

        //soltar esas primeras dos filas que están vacías
        data.shift();
        data.shift();

        console.log(data);  
    });
}


ExcelToJson();