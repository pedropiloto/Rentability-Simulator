import { connect } from "react-redux";
import { traditionalRentingSelectors } from "../../store/selectors";
import actions from "../../store/action-creators";
import TraditionalRenting from "./LocalRenting";

export const mapStateToProps = state => ({});

export const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TraditionalRenting);
