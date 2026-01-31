/**
 * Acceptable variable value types.
 */
export type VariableValueTypes = boolean | string | number;

/**
 * Defines a condition that checks if a variable is set to a specific value.
 */
export interface VariableIf {
  type: "variable_if";
  name: string;
  value: VariableValueTypes;
}
