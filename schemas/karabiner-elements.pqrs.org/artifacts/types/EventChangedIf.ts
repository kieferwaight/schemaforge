/**
 * Defines a condition that checks if the event has changed.
 */
export interface EventChangedIf {
  type: "event_changed_if";
  value: boolean;
  /**
   * Description of the condition.
   */
  description?: string;
}
