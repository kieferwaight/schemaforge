/**
 * A bundle identifier for an application. Can be a literal identifier (e.g., 'com.apple.TextEdit') or a regex pattern (e.g., '^com\.apple\..*$').
 */
export type BundleIdentifier = string;

export interface FrontmostApplicationUnlessJson {
  type: "frontmost_application_unless";
  /**
   * @minItems 1
   */
  bundle_identifiers: [BundleIdentifier, ...BundleIdentifier[]];
}
