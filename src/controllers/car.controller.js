// Require Boom to handle HTTP Errors
const boom = require("boom");

// Data Model
const Car = require("../models/car");

// Get all cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single car by ID
exports.getSingleCar = async req  => {
  try {
    const id = req.params.id === undefined ? req.id : req.params.id;
    const singleCar = await Car.findById(id);
    return singleCar;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Adding a car
exports.addCar = async req => {
  try {
    const car = new Car(req);
    const newCar = await car.save();
    return newCar;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Updating an existing car
exports.updateCar = async req => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const updatedData = req.params === undefined ? req : req.params;
    const updatedCar = await Car.findByIdAndUpdate(id, updatedData, {
      new: true
    });    
    return updatedCar;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
exports.deleteCar = async req => {
    try {
        const id = req.params === undefined ? req.id : req.params.id;
        const car = await Car.findByIdAndRemove(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}