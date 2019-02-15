import { connect } from "react-redux";
import { traditionalRentingSelectors } from "../../store/selectors";
import actions from "../../store/action-creators";
import TraditionalRenting from "./TraditionalRenting";

export const mapStateToProps = state => ({
  property_value: traditionalRentingSelectors.getPropertyValue(state),
  income_value: traditionalRentingSelectors.getIncomeValue(state)
});

export const mapDispatchToProps = {
  setPropertyValue: actions.setPropertyValue,
  setIncomeValue: actions.setIncomeValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraditionalRenting);
