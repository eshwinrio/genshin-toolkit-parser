# Parser module of Genshin Toolkit

This module serves as a core component of all tools built in the Genshin Toolkit chain. This module depends on `zod` for data validation and parsing.

## Usage

The current version has support for extracting game data from a HAR file captured from your [Battle Chronicle](https://act.hoyolab.com/app/community-game-records-sea/index.html). _You need to be signed-in to obtain your game data_

> If you aren't sure on how to capture the HAR, follow instructions from this [Guide by Microsoft](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace) for the browser you intend to work on:
>
> - [Google Chrome](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#google-chrome)
> - [Mozilla Firefox](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#mozilla-firefox)
> - [Safari](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/howto-troubleshoot-network-trace#safari)

Parsing the HAR is as simple as reading the file itself.

### Create a new `DataProvider` instance.

There are 2 data providers for specific use cases:

- `FileDataProvider` This is the provider you'll be using if you want to skip the hassle of reading the file yourself and passing in the buffer to the `DataProvider`.
- `BufferDataProvider` If you have the HAR `Buffer` at hand, you can use this `DataProvider` instead.

  ```ts
  import { Parser } from "@genshin-toolkit/parser";

  const fileDataProvider = new Parser.FileDataProvider("..path-to.har");
  const bufferDataProvider = new Parser.BufferDataProvider(buffer);
  ```

2. Pass the `DataProvider` instance to the `loadFromHar` function which returns a complete `GameData` model compiled by `zod`.

   ```ts
   loadFromHar(provider).then((data) => {
     console.table(
       data.avatars.map((avatar) => ({
         character: avatar.name,
         level: avatar.level,
         weapon: `${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
         friendship: `lv${avatar.fetter}`,
       }))
     );
   });
   ```

## Examples

Below are the examples of loading data from HAR for two different use-cases:

### Parsing data from a local file

```ts
import { Parser } from "@genshin-toolkit/parser";

const provider = new Parser.FileDataProvider("/home/path/to.har");
Parser.loadFromHar(provider).then((data) => {
  console.table(
    data.avatars.map((avatar) => ({
      character: avatar.name,
      level: avatar.level,
      weapon: `${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
      friendship: `lv${avatar.fetter}`,
    }))
  );
});
```

### Parsing data from a local file (2)

If you want to do some preprocessing on the file buffer, use this approach:

```ts
import { Parser } from "@genshin-toolkit/parser";

readFile("/home/path/to.har", (err, data) => {
  if (err) throw err;

  const bufferDataProvider = new BufferDataProvider(data);
  
  loadFromHar(bufferDataProvider).then((data) => {
    console.table(
      data.avatars.map((avatar) => ({
        character: avatar.name,
        level: avatar.level,
        weapon: `${avatar.weapon?.name} - lv${avatar.weapon?.level}`,
        friendship: `lv${avatar.fetter}`,
      }))
    );
  });
});
```
