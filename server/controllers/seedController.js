const {Staff }= require("../models/model");
const data = require("../data");

const seedStaff = async (req, res, next) => {
    try {
        // deleting all existing users
        await Staff.deleteMany({});
        // inserting new users
        const staffs = await Staff.insertMany(data.staffs);
        // successful response
        return res.status(201).json(staffs);
    } catch (error) {
        next(error);
    }
};

module.exports = { seedStaff };