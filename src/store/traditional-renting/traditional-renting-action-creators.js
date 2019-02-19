import * as actionTypes from "../action-types";

export const setPropertyValue = propertyValue => ({
  type: actionTypes.SET_TR_PROPERTY_VALUE,
  payload: { propertyValue }
});

export const setIncomeValue = incomeValue => ({
  type: actionTypes.SET_TR_INCOME_VALUE,
  payload: { incomeValue }
});

export const setIRSTax = iRSTax => ({
  type: actionTypes.SET_TR_IRS_TAX,
  payload: { iRSTax }
});
export const setIMIValue = imiValue => ({
  type: actionTypes.SET_TR_IMI_VALUE,
  payload: { imiValue }
});
export const setCondominiumValue = condominiumValue => ({
  type: actionTypes.SET_TR_CONDOMINIUM_VALUE,
  payload: { condominiumValue }
});
export const setOtherExpenses = otherExpenses => ({
  type: actionTypes.SET_TR_OTHER_EXPENSES,
  payload: { otherExpenses }
});
export const setExtraExpenses = extraExpenses => ({
  type: actionTypes.SET_TR_EXTRA_EXPENSES,
  payload: { extraExpenses }
});
export const setInsuranceValue = insuranceValue => ({
  type: actionTypes.SET_TR_INSURANCE_VALUE,
  payload: { insuranceValue }
});
export const setTotalExpenses = totalExpenses => ({
  type: actionTypes.SET_TR_TOTAL_EXPENSES,
  payload: { totalExpenses }
});
export const setTotalExpensesWithIRS = totalExpensesWithIRS => ({
  type: actionTypes.SET_TR_TOTAL_EXPENSES_WITH_IRS,
  payload: { totalExpensesWithIRS }
});
export const setTotalIRS = totalIRS => ({
  type: actionTypes.SET_TR_TOTAL_IRS,
  payload: { totalIRS }
});
export const setTotalProfit = totalProfit => ({
  type: actionTypes.SET_TR_TOTAL_PROFIT,
  payload: { totalProfit }
});
export const setProfitabilityTax = profitabilityTax => ({
  type: actionTypes.SET_TR_PROFITABILITY_TAX,
  payload: { profitabilityTax }
});
export const setReturnTime = returnTime => ({
  type: actionTypes.SET_TR_RETURN_TIME,
  payload: { returnTime }
});
