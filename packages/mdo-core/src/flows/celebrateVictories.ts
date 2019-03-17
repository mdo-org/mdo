import { FlowT } from "../types";

const celebrateVictories: FlowT = {
  description:
    "Live in the moment, but every now and then take the time to cherish all that you've accomplished.",
  plugins: [
    "cleanupActionableDates",
    "start",
    "postpone",
    "repeat",
    "completed",
    "sections"
  ]
};

export default celebrateVictories;
