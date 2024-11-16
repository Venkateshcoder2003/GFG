import express from 'express';
import {
    getUsers,
    updateUser,
    deleteUser,
} from '../controllers/userController.js';
import { auth } from '../middleware/auth.js';
import { checkRole } from '../middleware/roles.js';

const router = express.Router();

router.get('/', auth, checkRole(['chairman']), getUsers);
router.put('/:id', auth, checkRole(['chairman']), updateUser);
router.delete('/:id', auth, checkRole(['chairman']), deleteUser);

export default router;