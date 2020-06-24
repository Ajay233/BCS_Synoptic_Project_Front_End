export const showModalOne = () => {
  return {
    type: "SET_MODAL_STATE",
    payload: {
      showModalOne: true,
      showModalTwo: false,
      showModalThree: false
    }
  }
}

export const showModalTwo = () => {
  return {
    type: "SET_MODAL_STATE",
    payload: {
      showModalOne: false,
      showModalTwo: true,
      showModalThree: false
    }
  }
}

export const showModalThree = () => {
  return {
    type: "SET_MODAL_STATE",
    payload: {
      showModalOne: false,
      showModalTwo: false,
      showModalThree: true
    }
  }
}

export const hideModal = () => {
  return {
    type: "SET_MODAL_STATE",
    payload: {
      showModalOne: false,
      showModalTwo: false,
      showModalThree: false
    }
  }
}
