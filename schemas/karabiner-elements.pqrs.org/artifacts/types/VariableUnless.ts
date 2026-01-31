/**
 * Acceptable variable value types.
 */
export type VariableValueTypes = boolean | string | number;

/**
 * Defines a condition that checks if a variable is not set to a specific value.
 */
export interface VariableUnless {
  type: "variable_unless";
  name: string;
  value: VariableValueTypes;
}
