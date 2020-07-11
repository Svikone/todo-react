const Card = require('../models/card');

exports.createCard = async (req, res) => {
    const { content, data } = req.body
    try {
        const card = new Card({
            content, data, name: req.user.name,
        });
        await card.save();
        res.send({ message: 'Card is successful' }).status(200);
    } catch (e) {
        res.send(e);
    }
}

exports.getCardByName = async (req, res) => {
    try {
        const cards = await Card.find({name: req.user.name})
        res.send(cards).status(200);
    } catch (e) {
        res.send(e);
    }
}

exports.deleteCardById = async (req, res) => {
    try {
        await Card.deleteOne({_id: req.params.id})
        res.send("card deleted").status(200);
    } catch (e) {
        res.send(e);
    }
}