import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run ohm-calculate:serve',
        production: 'nx run ohm-calculate:preview',
      },
      ciWebServerCommand: 'nx run ohm-calculate:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
