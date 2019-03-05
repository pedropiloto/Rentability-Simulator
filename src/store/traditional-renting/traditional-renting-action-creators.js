import * as actionTypes from "../action-types";

export const setTRPropertyValue = propertyValue => ({
  type: actionTypes.SET_TR_PROPERTY_VALUE,
  payload: { propertyValue }
});

export const setTRIncomeValue = incomeValue => ({
  type: actionTypes.SET_TR_INCOME_VALUE,
  payload: { incomeValue }
});

export const setTRIRSTax = iRSTax => ({
  type: actionTypes.SET_TR_IRS_TAX,
  payload: { iRSTax }
});
export const setTRIMIValue = imiValue => ({
  type: actionTypes.SET_TR_IMI_VALUE,
  payload: { imiValue }
});
export const setTRCondominiumValue = condominiumValue => ({
  type: actionTypes.SET_TR_CONDOMINIUM_VALUE,
  payload: { condominiumValue }
});
export const setTROtherExpenses = otherExpenses => ({
  type: actionTypes.SET_TR_OTHER_EXPENSES,
  payload: { otherExpenses }
});
export const setTRExtraExpenses = extraExpenses => ({
  type: actionTypes.SET_TR_EXTRA_EXPENSES,
  payload: { extraExpenses }
});
export const setTRInsuranceValue = insuranceValue => ({
  type: actionTypes.SET_TR_INSURANCE_VALUE,
  payload: { insuranceValue }
});
export const setTRTotalExpenses = totalExpenses => ({
  type: actionTypes.SET_TR_TOTAL_EXPENSES,
  payload: { totalExpenses }
});
export const setTRTotalExpensesWithIRS = totalExpensesWithIRS => ({
  type: actionTypes.SET_TR_TOTAL_EXPENSES_WITH_IRS,
  payload: { totalExpensesWithIRS }
});
export const setTRTotalIRS = totalIRS => ({
  type: actionTypes.SET_TR_TOTAL_IRS,
  payload: { totalIRS }
});
export const setTRTotalProfit = totalProfit => ({
  type: actionTypes.SET_TR_TOTAL_PROFIT,
  payload: { totalProfit }
});
export const setTRProfitabilityTax = profitabilityTax => ({
  type: actionTypes.SET_TR_PROFITABILITY_TAX,
  payload: { profitabilityTax }
});
export const setTRReturnTime = returnTime => ({
  type: actionTypes.SET_TR_RETURN_TIME,
  payload: { returnTime }
});
