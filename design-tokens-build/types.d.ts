/* build: v1.13.2 */
import type {} from '@digdir/designsystemet-types';

// Augment types based on theme
declare module '@digdir/designsystemet-types' {
  export interface ColorDefinitions {
    'bright-blue': never;
    'light-blue': never;
    'aibel-blue': never;
    'light-green': never;
    green: never;
    'light-pink': never;
    'dark-pink': never;
    'dark-red': never;
    neutral: never;
  }
  export interface SeverityColorDefinitions {
    info: never;
    success: never;
    warning: never;
    danger: never;
  }
}
