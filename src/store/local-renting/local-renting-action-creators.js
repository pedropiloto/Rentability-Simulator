import * as actionTypes from "../action-types";

export const setLRPropertyValue = propertyValue => ({
  type: actionTypes.SET_LR_PROPERTY_VALUE,
  payload: { propertyValue }
});

export const setLRCondominiumValue = condominiumValue => ({
  type: actionTypes.SET_LR_CONDOMINIUM_VALUE,
  payload: { condominiumValue }
});

export const setLRImiValue = imiValue => ({
  type: actionTypes.SET_LR_IMI_VALUE,
  payload: { imiValue }
});

export const setLROccupationExpense = occupationExpense => ({
  type: actionTypes.SET_LR_OCCUPATION_EXPENSE,
  payload: { occupationExpense }
});

export const setLRNightAverageIncome = nightAverageIncome => ({
  type: actionTypes.SET_LR_NIGHT_AVERAGE_INCOME,
  payload: { nightAverageIncome }
});

export const setLRAverageOccupation = averageOccupation => ({
  type: actionTypes.SET_LR_AVERAGE_OCCUPATION,
  payload: { averageOccupation }
});

export const setLRInsuranceValue = insuranceValue => ({
  type: actionTypes.SET_LR_INSURANCE_VALUE,
  payload: { insuranceValue }
});

export const setLRExtraExpenses = extraExpenses => ({
  type: actionTypes.SET_LR_EXTRA_EXPENSES,
  payload: { extraExpenses }
});

export const setLRTributationType = tributationType => ({
  type: actionTypes.SET_LR_TRIBUTATION_TYPE,
  payload: { tributationType }
});

export const setLRTributationTax = tributationTax => ({
  type: actionTypes.SET_LR_TRIBUTATION_TAX,
  payload: { tributationTax }
});

export const setLRIrsTax = irsTax => ({
  type: actionTypes.SET_LR_IRS_TAX,
  payload: { irsTax }
});

export const setLRTotalExpenses = totalExpenses => ({
  type: actionTypes.SET_LR_TOTAL_EXPENSES,
  payload: { totalExpenses }
});
export const setLRTotalExpensesWithTax = totalExpensesWithTax => ({
  type: actionTypes.SET_LR_TOTAL_EXPENSES_WITH_TAX,
  payload: { totalExpensesWithTax }
});
export const setLRTotalTax = totalTax => ({
  type: actionTypes.SET_LR_TOTAL_TAX,
  payload: { totalTax }
});
export const setLRTotalProfit = totalProfit => ({
  type: actionTypes.SET_LR_TOTAL_PROFIT,
  payload: { totalProfit }
});
export const setLRProfitabilityTax = profitabilityTax => ({
  type: actionTypes.SET_LR_PROFITABILITY_TAX,
  payload: { profitabilityTax }
});
export const setLRReturnTime = returnTime => ({
  type: actionTypes.SET_LR_RETURN_TIME,
  payload: { returnTime }
});
