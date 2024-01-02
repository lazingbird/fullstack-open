const Notification = ({ message, isSuccessful }) => {
  if (message === null) {
    return null;
  }
  if (isSuccessful === true) {
    return <div className="notification">{message}</div>;
  } else {
    return <div className="error">{message}</div>;
  }
};

export default Notification;
