const catchError = ({status, message}) => {
  if(status) return status;
  if(message) return message;
}

module.exports = { catchError };
