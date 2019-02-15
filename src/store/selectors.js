import { bindSelectors } from "./bind-selectors";
import * as localTraditionalRentingSelectors from "./traditional-renting/tradional-renting-selectors";

const traditionalRentingSelectors = bindSelectors(
  "traditionalRenting",
  localTraditionalRentingSelectors
);

export { traditionalRentingSelectors };
