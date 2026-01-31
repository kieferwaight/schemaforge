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
