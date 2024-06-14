import { z } from "zod";

export const Element = z.enum(["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]);

export type Element = z.infer<typeof Element>;
