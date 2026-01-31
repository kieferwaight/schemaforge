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
 * Open an application by path, bundle identifier, or application history. See: https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/to/software_function/open_application/
 */
export interface OpenApplication {
  frontmost_application?: FrontmostApplication;
  bundle_identifier?: ApplicationBundleIdentifier;
  file_path?: ApplicationPath;
  [k: string]: unknown;
}
