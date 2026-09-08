/* build: v1.21.0 */
import type {} from '@digdir/designsystemet-types';

// Augment types based on theme
declare module '@digdir/designsystemet-types' {
  export interface ColorDefinitions {
    'aibel-blue': never;
    'aibel-bright-blue': never;
    'aibel-green': never;
    'aibel-neutral': never;
    neutral: never;
  }
  export interface SeverityColorDefinitions {
    info: never;
    success: never;
    warning: never;
    danger: never;
  }
}
