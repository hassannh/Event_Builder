
import User from '../models/users.js'; 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';




const register = async (req, res) => {

 
  const { firstName ,lastName,phone,email, password } = req.body;

  console.log('backend api',req.body);

  try {


      const existingEmail = await User.findOne({ email });

      console.log('email if exist',existingEmail);


      if (existingEmail) {
          return res.status(400).json({ message: 'email already exists' });
      }

     const hashedPassword = await bcrypt.hash(password, 10);

     const newUser = new User({ firstName,lastName, email,phone, password: hashedPassword });

     console.log('new user ::',newUser);


     await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, 'SecretKey', { expiresIn: '24h' });

      const UserData = newUser

      res.status(201).json({ message: 'User registered successfully. user:', token ,UserData});
      

      
  } catch (error) {
      res.status(500).json({ message: 'Failed to register user again', error: error.message });
  }
};







const login = async (req, res) => {
  const { email, password } = req.body;


  try {
      
      const user = await User.findOne({ email });



      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      console.log(passwordMatch);


      if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid password' });
      }

      const token = jwt.sign({ userId: user._id }, 'SecretKey', { expiresIn: '24h' });
      const UserData = user
      res.status(200).json({ message: 'Login successful', token ,UserData});
  } catch (error) {
      res.status(500).json({ message: 'Login failed', error: error.message });
  }
};




export {register,login}
