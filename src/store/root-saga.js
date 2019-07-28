import { all, takeEvery } from "@redux-saga/core/effects";
import * as ACTION_TYPES from "./action-types";
import { calculateTraditionalRentingRentability } from "./traditional-renting/traditional-renting-saga";
import { calculateLocalRentingRentability } from "./local-renting/local-renting-saga";

export default function* rootSaga() {
  yield all([
    //Traditional
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
    ),

    //Local
    takeEvery(
      ACTION_TYPES.SET_LR_PROPERTY_VALUE,
      calculateLocalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_LR_NIGHT_AVERAGE_INCOME,
      calculateLocalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_LR_AVERAGE_OCCUPATION,
      calculateLocalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_LR_CONDOMINIUM_VALUE,
      calculateLocalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_LR_OCCUPATION_EXPENSE,
      calculateLocalRentingRentability
    ),
    takeEvery(ACTION_TYPES.SET_LR_IMI_VALUE, calculateLocalRentingRentability),
    takeEvery(
      ACTION_TYPES.SET_LR_INSURANCE_VALUE,
      calculateLocalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_LR_EXTRA_EXPENSES,
      calculateLocalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_LR_TRIBUTATION_TYPE,
      calculateLocalRentingRentability
    ),
    takeEvery(
      ACTION_TYPES.SET_LR_TRIBUTATION_TAX,
      calculateLocalRentingRentability
    ),
    takeEvery(ACTION_TYPES.SET_LR_IRS_TAX, calculateLocalRentingRentability)
  ]);
}
