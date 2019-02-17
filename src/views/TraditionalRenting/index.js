import { connect } from "react-redux";
import { traditionalRentingSelectors } from "../../store/selectors";
import actions from "../../store/action-creators";
import TraditionalRenting from "./TraditionalRenting";

export const mapStateToProps = state => ({
  propertyValue: traditionalRentingSelectors.getPropertyValue(state),
  incomeValue: traditionalRentingSelectors.getIncomeValue(state),
  iRSTax: traditionalRentingSelectors.getIRSTax(state),
  imiValue: traditionalRentingSelectors.getIMIValue(state),
  condominiumValue: traditionalRentingSelectors.getCondominiumValue(state),
  otherExpenses: traditionalRentingSelectors.getOtherExpenses(state),
  extraExpenses: traditionalRentingSelectors.getExtraExpenses(state),
  insuranceValue: traditionalRentingSelectors.getInsuranceValue(state),
  totalExpenses: traditionalRentingSelectors.getTotalExpenses(state),
  totalIRS: traditionalRentingSelectors.getTotalIRS(state),
  totalProfit: traditionalRentingSelectors.getTotalProfit(state),
  profitabilityTax: traditionalRentingSelectors.getProfitabilityTax(state)
});

export const mapDispatchToProps = {
  setPropertyValue: actions.setPropertyValue,
  setIncomeValue: actions.setIncomeValue,
  setIRSTax: actions.setIRSTax,
  setIMIValue: actions.setIMIValue,
  setCondominiumValue: actions.setCondominiumValue,
  setOtherExpenses: actions.setOtherExpenses,
  setExtraExpenses: actions.setExtraExpenses,
  setInsuranceValue: actions.setInsuranceValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraditionalRenting);
