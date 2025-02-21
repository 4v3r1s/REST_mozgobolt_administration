// server.js
import express from 'express';
import { Sequelize } from 'sequelize';
import sequelize from './config/config.js';
import napi_fogyas from './models/napi_fogyas.js';
import Raktar from './models/raktar.js';
import Rendeles from './models/rendeles.js';
import Termek from './models/termek.js';
import Vevo from './models/vevo.js';
import Csoport from './models/csoport.js';
import { napiFogyasSchema, rendelesSchema, termekSchema, vevoSchema, raktarSchema } from './validation/validation.js';

const app = express();
app.use(express.json());

// Adatbázis szinkronizálása
sequelize.sync({ force: false }).then(() => {
    console.log("Database synced.");
});

// GET all products
app.get('/termek', async (req, res) => {
    const termekek = await Termek.findAll();
    res.json(termekek);
});

// POST a new product
app.post('/termek', async (req, res) => {
    const { error } = termekSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const ujTermek = await Termek.create(req.body);
    res.status(201).json(ujTermek);
});

// GET all orders
app.get('/rendeles', async (req, res) => {
    const rendelesek = await Rendeles.findAll();
    res.json(rendelesek);
});

// POST a new order
app.post('/rendeles', async (req, res) => {
    const { error } = rendelesSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const ujRendeles = await Rendeles.create(req.body);
    res.status(201).json(ujRendeles);
});

// GET all customers
app.get('/vevo', async (req, res) => {
    const vevok = await Vevo.findAll();
    res.json(vevok);
});

// POST a new customer
app.post('/vevo', async (req, res) => {
    const { error } = vevoSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const ujVevo = await Vevo.create(req.body);
    res.status(201).json(ujVevo);
});

// GET daily stock loss
app.get('/napi_fogyas', async (req, res) => {
    const fogyasok = await napi_fogyas.findAll();
    res.json(fogyasok);
});

// POST daily stock loss
app.post('/napi_fogyas', async (req, res) => {
    const { error } = napiFogyasSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const ujFogyas = await napi_fogyas.create(req.body);
    res.status(201).json(ujFogyas);
});

// GET warehouse data
app.get('/raktar', async (req, res) => {
    const raktarak = await Raktar.findAll();
    res.json(raktarak);
});

// POST warehouse data
app.post('/raktar', async (req, res) => {
    const { error } = raktarSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const ujRaktar = await Raktar.create(req.body);
    res.status(201).json(ujRaktar);
});

// Server start
app.listen(3000, () => console.log('Server running on port 3000'));
