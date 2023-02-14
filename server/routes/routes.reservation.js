const ReservationController = require("../controllers/controllers.reservation");

module.exports = (app) => {
    app.get('/api/reservations', ReservationController.getAllReservation);
    app.post('/api/reservations', ReservationController.createReservation);
    app.get('/api/reservations/:id', ReservationController.getReservation);
    app.put('/api/reservations/:id', ReservationController.updateReservation);
    app.delete('/api/reservations/:id', ReservationController.deleteReservation);

}