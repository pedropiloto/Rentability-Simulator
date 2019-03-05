import { bindSelectors } from "./bind-selectors";
import * as localTraditionalRentingSelectors from "./traditional-renting/tradional-renting-selectors";
import * as localLocalRentingSelectors from "./local-renting/local-renting-selectors";

const traditionalRentingSelectors = bindSelectors(
  "traditionalRenting",
  localTraditionalRentingSelectors
);

const localRentingSelectors = bindSelectors(
  "localRenting",
  localLocalRentingSelectors
);

export { traditionalRentingSelectors, localRentingSelectors };
