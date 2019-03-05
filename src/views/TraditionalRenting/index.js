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
  totalExpensesWithIRS: traditionalRentingSelectors.getTotalExpensesWithIRS(
    state
  ),
  totalIRS: traditionalRentingSelectors.getTotalIRS(state),
  totalProfit: traditionalRentingSelectors.getTotalProfit(state),
  profitabilityTax: traditionalRentingSelectors.getProfitabilityTax(state),
  returnTime: traditionalRentingSelectors.getReturnTime(state)
});

export const mapDispatchToProps = {
  setPropertyValue: actions.setTRPropertyValue,
  setIncomeValue: actions.setTRIncomeValue,
  setIRSTax: actions.setTRIRSTax,
  setIMIValue: actions.setTRIMIValue,
  setCondominiumValue: actions.setTRCondominiumValue,
  setOtherExpenses: actions.setTROtherExpenses,
  setExtraExpenses: actions.setTRExtraExpenses,
  setInsuranceValue: actions.setTRInsuranceValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraditionalRenting);
