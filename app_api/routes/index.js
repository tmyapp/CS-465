const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');
const authenticate = require('../middleware/auth');

// public route
router.post('/login', ctrlTrips.login);

// protected routes
router.get('/trips', authenticate, ctrlTrips.tripsList);
router.get('/trips/:tripCode', authenticate, ctrlTrips.tripsFindCode);
router.post('/trips', authenticate, ctrlTrips.tripsAddTrip);
router.delete('/trips/:tripCode', authenticate, ctrlTrips.tripsDeleteTrip);
router.put('/trips/:tripCode', authenticate, ctrlTrips.tripsUpdateTrip);

module.exports = router;