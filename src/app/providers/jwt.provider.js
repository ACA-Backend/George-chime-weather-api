import jwt from "jsonwebtoken";
import appConfig from "../../lib/config/app.config.js";

const { jwt_secret, jwt_expires_in } = appConfig;

export const generateAuthenticationToken = function (payload) {
  return jwt.sign(payload, jwt_secret, { expiresIn: jwt_expires_in });
};

export const verifyAuthenticationToken = function (token) {
  return jwt.verify(token, jwt_secret);
};
