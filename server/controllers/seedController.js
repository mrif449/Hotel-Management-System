const User = require("../models/model");
const data = require("../data");
const seedUser = async (req, res, next) => {
    try {
        // deleting all existing users
        await User.deleteMany({});
        // inserting new users
        const users = await User.insertMany(data.users);
        // successful response
        return res.status(201).json(users);
    } catch (error) {
        next(error);
    }
};
const seedStaff = async (res, next) => {
    try {
        // deleting all existing users
        await seedStaff.deleteMany({});
        // inserting new users
        const staffs = await seedStaff.insertMany(data.staffs);
        // successful response
        return res.status(201).json(staffs);
    } catch (error) {
        next(error);
    }
};

module.exports = { seedUser, seedStaff };