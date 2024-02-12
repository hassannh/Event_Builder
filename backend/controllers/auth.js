
import users from '../models/users.js'; 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const register = async (req, res) => {

 
  const { firstName ,email, password } = req.body;

  
  try {
     
      const existingEmail = await users.findOne({ email });

      if (existingEmail) {
          return res.status(400).json({ message: 'email already exists' });
      }

     const hashedPassword = await bcrypt.hash(password, 10);

     const newUser = new users({ firstName, email, password: hashedPassword });
     await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, 'SecretKey', { expiresIn: '24h' });

      const UserData = newUser

      res.status(201).json({ message: 'User registered successfully. user:', token ,UserData});
      

      
  } catch (error) {
      res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
};







const login = async (req, res) => {
  const { email, password } = req.body;

  try {
      
      const user = await users.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid password' });
      }

      const token = jwt.sign({ userId: user._id }, 'SecretKey', { expiresIn: '24h' });
      res.status(200).json({ message: 'Login successful', token ,user});
  } catch (error) {
      res.status(500).json({ message: 'Login failed', error: error.message });
  }
};




export {register,login}
