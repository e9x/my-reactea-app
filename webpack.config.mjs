import { compileConfig, createConfig, extendConfig } from "@reactea/config";
import baseConfig from "@reactea/core";
import sassConfig from "@reactea/sass";
import swConfig from "@reactea/sw";
import tailwindConfig from "@reactea/tailwind";

const reactea = createConfig();

extendConfig(reactea, baseConfig());
extendConfig(reactea, tailwindConfig());
extendConfig(reactea, sassConfig());
extendConfig(reactea, await swConfig());

const config = compileConfig(reactea);

export default config;
