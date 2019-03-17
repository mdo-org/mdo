import { FlowMapT } from "../types";
import liveInTheMoment from "./liveInTheMoment";
import celebrateVictories from "./celebrateVictories";

const availableFlows: FlowMapT = {
  liveInTheMoment: liveInTheMoment,
  celebrateVictories: celebrateVictories
};

export default availableFlows;
