/**
 * Defines a condition that checks if the event has not changed.
 */
export interface EventChangedUnless {
  type: "event_changed_unless";
  value: boolean;
  /**
   * Description of the condition.
   */
  description?: string;
}
