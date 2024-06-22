export function formatPhoneNumber(phoneNumber: string) {
  if(!phoneNumber) return;
  const first3Digits = phoneNumber.substring(0, 3);
  const middle3Digits = phoneNumber.substring(3, 6);
  const last3Digits = phoneNumber.substring(6, 10);
  return `(${first3Digits}) ${middle3Digits}-${last3Digits} `;
}
