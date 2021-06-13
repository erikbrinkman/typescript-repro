import { Parent } from "./inter";

declare const x: Parent<unknown, unknown>;
(): Parent<null, unknown> => x;
