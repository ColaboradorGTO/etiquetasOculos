export const isValidEAN13 = (code) => {
  if (!/^\d{13}$/.test(code)) {
    return false;
  }
  const digits = code.split('').map(Number);
  const oddSum = digits.slice(0, 12).filter((_, i) => i % 2 === 0).reduce((a, b) => a + b, 0);
  const evenSum = digits.slice(0, 12).filter((_, i) => i % 2 !== 0).reduce((a, b) => a + b, 0) * 3;
  const totalSum = oddSum + evenSum;
  const checkDigit = (10 - (totalSum % 10)) % 10;
  return checkDigit === digits[12];
}