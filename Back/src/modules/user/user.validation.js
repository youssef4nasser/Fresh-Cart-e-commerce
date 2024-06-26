import Joi from "joi";

export const updateProfileValidation = Joi.object({
    name: Joi.string().min(2).max(25),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    newPassword: Joi.string().min(6).max(25),
})

export const confirmValidation = Joi.object({
    codeConfirm: Joi.string().length(6).required()
})