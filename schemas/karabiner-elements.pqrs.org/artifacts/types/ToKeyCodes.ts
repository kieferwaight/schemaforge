/**
 * Key codes that can be used only to.
 */
export type ToKeyCodes = (FromAndToKeyCodes | ToOnlyKeyCodes) & string;
/**
 * Key codes that can be used both from and to.
 */
export type FromAndToKeyCodes = (
  | ModifierKeyCodes
  | ControlOrSymbolKeyCodes
  | ArrowKeyCodes
  | LetterKeyCodes
  | NumberKeyCodes
  | FunctionKeyCodes
  | KeypadKeyCodes
  | PCKeyboardCodes
  | InternationalKeyCodes
  | OtherKeyCodes
  | AnyKeyCode
  | AppleVendorKeyCodes
) &
  string;
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
/**
 * Control or symbol key codes.
 */
export type ControlOrSymbolKeyCodes =
  | "return_or_enter"
  | "escape"
  | "delete_or_backspace"
  | "delete_forward"
  | "tab"
  | "spacebar"
  | "hyphen"
  | "equal_sign"
  | "open_bracket"
  | "close_bracket"
  | "backslash"
  | "non_us_pound"
  | "semicolon"
  | "quote"
  | "grave_accent_and_tilde"
  | "comma"
  | "period"
  | "slash"
  | "non_us_backslash";
/**
 * Arrow key codes.
 */
export type ArrowKeyCodes =
  | "up_arrow"
  | "down_arrow"
  | "left_arrow"
  | "right_arrow"
  | "page_up"
  | "page_down"
  | "home"
  | "end";
/**
 * Letter key codes.
 */
export type LetterKeyCodes =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";
/**
 * Number key codes.
 */
export type NumberKeyCodes = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
/**
 * Function key codes.
 */
export type FunctionKeyCodes =
  | "f1"
  | "f2"
  | "f3"
  | "f4"
  | "f5"
  | "f6"
  | "f7"
  | "f8"
  | "f9"
  | "f10"
  | "f11"
  | "f12"
  | "f13"
  | "f14"
  | "f15"
  | "f16"
  | "f17"
  | "f18"
  | "f19"
  | "f20";
/**
 * Keypad key codes.
 */
export type KeypadKeyCodes =
  | "keypad_num_lock"
  | "keypad_slash"
  | "keypad_asterisk"
  | "keypad_hyphen"
  | "keypad_plus"
  | "keypad_enter"
  | "keypad_1"
  | "keypad_2"
  | "keypad_3"
  | "keypad_4"
  | "keypad_5"
  | "keypad_6"
  | "keypad_7"
  | "keypad_8"
  | "keypad_9"
  | "keypad_0"
  | "keypad_period"
  | "keypad_equal_sign"
  | "keypad_comma";
/**
 * PC keyboard codes.
 */
export type PCKeyboardCodes = "print_screen" | "scroll_lock" | "pause" | "insert" | "application" | "help" | "power";
/**
 * International key codes.
 */
export type InternationalKeyCodes = "international1" | "international3" | "lang1" | "lang2";
/**
 * Other key codes.
 */
export type OtherKeyCodes = "volume_down" | "volume_up" | "mute" | "volume_decrement" | "volume_increment";
/**
 * Apple vendor key codes.
 */
export type AppleVendorKeyCodes = "mission_control" | "launchpad";
/**
 * Key codes that can be used only to.
 */
export type ToOnlyKeyCodes =
  | "vk_none"
  | "vk_consumer_brightness_down"
  | "vk_consumer_brightness_up"
  | "vk_mission_control"
  | "vk_launchpad"
  | "vk_dashboard"
  | "vk_consumer_illumination_down"
  | "vk_consumer_illumination_up"
  | "vk_consumer_previous"
  | "vk_consumer_play"
  | "vk_consumer_next"
  | "display_brightness_decrement"
  | "display_brightness_increment"
  | "rewind"
  | "play_or_pause"
  | "fastforward"
  | "apple_display_brightness_decrement"
  | "apple_display_brightness_increment"
  | "dashboard"
  | "launchpad"
  | "mission_control"
  | "apple_top_case_display_brightness_decrement"
  | "apple_top_case_display_brightness_increment"
  | "illumination_decrement"
  | "illumination_increment";
