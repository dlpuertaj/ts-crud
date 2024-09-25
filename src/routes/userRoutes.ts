import { Router, Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { User } from '../entities/User';

const router = Router();

// Initialize the User repository from TypeORM
const userRepository = AppDataSource.getRepository(User);


// Create User
router.post('/users', async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newUser = userRepository.create({ name });
    await userRepository.save(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Get All Users
router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

export default router;
