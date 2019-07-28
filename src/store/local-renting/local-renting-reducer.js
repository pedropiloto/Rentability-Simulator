import * as ACTION_TYPES from "../action-types";
import {
  DEFAULT_LR_TRIBUTATION_TYPE,
  DEFAULT_LR_PROPERTY_VALUE,
  DEFAULT_LR_TRIBUTATION_TAX,
  DEFAULT_LR_IRS_TAX,
  DEFAULT_LR_CONDOMINIUM_VALUE,
  DEFAULT_LR_NIGHT_AVERAGE_INCOME,
  DEFAULT_LR_AVERAGE_OCCUPATION,
  DEFAULT_LR_OCCUPATION_EXPENSE,
  DEFAULT_LR_IMI_VALUE,
  DEFAULT_LR_INSURANCE_VALUE,
  DEFAULT_LR_EXTRA_EXPENSES_VALUE,
  DEFAULT_LR_TOTAL_EXPENSES,
  DEFAULT_LR_TOTAL_EXPENSES_WITH_TAX,
  DEFAULT_LR_TOTAL_TAX,
  DEFAULT_LR_TOTAL_PROFIT,
  DEFAULT_LR_PROFITABILITY_TAX,
  DEFAULT_LR_RETURN_TIME
} from "../../constants";

export const initialState = {
  localRenting: {
    propertyValue: DEFAULT_LR_PROPERTY_VALUE,
    condominiumValue: DEFAULT_LR_CONDOMINIUM_VALUE,
    occupationExpense: DEFAULT_LR_OCCUPATION_EXPENSE,
    imiValue: DEFAULT_LR_IMI_VALUE,
    nightAverageIncome: DEFAULT_LR_NIGHT_AVERAGE_INCOME,
    averageOccupation: DEFAULT_LR_AVERAGE_OCCUPATION,
    insuranceValue: DEFAULT_LR_INSURANCE_VALUE,
    extraExpenses: DEFAULT_LR_EXTRA_EXPENSES_VALUE,
    tributationType: DEFAULT_LR_TRIBUTATION_TYPE,
    tributationTax: DEFAULT_LR_TRIBUTATION_TAX,
    irsTax: DEFAULT_LR_IRS_TAX,
    totalExpenses: DEFAULT_LR_TOTAL_EXPENSES,
    totalExpensesWithTax: DEFAULT_LR_TOTAL_EXPENSES_WITH_TAX,
    totalTax: DEFAULT_LR_TOTAL_TAX,
    totalProfit: DEFAULT_LR_TOTAL_PROFIT,
    profitabilityTax: DEFAULT_LR_PROFITABILITY_TAX,
    returnTime: DEFAULT_LR_RETURN_TIME
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

    case ACTION_TYPES.SET_LR_CONDOMINIUM_VALUE: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          condominiumValue: payload.condominiumValue
        }
      };
    }

    case ACTION_TYPES.SET_LR_OCCUPATION_EXPENSE: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          occupationExpense: payload.occupationExpense
        }
      };
    }

    case ACTION_TYPES.SET_LR_IMI_VALUE: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          imiValue: payload.imiValue
        }
      };
    }

    case ACTION_TYPES.SET_LR_NIGHT_AVERAGE_INCOME: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          nightAverageIncome: payload.nightAverageIncome
        }
      };
    }

    case ACTION_TYPES.SET_LR_AVERAGE_OCCUPATION: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          averageOccupation: payload.averageOccupation
        }
      };
    }

    case ACTION_TYPES.SET_LR_INSURANCE_VALUE: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          insuranceValue: payload.insuranceValue
        }
      };
    }

    case ACTION_TYPES.SET_LR_EXTRA_EXPENSES: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          extraExpenses: payload.extraExpenses
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

    case ACTION_TYPES.SET_LR_TRIBUTATION_TAX: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          tributationTax: payload.tributationTax
        }
      };
    }

    case ACTION_TYPES.SET_LR_IRS_TAX: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          irsTax: payload.irsTax
        }
      };
    }

    case ACTION_TYPES.SET_LR_TOTAL_EXPENSES: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          totalExpenses: payload.totalExpenses
        }
      };
    }

    case ACTION_TYPES.SET_LR_TOTAL_EXPENSES_WITH_TAX: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          totalExpensesWithTax: payload.totalExpensesWithTax
        }
      };
    }

    case ACTION_TYPES.SET_LR_TOTAL_TAX: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          totalTax: payload.totalTax
        }
      };
    }

    case ACTION_TYPES.SET_LR_TOTAL_PROFIT: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          totalProfit: payload.totalProfit
        }
      };
    }

    case ACTION_TYPES.SET_LR_PROFITABILITY_TAX: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          profitabilityTax: payload.profitabilityTax
        }
      };
    }

    case ACTION_TYPES.SET_LR_RETURN_TIME: {
      return {
        ...state,
        localRenting: {
          ...state.localRenting,
          returnTime: payload.returnTime
        }
      };
    }

    default:
      return state;
  }
};
