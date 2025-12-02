import * as path from 'path';
import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    // 扩展根目录
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');
    // 测试入口
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // 从环境变量读取要测试的 VS Code 版本:
    // - "stable" 表示最新稳定版
    // - 例如 "1.60.0" 表示具体版本
    const vscodeVersion = process.env.VSCODE_TEST_VERSION || 'stable';

    console.log(`[test] Running integration tests with VS Code version: ${vscodeVersion}`);

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      version: vscodeVersion
    });
  } catch (err) {
    console.error('Failed to run tests', err);
    process.exit(1);
  }
}

main();