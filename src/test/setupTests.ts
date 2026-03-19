/// <reference types="node" />

import "@testing-library/jest-dom";

// react-router (and some other libs) rely on TextEncoder/TextDecoder.
// In Jest + JSDOM they may be missing depending on Node/JSDOM versions.
import { TextDecoder, TextEncoder } from "util";

if (!globalThis.TextEncoder) {
  globalThis.TextEncoder =
    TextEncoder as unknown as typeof globalThis.TextEncoder;
}

if (!globalThis.TextDecoder) {
  globalThis.TextDecoder =
    TextDecoder as unknown as typeof globalThis.TextDecoder;
}

// Also mirror to window for libraries that expect these on the DOM global.
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (!w.TextEncoder) w.TextEncoder = globalThis.TextEncoder;
  if (!w.TextDecoder) w.TextDecoder = globalThis.TextDecoder;
}
