# Export-Code

一个强大的 VS Code 扩展，用于快速导出项目代码到单个文本文件，自动去除注释和空行，非常适合代码审查、文档生成、AI 分析等场景。

[![Version](https://img.shields.io/visual-studio-marketplace/v/sorkai.export-code?color=blue&label=Version)](https://marketplace.visualstudio.com/items?itemName=sorkai.export-code)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/sorkai.export-code?color=success&label=Installs)](https://marketplace.visualstudio.com/items?itemName=sorkai.export-code)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/sorkai.export-code?color=orange&label=Rating)](https://marketplace.visualstudio.com/items?itemName=sorkai.export-code)

## ✨ 特性

- 🚀 **一键导出**：快速将项目代码导出到单个文本文件
- 🧹 **智能清理**：自动去除注释和空行，保持代码简洁
- 📁 **灵活筛选**：自由选择文件后缀、排除目录和文件
- 🗂️ **路径标记**：每个文件前自动标注相对路径，便于定位
- 🌍 **多语言支持**：支持 JavaScript/TypeScript、Python、Java、C/C++、HTML/CSS 等主流语言
- ⚙️ **可配置**：支持通过设置自定义排除规则
- 🌐 **双语命令**：提供英文和中文命令，使用更便捷

## 📖 使用方法

### 基本使用

1. 打开命令面板（`Ctrl+Shift+P` / `Cmd+Shift+P`）
2. 输入并选择以下命令之一：
   - `Export Code` （英文）
   - `导出代码` （中文）

### 交互式选择

扩展会引导你完成以下步骤：

1. **选择文件后缀**：选择要导出的文件类型（如 `.js`, `.ts`, `.py` 等）
2. **排除目录**：选择要排除的文件夹（如 `dist`, `build` 等）
3. **排除文件**：选择要排除的根目录文件

### 输出结果

导出完成后，会在项目根目录生成 `extractedCode.txt` 文件，格式如下：

```
src/extension.ts
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
  // 代码内容（已去除注释和空行）
}

src/utils/index.ts
export function processFile(content: string) {
  // 代码内容
}
```

每个文件前会显示其相对路径，文件之间用空行分隔。

## ⚙️ 配置选项

### 自定义排除规则

你可以在 VS Code 设置中配置全局排除规则：

1. 打开设置（`Ctrl+,` / `Cmd+,`）
2. 搜索 `Export Code`
3. 编辑 `Export Code: Skip Directories` 配置项

或直接在 `settings.json` 中添加：

```json
{
  "exportCode.skipDirectories": [
    "node_modules",
    "dist",
    "build",
    "^\\.",
    "uni_modules"
  ]
}
```

![配置截图](https://github.com/Sorkai/export-code/blob/main/images/skip.png)

### 默认排除规则

以下文件和目录会被自动排除：

- **文件**：`package.json`, `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `extractedCode.txt`
- **目录**：`node_modules`, `uni_modules`, 所有以 `.` 开头的文件夹（如 `.git`, `.vscode`）
- **其他**：二进制文件（图片、视频等）

## 💡 使用技巧

### 多工作区支持

如果你的工作区包含多个根文件夹，扩展会首先让你选择要导出的文件夹。

### 智能过滤

选择文件后缀后，不包含这些后缀的目录和文件会自动从选择列表中排除，提高选择效率。

### 反向选择

在排除目录和文件的面板中：
- 使用 `Ctrl+A` / `Cmd+A` 全选所有项
- 然后取消选择你想保留的项
- 这样可以快速排除大部分不需要的内容

## 🎯 使用场景

- 📝 **代码审查**：将代码整合成单个文件便于审阅
- 🤖 **AI 分析**：将项目代码导出给 AI 工具（如 ChatGPT、Claude）进行分析
- 📄 **文档生成**：为技术文档准备完整的代码清单
- 🔍 **代码搜索**：在单个文件中快速搜索和定位代码

## 🤝 贡献

欢迎提交问题和拉取请求！

- GitHub 仓库：[Sorkai/export-code](https://github.com/Sorkai/export-code)
- 问题反馈：[Issue Tracker](https://github.com/Sorkai/export-code/issues)

## 📜 许可证

本项目基于 MIT 许可证开源。

## 🙏 致谢

本项目修改自 [copyright-code](https://github.com/qxchuckle/copyright-code)，在此表示感谢。

---

**享受使用 Export-Code！** 如果觉得有用，请在 [Marketplace](https://marketplace.visualstudio.com/items?itemName=sorkai.export-code) 给个⭐评分！





