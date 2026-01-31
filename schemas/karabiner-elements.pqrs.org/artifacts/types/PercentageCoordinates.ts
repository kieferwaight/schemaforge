/**
 * Horizontal (X-axis) percentage position (e.g., '50%')
 */
export type Percentage = string;
/**
 * Vertical (Y-axis) percentage position (e.g., '50%')
 */
export type Percentage1 = string;
/**
 * A non-negative integer representing an index
 */
export type Index = number;

/**
 * Relative x,y coordinate measured in percentage for positioning on the screen.
 */
export interface ScreenPercentagePosition {
  x: Percentage;
  y: Percentage1;
  screen?: Index;
  [k: string]: unknown;
}
