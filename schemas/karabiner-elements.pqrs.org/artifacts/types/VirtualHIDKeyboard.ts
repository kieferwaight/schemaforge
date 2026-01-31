/**
 * The country code for the keyboard layout.
 */
export type CountryCode = number;
/**
 * The type of keyboard layout. This is used to determine the key codes for the keys on the keyboard.
 */
export type KeyboardType = "ansi" | "iso" | "jis";
/**
 * A non-negative integer representing a duration in milliseconds
 */
export type Milliseconds = number;

/**
 * The virtual HID keyboard settings.
 */
export interface VirtualHIDKeyboard {
  country_code?: CountryCode;
  keyboard_type?: KeyboardType;
  keyboard_type_v2?: KeyboardType;
  caps_lock_delay_milliseconds?: Milliseconds;
  [k: string]: unknown;
}
