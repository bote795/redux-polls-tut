import {savePollAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const ADD_AWNSER = 'ADD_AWNSER'

function addAnswer({authedUser, id, answer}) {
    return {
        type: ADD_AWNSER,
        authedUser,
        id,
        answer
    }
}

export function handleAddAnswer(answerData) {
    return (dispatch) => {
        dispatch(showLoading())
        savePollAnswer(answerData)
            .then(() => dispatch(addAnswer(answerData)))
            .then(() => dispatch(hideLoading))
    }
}