import {
  showModalOne,
  showModalTwo,
  showModalThree,
  hideModal
} from './index'

describe("showModalOne", () => {
  it("should return an action to set the modal state", () => {
    const expectedAction = {
      type: "SET_MODAL_STATE",
      payload: {
        showModalOne: true,
        showModalTwo: false,
        showModalThree: false
      }
    }

    expect(showModalOne()).toEqual(expectedAction)
  })
})

describe("showModalTwo", () => {
  it("should return an action to set the modal state", () => {
    const expectedAction = {
      type: "SET_MODAL_STATE",
      payload: {
        showModalOne: false,
        showModalTwo: true,
        showModalThree: false
      }
    }

    expect(showModalTwo()).toEqual(expectedAction)
  })
})

describe("showModalThree", () => {
  it("should return an action to set the modal state", () => {
    const expectedAction = {
      type: "SET_MODAL_STATE",
      payload: {
        showModalOne: false,
        showModalTwo: false,
        showModalThree: true
      }
    }
    expect(showModalThree()).toEqual(expectedAction)
  })
})

describe("hideModal", () => {
  it("should return an action to reset the modal state", () => {
    const expectedAction = {
      type: "SET_MODAL_STATE",
      payload: {
        showModalOne: false,
        showModalTwo: false,
        showModalThree: false
      }
    }
    expect(hideModal()).toEqual(expectedAction)
  })
})
