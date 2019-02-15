import * as actionTypes from "../action-types";

export const setPropertyValue = propertyValue => ({
  type: actionTypes.SET_TR_PROPERTY_VALUE,
  payload: { propertyValue }
});

export const setIncomeValue = incomeValue => {
  console.log("pppp");
  return {
    type: actionTypes.SET_TR_INCOME_VALUE,
    payload: { incomeValue }
  };
};
