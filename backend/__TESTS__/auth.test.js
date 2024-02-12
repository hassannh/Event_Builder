import request from 'supertest';
import app from '../app'; 

describe('Login Controller', () => {
  it('should log in a user with correct credentials', async () => {
    const loginData = {
      email: 'maloc@gmail.com',
      password: '12345',
    };

    const response = await request(app)
      .post('/api/user/login') 
      .send(loginData);

    expect(response.status).toBe(200); // Corrected status code for successful login
    expect(response.body).toHaveProperty('message', 'Login successful');
    expect(response.body).toHaveProperty('token');
    expect(response.body).toHaveProperty('user');
  });

  it('should return 404 for non-existing users', async () => {
    const nonExistingUser = {
      email: 'maloooc@gmail.com',
      password: '12345',
    };

    const response = await request(app)
      .post('/api/user/login')
      .send(nonExistingUser);

    expect(response.status).toBe(404); // Checking for a 404 when the user doesn't exist
    expect(response.body).toHaveProperty('message', 'User not found');
  });

 
});
