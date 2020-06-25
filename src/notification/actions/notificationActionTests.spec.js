import { setNotification, unsetNotification } from './index'

describe("setNotification", () => {
  it("should set the notification details", () => {
    const expectedAction = {
      type: "SET_NOTIFICATION",
      payload: {
        message: "test",
        type: "success",
        show: true,
        timed: true
      }
    }
    expect(setNotification("test", "success", true)).toEqual(expectedAction)
  })
})

describe("unsetNotification", () => {
  it("should unset the notification details", () => {
    const expectedAction = {
      type: "SET_NOTIFICATION",
      payload: {
        message: "",
        type: "",
        show: false,
        timed: true
      }
    }
    expect(unsetNotification()).toEqual(expectedAction)
  })
})
