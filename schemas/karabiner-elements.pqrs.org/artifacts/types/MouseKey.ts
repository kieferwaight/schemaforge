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
