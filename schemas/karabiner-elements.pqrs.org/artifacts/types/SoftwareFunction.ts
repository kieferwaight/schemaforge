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
