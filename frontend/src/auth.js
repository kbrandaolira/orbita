export const TOKEN_KEY = "@orbita-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = token => localStorage.setItem(TOKEN_KEY, token);
export const setUserId = function (token, userId){
    localStorage.setItem(token, userId);
}
export const getUserId = token => localStorage.getItem(token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);