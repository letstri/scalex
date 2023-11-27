import { viteConfig } from '../../configs/vite.config.base';

export default viteConfig({
  name: 'scalex',
  entry: 'src/index.ts',
  package: await import('./package.json'),
});
