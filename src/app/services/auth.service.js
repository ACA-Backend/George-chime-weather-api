import { ConflictError, NotFoundError, UnauthorizedError } from '../../lib/utils/error-definitions.js';
import { generateAuthenticationToken } from '../providers/jwt.provider.js';
import * as userService from './user.service.js'
import argon from 'argon2'

export const createNewUser = async (payload) => {
    const existingUser = await userService.getUser(payload);

    if(existingUser) throw new ConflictError('A user with this email already exists');

    return await userService.createUser(payload);
}

export const authenticateUser = async (payload) => {
    const user = await userService.getUser({email: payload.email});

    if(!user) throw new NotFoundError('A user with this record does not exist');

    if(!(await argon.verify(user.password, payload.password))) throw new UnauthorizedError('Invalid credentials, please check your input and try again');

    // generate jwt token and return it
    return generateAuthenticationToken({
        sub: user._id,
        name: user.name,
        email: user.email
    })
}
