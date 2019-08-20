//@ts-check
import { EventEmitter } from "events";

/**
 * @TODO improve JSDocs or use typescript
 */

/**
 * @description createStore var II
 * @param {Function} reducer
 */
export const createStore2 = reducer => ({
  _state: reducer(undefined, "redux-init"),
  _stateEmitter: new EventEmitter(),
  _actionsEmitter: new EventEmitter(),
  set state(state) {
    this._state = state;
  },
  get state() {
    return this._state;
  },
  dispatch(action) {
    this.state = reducer(this.state, action);
    this._actionsEmitter.emit(action.type, action);
    this._stateEmitter.emit("new_state");
  }
});
