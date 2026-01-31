/**
 * The type of keyboard layout. This is used to determine the key codes for the keys on the keyboard.
 */
export type KeyboardType = "ansi" | "iso" | "jis";

/**
 * Defines a condition that checks if the keyboard type matches a specific value.
 */
export interface KeyboardTypeIf {
  type: "keyboard_type_if";
  /**
   * @minItems 1
   */
  keyboard_types: [KeyboardType, ...KeyboardType[]];
  /**
   * Description of the condition.
   */
  description?: string;
}
