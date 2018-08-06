
document.getElementById('txtBtn').addEventListener('click', cargarTxt);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarAPI);


function cargarTxt() {

	fetch('datos.txt')
		.then(function(res) {
			return res.text();
		})
		.then(function(data) {
			console.log(data);
			document.getElementById('resultado').innerHTML = data;
		})
		.catch(function(err) {
			console.log(err)
		});
}

function cargarJSON() {
	fetch('empleados.json')
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			let html = '';
			data.forEach(function(d) {
				html += `
					<li>${d.nombre}</li>
				`
			})
			document.getElementById('resultado').innerHTML = html;
		})
		.catch(function(err) {
			console.log(err);
		})
}

function cargarAPI() {
	fetch('https://picsum.photos/list')
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			let html = '';
			data.forEach((d) => {
				html += `<li>${d.author}</li>`
			});
			document.getElementById('resultado').innerHTML = html;
		})
}






