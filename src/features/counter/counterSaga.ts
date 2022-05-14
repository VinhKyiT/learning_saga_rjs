import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeLeading } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";
function* handleIncrement(action: PayloadAction<number>) {
  console.log("wait 1s");
  yield delay(1000, action.payload);
  console.log("done");
  yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
  console.log("counter saga");
  yield takeLeading(incrementSaga.toString(), handleIncrement);
}
