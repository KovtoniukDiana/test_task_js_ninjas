import { Router } from 'express'
import { upload } from '../middlewares/uppload.js';
import { superheroController } from "./superhero.controller.js";

const superheroRouter = Router();

superheroRouter.post('/',upload.single("image"), superheroController.create);

superheroRouter.get('/', superheroController.getAll);

superheroRouter.get('/:id', superheroController.getById);

superheroRouter.patch('/:id', superheroController.update);

superheroRouter.delete('/:id', superheroController.delete);

export default superheroRouter