import Joi from "joi";

export const termekSchema = Joi.object({
    nev: Joi.string().min(2).required(),
    ar: Joi.number().min(1).required(),
    keszlet: Joi.number().min(0).required(),
    vonalkod: Joi.string().required()
});

export const rendelesSchema = Joi.object({
    vevo: Joi.string().required(),
    termek: Joi.string().required(),
    mennyiseg: Joi.number().min(1).required(),
    datum: Joi.date().required()
});

export const vevoSchema = Joi.object({
    nev: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    telefonszam: Joi.string().min(8).required()
});

export const napiFogyasSchema = Joi.object({
    raktar: Joi.number().required(),
    termek: Joi.string().required(),
    mennyiseg: Joi.number().min(1).required(),
    datum: Joi.date().required()
});

export const raktarSchema = Joi.object({
    rendszam: Joi.string().required(),
    megjegyzes: Joi.string().required()
});
