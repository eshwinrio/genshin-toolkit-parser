import { DataProvider } from "./data-provider";
import { GameData } from "../schemas/gamedata";
export declare const GAME_RECORD_API_BASEURL = "https://bbs-api-os.hoyolab.com/game_record/genshin/api";
export declare function loadFromHar(source: DataProvider): Promise<GameData>;
/**
 * Load game data from file
 * @param source The data source of the file
 */
export declare function loadFromFile(source: DataProvider): Promise<GameData>;
