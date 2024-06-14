import { z } from "zod";
import { Avatar } from "./avatar";
import { Role } from "./role";

export const GameData = z.object({
  role: Role,
  avatars: z.array(Avatar),
});

export type GameData = z.infer<typeof GameData>;
