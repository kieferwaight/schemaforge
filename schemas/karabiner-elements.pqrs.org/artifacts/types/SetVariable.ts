/**
 * Target variable name.
 */
export type Name = string;
/**
 * Target variable value.
 */
export type Value = boolean | string | number;
/**
 * A variable value when key is up.
 */
export type KeyUpValue = boolean | string | number;
/**
 * The type of variable operation.
 */
export type Type = "set" | "unset";

/**
 * Defines and updates the variable value.
 */
export interface SetVariable {
  name: Name;
  value?: Value;
  key_up_value?: KeyUpValue;
  type?: Type;
}
