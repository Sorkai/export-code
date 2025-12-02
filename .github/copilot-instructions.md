# Export-Code (Export-Code) AI 指南

这是一个 VS Code 扩展，旨在将项目中的源代码提取到单个 `.txt` 文件中，并去除注释和空行。

## 架构与核心组件

- **入口点**: [src/extension.ts](src/extension.ts) 注册了 `export-code.exportCode` 和 `export-code.exportCodeZH` 命令。
- **文件发现**: [src/findFile.ts](src/findFile.ts) 处理选择文件的交互流程：
  1. 选择文件后缀（基于工作区中的实际文件）。
  2. 选择要排除的目录。
  3. 选择要排除的根目录文件。
  4. 生成 `vscode.RelativePattern` 用于文件搜索。
- **文本处理**: [src/utils/index.ts](src/utils/index.ts) 包含核心逻辑：
  - `deleteCommentsAndBlankLines`: 根据 `languageId` 使用正则表达式去除注释/空行。
  - `getAllFileExtensions`: 扫描工作区以获取非二进制文件后缀。
  - `writeDataFromFileArray`: 将处理后的内容流式写入 `extractedCode.txt`。

## 开发者工作流

- **构建 (Build)**: `npm run compile` (TypeScript 编译)。
- **监听 (Watch)**: `npm run watch` (用于开发的后台编译监听)。
- **测试 (Test)**: `npm run test` (通过 `vscode-test` 运行集成测试)。
- **代码检查 (Lint)**: `npm run lint` (ESLint v9 with Flat Config)。
- **版本发布**: `npm run release:major/minor/patch` (自动签名并发布)。

## 关键模式与约定

- **去除注释**: 在 `deleteCommentsAndBlankLines` [src/utils/index.ts](src/utils/index.ts) 中通过正则实现。
  - 支持语言: JS/TS, Java, C/C++, Python, HTML/XML, CSS, Shell/Perl/Ruby。
  - 未知类型有默认的回退处理。
  - 安全性: 使用空格替换注释（而非空字符串），避免字符意外拼接导致的注入风险。
- **排除机制**:
  - **内置**: `node_modules`, `uni_modules`, `.*` (点开头文件/文件夹), 以及输出文件。
  - **用户配置**: VS Code 设置中的 `exportCode.skipDirectories`。
  - **运行时**: 用户在命令执行期间选择额外的排除项。
- **二进制文件**: 使用 `istextorbinary` 检查以防止处理非文本文件。
- **输出**: 总是在工作区根目录生成 `extractedCode.txt`。

## 代码质量保证

- **类型安全**: 启用严格的 TypeScript 检查，所有函数都有正确的类型注解。
- **异步处理**: Promise 调用使用 `void` 标记或正确的 await/catch 处理。
- **测试覆盖**: 集成测试套件验证核心功能。
- **安全扫描**: 通过 CodeQL 安全扫描，无已知安全漏洞。

## CI/CD 流程

- **自动化测试**: 多 VS Code 版本矩阵测试（stable, insiders）。
- **依赖更新**: Dependabot 自动检测并更新依赖。
- **自动发布**: Git tag 触发自动构建和发布到 VS Code Marketplace。
- **权限管理**: 所有 workflows 遵循最小权限原则。

## 集成点

- **VS Code API**: 严重依赖 `vscode.workspace.findFiles`, `vscode.window.showQuickPick`, 和 `vscode.commands`。
- **配置**: 从工作区配置中读取 `exportCode.skipDirectories`。

## 版本历史

- **v1.2.0**: 代码质量和安全性大幅提升，升级到 ESLint v9，修复所有 CodeQL 警告。
- **v1.1.x**: 优化输出格式，添加文件路径标记和空行分隔。
- **v1.0.0**: 初始发布。
