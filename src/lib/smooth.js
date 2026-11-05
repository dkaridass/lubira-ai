// Lenis instance shared across the app (null when smooth scroll is off, e.g. reduced motion).
let instance = null;
export const getLenis = () => instance;
export const setLenis = (l) => { instance = l; };
