import { Schema, model } from "mongoose";
import argon from 'argon2'

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        default: '',
    }
}, { timestamps: true})

UserSchema.pre('save', async function(next){
    this.password = await argon.hash(this.password);
    next();
});

export default model('User', UserSchema)