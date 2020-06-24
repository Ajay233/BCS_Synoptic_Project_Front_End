export const showDropdown = () => {
  return {
    type: "SET_DROPDOWN_STATE",
    payload: {
      showDropdown: true
    }
  }
}

export const hideDropdown = () => {
  return {
    type: "SET_DROPDOWN_STATE",
    payload: {
      showDropdown: false
    }
  }
}
