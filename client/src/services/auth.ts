import jwtDecode from 'jwt-decode';

interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
}

export const getUser = (token: string) => {
  try {
    const decoded : DecodedToken = jwtDecode(token);
    localStorage.setItem('email', decoded.email)
    localStorage.setItem('token', token)
    return decoded;
  } catch (err) {
    console.log(err);
  }
}
