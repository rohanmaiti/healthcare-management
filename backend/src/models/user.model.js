import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    userType: {
        type: String,
        enum: ['user', 'doctor', 'hospital-admin', 'inventory-manager', 'receptionist']
    }
})

export const Users = mongoose.model('Users', UserSchema);
