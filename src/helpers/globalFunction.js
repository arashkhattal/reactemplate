// To validate Email
export const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

