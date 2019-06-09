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
exports.getSingleCar = async (req, res) => {
  try {
    const id = req.params.id;
    const singleCar = await Car.findById(id);
    return singleCar;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Adding a car
exports.addCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    return await newCar.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Updating an existing car
exports.updateCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = req.body;
    const { ...updateData } = car;
    const updatedCar = await Car.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return updatedCar;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findByIdAndRemove(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}