import request from 'supertest';
import app from '../app';


describe('ApartmentController', () => {
    it('should create a new apartment and payment record', async () => {
      const apartmentData = {
        managerId: '7',
        owner: 'hassan',
        floor: 3,
        price: 1000,
        paid: true,
        cin: '12345',
      };
  
      const response = await request(app)
        .post('/api/apartment/create')
        .send(apartmentData);
  
     
      expect(response.status).toBe(201);
  
      expect(response.body).toHaveProperty('savedApartment');
      expect(response.body).toHaveProperty('savedPayment');
    });
  });
