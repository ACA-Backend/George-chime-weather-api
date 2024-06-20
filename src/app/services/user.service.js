import User from '../schema/user.schema.js';

export const createUser = async (payload) => {
    const user = new User(payload);
    return await user.save();
}

export const getUser = async (payload) => {
    return (typeof payload === 'object') ? 
    await User.findOne(payload) : await User.findById(payload);
}

export const updateUser = async (payload) => {
    return await User.findByIdAndUpdate(payload.id, payload, { new: true });
}

export const deleteUser = async (payload) => {
    return await User.findByIdAndDelete(payload.id);
}