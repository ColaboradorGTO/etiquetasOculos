
export const validaTelefoneOrCelular = (telefoneOrCelular) => {
    telefoneOrCelular = String(telefoneOrCelular).replace(/\D/g, "");

    if (telefoneOrCelular?.length < 10) return false;

    const regex = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/;
    return regex.test(telefoneOrCelular);
}