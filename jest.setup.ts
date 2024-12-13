import "@testing-library/jest-dom";
import '@testing-library/jest-dom/jest-globals';
import "cross-fetch/polyfill";



import {TextEncoder, TextDecoder} from "util";
global.TextEncoder = TextEncoder;
//@ts-ignore
global.TextDecoder = TextDecoder;
