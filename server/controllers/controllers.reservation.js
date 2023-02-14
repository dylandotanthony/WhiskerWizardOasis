const Reservation = require('../models/models.reservation')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createReservation = (request, response) => {
    Reservation.create(request.body)
        .then(Reservations => response.json(Reservations))
        .catch(err => response.json(err));
}

module.exports.getAllReservation = (request, response) => {
    Reservation.find({})
        .then(Reservations => {
            console.log(Reservations);
            response.json(Reservations);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getReservation = (request, response) => {
    Reservation.findOne({ _id: request.params.id })
        .then(Reservation => response.json(Reservation))
        .catch(err => response.json(err));
}

module.exports.updateReservation = (request, response) => {
    Reservation.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedReservation => response.json(updatedReservation))
        .catch(err => response.json(err))
}
module.exports.deleteReservation = (request, response) => {
    Reservation.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}