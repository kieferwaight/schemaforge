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
 * Event Types
 */
export type EventTypesJson = "key_code" | "consumer_key_code" | "pointing_button";

/**
 * Defines a simultaneous event press
 */
export interface SimultaneousEvent {
  key_code?: FromKeyCodes;
  pointing_button?: PointingButton;
  consumer_key_code?: FromOnlyConsumerKeyCodes | GlobalConsumerKeyCodes;
  any?: EventTypesJson;
}
