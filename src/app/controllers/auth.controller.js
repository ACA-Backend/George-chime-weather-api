import asyncHandler from "../../lib/utils/asyncHandler.js"
import { ValidationError } from "../../lib/utils/error-definitions.js";
import inputValidator from "../../lib/utils/inputValidator.js";
import { LoginRequest } from "../requests/login.request.js";
import { RegisterRequest } from "../requests/register.request.js";
import * as authService from '../services/auth.service.js'


export const login = asyncHandler(async function (req, res, next) {
    const error = inputValidator(LoginRequest, req.body);

    if(error) throw new ValidationError('The request failed with the following errors', error);

    return res.status(200).json({
        success: true,
        message: 'You have successfully logged in',
        authorization: {
            token: await authService.authenticateUser(req.body),
            type: "bearer"
        }
    })
})

export const register = asyncHandler( async function ( req, res, next )
{
    const error = inputValidator(RegisterRequest, req.body);
    
    if(error) throw new ValidationError('The request failed with the following errors', error);

    const {_id, name, email} = await authService.createNewUser(req.body);

    return res.status(200).json({
        success: true,
        message: 'You have successfully registered',
        data: {
            id: _id,
            name,
            email
        }
    })
})

export const getAuthenticatedUser = asyncHandler(async function (req, res, next) {
    return res.status(200).json({
        success: true,
        message: 'You have successfully logged in',
        data: {
            ...req.user
        }
    })
})