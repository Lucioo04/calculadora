const fs = require ('fs');
const path = require('path');
const ruta = __dirname +"/data/registros.json"

function escribirJson (registro) {
    if(fs.existsSync(ruta)){
        fs.readFile(ruta, 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                var obj = [];
                if (data.length > 0) {
                    obj = JSON.parse(data);
                }
                obj.push(registro);
                json = JSON.stringify(obj);
                fs.writeFileSync(ruta, json, 'utf8');
        }});
    } else {
        var obj = [];
        obj.push(registro);
        var json = JSON.stringify(obj);
        fs.writeFileSync(ruta, json, 'utf8');
    }
}

module.exports = {
escribirJson
}


