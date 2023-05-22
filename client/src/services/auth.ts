import jwtDecode from 'jwt-decode';

export const getUser = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (err) {
    console.log(err);
  }
}
