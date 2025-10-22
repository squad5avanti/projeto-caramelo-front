import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const authService = {
  async login(email, password) {
    try {
      console.log('Enviando login para:', `${API_URL}/login`);
      
      const response = await axios.post(`${API_URL}/login`, {
        email,
        senha: password
      });
      
      console.log('Resposta completa do backend:', response);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        
        const { token, ...userData } = response.data;
        localStorage.setItem('user', JSON.stringify(userData));
        
        console.log('Token salvo:', response.data.token);
        console.log('Dados do usuário:', userData);
      }
      
      return response.data;
    } catch (error) {
      console.error('Erro detalhado:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      throw error.response?.data || { message: 'Erro ao fazer login' };
    }
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },

  getToken() {
    return localStorage.getItem('token');
  },

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated() {
    return !!this.getToken();
  }
};