import { all, takeEvery } from "@redux-saga/core/effects";
import * as ACTION_TYPES from "./action-types";
import { calculateTraditionalRentingRentability } from "./traditional-renting/traditional-renting-saga";

export default function* rootSaga() {
  yield all([
    takeEvery(
      ACTION_TYPES.SET_TR_PROPERTY_VALUE,
      calculateTraditionalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_TR_INCOME_VALUE,
      calculateTraditionalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_TR_IRS_TAX,
      calculateTraditionalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_TR_IMI_VALUE,
      calculateTraditionalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_TR_CONDOMINIUM_VALUE,
      calculateTraditionalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_TR_OTHER_EXPENSES,
      calculateTraditionalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_TR_EXTRA_EXPENSES,
      calculateTraditionalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_TR_INSURANCE_VALUE,
      calculateTraditionalRentingRentability
    )
  ]);
}
