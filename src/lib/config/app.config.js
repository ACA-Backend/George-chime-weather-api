import { config } from "dotenv";
config()

const appConfig = {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    mail_host: process.env.MAIL_HOST,
    mail_port: process.env.MAIL_PORT,
    mail_user: process.env.MAIL_USERNAME,
    mail_pass:  process.env.MAIL_PASSWORD,
    mail_secure: process.env.MAIL_SECURE,
    mail_from: process.env.MAIL_FROM,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expires_in: process.env.JWT_EXPIRES_IN,
};

export default appConfig;