// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $UITest from "./routes/UITest.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_transact_sale from "./routes/api/transact-sale.ts";
import * as $index from "./routes/index.tsx";
import * as $CurrencyInput from "./islands/CurrencyInput.tsx";
import * as $RadioSelector from "./islands/RadioSelector.tsx";
import * as $TabSelector from "./islands/TabSelector.tsx";
import * as $TextInput from "./islands/TextInput.tsx";
import * as $UIIsland from "./islands/UIIsland.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/UITest.tsx": $UITest,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/transact-sale.ts": $api_transact_sale,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/CurrencyInput.tsx": $CurrencyInput,
    "./islands/RadioSelector.tsx": $RadioSelector,
    "./islands/TabSelector.tsx": $TabSelector,
    "./islands/TextInput.tsx": $TextInput,
    "./islands/UIIsland.tsx": $UIIsland,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
