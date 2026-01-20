// Authentication utility functions using cookies
export const auth = {
  // Cookie helper functions
  setCookie: (name, value, days = 7) => {
    if (typeof window === 'undefined') return;
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  },

  getCookie: (name) => {
    if (typeof window === 'undefined') return null;
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  deleteCookie: (name) => {
    if (typeof window === 'undefined') return;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  },

  // Emit custom event when auth state changes
  emitAuthChange: () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('authStateChanged'));
    }
  },

  // Check if user is logged in
  isAuthenticated: () => {
    if (typeof window === 'undefined') return false;
    const token = auth.getCookie('authToken');
    return !!token;
  },

  // Get current user data
  getUser: () => {
    if (typeof window === 'undefined') return null;
    const userStr = auth.getCookie('user');
    return userStr ? JSON.parse(decodeURIComponent(userStr)) : null;
  },

  // Get auth token
  getToken: () => {
    if (typeof window === 'undefined') return null;
    return auth.getCookie('authToken');
  },

  // Logout user
  logout: async () => {
    if (typeof window === 'undefined') return;
    
    try {
      // Call logout API to clear HTTP-only cookies
      await fetch('/api/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout API error:', error);
    }
    
    // Clear client-side cookies as backup
    auth.deleteCookie('authToken');
    auth.deleteCookie('user');
    
    // Emit auth change event
    auth.emitAuthChange();
    
    window.location.href = '/signin';
  },

  // Login user (store credentials in cookies)
  login: (token, user) => {
    if (typeof window === 'undefined') return;
    auth.setCookie('authToken', token, 7); // 7 days
    auth.setCookie('user', encodeURIComponent(JSON.stringify(user)), 7); // 7 days
    
    // Emit auth change event
    auth.emitAuthChange();
  }
};