/**
 * Defines a condition that can be used to control when a rule applies.
 */
export type KarabinerCondition =
  | VariableIf
  | VariableUnless
  | InputSourceIf
  | InputSourceUnless
  | FrontmostApplicationIfJson
  | FrontmostApplicationUnlessJson
  | KeyboardTypeIf
  | KeyboardTypeUnless
  | EventChangedIf
  | EventChangedUnless
  | DeviceExistsIf
  | DeviceExistsUnless
  | DeviceIf
  | DeviceUnless;
/**
 * Acceptable variable value types.
 */
export type VariableValueTypes = boolean | string | number;
/**
 * The language as a regex pattern (e.g., '^en$', '^ja$', '^en_.*$') or a literal language code (e.g., 'en', 'ja', 'en_US').
 */
export type Language = string;
/**
 * The input source ID regex such as '^com\.apple\.keylayout\.US$'
 */
export type InputSourceID = string;
/**
 * The input mode ID regex such as '^com\.apple\.inputmethod\.Japanese\.Hiragana$'
 */
export type InputModeID = string;
/**
 * A bundle identifier for an application. Can be a literal identifier (e.g., 'com.apple.TextEdit') or a regex pattern (e.g., '^com\.apple\..*$').
 */
export type BundleIdentifier = string;
/**
 * The type of keyboard layout. This is used to determine the key codes for the keys on the keyboard.
 */
export type KeyboardType = "ansi" | "iso" | "jis";

/**
 * Defines a condition that checks if a variable is set to a specific value.
 */
export interface VariableIf {
  type: "variable_if";
  name: string;
  value: VariableValueTypes;
}
/**
 * Defines a condition that checks if a variable is not set to a specific value.
 */
export interface VariableUnless {
  type: "variable_unless";
  name: string;
  value: VariableValueTypes;
}
/**
 * Defines a condition that checks if the input source matches a specific value.
 */
export interface InputSourceIf {
  type: "input_source_if";
  /**
   * @minItems 1
   */
  input_sources: [InputSource, ...InputSource[]];
}
/**
 * Defines the input source for the keyboard.
 */
export interface InputSource {
  language?: Language;
  input_source_id?: InputSourceID;
  input_mode_id?: InputModeID;
}
/**
 * Defines a condition that checks if the input source does not match a specific value.
 */
export interface InputSourceUnless {
  type: "input_source_unless";
  /**
   * @minItems 1
   */
  input_sources: [InputSource, ...InputSource[]];
}
export interface FrontmostApplicationIfJson {
  type: "frontmost_application_if";
  /**
   * @minItems 1
   */
  bundle_identifiers: [BundleIdentifier, ...BundleIdentifier[]];
}
export interface FrontmostApplicationUnlessJson {
  type: "frontmost_application_unless";
  /**
   * @minItems 1
   */
  bundle_identifiers: [BundleIdentifier, ...BundleIdentifier[]];
}
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
/**
 * Defines a condition that checks if the event has changed.
 */
export interface EventChangedIf {
  type: "event_changed_if";
  value: boolean;
  /**
   * Description of the condition.
   */
  description?: string;
}
/**
 * Defines a condition that checks if the event has not changed.
 */
export interface EventChangedUnless {
  type: "event_changed_unless";
  value: boolean;
  /**
   * Description of the condition.
   */
  description?: string;
}
/**
 * Defines a condition that checks if a device is connected.
 */
export interface DeviceExistsIf {
  /**
   * Valid if a specified device is connected
   */
  type: "device_exists_if";
  /**
   * @minItems 1
   */
  identifiers: [DeviceIdentifier, ...DeviceIdentifier[]];
}
/**
 * Defines a device identifier for matching.
 */
export interface DeviceIdentifier {
  /**
   * Vendor ID of the device.
   */
  vendor_id?: number;
  /**
   * Product ID of the device.
   */
  product_id?: number;
  /**
   * Bluetooth address (Bluetooth MAC address) of the device.
   */
  device_address?: string;
  /**
   * Location ID of the device.
   */
  location_id?: number;
  /**
   * True if the device is a keyboard.
   */
  is_keyboard?: boolean;
  /**
   * True if the device is a pointing device.
   */
  is_pointing_device?: boolean;
  /**
   * True if the device is a game pad.
   */
  is_game_pad?: boolean;
  /**
   * True if the device is a consumer device.
   */
  is_consumer?: boolean;
  /**
   * True if the device is a touch bar.
   */
  is_touch_bar?: boolean;
  /**
   * True if the device is a built-in keyboard.
   */
  is_built_in_keyboard?: boolean;
}
/**
 * Defines a condition that checks if a device is not connected.
 */
export interface DeviceExistsUnless {
  /**
   * Valid unless a specified device is connected
   */
  type: "device_exists_unless";
  /**
   * @minItems 1
   */
  identifiers: [DeviceIdentifier, ...DeviceIdentifier[]];
}
/**
 * Defines a condition that checks if a device is connected.
 */
export interface DeviceIf {
  /**
   * Valid only for devices specified in identifiers
   */
  type: "device_if";
  /**
   * @minItems 1
   */
  identifiers: [DeviceIdentifier, ...DeviceIdentifier[]];
}
/**
 * Defines a condition that checks if a device is not connected.
 */
export interface DeviceUnless {
  type: "device_unless";
  /**
   * @minItems 1
   */
  identifiers: [DeviceIdentifier, ...DeviceIdentifier[]];
}
