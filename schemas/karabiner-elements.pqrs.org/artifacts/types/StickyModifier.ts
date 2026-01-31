/**
 * Sticky modifier state settings.
 */
export type StickyModifierState = "on" | "off" | "toggle";

/**
 * Sticky modifier settings.
 */
export interface StickyModifier {
  left_control?: StickyModifierState;
  left_shift?: StickyModifierState;
  left_option?: StickyModifierState;
  left_command?: StickyModifierState;
  right_control?: StickyModifierState;
  right_shift?: StickyModifierState;
  right_option?: StickyModifierState;
  right_command?: StickyModifierState;
  [k: string]: unknown;
}
