export function formatPhoneNumber(phoneNumber: string) {
  if(!phoneNumber) return;
  const first3Digits = phoneNumber.substring(0, 3);
  const middle3Digits = phoneNumber.substring(3, 6);
  const last3Digits = phoneNumber.substring(6, 10);
  return `(${first3Digits}) ${middle3Digits}-${last3Digits} `;
}

export function getTextBackgroundByStatus(status: string) {
  switch (status) {
    case "NEW":
      return "text-bg-primary";
    case "REVIEW":
      return "text-bg-warning";
    case "APPROVED":
      return "text-bg-success";
    case "REJECTED":
      return "text-bg-danger";
    default:
      return "";
  }
}