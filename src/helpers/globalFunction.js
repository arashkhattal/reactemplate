// To validate Email
export const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
// phone number validation
export const validatePhone = (phone) => {
  var re = /^[a-zA-Z0-9\-().\s]{10,15}$/;
  return re.test(phone);
};
// convert file
export const fileSize = (size) => {
  if (size) {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = [
      "Bytes",
      "KB",
      "MB",
      "GB",
      "TB",
    ];
    const i = Math.floor(
      Math.log(size) / Math.log(k)
    );
    return (
      parseFloat(
        (size / Math.pow(k, i)).toFixed(2)
      ) +
      " " +
      sizes[i]
    );
  } else return "";
};
