const httpStatus = require("http-status");
const Joi = require("joi");
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = Joi.extend(joiPasswordExtendCore);

const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    phone: Joi.string().pattern(/^\d{10,12}$/).required(),
    password: joiPassword.string().minOfLowercase(1).minOfUppercase(1).minOfNumeric(1).noWhiteSpaces().required(),
    photo: Joi.string().required(),       ///////////////  Photo URL
});
 
const validation = (req, res, next) => {
    const {name, email, phone, address, password, photo} = req.body;
    
    if(password.length >=8 && password.length<=15){
        const result = schema.validate({name, email, address, phone, password, photo});
        if(result.error) {
            res.sendStatus(httpStatus.BAD_REQUEST);
        }
        next();

    }else{
        res.sendStatus(httpStatus.UNAUTHORIZED);
    }    
}



module.exports = { validation };