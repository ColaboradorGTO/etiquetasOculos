export const toFloat = (value) => (isNaN(parseFloat(value)) || value === null || value === undefined) ? 0 : parseFloat(value);


