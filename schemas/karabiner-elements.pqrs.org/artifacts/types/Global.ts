/**
 * Global settings outside of profiles.
 */
export interface GlobalSettings {
  /**
   * Check for updates on startup
   */
  check_for_updates_on_startup?: boolean;
  /**
   * Show Karabiner-Elements in the menu bar
   */
  show_in_menu_bar?: boolean;
  /**
   * Show the profile name in the menu bar
   */
  show_profile_name_in_menu_bar?: boolean;
  /**
   * Show additional menu items
   */
  show_additional_menu_items?: boolean;
}
