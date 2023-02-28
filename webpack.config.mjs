import { compileConfig, createConfig, extendConfig } from "@reactea/config";
import baseConfig from "@reactea/core";
import sassConfig from "@reactea/sass";
import swConfig from "@reactea/sw";
import tailwindConfig from "@reactea/tailwind";
// types not included in v1.0.0-alpha
import { isDevelopment } from "@reactea/config/consts";

const reactea = createConfig();

extendConfig(reactea, baseConfig());
extendConfig(reactea, tailwindConfig());
extendConfig(reactea, sassConfig());
// workaround for v1.0.0-alpha
if (!isDevelopment) extendConfig(reactea, await swConfig());

const config = compileConfig(reactea);

export default config;
