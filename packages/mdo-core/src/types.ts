import stream from "stream";
import { DateTime } from "luxon";

type transformOptionsT = {
  flow?: string | Array<string>;
  timezone?: string;
  time?: string;
};

export type MDoT = {
  availableFlows: Array<FlowDescriptionT>;
  parse: () => stream.Transform;
  stringify: () => stream.Transform;
  transform: (transformOptions: transformOptionsT | void) => stream.Transform;
};

export type HookOptionsT = {
  timezone: string;
  time: string;
};

export type PluginT = {
  description: string;
  dependencies: Array<string>;
  getHook: (hookName: string, options: HookOptionsT) => stream.Transform | null;
};

export type PluginMapT = { [key: string]: PluginT };

export type FlowT = {
  description: string;
  plugins: Array<string>;
};

export type FlowDescriptionT = {
  name: string;
  description: string;
};

export type FlowMapT = { [key: string]: FlowT };

export type BlockT = {
  type: string;
  text: string;
  [key: string]: any;
};

export type BlockHelperT = {
  TYPES: { [key: string]: string };
  isComplete: (block: BlockT) => boolean;
  isPadding: (block: BlockT) => boolean;
  appendLine: (block: BlockT, line: LineT) => void;
  splitByPadding: (block: BlockT) => Array<BlockT>;
  toString: (block: BlockT) => string;
  fromLine: (line: LineT, options: { isFirstLine?: boolean }) => BlockT | null;
};

export type LineT = {
  type: string;
  text: string;
};

export type LineHelperT = {
  TYPES: { [key: string]: string };
  fromString: (lineStr: string) => LineT;
};

export type DateTimeWrapperT = {
  local: () => DateTime;
  fromISO: (iso: string) => DateTime;
};
