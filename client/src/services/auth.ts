import jwtDecode from 'jwt-decode';
const JWT_SECRET = 'test';

export const getUser = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (err) {
    console.log(err);
  }
}
