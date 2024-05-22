import { z } from "zod";
import { Avatar } from "./avatar.module";
import { Role } from "./role.module";

export const GameData = z.object({
  role: Role,
  avatars: z.array(Avatar),
});

export type GameData = z.infer<typeof GameData>;
