/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/es/string/virtual/includes';
import repeat from 'core-js/library/es/string/virtual/repeat';
import assign from 'core-js/library/es/object/assign';

// Add your polyfills (from IE10 is supported by default)
// This files runs at the very beginning (even before React and Next.js core)

String.prototype.includes = includes;
String.prototype.repeat = repeat;
Object.assign = assign;