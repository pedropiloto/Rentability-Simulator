import { select, put } from "redux-saga/effects";
import { traditionalRentingSelectors } from "../../store/selectors";
import {
  setTRTotalExpenses,
  setTRTotalExpensesWithIRS,
  setTRTotalIRS,
  setTRTotalProfit,
  setTRProfitabilityTax,
  setTRReturnTime
} from "./traditional-renting-action-creators";

export function* calculateTraditionalRentingRentability() {
  const propertyValue = yield select(
    traditionalRentingSelectors.getPropertyValue
  );
  const incomeValue = yield select(traditionalRentingSelectors.getIncomeValue);
  const iRSTax = yield select(traditionalRentingSelectors.getIRSTax);
  const imiValue = yield select(traditionalRentingSelectors.getIMIValue);
  const condominiumValue = yield select(
    traditionalRentingSelectors.getCondominiumValue
  );
  const otherExpenses = yield select(
    traditionalRentingSelectors.getOtherExpenses
  );
  const extraExpenses = yield select(
    traditionalRentingSelectors.getExtraExpenses
  );
  const insuranceValue = yield select(
    traditionalRentingSelectors.getInsuranceValue
  );

  try {
    const totalExpenses =
      Number(imiValue) +
      Number(condominiumValue) * 12 +
      Number(otherExpenses) * 12 +
      Number(extraExpenses) +
      Number(insuranceValue);

    const totalIRs =
      ((Number(incomeValue) * 12 - totalExpenses) * Number(iRSTax)) / 100;

    const totalProfit = Number(incomeValue) * 12 - (totalExpenses + totalIRs);
    const profitabilityTax = (totalProfit / Number(propertyValue)) * 100;
    const returnTime = Math.floor((propertyValue / totalProfit) * 100) / 100;
    yield put(setTRTotalExpenses(Math.floor(totalExpenses * 100) / 100));
    yield put(
      setTRTotalExpensesWithIRS(
        Math.floor((totalExpenses + totalIRs) * 100) / 100
      )
    );
    yield put(setTRTotalIRS(Math.floor(totalIRs * 100) / 100));
    yield put(setTRTotalProfit(Math.floor(totalProfit * 100) / 100));
    yield put(setTRProfitabilityTax(Math.floor(profitabilityTax * 100) / 100));
    yield put(setTRReturnTime(returnTime));
  } catch (e) {
    console.log(e);
  }
}
