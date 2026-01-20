import { cookies } from 'next/headers';

// Server-side authentication utilities
export const serverAuth = {
  // Check if user is authenticated on server
  isAuthenticated: () => {
    const cookieStore = cookies();
    const authToken = cookieStore.get('authToken');
    return !!authToken;
  },

  // Get user data on server
  getUser: () => {
    const cookieStore = cookies();
    const userCookie = cookieStore.get('user');
    if (!userCookie) return null;
    
    try {
      return JSON.parse(decodeURIComponent(userCookie.value));
    } catch (error) {
      console.error('Error parsing user cookie:', error);
      return null;
    }
  },

  // Get auth token on server
  getToken: () => {
    const cookieStore = cookies();
    const authToken = cookieStore.get('authToken');
    return authToken ? authToken.value : null;
  }
};