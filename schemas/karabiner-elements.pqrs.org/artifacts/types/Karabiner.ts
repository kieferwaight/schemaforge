/**
 * Define a custom schema
 */
export type Schema = string;
/**
 * Key codes that can be used only from.
 */
export type FromKeyCodes = (FromAndToKeyCodes | FromOnlyKeyCodes) & string;
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
 * Key codes that can be used only from.
 */
export type FromOnlyKeyCodes =
  | "f21"
  | "f22"
  | "f23"
  | "f24"
  | "execute"
  | "menu"
  | "select"
  | "stop"
  | "again"
  | "undo"
  | "cut"
  | "copy"
  | "paste"
  | "find"
  | "international2"
  | "international4"
  | "international5"
  | "international6"
  | "international7"
  | "international8"
  | "international9"
  | "lang3"
  | "lang4"
  | "lang5"
  | "lang6"
  | "lang7"
  | "lang8"
  | "lang9"
  | "japanese_pc_nfer"
  | "japanese_pc_xfer"
  | "japanese_pc_katakana"
  | "keypad_equal_sign_as400"
  | "locking_caps_lock"
  | "locking_num_lock"
  | "locking_scroll_lock"
  | "alternate_erase"
  | "sys_req_or_attention"
  | "cancel"
  | "clear"
  | "prior"
  | "return"
  | "separator"
  | "out"
  | "oper"
  | "clear_or_again"
  | "cr_sel_or_props"
  | "ex_sel";
/**
 * Key codes that can be used only to.
 */
export type ToKeyCodes = (FromAndToKeyCodes | ToOnlyKeyCodes) & string;
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
export type SimpleModifications = {
  from: FromKeyCodes;
  to: ToKeyCodes;
  [k: string]: unknown;
}[];
/**
 * Consumer key codes that can be used only to.
 */
export type ToConsumerKeyCodes = "display_brightness_decrement" | "display_brightness_increment" | "dictation";
/**
 * Represents a pointing button in Karabiner-Elements.
 */
export type PointingButton =
  | "button1"
  | "button2"
  | "button3"
  | "button4"
  | "button5"
  | "button6"
  | "button7"
  | "button8"
  | "button9"
  | "button10"
  | "button11"
  | "button12"
  | "button13"
  | "button14"
  | "button15"
  | "button16"
  | "button17"
  | "button18"
  | "button19"
  | "button20"
  | "button21"
  | "button22"
  | "button23"
  | "button24"
  | "button25"
  | "button26"
  | "button27"
  | "button28"
  | "button29"
  | "button30"
  | "button31"
  | "button32";
/**
 * Function keys that can be used with the Fn key.
 */
export type FnFunctionKeys = {
  from: {
    key_code: FunctionKeyCodes;
  };
  to: {
    key_code?: ToKeyCodes;
    consumer_key_code?: ToConsumerKeyCodes;
    pointing_button?: PointingButton;
    apple_vendor_keyboard_code?: AppleVendorKeyCodes;
  }[];
  [k: string]: unknown;
}[];
/**
 * Title for the list of rules/complex modifications.
 */
export type Title = string;
/**
 * Threshold time in milliseconds for simultaneous key events.
 */
export type Milliseconds = number;
/**
 * Timeout time in milliseconds for to_if_alone.
 */
export type Milliseconds1 = number;
/**
 * Threshold time in milliseconds for to_if_held_down.
 */
export type Milliseconds2 = number;
/**
 * This description is shown in settings.
 */
export type Description = string;
/**
 * The type of manipulator.
 */
export type ManipulatorType = "basic" | "mouse_motion_to_scroll";
/**
 * Optional description for human
 */
export type Description1 = string;
/**
 * All consumer key codes
 */
export type ConsumerKeyCodes = (GlobalConsumerKeyCodes | FromOnlyConsumerKeyCodes | ToConsumerKeyCodes) & string;
/**
 * Consumer key codes that can be used both to and from.
 */
export type GlobalConsumerKeyCodes =
  | "next_track"
  | "previous_track"
  | "rewind"
  | "play_or_pause"
  | "fast_forward"
  | "mute"
  | "volume_decrement"
  | "volume_increment"
  | "al_terminal_lock_or_screensaver"
  | "eject"
  | "scan_previous_track"
  | "scan_next_track"
  | "al_word_processor"
  | "al_text_editor"
  | "al_spreadsheet"
  | "al_presentation_app"
  | "al_email_reader"
  | "al_calculator"
  | "al_local_machine_browser"
  | "al_internet_browser"
  | "al_dictionary"
  | "fastforward";
/**
 * Consumer key codes that can be used only from.
 */
export type FromOnlyConsumerKeyCodes =
  | "menu"
  | "al_graphics_editor"
  | "al_database_app"
  | "al_newsreader"
  | "al_voicemail"
  | "al_contacts_or_address_book"
  | "al_Calendar_Or_Schedule"
  | "al_task_or_project_manager"
  | "al_log_or_journal_or_timecard"
  | "al_checkbook_or_finance"
  | "al_a_or_v_capture_or_playback"
  | "al_lan_or_wan_browser"
  | "al_remote_networking_or_isp_connect"
  | "al_network_conference"
  | "al_network_chat"
  | "al_telephony_or_dialer"
  | "al_logon"
  | "al_logoff"
  | "al_logon_or_logoff"
  | "al_control_panel"
  | "al_command_line_processor_or_run"
  | "al_process_or_task_manager"
  | "al_select_task_or_application"
  | "al_next_task_or_application"
  | "al_previous_task_or_application"
  | "al_preemptive_halt_task_or_application"
  | "al_integrated_help_center"
  | "al_documents"
  | "al_thesaurus"
  | "al_desktop"
  | "al_spell_check"
  | "al_grammer_check"
  | "al_wireless_status"
  | "al_keyboard_layout"
  | "al_virus_protection"
  | "al_encryption"
  | "al_screen_saver"
  | "al_alarms"
  | "al_clock"
  | "al_file_browser"
  | "al_power_status"
  | "al_image_browser"
  | "al_audio_browser"
  | "al_movie_browser"
  | "al_digital_rights_manager"
  | "al_digital_wallet"
  | "al_instant_messaging"
  | "al_oem_feature_browser"
  | "al_oem_help"
  | "al_online_community"
  | "al_entertainment_content_browser"
  | "al_online_shopping_browswer"
  | "al_smart_card_information_or_help"
  | "al_market_monitor_or_finance_browser"
  | "al_customized_corporate_news_browser"
  | "al_online_activity_browswer"
  | "al_research_or_search_browswer"
  | "al_audio_player"
  | "al_message_status"
  | "al_contact_sync"
  | "al_navigation"
  | "al_contextaware_desktop_assistant"
  | "ac_home"
  | "ac_back"
  | "ac_forward"
  | "ac_refresh"
  | "ac_bookmarks"
  | "menu_pick"
  | "menu_up"
  | "menu_down"
  | "menu_left"
  | "menu_right"
  | "menu_escape"
  | "menu_value_increase"
  | "menu_value_decrease"
  | "data_on_screen"
  | "closed_caption"
  | "closed_caption_select"
  | "vcr_or_tv"
  | "broadcast_mode"
  | "snapshot"
  | "still"
  | "picture_in_picture_toggle"
  | "picture_in_picture_swap"
  | "red_menu_button"
  | "green_menu_button"
  | "blue_menu_button"
  | "yellow_menu_button"
  | "aspect"
  | "three_dimensional_mode_select";
/**
 * A mandatory list of key code.
 */
export type Mandatory = ModifierKeyCodes[];
/**
 * An optional list of key codes.
 */
export type Optional = ModifierKeyCodes[];
/**
 * Event Types
 */
export type EventTypesJson = "key_code" | "consumer_key_code" | "pointing_button";
/**
 * Specify whether key_down detection is interrupted with unrelated events.
 */
export type DetectKeyDownUninterruptedly = boolean;
/**
 * Restriction of key_down order.
 */
export type KeyDownOrder = "insensitive" | "strict" | "strict_inverse";
/**
 * Restriction of key_up order.
 */
export type KeyUpOrder = "insensitive" | "strict" | "strict_inverse";
/**
 * When key_up events are posted.
 */
export type KeyUpWhen = "any" | "all";
/**
 * If true, the key will be repeated.
 */
export type Repeat = boolean;
/**
 * If true, the event will be halted.
 */
export type Halt = boolean;
/**
 * The very limited environment variables are passed to the command, $HOME, $UID, $USER, etc. Export environment variables in shell_command if your commands depend them. For example, the following command does not work well with unicode characters because tr command depends the current locale.
 */
export type ShellCommand = string;
/**
 * Scroll up (vertical_wheel < 0) or down (vertical_wheel > 0)
 */
export type WheelMovement = number;
/**
 * Scroll left (horizontal_wheel < 0) or right (horizontal_wheel > 0)
 */
export type WheelMovement1 = number;
/**
 * Multiply mouse keys speed while this key is hold down
 */
export type SpeedMultiplier = number;
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
 * A unique identifier for the notification message.
 */
export type ID = string;
/**
 * The text of the notification message. Set to empty string to remove the message.
 */
export type Text = string;
/**
 * A list of modifier keys to be pressed.
 */
export type Modifiers1 = ModifierKeyCodes[];
/**
 * Hold down time in milliseconds.
 */
export type HoldDownMilliseconds = number;
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
 * If true, the event will be sent lazily. The lazy modifier is designed using with to_if_alone or key combinations such as changing left_control + h to delete_or_backspace in order to suppress unnecessary modifier key events.
 */
export type Lazy = boolean;
/**
 * Set the mouse cursor position on the screen. See: https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/set_mouse_cursor_position/
 */
export type SetMouseCursorPosition = PixelCoordinates | ScreenPercentagePosition;
/**
 * Horizontal (X-axis) pixel coordinate
 */
export type PixelValue = number;
/**
 * Vertical (Y-axis) pixel coordinate
 */
export type PixelValue1 = number;
/**
 * A non-negative integer representing an index
 */
export type Index = number;
/**
 * Horizontal (X-axis) percentage position (e.g., '50%')
 */
export type Percentage = string;
/**
 * Vertical (Y-axis) percentage position (e.g., '50%')
 */
export type Percentage1 = string;
/**
 * Open the frontmost application in the history by index.
 */
export type FrontmostApplication = number;
/**
 * Open an application by its bundle identifier.
 */
export type ApplicationBundleIdentifier = string;
/**
 * Open an application by its file path.
 */
export type ApplicationPath = string;
/**
 * Waiting time before the system goes to sleep (500 ms if unspecified)
 */
export type DelayInMilliseconds = number;
/**
 * An integer of CGMouseButton. (0: Left Click, 1: Right Click, 2: Middle Click, 3-31: Other Buttons)
 */
export type CGButton = number;
/**
 * Sticky modifier state settings.
 */
export type StickyModifierState = "on" | "off" | "toggle";
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
 * A bundle identifier for an application. Can be a literal identifier (e.g., 'com.apple.TextEdit') or a regex pattern (e.g., '^com\.apple\..*$').
 */
export type BundleIdentifier = string;
/**
 * The type of keyboard layout. This is used to determine the key codes for the keys on the keyboard.
 */
export type KeyboardType = "ansi" | "iso" | "jis";
/**
 * Conditions are evaluated when the first event in the sequence of events within to is processed. This means that even if a variable’s value changes (e.g., using set_variable within to), the updated value won’t be immediately evaluated.
 */
export type Conditions = KarabinerCondition[];
/**
 * To after key up will be posted when all from events are released. This feature is typically used to clear mode flag variables when all from events are released.
 */
export type ToAfterKeyUp = To[];
/**
 * Enable momentum scrolling.
 */
export type MomentumScrollEnabled = boolean;
/**
 * Multiply mouse speed.
 */
export type SpeedMultiplier1 = number;
/**
 * Defines the action to take when the input conditions are met.
 */
export type To1 = To[];
/**
 * Defines the action to take if the key is pressed alone.
 */
export type ToIfAlone = To[];
/**
 * Defines the action to take after the key is released.
 */
export type ToAfterKeyUp1 = To[];
/**
 * Defines the action to take if the key is held down.
 */
export type ToIfHeldDown = To[];
/**
 * Defines the action to take if the key is invoked.
 */
export type ToIfInvoked = To[];
/**
 * Defines the action to take if the key is canceled.
 */
export type ToIfCanceled = To[];
/**
 * Defines the conditions that must be met for the rule to apply.
 */
export type Conditions1 = KarabinerCondition[];
/**
 * A list of manipulators that define the rules.
 */
export type Manipulators = Manipulator[];
/**
 * A list of rules for complex modifications.
 */
export type Rules = Rule[];
/**
 * The country code for the keyboard layout.
 */
export type CountryCode = number;
/**
 * A non-negative integer representing a duration in milliseconds
 */
export type Milliseconds3 = number;

export interface Karabiner {
  $schema?: Schema;
  global?: GlobalSettings;
  profiles: Profile[];
}
/**
 * Global settings outside of profiles.
 */
export interface GlobalSettings {
  /**
   * Check for updates on startup
   */
  check_for_updates_on_startup?: boolean;
  /**
   * Show Karabiner-Elements in the menu bar
   */
  show_in_menu_bar?: boolean;
  /**
   * Show the profile name in the menu bar
   */
  show_profile_name_in_menu_bar?: boolean;
  /**
   * Show additional menu items
   */
  show_additional_menu_items?: boolean;
}
/**
 * A profile in Karabiner-Elements.
 */
export interface Profile {
  name: string;
  selected?: boolean;
  simple_modifications?: SimpleModifications;
  fn_function_keys?: FnFunctionKeys;
  complex_modifications?: ComplexModifications;
  virtual_hid_keyboard?: VirtualHIDKeyboard;
  devices?: DeviceIdentifier[];
  parameters?: Parameters;
}
/**
 * Complex modifications configuration for Karabiner-Elements.
 */
export interface ComplexModifications {
  title?: Title;
  parameters?: Parameters;
  rules?: Rules;
}
export interface Parameters {
  "basic.simultaneous_threshold_milliseconds"?: Milliseconds;
  "basic.to_if_alone_timeout_milliseconds"?: Milliseconds1;
  "basic.to_if_held_down_threshold_milliseconds"?: Milliseconds2;
}
/**
 * A rule for complex modifications.
 */
export interface Rule {
  $schema?: Schema;
  description?: Description;
  manipulators?: Manipulators;
}
/**
 * This is where the core logic of the rule is defined.
 */
export interface Manipulator {
  type: ManipulatorType;
  description?: Description1;
  from: From;
  to?: To1;
  to_if_alone?: ToIfAlone;
  to_after_key_up?: ToAfterKeyUp1;
  to_if_held_down?: ToIfHeldDown;
  to_delayed_action?: ToDelayedAction;
  parameters?: Parameters1;
  conditions?: Conditions1;
}
/**
 * Defines the input conditions that trigger a manipulation.
 */
export interface From {
  key_code?: FromKeyCodes;
  pointing_button?: PointingButton;
  consumer_key_code?: ConsumerKeyCodes;
  modifiers?: Modifiers;
  simultaneous?: SimultaneousEvent[];
  simultaneous_options?: {
    detect_key_down_uninterruptedly?: DetectKeyDownUninterruptedly;
    key_down_order?: KeyDownOrder;
    key_up_order?: KeyUpOrder;
    key_up_when?: KeyUpWhen;
    to_after_key_up?: ToAfterKeyUp;
    [k: string]: unknown;
  };
  any?: EventTypesJson;
  options?: Options;
}
/**
 * Mandatory and optional list of modifier keys used for matching.
 */
export interface Modifiers {
  mandatory?: Mandatory;
  optional?: Optional;
  [k: string]: unknown;
}
/**
 * Defines a simultaneous event press
 */
export interface SimultaneousEvent {
  key_code?: FromKeyCodes;
  pointing_button?: PointingButton;
  consumer_key_code?: FromOnlyConsumerKeyCodes | GlobalConsumerKeyCodes;
  any?: EventTypesJson;
}
export interface To {
  apple_vendor_keyboard_code?: AppleVendorKeyCodes;
  key_code?: ToKeyCodes;
  repeat?: Repeat;
  halt?: Halt;
  shell_command?: ShellCommand;
  mouse_key?: MouseKey;
  set_variable?: SetVariable;
  set_notification_message?: SetNotificationMessage;
  modifiers?: Modifiers1;
  pointing_button?: PointingButton;
  hold_down_milliseconds?: HoldDownMilliseconds;
  select_input_source?: InputSource;
  lazy?: Lazy;
  software_function?: SoftwareFunction;
  sticky_modifiers?: StickyModifiers;
  conditions?: Conditions;
}
/**
 * Mouse key settings.
 */
export interface MouseKey {
  /**
   * Move left (x < 0) or right (x > 0)
   */
  x?: number;
  /**
   * Move up (y < 0) or down (y > 0)
   */
  y?: number;
  vertical_wheel?: WheelMovement;
  horizontal_wheel?: WheelMovement1;
  speed_multiplier?: SpeedMultiplier;
  [k: string]: unknown;
}
/**
 * Defines and updates the variable value.
 */
export interface SetVariable {
  name: Name;
  value?: Value;
  key_up_value?: KeyUpValue;
  type?: Type;
}
/**
 * Sets or remove the notification message.
 */
export interface SetNotificationMessage {
  id: ID;
  text: Text;
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
 * Software function to be executed.
 */
export interface SoftwareFunction {
  set_mouse_cursor_position?: SetMouseCursorPosition;
  open_application?: OpenApplication;
  iokit_power_management_sleep_system?: PutSystemToSleep;
  cg_event_double_click?: DoubleClick;
}
/**
 * Absolute x,y coordinate measured in pixels for positioning on the screen.
 */
export interface PixelCoordinates {
  x: PixelValue;
  y: PixelValue1;
  screen?: Index;
  [k: string]: unknown;
}
/**
 * Relative x,y coordinate measured in percentage for positioning on the screen.
 */
export interface ScreenPercentagePosition {
  x: Percentage;
  y: Percentage1;
  screen?: Index;
  [k: string]: unknown;
}
/**
 * Open an application by path, bundle identifier, or application history. See: https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/open_application/
 */
export interface OpenApplication {
  frontmost_application?: FrontmostApplication;
  bundle_identifier?: ApplicationBundleIdentifier;
  file_path?: ApplicationPath;
  [k: string]: unknown;
}
/**
 * Put the system to sleep. See: https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/iokit_power_management_sleep_system/
 */
export interface PutSystemToSleep {
  delay_milliseconds?: DelayInMilliseconds;
  [k: string]: unknown;
}
/**
 * Send double click event by software. cg_event_double_click ensures that the click event occurs at the same location even if the mouse cursor is moving between the first click and the second click. See: https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/cg_event_double_click/
 */
export interface DoubleClick {
  button: CGButton;
  [k: string]: unknown;
}
/**
 * Sticky modifiers are used to keep the modifier keys pressed even after they are released.
 */
export interface StickyModifiers {
  left_control?: StickyModifierState;
  left_shift?: StickyModifierState;
  left_option?: StickyModifierState;
  left_command?: StickyModifierState;
  right_control?: StickyModifierState;
  right_shift?: StickyModifierState;
  right_option?: StickyModifierState;
  right_command?: StickyModifierState;
  [k: string]: unknown;
}
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
/**
 * Options for mouse motion to scroll.
 */
export interface Options {
  momentum_scroll_enabled?: MomentumScrollEnabled;
  speed_multiplier?: SpeedMultiplier1;
  [k: string]: unknown;
}
/**
 * Events which are sent after 500 milliseconds at you press from key
 */
export interface ToDelayedAction {
  to_if_invoked?: ToIfInvoked;
  to_if_canceled?: ToIfCanceled;
  [k: string]: unknown;
}
/**
 * Override parameters such as to_if_alone_timeout_milliseconds
 */
export interface Parameters1 {
  "basic.simultaneous_threshold_milliseconds"?: Milliseconds;
  "basic.to_if_alone_timeout_milliseconds"?: Milliseconds1;
  "basic.to_if_held_down_threshold_milliseconds"?: Milliseconds2;
}
/**
 * The virtual HID keyboard settings.
 */
export interface VirtualHIDKeyboard {
  country_code?: CountryCode;
  keyboard_type?: KeyboardType;
  keyboard_type_v2?: KeyboardType;
  caps_lock_delay_milliseconds?: Milliseconds3;
  [k: string]: unknown;
}
