const mongoose = require('mongoose');

// User Model
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        enum: ['Guest', 'Staff'],
        required: true
    },
    is_enabled: {
        type: Boolean,
        default: true
    },
});

const User = mongoose.model('User', UserSchema);

// Guest Model
const GuestSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    full_name: { 
        type: String, 
        required: true 
    },
    NID_number: { 
        type: String, 
        required: true 
    },
    phone_number: { 
        type: String, 
        required: true 
    },
    guest_type: { 
        type: String, 
        enum: ['Regular', 'Premium'], 
        required: true 
    },
});

const Guest = mongoose.model('Guest', GuestSchema);

// Staff Model
const StaffSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    full_name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone_number: { 
        type: String, 
        required: true 
    },
    NID_number: { 
        type: String, 
        required: true 
    },
    staff_type: { 
        type: String, 
        required: true 
    },
});

const Staff = mongoose.model('Staff', StaffSchema);

// Room Model
const RoomSchema = new mongoose.Schema({
    room_number: { 
        type: String, 
        required: true 
    },
    capacity: { 
        type: Number, 
        required: true 
    },
    room_type: { 
        type: String, 
        required: true 
    },
    availability: { 
        type: Boolean, 
        default: true },
    price_per_day: { 
        type: Number, 
        required: true 
    },
});

const Room = mongoose.model('Room', RoomSchema);

// Reservation Model
const ReservationSchema = new mongoose.Schema({
    guest_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Guest' 
    },
    room_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Room' 
    },
    start_datetime: { 
        type: Date, 
        required: true 
    },
    end_datetime: { 
        type: Date, 
        required: true 
    },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

// Service Model
const ServiceSchema = new mongoose.Schema({
    guest_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Guest' 
    },
    service_type: { 
        type: String, 
        enum: ['spa', 'party hall', 'meeting room', 'dining'], 
        required: true 
    },
    no_of_guests: { 
        type: Number, 
        required: true
    },
    price: { 
        type: Number, 
        required: true 
    },
    reservation_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Reservation' 
    },
});

const Service = mongoose.model('Service', ServiceSchema);

// Event Model
const EventSchema = new mongoose.Schema({
    event_name: { 
        type: String, 
        required: true 
    },
    event_date: { 
        type: Date, 
        required: true 
    },
    event_details: String,
    ticket_price: { 
        type: Number, 
        required: true 
    },
});

const Event = mongoose.model('Event', EventSchema);

// Bill Model
const BillSchema = new mongoose.Schema({
    guest_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Guest' 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    billing_date: { 
        type: Date, 
        default: Date.now 
    },
});

const Bill = mongoose.model('Bill', BillSchema);

// Salary Model
const SalarySchema = new mongoose.Schema({
    staff_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Staff' 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    is_transferred: { 
        type: Boolean, 
        default: false 
    },
    salary_date: { 
        type: Date, 
        default: Date.now 
    },
});

const Salary = mongoose.model('Salary', SalarySchema);

// Feedback Model
const FeedbackSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    feedback: String,
    datetime: { 
        type: Date, 
        default: Date.now 
    },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

// Revenue Model
const RevenueSchema = new mongoose.Schema({
    month: { 
        type: String, 
        required: true 
    },
    total_revenue: Number,
    total_spending_salary: Number,
    maintenance_cost: Number,
});

const Revenue = mongoose.model('Revenue', RevenueSchema);

module.exports = {
    User,
    Guest,
    Staff,
    Room,
    Reservation,
    Service,
    Event,
    Bill,
    Salary,
    Feedback,
    Revenue,
};
