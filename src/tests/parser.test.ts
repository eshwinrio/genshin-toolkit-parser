import { readFile } from "fs";
import { BufferDataProvider, loadFromHar } from "../lib/parser";

readFile("/home/rio/resources/act.hoyolab.com.har", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const bufferDataProvider = new BufferDataProvider(data);
    loadFromHar(bufferDataProvider).then(data => {
        console.table(data.role);
        console.table(data.avatars.map(avatar => ({
            character: avatar.name,
            level: avatar.level,
            weapon: `${avatar.weapon?.type_name}/${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
            friendship: `lv${avatar.fetter}`
        })));
    })
});
