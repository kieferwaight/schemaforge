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
 * Defines a condition that checks if the input source does not match a specific value.
 */
export interface InputSourceUnless {
  type: "input_source_unless";
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
