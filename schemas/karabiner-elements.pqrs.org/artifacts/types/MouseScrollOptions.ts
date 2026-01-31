/**
 * Enable momentum scrolling.
 */
export type MomentumScrollEnabled = boolean;
/**
 * Multiply mouse speed.
 */
export type SpeedMultiplier = number;

/**
 * Options for mouse scroll events.
 */
export interface MouseScrollOptions {
  momentum_scroll_enabled?: MomentumScrollEnabled;
  speed_multiplier?: SpeedMultiplier;
  [k: string]: unknown;
}
