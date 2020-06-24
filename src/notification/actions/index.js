export const setNotification = (message, type, show) => {
  return {
    type: "SET_NOTIFICATION",
    payload: {
      message: message,
      type: type,
      show: show,
      timed: true
    }
  }
}

export const unsetNotification = () => {
  return {
    type: "SET_NOTIFICATION",
    payload: {
      message: "",
      type: "",
      show: false,
      timed: true
    }
  }
}
