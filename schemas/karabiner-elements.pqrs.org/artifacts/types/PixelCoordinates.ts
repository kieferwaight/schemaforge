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
 * Absolute x,y coordinate measured in pixels for positioning on the screen.
 */
export interface PixelCoordinates {
  x: PixelValue;
  y: PixelValue1;
  screen?: Index;
  [k: string]: unknown;
}
