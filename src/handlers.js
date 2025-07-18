import { AUTH_ENDPOINTS, TESTIMONIAL_ENDPOINTS, COURSE_ENDPOINTS } from './endpoints';
import { apihandler } from './fun';

// Authentication handler
export const authHandler = {
  register: async (userData) => {
    console.log('Registering user:', userData);
    return apihandler({ url: AUTH_ENDPOINTS.REGISTER, method: 'POST', data: userData });
  },
  registerAdmin: async (adminData) => {
    console.log('Registering admin:', adminData);
    return apihandler({ url: AUTH_ENDPOINTS.REGISTER_ADMIN, method: 'POST', data: adminData });
  },
  login: async (loginData) => {
    console.log('Logging in:', loginData);
    return apihandler({ url: AUTH_ENDPOINTS.LOGIN, method: 'POST', data: loginData });
  },
  getCurrentUser: async () => {
    console.log('Fetching current user');
    return apihandler({ url: AUTH_ENDPOINTS.ME, method: 'GET' });
  },
  logout: async () => {
    console.log('Logging out');
    return apihandler({ url: AUTH_ENDPOINTS.LOGOUT, method: 'POST' });
  },
};

// Testimonial handler
export const testimonialHandler = {
  getAll: async (params = {}) => {
    console.log('Fetching all testimonials with params:', params);
    return apihandler({ url: TESTIMONIAL_ENDPOINTS.GET_ALL, method: 'GET', params });
  },
  getById: async (id) => {
    console.log('Fetching testimonial by ID:', id);
    return apihandler({ url: TESTIMONIAL_ENDPOINTS.GET_BY_ID(id), method: 'GET' });
  },
  create: async (data) => {
    console.log('Creating testimonial:', data);
    return apihandler({ url: TESTIMONIAL_ENDPOINTS.CREATE, method: 'POST', data });
  },
  update: async (id, data) => {
    console.log('Updating testimonial:', { id, data });
    return apihandler({ url: TESTIMONIAL_ENDPOINTS.UPDATE(id), method: 'PUT', data });
  },
  delete: async (id) => {
    console.log('Deleting testimonial:', id);
    return apihandler({ url: TESTIMONIAL_ENDPOINTS.DELETE(id), method: 'DELETE' });
  },
};

// Course handler
export const courseHandler = {
  getAll: async (params = {}) => {
    console.log('Fetching all courses with params:', params);
    return apihandler({ url: COURSE_ENDPOINTS.GET_ALL, method: 'GET', params });
  },
  getById: async (id) => {
    console.log('Fetching course by ID:', id);
    return apihandler({ url: COURSE_ENDPOINTS.GET_BY_ID(id), method: 'GET' });
  },
  getByPath: async (path) => {
    console.log('Fetching course by path:', path);
    return apihandler({ url: COURSE_ENDPOINTS.GET_BY_PATH(path), method: 'GET' });
  },
  create: async (data) => {
    console.log('Creating course:', data);
    return apihandler({ url: COURSE_ENDPOINTS.CREATE, method: 'POST', data });
  },
  update: async (id, data) => {
    console.log('Updating course:', { id, data });
    return apihandler({ url: COURSE_ENDPOINTS.UPDATE(id), method: 'PUT', data });
  },
  delete: async (id) => {
    console.log('Deleting course:', id);
    return apihandler({ url: COURSE_ENDPOINTS.DELETE(id), method: 'DELETE' });
  },
};
