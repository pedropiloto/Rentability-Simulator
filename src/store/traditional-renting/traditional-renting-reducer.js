import * as ACTION_TYPES from "../action-types";

export const initialState = {
  traditionalRenting: {
    property_value: 200000,
    income_value: 600
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_PROPERTY_VALUE: {
      return {
        ...state.traditionalRenting,
        property_value: payload.property_value
      };
    }

    case ACTION_TYPES.SET_INCOME_VALUE: {
      return {
        ...state.traditionalRenting,
        income_value: payload.income_value
      };
    }

    default:
      return state;
  }
};
