export const validaEmail = (email) => {
    email = String(email);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}