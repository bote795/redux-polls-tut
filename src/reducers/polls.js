import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls'
import { ADD_AWNSER } from '../actions/answers'

export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls,
            }
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll
            }
        case ADD_AWNSER:
            const {authedUser, answer, id} = action;
            const poll = state[id];
            const voteKey = answer + 'Votes';
            return {
                ...state,
                [action.id]: {
                    ...poll,
                    [voteKey]: poll[voteKey].concat([authedUser])
                }
            }
        default:
            return state;
    }

}