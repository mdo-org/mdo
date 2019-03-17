import { PluginMapT } from "../types";
import start from "./start";
import postpone from "./postpone";
import removeComplete from "./removeComplete";
import repeat from "./repeat";
import sections from "./sections";
import completed from "./completed";
import cleanupActionableDates from "./cleanupActionableDates";

const availablePlugins: PluginMapT = {
  start,
  postpone,
  completed,
  removeComplete,
  repeat,
  sections,
  cleanupActionableDates
};

export default availablePlugins;
