# Parser module of Genshin Toolkit

This module serves as a core component of all tools built in the Genshin Toolkit chain. This module depends on `zod` for data validation and parsing.

## Usage

The current version has support for extracting game data from a HAR file captured from your [Battle Chronicle](https://act.hoyolab.com/app/community-game-records-sea/index.html). _You need to be signed-in to obtain your game data_

> If you aren't sure on how to capture the HAR, follow instructions from this [Guide by Microsoft](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace) for the browser you intend to work on:
>
> - [Google Chrome](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#google-chrome)
> - [Mozilla Firefox](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#mozilla-firefox)
> - [Safari](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#safari)

### Create a new `DataProvider` instance.

There are 3 data provider classes for specific use cases:

- `FileDataProvider` This is the provider you'll be using if you want to skip the hassle of reading the file yourself and passing in the buffer to the `DataProvider`.
- `BufferDataProvider` If you have the HAR `Buffer` at hand, you can use this `DataProvider` instead.
- `StringDataProvider` Reads data from raw `String`.

  ```ts
  import {
    BufferDataProvider,
    FileDataProvider,
    GameDataFactory,
  } from "@genshin-toolkit/parser";

  const fileDataProvider = new FileDataProvider("..path-to.har");
  // or
  const bufferDataProvider = new BufferDataProvider(buffer);
  // or
  const stringDataProvider = new StringDataProvider("{...string_data...}");
  ```

2. Instantiate `GameDataFactory`  by passing the `DataProvider` instance to the `loadFromHar` static method.

    ```ts
    const gameDataFactory = await GameDataFactory.loadFromHar(provider);
    
    // Tabular display (example)
    console.table(gameDataFactory.gameData.avatars.map(avatar => ({
        character: avatar.name,
        level: avatar.level,
        weapon: `${avatar.weapon?.type_name}/${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
        friendship: `lv${avatar.fetter}`
    })));
    ```

## Examples

Below are the examples of loading data from HAR for two different use-cases (Use `async` function wrapper if using `await`):

### Parsing data from a local file

```ts
import { FileDataProvider, GameDataFactory } from "@genshin-toolkit/parser";

const provider = new FileDataProvider("/home/path/to.har");
const gameDataFactory = await GameDataFactory.loadFromHar(provider);
console.table(gameDataFactory.gameData.avatars.map(avatar => ({
    character: avatar.name,
    level: avatar.level,
    weapon: `${avatar.weapon?.type_name}/${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
    friendship: `lv${avatar.fetter}`
})));
```

### Saving game data to a file

If you want to do save the game data to a file, call the `saveToFile(path)` methos on `GameDataFactory` instance.

> The output content is always **JSON**.

```ts
import { FileDataProvider, GameDataFactory } from "@genshin-toolkit/parser";

const provider = new FileDataProvider("/home/path/to.har");
const gameDataFactory = await GameDataFactory.loadFromHar(provider);
gameDataFactory.saveToFile("output.json");
```
