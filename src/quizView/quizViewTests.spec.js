import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render, fireEvent, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import QuizView from './quizView'

import { setNotification } from '../notification/actions'
import { showModalOne, showModalTwo, hideModal } from '../modal/actions'
import { setCurrentQuestion, deleteQuestion } from '../questions/actions'
import { getAnswers } from '../answers/actions'
import { clearCurrentQuiz } from './actions'
import history from '../history'

jest.mock('../notification/actions')
jest.mock('../modal/actions')
jest.mock('../questions/actions')
jest.mock('../answers/actions')
jest.mock('./actions')
jest.mock('../history')

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("QuizView component", () => {

  let store;

  beforeEach(() => {
    store = mockStore({
      userData: {
        id: 1,
        username: "test",
        permission: "Edit",
        loggedIn: true,
        jwt: "test"
      },
      modalState: {
        showModalOne: true,
        showModalTwo: false,
        showModalThree: false
      },
      currentQuiz: {
        id: 1,
        name: "test"
      },
      questionList: [{
        id: 1,
        quizId: 1,
        questionNumber: 1,
        description: test
      }],
      currentQuestion: {
        id: 1,
        quizId: 1,
        questionNumber: 1,
        description: test
      },
      notificationState: {
        message: "",
        type: "",
        show: false,
        timed: true
      }
    })

    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  })

  afterEach(() => {
    hideModal.mockClear()
    setNotification.mockClear()
    history.push.mockClear()
    mockAxios.reset()
    cleanup()
  })

  it("renders the modal and the relevant methods are called on quiz deletion", () => {

    const component = render(
      <Provider store={store}>
        <Router history={history}>
          <QuizView
            hideModal={hideModal}
            setNotification={setNotification}
          />
        </Router>
      </Provider>
    )

    const requestResponse = {
      data: "Quiz deleted"
    }

    fireEvent.click(component.getByTestId("modal-continue-button"))
    mockAxios.mockResponse(requestResponse)
    expect(clearCurrentQuiz).toHaveBeenCalledTimes(1)
    // expect(hideModal).toHaveBeenCalledTimes(1)
    // expect(setNotification).toHaveBeenCalledTimes(1)
    // expect(history.push).toHaveBeenCalledTimes(1)
  })

  it("renders the modal and the setNotification method is called if access is denied for the delete quiz request", () => {

    const component = render(
      <Provider store={store}>
        <Router history={history}>
          <QuizView
            hideModal={hideModal}
            setNotification={setNotification}
          />
        </Router>
      </Provider>
    )

    const requestResponse = {
      status: 403
    }

    fireEvent.click(component.getByTestId("modal-continue-button"))
    mockAxios.mockError(requestResponse)
    expect(setNotification).toHaveBeenCalledTimes(1)

  })

  // it("renders the modal and the setNotification method for any other error", () => {
  //
  //   const component = render(
  //     <Provider store={store}>
  //       <Router history={history}>
  //         <QuizView
  //           hideModal={hideModal}
  //           setNotification={setNotification}
  //         />
  //       </Router>
  //     </Provider>
  //   )
  //
  //   const requestResponse = {
  //     status: 400
  //   }
  //
  //   fireEvent.click(component.getByTestId("modal-continue-button"))
  //   mockAxios.mockError(requestResponse)
  //   expect(setNotification).toHaveBeenCalledTimes(1)
  //
  // })
})
