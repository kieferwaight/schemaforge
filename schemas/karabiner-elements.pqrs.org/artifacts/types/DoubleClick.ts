/**
 * An integer of CGMouseButton. (0: Left Click, 1: Right Click, 2: Middle Click, 3-31: Other Buttons)
 */
export type CGButton = number;

/**
 * Send double click event by software. cg_event_double_click ensures that the click event occurs at the same location even if the mouse cursor is moving between the first click and the second click. See: https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/cg_event_double_click/
 */
export interface DoubleClick {
  button: CGButton;
  [k: string]: unknown;
}
