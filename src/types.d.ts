declare module 'sscjs';
declare module '@hiveio/hive-js';
declare module 'valid-url';
declare module '@hiveio/hive-js/lib/auth/memo';
declare module '@hiveio/hive-js/lib/auth';
interface Window {
  dataLayer: Array<any>;
  gtag: (a: string, b: any, c?: any) => void;
}
