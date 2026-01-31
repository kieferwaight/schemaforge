/**
 * Defines a condition that checks if a device is connected.
 */
export interface DeviceIf {
  /**
   * Valid only for devices specified in identifiers
   */
  type: "device_if";
  /**
   * @minItems 1
   */
  identifiers: [DeviceIdentifier, ...DeviceIdentifier[]];
}
/**
 * Defines a device identifier for matching.
 */
export interface DeviceIdentifier {
  /**
   * Vendor ID of the device.
   */
  vendor_id?: number;
  /**
   * Product ID of the device.
   */
  product_id?: number;
  /**
   * Bluetooth address (Bluetooth MAC address) of the device.
   */
  device_address?: string;
  /**
   * Location ID of the device.
   */
  location_id?: number;
  /**
   * True if the device is a keyboard.
   */
  is_keyboard?: boolean;
  /**
   * True if the device is a pointing device.
   */
  is_pointing_device?: boolean;
  /**
   * True if the device is a game pad.
   */
  is_game_pad?: boolean;
  /**
   * True if the device is a consumer device.
   */
  is_consumer?: boolean;
  /**
   * True if the device is a touch bar.
   */
  is_touch_bar?: boolean;
  /**
   * True if the device is a built-in keyboard.
   */
  is_built_in_keyboard?: boolean;
}
