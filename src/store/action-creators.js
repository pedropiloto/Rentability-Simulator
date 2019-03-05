import * as traditionalRentingActions from "./traditional-renting/traditional-renting-action-creators";
import * as localRentingActions from "./local-renting/local-renting-action-creators";

export default { ...traditionalRentingActions, ...localRentingActions };
