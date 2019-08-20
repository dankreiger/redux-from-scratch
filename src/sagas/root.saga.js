import { logEffect } from "../utils/logEffect";
import { call, put } from "./../lib/effects";
import { getUsers } from "../actions/users.actions";

export async function runSaga(store, saga, ...args) {
  try {
    const it = saga(...args);
    let result = it.next();
    while (!result.done) {
      const effect = result.value;

      logEffect(effect);

      switch (effect.type) {
        case "call":
          result = it.next(await effect.fn(...effect.args));
          break;
        case "select":
          result = it.next(effect.selector(store.getState()));
          break;
        case "put":
          store.dispatch(effect.action);
          result = it.next();
          break;

        default:
          throw new Error(`Invalid effect type: ${effect.type}`);
      }
    }
  } catch (err) {
    console.error("Uncaught in runSaga", err);
  }
}

export function* usersSaga() {
  const users = yield call(getUsers);
  yield put({ type: "GET_USERS_SUCCESS", payload: users });
}
