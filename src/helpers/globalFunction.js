import moment from "moment";

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

// to get current date

export const getCurrentDate = () => {
  var dateObj = moment().utc().toDate();
  if (JSON.stringify(dateObj) !== "Invalid Date") {
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    return year + "-" + month + "-" + day;
  } else {
    return "";
  }
};

//function for hex to rgba
export const  hexToRgba = (hex, opacity) => {
   hex = hex.replace("#", "");
   if (hex.length === 3) {
     hex = hex
       .split("")
       .map(function (h) {
         return h + h;
       })
       .join("");
   }
   var r = parseInt(hex.substring(0, 2), 16);
   var g = parseInt(hex.substring(2, 4), 16);
   var b = parseInt(hex.substring(4, 6), 16);
   return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
 }