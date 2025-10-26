import express from 'express';
import { createTask, deleteTask, getAllTasks, updateTask } from '../controllers/tasksController.js';
const router = express.Router();


// hàm xử lý request GET tại endpoint /api/task
router.get('/',getAllTasks);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask); 

export default router;