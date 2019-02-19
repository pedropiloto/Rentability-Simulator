import * as ACTION_TYPES from "../action-types";
import {
  DEFAULT_PROPERTY_VALUE,
  DEFAULT_INCOME_VALUE,
  DEFAULT_IRS_TAX,
  DEFAULT_IMI_VALUE,
  DEFAULT_CONDOMINIUM_VALUE,
  DEFAULT_OTHER_EXPENSES_VALUE,
  DEFAULT_EXTRA_EXPENSES_VALUE,
  DEFAULT_INSURANCE_VALUE,
  DEFAULT_TOTAL_EXPENSES,
  DEFAULT_TOTAL_IRS,
  DEFAULT_TOTAL_PROFIT,
  DEFAULT_PROFITABILITY_TAX,
  DEFAULT_TOTAL_EXPENSES_WITH_IRS,
  DEFAULT_RETURN_TIME
} from "../../constants";

export const initialState = {
  traditionalRenting: {
    propertyValue: DEFAULT_PROPERTY_VALUE,
    incomeValue: DEFAULT_INCOME_VALUE,
    iRSTax: DEFAULT_IRS_TAX,
    imiValue: DEFAULT_IMI_VALUE,
    condominiumValue: DEFAULT_CONDOMINIUM_VALUE,
    otherExpenses: DEFAULT_OTHER_EXPENSES_VALUE,
    extraExpenses: DEFAULT_EXTRA_EXPENSES_VALUE,
    insuranceValue: DEFAULT_INSURANCE_VALUE,
    totalExpenses: DEFAULT_TOTAL_EXPENSES,
    totalExpensesWithIRS: DEFAULT_TOTAL_EXPENSES_WITH_IRS,
    totalIRS: DEFAULT_TOTAL_IRS,
    totalProfit: DEFAULT_TOTAL_PROFIT,
    profitabilityTax: DEFAULT_PROFITABILITY_TAX,
    returnTime: DEFAULT_RETURN_TIME
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_TR_PROPERTY_VALUE: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          propertyValue: payload.propertyValue
        }
      };
    }

    case ACTION_TYPES.SET_TR_INCOME_VALUE: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          incomeValue: payload.incomeValue
        }
      };
    }
    case ACTION_TYPES.SET_TR_IRS_TAX: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          iRSTax: payload.iRSTax
        }
      };
    }
    case ACTION_TYPES.SET_TR_IMI_VALUE: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          imiValue: payload.imiValue
        }
      };
    }
    case ACTION_TYPES.SET_TR_CONDOMINIUM_VALUE: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          condominiumValue: payload.condominiumValue
        }
      };
    }
    case ACTION_TYPES.SET_TR_OTHER_EXPENSES: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          otherExpenses: payload.otherExpenses
        }
      };
    }
    case ACTION_TYPES.SET_TR_EXTRA_EXPENSES: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          extraExpenses: payload.extraExpenses
        }
      };
    }
    case ACTION_TYPES.SET_TR_INSURANCE_VALUE: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          insuranceValue: payload.insuranceValue
        }
      };
    }
    case ACTION_TYPES.SET_TR_TOTAL_EXPENSES: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          totalExpenses: payload.totalExpenses
        }
      };
    }
    case ACTION_TYPES.SET_TR_TOTAL_EXPENSES_WITH_IRS: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          totalExpensesWithIRS: payload.totalExpensesWithIRS
        }
      };
    }
    case ACTION_TYPES.SET_TR_TOTAL_IRS: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          totalIRS: payload.totalIRS
        }
      };
    }
    case ACTION_TYPES.SET_TR_TOTAL_PROFIT: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          totalProfit: payload.totalProfit
        }
      };
    }
    case ACTION_TYPES.SET_TR_PROFITABILITY_TAX: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          profitabilityTax: payload.profitabilityTax
        }
      };
    }
    case ACTION_TYPES.SET_TR_RETURN_TIME: {
      return {
        ...state,
        traditionalRenting: {
          ...state.traditionalRenting,
          returnTime: payload.returnTime
        }
      };
    }

    default:
      return state;
  }
};
