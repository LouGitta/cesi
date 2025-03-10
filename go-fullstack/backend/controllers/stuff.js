const Thing = require('../models/thing')

exports.createThing = (req, res, next) => {
    delete req.body._id
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({message : "Enregistré"}))
        .catch(error => res.status.json({error}))  
};

exports.getAllStuff = (req, res, next) => {
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({error}))
}

exports.getOneThing = (req, res, next) => {
    Thing.findOne({_id: req.params.id})
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({error}))
}

exports.modifyThing = (req, res, next) => {
    Thing.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(thing => res.status(200).json({message: "Modifié"}))
        .catch(error => res.status(400).json({error}))
}

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({_id: req.params.id})
    .then(thing => res.status(200).json({message: "Supprimé"}))
    .catch(error => res.status(400).json({error}))
}
