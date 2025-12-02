import * as path from 'path';
import * as Mocha from 'mocha';
import glob = require('glob');

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true
  });

  const testsRoot = path.resolve(__dirname, '..');

  return new Promise((resolve, reject) => {
    glob('**/**.test.js', { cwd: testsRoot }, (err: Error | null, files: string[]) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        files.forEach((f: string) => mocha.addFile(path.resolve(testsRoot, f)));
        mocha.run((failures: number) => {
          if (failures > 0) {
            reject(new Error(`${failures} tests failed.`));
          } else {
            resolve();
          }
        });
      } catch (e) {
        console.error(e);
        reject(e as Error);
      }
    });
  });
}