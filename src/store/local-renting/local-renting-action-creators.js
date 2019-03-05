import * as actionTypes from "../action-types";

export const setLRPropertyValue = propertyValue => ({
  type: actionTypes.SET_LR_PROPERTY_VALUE,
  payload: { propertyValue }
});

export const setLRTributationType = tributationType => ({
  type: actionTypes.SET_LR_TRIBUTATION_TYPE,
  payload: { tributationType }
});
