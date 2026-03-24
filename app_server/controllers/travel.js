const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const travel = async (req, res) => {
  try {
    const trips = await Trip.find();

    res.render('travel', {
      title: 'Travlr Getaways',
      trips: trips
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error retrieving trips');
  }
};

module.exports = {
  travel
};