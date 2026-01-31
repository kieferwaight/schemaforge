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

export interface Parameters {
  "basic.simultaneous_threshold_milliseconds"?: Milliseconds;
  "basic.to_if_alone_timeout_milliseconds"?: Milliseconds1;
  "basic.to_if_held_down_threshold_milliseconds"?: Milliseconds2;
}
