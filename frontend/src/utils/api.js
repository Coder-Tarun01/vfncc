// Use relative URL for cPanel deployment (same domain)
// Get base URL from environment or use default
const BASE_URL = import.meta.env.BASE_URL || '/vfncc/';
const API_BASE_URL = BASE_URL.replace(/\/$/, '') + '/api';

// Get auth token from localStorage
const getToken = () => localStorage.getItem('token');

// API helper functions
export const api = {
  // Auth endpoints
  async register(data) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async login(data) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Media endpoints
  async uploadMedia(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/media/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });
    return response.json();
  },

  async getAllMedia() {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/media/all`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  async deleteMedia(id) {
    const token = getToken();
    const response = await fetch(`${API_BASE_URL}/media/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },

  // Public endpoints (no authentication)
  async getPublicImages() {
    const response = await fetch(`${API_BASE_URL}/media/public/images`);
    return response.json();
  },

  async getPublicMedia() {
    const response = await fetch(`${API_BASE_URL}/media/public/media`);
    return response.json();
  },
};

