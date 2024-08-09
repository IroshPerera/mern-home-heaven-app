
import express from 'express';
import { test, updateUser,deleteUser } from '../controller/user.controller';
import { verifyUser } from '../utils/verifyUser';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyUser, updateUser);
router.delete('/delete/:id',verifyUser, deleteUser);


export default router;