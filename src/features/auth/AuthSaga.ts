import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, take } from "redux-saga/effects";
import { LoginPayload, authActions } from "./AuthSlice";

function* handleLogin(payload: LoginPayload) {
  console.log("handleLogin", payload);
  localStorage.setItem("access_token", "132");
}

function* handleLogout() {
  console.log("handleLogout");
  localStorage.removeItem("access_token");
}

function* loginFlow() {
  while (true) {
    const isLoggedIn = !!localStorage.getItem("access_token");
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logOut.type);
    yield call(handleLogout);
  }
}

export default function* AuthSaga() {
  yield fork(loginFlow);
}
