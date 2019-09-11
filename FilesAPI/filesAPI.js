/* ACÁ SE OBTIENEN LOS DATOS DE LOS ARCHIVOS Y SE CREAN LOS JSON
 * Y SE REALIZAN LAS OPERACIONES PARA DEVOLVERLAS AL index.js
*/

var getData = require('../DataAPI/dataAPI.js');
const fs = require('fs');

function actualiza () {
  var fechaEnMiliseg = Date.now();

getData().then(function(datos){
	fs.writeFileSync("dolar.json" + fechaEnMiliseg, JSON.stringify(datos));
});

}

function promedio (){
	const getFile = fileName => {
	return new Promise((resolve, reject)=> {
		//El trabajo se hace dentro de la promesa
		fs.readFile(fileName, (err,data)=>{
			if (err){
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}

getFile('dolar.json1568225544109')
.then(JSON.parse)
.then(console.log)
.catch(console.log);
}

promedio();

module.exports = actualiza , promedio;


