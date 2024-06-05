import { z } from "zod";
export declare const Element: z.ZodEnum<["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"]>;
export type Element = z.infer<typeof Element>;
