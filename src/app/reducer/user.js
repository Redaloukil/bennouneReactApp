import { USER_LOGGED_IN , USER_LOGGED_OUT , USER_SIGNED_IN} from '../types/User';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    case USER_SIGNED_IN:
      return action.user;
    default:
      return state;
  }
}