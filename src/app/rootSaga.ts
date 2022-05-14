import { all } from "redux-saga/effects";
import AuthSaga from "../features/auth/AuthSaga";
import counterSaga from "../features/counter/counterSaga";

// function* log(action: PayloadAction) {
//   console.log("Log", action);
// }

// function* helloSaga() {
//   console.log("Hello Saga");
// }

export default function* rootSaga() {
  console.log("root saga");
  yield all([counterSaga(), AuthSaga()]);
}
