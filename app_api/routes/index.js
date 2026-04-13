const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripCode', ctrlTrips.tripsFindCode);
router.post('/trips', ctrlTrips.tripsAddTrip);
router.delete('/trips/:tripCode', ctrlTrips.tripsDeleteTrip);
router.put('/trips/:tripCode', ctrlTrips.tripsUpdateTrip);

module.exports = router;