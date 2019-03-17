import { FlowT } from "../types";

const liveInTheMoment: FlowT = {
  description:
    'The core idea behind "Live in the Moment" is that you offload future tasks to MDo, so you can focus exclusively on tasks that are actionable in the present.',
  plugins: [
    "cleanupActionableDates",
    "start",
    "postpone",
    "repeat",
    "removeComplete",
    "sections"
  ]
};

export default liveInTheMoment;
