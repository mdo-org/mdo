// TODO: remove this line
import { MDoT, PluginT, PluginMapT } from "./types";
import stream from "stream";

import parse from "./parse";
import stringify from "./stringify";
import availablePlugins from "./plugins";
import availableFlows from "./flows";

const { LocalZone } = require("luxon");
const pumpify = require("pumpify");

const DEFAULT_FLOW = "liveInTheMoment";

const HOOK_NAMES = ["parse", "process", "reshuffle", "stringify"];

const getPluginsForFlow = (flow: string | Array<string>): Array<PluginT> => {
  let pluginNames: Array<string>;

  if (typeof flow === "string") {
    // we received a flow name, get the corresponding plugin names
    if (!availableFlows[flow]) {
      throw new Error(`Undefined flow: ${flow}`);
    }
    pluginNames = availableFlows[flow].plugins;
  } else {
    // we received an array of plugin names
    pluginNames = flow;
  }

  pluginNames.forEach(pluginName => {
    if (!availablePlugins[pluginName]) {
      throw new Error(`Invalid plugin: ${pluginName}`);
    }
  });

  return pluginNames.map(name => availablePlugins[name]);
};

const MDo: MDoT = {
  parse,
  stringify,

  availableFlows: Object.entries(availableFlows).map(([key, flow]) => ({
    name: key,
    description: flow.description
  })),

  transform: options => {
    const flow = (options && options.flow) || DEFAULT_FLOW;

    const plugins = getPluginsForFlow(flow);
    const hookOptions = {
      time: options && options.time ? options.time : new Date().toISOString(),
      timezone:
        options && options.timezone ? options.timezone : new LocalZone().name
    };
    const streams: Array<stream.Transform> = [];

    streams.push(parse());

    // for each hook name, get the corresponding hook for each plugin
    for (const hookName of HOOK_NAMES) {
      for (const plugin of plugins) {
        const hook = plugin.getHook(hookName, hookOptions);
        if (hook) {
          streams.push(hook);
        }
      }
    }

    streams.push(stringify());

    return pumpify(...streams);
  }
};

export = MDo;
