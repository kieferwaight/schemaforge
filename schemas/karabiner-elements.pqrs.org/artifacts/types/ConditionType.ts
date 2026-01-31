/**
 * The type of condition.
 */
export type ConditionType =
  | "variable_unless"
  | "variable_if"
  | "input_source_unless"
  | "input_source_if"
  | "frontmost_application_if"
  | "frontmost_application_unless"
  | "device_if"
  | "device_unless";
