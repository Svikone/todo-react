const Card = require('../models/card');

exports.createCard = async (req, res) => {
    const { content, date, title, userId} = req.body
    try {
        const card = new Card({
            content, title, date, name: req.user.name, userId
        });
        await card.save();
        res.send({ message: 'Card is successful' }).status(200);
    } catch (e) {
        res.send(e);
    }
}

exports.getCardByUserId = async (req, res) => {
    try {
        console.log(req.params.userId)
        const cards = await Card.find({userId: req.params.userId})
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