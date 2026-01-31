/**
 * Modifier key codes.
 */
export type ModifierKeyCodes = (CapsLockKeyCode | HyperKeyCodes | StickyModifierKeyCodes | AnyKeyCode) & string;
/**
 * Caps lock key code.
 */
export type CapsLockKeyCode = "caps_lock";
/**
 * Hyper key codes.
 */
export type HyperKeyCodes = "control" | "shift" | "option" | "command";
/**
 * Sticky modifier key codes.
 */
export type StickyModifierKeyCodes =
  | "left_control"
  | "left_shift"
  | "left_option"
  | "left_command"
  | "right_control"
  | "right_shift"
  | "right_option"
  | "right_command"
  | "fn";
/**
 * Represents any key code as accepted by Karabiner-Elements, including generic keys and modifier keys.
 */
export type AnyKeyCode = "any";
