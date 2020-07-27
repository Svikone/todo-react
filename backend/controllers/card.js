const Card = require('../models/card');

exports.createCard = async (req, res) => {
    const { content, date, title} = req.body
    try {
        const card = new Card({
            content, title, date, userId: req.user.userId,
        });
        await card.save();
        res.send({ message: 'Card is successful' }).status(200);
    } catch (e) {
        res.send(e);
    }
}

exports.getCardByUserId = async (req, res) => {
    try {
        const cards = await Card.find({userId: req.user.userId})
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