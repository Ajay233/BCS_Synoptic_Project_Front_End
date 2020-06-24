del('', data, jwt).then((response) => {

}).catch((error) => {
  if(error.status === 403){
    dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
  } else{
    dispatch(setNotification(error.response.data, "error", true))
  }
})
