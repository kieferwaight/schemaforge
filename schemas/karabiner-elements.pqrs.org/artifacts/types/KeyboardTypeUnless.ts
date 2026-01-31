/**
 * The type of keyboard layout. This is used to determine the key codes for the keys on the keyboard.
 */
export type KeyboardType = "ansi" | "iso" | "jis";

/**
 * Defines a condition that checks if the keyboard type does not match a specific value.
 */
export interface KeyboardTypeUnless {
  type: "keyboard_type_unless";
  /**
   * @minItems 1
   */
  keyboard_types: [KeyboardType, ...KeyboardType[]];
  /**
   * Description of the condition.
   */
  description?: string;
}
