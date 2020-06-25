import {
  showDropdown,
  hideDropdown
} from './index'

describe("showDropdown", () => {
  it("should return an action to set drop down state to true", () => {
    const expectedAction = {
      type: "SET_DROPDOWN_STATE",
      payload: {
        showDropdown: true
      }
    }
    expect(showDropdown()).toEqual(expectedAction)
  })
})

describe("hideDropdown", () => {
  it("should return an action to set drop down state to false", () => {
    const expectedAction = {
      type: "SET_DROPDOWN_STATE",
      payload: {
        showDropdown: false
      }
    }
    expect(hideDropdown()).toEqual(expectedAction)
  })
})
