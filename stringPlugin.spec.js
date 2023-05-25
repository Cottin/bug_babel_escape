import { pluginTester } from 'babel-plugin-tester';
import stringPlugin from './stringPlugin';


pluginTester({
  plugin: stringPlugin,
  tests: [
    {
      code: `fn("ö")`,
      output: `"ö"`,
    },
  ],
});