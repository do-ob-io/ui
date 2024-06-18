/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * The configuration object for the application.
 */
export interface ConfiUI {

  /**
   * The image node to use.
   */
  image?: React.ElementType<any>;

}

/**
 * The configuration object that should persist throughout the application.
 */
const configuration: ConfiUI = {};

/**
 * This object is exported to provide a way to expose configuration settings.
 */
export const configUI = {

  /**
   * Initializes the configuration.
   */
  init(config: ConfiUI) {
    Object.assign(configuration, config);
  },

  /**
   * Gets the configuration based on the key.
   */
  get<K extends keyof ConfiUI>(key: K): ConfiUI[K] {
    return configuration[key];
  }

};
