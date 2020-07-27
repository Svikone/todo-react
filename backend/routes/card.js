const { Router } = require('express');
const router = Router();
const Controller = require('../controllers/card');
const mw = require('../midleware/auth')

router.post('/create',mw, Controller.createCard);
router.get('/by/:userId', mw, Controller.getCardByUserId);
router.delete('/by/:id', mw, Controller.deleteCardById);

module.exports = router;