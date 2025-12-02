# Change Log

本文档记录了 Export-Code 扩展的所有重要变更。

## [1.1.0] - 2025-12-02

### Added
- ✨ 重大更新：导出的代码现在每个文件前会显示相对路径
- ✨ 文件之间自动添加空行分隔，提高可读性
- 🎯 插件重命名为 Export-Code，更符合实际功能
- 🌐 命令更新：`Export Code` (英文) 和 `导出代码` (中文)
- ⚙️ 配置项更新为 `exportCode.skipDirectories`

### Changed
- 📝 优化输出格式：每个文件前显示相对路径，文件间用空行分隔
- 🔧 命令 ID 从 `copyright-code.*` 更改为 `export-code.*`
- 📦 插件标识从 `copyright-code` 更改为 `export-code`

### Fixed
- 🐛 改进代码提取逻辑，确保文件路径正确显示

## [1.0.0] - 2023

### Added
- 🎉 初始发布
- 📤 支持提取项目代码到 txt 文件
- 🧹 自动去除注释和空行
- 🎯 支持多种编程语言（JS/TS, Java, Python, C/C++, HTML/CSS 等）
- 🔍 灵活的文件后缀选择
- 📁 可自定义排除目录和文件
- ⚙️ 支持通过设置配置排除项
- 🌏 支持多工作区文件夹
- 🔒 自动检测并跳过二进制文件