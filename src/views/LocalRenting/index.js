import { connect } from "react-redux";
import { localRentingSelectors } from "../../store/selectors";
import actions from "../../store/action-creators";
import TraditionalRenting from "./LocalRenting";

export const mapStateToProps = state => ({
  propertyValue: localRentingSelectors.getPropertyValue(state),
  tributationType: localRentingSelectors.getTributationType(state),
  totalExpenses: 1,
  totalExpensesWithIRS: 1,
  totalIRS: 1,
  totalProfit: 1,
  profitabilityTax: 1,
  returnTime: 1
});

export const mapDispatchToProps = {
  setPropertyValue: actions.setLRPropertyValue,
  setTributationType: actions.setLRTributationType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraditionalRenting);
