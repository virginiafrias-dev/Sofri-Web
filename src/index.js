const express = require('express');
const app = express();
// const saludito = require('saludito-bub');
const mainRoutes = require('./routes/mainRoutes.js');

app.use('/', mainRoutes);
app.use(express.static('public'));

app.listen(3030, () => {
	console.clear();
	console.log('Puerto 3030 escuhando');
	// console.log(saludito());
});
