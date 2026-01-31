/**
 * A unique identifier for the notification message.
 */
export type ID = string;
/**
 * The text of the notification message. Set to empty string to remove the message.
 */
export type Text = string;

/**
 * Sets or remove the notification message.
 */
export interface SetNotificationMessage {
  id: ID;
  text: Text;
}
