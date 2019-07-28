import { connect } from "react-redux";
import { localRentingSelectors } from "../../store/selectors";
import actions from "../../store/action-creators";
import LocalRenting from "./LocalRenting";

export const mapStateToProps = state => ({
  propertyValue: localRentingSelectors.getPropertyValue(state),
  condominiumValue: localRentingSelectors.getCondominiumValue(state),
  occupationExpense: localRentingSelectors.getOccupationExpense(state),
  imiValue: localRentingSelectors.getImiValue(state),
  nightAverageIncome: localRentingSelectors.getNightAverageIncome(state),
  averageOccupation: localRentingSelectors.getAverageOccupation(state),
  insuranceValue: localRentingSelectors.getInsuranceValue(state),
  extraExpenses: localRentingSelectors.getExtraExpenses(state),
  tributationType: localRentingSelectors.getTributationType(state),
  tributationTax: localRentingSelectors.getTributationTax(state),
  irsTax: localRentingSelectors.getIrsTax(state),
  totalExpenses: localRentingSelectors.getTotalExpenses(state),
  totalExpensesWithTax: localRentingSelectors.getTotalExpensesWithTax(state),
  totalTax: localRentingSelectors.getTotalTax(state),
  totalProfit: localRentingSelectors.getTotalProfit(state),
  profitabilityTax: localRentingSelectors.getProfitabilityTax(state),
  returnTime: localRentingSelectors.getReturnTime(state)
});

export const mapDispatchToProps = {
  setPropertyValue: actions.setLRPropertyValue,
  setCondominiumValue: actions.setLRCondominiumValue,
  setOccupationExpense: actions.setLROccupationExpense,
  setImiValue: actions.setLRImiValue,
  setNightAverageIncome: actions.setLRNightAverageIncome,
  setAverageOccupation: actions.setLRAverageOccupation,
  setInsuranceValue: actions.setLRInsuranceValue,
  setExtraExpenses: actions.setLRExtraExpenses,
  setTributationType: actions.setLRTributationType,
  setTributationTax: actions.setLRTributationTax,
  setIrsTax: actions.setLRIrsTax
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalRenting);
