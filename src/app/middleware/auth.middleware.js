import { UnauthorizedError } from "../../lib/utils/error-definitions.js";
import { verifyAuthenticationToken } from "../providers/jwt.provider.js";

const authMiddleware = function(req, res, next){
    try {
        const authorization = req.headers.authorization

        if(!authorization) throw new UnauthorizedError(
          "Invalid headers or missing authorization header"
        );

        const token = authorization.split(" ")[1]

        if(!token) throw new UnauthorizedError(
          "Invalid headers or missing authorization header"
        );

        const user = verifyAuthenticationToken(token);

        req.user = user;

        next();
    } catch (error) {
        next(error);
    }
}

export default authMiddleware;