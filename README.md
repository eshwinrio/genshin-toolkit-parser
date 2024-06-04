# Parser module of Genshin Toolkit

This module serves as a core component of all tools built in the Genshin Toolkit chain. This module depends on `zod` for data validation and parsing.

## Usage

The current version has support for extracting game data from a HAR file captured from your [Battle Chronicle](https://act.hoyolab.com/app/community-game-records-sea/index.html). _You need to be signed-in to obtain your game data_

> If you aren't sure on how to capture the HAR, follow instructions from this [Guide by Microsoft](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace) for the browser you intend to work on:
>
> - [Google Chrome](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#google-chrome)
> - [Mozilla Firefox](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#mozilla-firefox)
> - [Safari](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#safari)

### Importing modules

Use core imports for node and `web` for web environments

```ts
// For node environment
import { DataProvider } from "@genshin-toolkit/parser";

// For web environments
import { DataProvider } from "@genshin-toolkit/parser/web";
```

### Create a new `DataProvider` instance.

There are data provider classes for specific use cases, for *Node* and for *Web*:

#### Cross-environment
- `BufferDataProvider` If you have the HAR `Buffer` at hand, you can use this `DataProvider` instead.
- `StringDataProvider` Reads data from raw `String`.

#### Node only
- `FileDataProvider` This is the provider you'll be using if you want to skip the hassle of reading the file yourself and passing in the buffer to the `DataProvider`.

#### Web only
- `WebFileDataProvider` Alternate `DataProvider` for `FileDataProvider` to be used in browsers.

  ```ts
  import {
    BufferDataProvider,
    FileDataProvider,
    loadFromHar,
  } from "@genshin-toolkit/parser";

  const fileDataProvider = new FileDataProvider("..path-to.har");
  // or
  const bufferDataProvider = new BufferDataProvider(buffer);
  // or
  const stringDataProvider = new StringDataProvider("{...string_data...}");
  ```

2. Call `loadFromHar` to extract and parse game data from a HAR file.

    ```ts
    const gameData = await loadFromHar(provider);
    
    // Tabular display (example)
    console.table(gameData.avatars.map(avatar => ({
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
import { FileDataProvider, loadFromHar } from "@genshin-toolkit/parser";

const provider = new FileDataProvider("/home/path/to.har");
const gameDataFactory = await loadFromHar(provider);
```

### Parsing game data from a game data file

If you want to parse the game data (data parsed from HAR with `loadFromHar` and saved on disk or a `GameData` schema compatible json file)

```ts
import { FileDataProvider, loadFromFile } from "@genshin-toolkit/parser";

const provider = new FileDataProvider("/home/path/gamedata.json");
const gameDataFactory = await loadFromFile(provider);
```

### Parsing on the web

Use `WebFileDataProvider` to directly work with the `File` provided by the provided by the browser on picking a file. Or use cross-env `DataProviders` like `BufferDataProvider` if you already have the file `Buffer` in memory.

```ts
import { WebFileDataProvider } from '@genshin-toolkit/parser/web';

document.getElementById('fileInput').addEventListener('change', async (event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const provider = new WebFileDataProvider(file);

        try {
            const data = await provider.load();
            // Parse with loadFromHar or loadFromFile here.
            console.log('File data loaded:', data);
        } catch (error) {
            console.error('Error loading file:', error);
        }
    }
});
```
