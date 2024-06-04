"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
const zod_1 = require("zod");
exports.Element = zod_1.z.enum(["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]);
