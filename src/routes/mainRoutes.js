const router = require('express').Router();

const path = require('path');

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'views', 'index.html'));
});

router.get('/producto', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'views', 'producto.html'));
});

router.get('/productos/:id', (req, res) => {
	let productoId = req.params.id;
	res.send = productoId;
});
router.get('/contacto', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'views', 'contacto.html'));
});

router.get('/nosotros', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'views', 'nosotros.html'));
});

module.exports = router;
