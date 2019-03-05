import * as ACTION_TYPES from "../action-types";
import {
  DEFAULT_LR_TRIBUTATION_TYPE,
  DEFAULT_LR_PROPERTY_VALUE
} from "../../constants";

export const initialState = {
  localRenting: {
    propertyValue: DEFAULT_LR_PROPERTY_VALUE,
    tributationType: DEFAULT_LR_TRIBUTATION_TYPE
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_LR_PROPERTY_VALUE: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          propertyValue: payload.propertyValue
        }
      };
    }

    case ACTION_TYPES.SET_LR_TRIBUTATION_TYPE: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          tributationType: payload.tributationType
        }
      };
    }

    default:
      return state;
  }
};
