// Authentication endpoints
export const AUTH_ENDPOINTS = {
  REGISTER: '/api/auth/register',
  REGISTER_ADMIN: '/api/auth/register-admin',
  LOGIN: '/api/auth/login',
  ME: '/api/auth/me',
  LOGOUT: '/api/auth/logout',
};

export const TESTIMONIAL_ENDPOINTS = {
  GET_ALL: '/api/testimonials',
  GET_BY_ID: (id) => `/api/testimonials/${id}`,
  CREATE: '/api/testimonials',
  UPDATE: (id) => `/api/testimonials/${id}`,
  DELETE: (id) => `/api/testimonials/${id}`,
};

export const COURSE_ENDPOINTS = {
  GET_ALL: '/api/courses',
  GET_BY_ID: (id) => `/api/courses/${id}`,
  GET_BY_PATH: (path) => `/api/courses/path/${path}`,
  CREATE: '/api/courses',
  UPDATE: (id) => `/api/courses/${id}`,
  DELETE: (id) => `/api/courses/${id}`,
};

// ...add other endpoints as needed
