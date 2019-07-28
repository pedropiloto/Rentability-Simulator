import { select, put } from "redux-saga/effects";
import { localRentingSelectors } from "../../store/selectors";
import {
  LR_AUTONOMOUS_TRIBUTATION,
  LR_AUTONOMOUS_TRIBUTATION_TAX
} from "../../constants";
import {
  setLRTotalExpenses,
  setLRTotalExpensesWithTax,
  setLRTotalTax,
  setLRProfitabilityTax,
  setLRTotalProfit,
  setLRReturnTime
} from "./local-renting-action-creators";

export function* calculateLocalRentingRentability() {
  const propertyValue = yield select(localRentingSelectors.getPropertyValue);
  const occupationExpense = yield select(
    localRentingSelectors.getOccupationExpense
  );
  const imiValue = yield select(localRentingSelectors.getImiValue);
  const condominiumValue = yield select(
    localRentingSelectors.getCondominiumValue
  );
  const nightAverageIncome = yield select(
    localRentingSelectors.getNightAverageIncome
  );
  const averageOccupation = yield select(
    localRentingSelectors.getAverageOccupation
  );
  const insuranceValue = yield select(localRentingSelectors.getInsuranceValue);
  const extraExpenses = yield select(localRentingSelectors.getExtraExpenses);
  const tributationType = yield select(
    localRentingSelectors.getTributationType
  );
  const tributationTax = yield select(localRentingSelectors.getTributationTax);
  const irsTax = yield select(localRentingSelectors.getIrsTax);

  try {
    const occupationDays = (Number(averageOccupation) / 100) * 365;
    const occupationIncome = Number(nightAverageIncome) * occupationDays;
    const totalOccupationExpense =
      (Number(occupationExpense) / 100) * occupationIncome;
    const totalExpenses =
      Number(imiValue) +
      Number(condominiumValue) * 12 +
      Number(totalOccupationExpense) +
      Number(extraExpenses) +
      Number(insuranceValue);

    const taxableIncome =
      tributationType === LR_AUTONOMOUS_TRIBUTATION
        ? occupationIncome - totalExpenses
        : Number(occupationIncome) * Number(LR_AUTONOMOUS_TRIBUTATION_TAX);
    const totalTax =
      tributationType === LR_AUTONOMOUS_TRIBUTATION
        ? taxableIncome * (Number(tributationTax) / 100)
        : taxableIncome * (Number(irsTax) / 100);

    const totalProfit = occupationIncome - (totalExpenses + totalTax);
    const profitabilityTax = (totalProfit / Number(propertyValue)) * 100;
    const returnTime = Math.floor((propertyValue / totalProfit) * 100) / 100;

    yield put(setLRTotalExpenses(Math.floor(totalExpenses * 100) / 100));
    yield put(
      setLRTotalExpensesWithTax(
        Math.floor((totalExpenses + totalTax) * 100) / 100
      )
    );
    yield put(setLRTotalTax(Math.floor(totalTax * 100) / 100));
    yield put(setLRProfitabilityTax(Math.floor(profitabilityTax * 100) / 100));
    yield put(setLRTotalProfit(Math.floor(totalProfit * 100) / 100));
    yield put(setLRReturnTime(returnTime));

    console.log(
      "od",
      occupationDays,
      "oi",
      occupationIncome,
      "oe",
      totalOccupationExpense,
      "te",
      totalExpenses,
      "ti",
      taxableIncome,
      "tt",
      totalTax
    );
  } catch (e) {
    console.log(e);
  }
}
