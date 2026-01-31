/**
 * Waiting time before the system goes to sleep (500 ms if unspecified)
 */
export type DelayInMilliseconds = number;

/**
 * Put the system to sleep. See: https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/iokit_power_management_sleep_system/
 */
export interface PutSystemToSleep {
  delay_milliseconds?: DelayInMilliseconds;
  [k: string]: unknown;
}
