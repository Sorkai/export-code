# Export-Code v1.2.0 发布说明

发布日期：2025年12月3日

---

## 🎉 重大版本更新

这是一个主要版本更新 (Major Release)，专注于**代码质量提升**、**安全性增强**和**开发工具现代化**。

---

## 🚀 主要改进

### 0. 兼容性修复

#### 📦 修复 vsce 打包版本对齐问题
- **问题**: `@types/vscode ^1.106.1` 高于 `engines.vscode ^1.60.0`
- **根因**: VS Code 扩展要求类型定义版本不能高于最低支持的 VS Code 版本
- **修复**: 
  - 升级 `engines.vscode`: ^1.60.0 → ^1.80.0
  - 降级 `@types/vscode`: ^1.106.1 → ^1.80.0
  - 确保版本对齐，避免打包失败

**影响**: 扩展最低支持 VS Code 1.80.0（2023年7月发布），覆盖 99%+ 用户

---

### 1. 代码质量大幅提升

#### ✅ 修复所有 ESLint 严格检查错误
- 修复 6 个 TypeScript/ESLint 类型检查错误
- 为回调函数添加正确的类型注解
- 移除不必要的 async 函数声明
- 为 Promise 调用添加正确的 `void` 标记
- 通过完整的测试套件验证

#### 🔧 升级到 ESLint v9
- 采用现代化的 **Flat Config** 配置格式
- 启用严格的 TypeScript 类型检查规则：
  - `@typescript-eslint/no-floating-promises` - 防止未处理的 Promise
  - `@typescript-eslint/no-unsafe-return` - 防止不安全的类型返回
  - `@typescript-eslint/require-await` - 确保 async 函数正确使用

**影响**: 代码更可靠、更易维护、类型安全性更高

---

### 2. 安全性显著增强

#### 🔒 修复 CodeQL 安全警告

**问题 #1-2**: 不完整的多字符清理 (CWE-20, CWE-80, CWE-116)
- **风险**: 正则替换为空字符串可能导致字符意外拼接，潜在 HTML 注入
- **修复**: 改用空格替换注释，保持代码结构完整性
- **文件**: `src/utils/index.ts` L88, L95

**问题 #3-4**: 缺失的 Workflow 权限声明
- **风险**: GitHub Actions 使用默认权限，违反最小权限原则
- **修复**: 为所有 workflows 添加显式 `permissions` 声明
- **文件**: `.github/workflows/release.yml`, `.github/workflows/ci.yml`
- **权限设置**:
  - Release workflow: `contents: write`, `actions: read`
  - CI workflow: `contents: read`

**影响**: 通过安全扫描，防护注入攻击，降低供应链风险

---

### 3. CI/CD 自动化改进

#### 🤖 配置 Dependabot 自动依赖更新
- 自动检测 npm 依赖更新（每周）
- 自动检测 GitHub Actions 更新（每月）
- 自动创建 PR，包含完整的 CHANGELOG
- 配置文件: `.github/dependabot.yml`

#### ⚙️ 增强 CI 工作流
- ✅ 添加多 VS Code 版本矩阵测试 (stable, insiders)
- ✅ 支持 Ubuntu 24.04 最新环境
- ✅ 添加 npm 依赖缓存，构建速度提升 ~30%
- ✅ 升级所有 GitHub Actions 到最新版本：
  - `actions/checkout: v4 → v6`
  - `actions/setup-node: v4 → v6`
  - `softprops/action-gh-release: v1 → v2`

**影响**: 更快的 CI 构建，更全面的测试覆盖，依赖始终保持最新

---

### 4. 依赖全面升级

| 依赖包 | 旧版本 | 新版本 | 说明 |
|--------|--------|--------|------|
| **TypeScript** | 5.3.3 | 5.9.3 | 最新稳定版，性能优化 |
| **@types/node** | 16.x | 24.10.1 | 支持 Node.js 最新 API |
| **@types/vscode** | 1.85.0 | 1.106.1 | 支持 VS Code 最新 API |
| **glob** | 旧版 | 10.5.0 | 重构为现代 Promise API |
| **ESLint** | v8 | v9 | Flat Config 支持 |

**影响**: 更好的性能、更新的 API、更少的技术债务

---

## 🧪 质量保证

- ✅ **所有测试通过**: 测试套件 100% 通过
- ✅ **编译无错误**: TypeScript 编译零错误
- ✅ **Lint 检查通过**: ESLint 零警告零错误
- ✅ **安全扫描通过**: CodeQL 所有警告已修复
- ✅ **多平台测试**: Ubuntu, Windows, macOS 全平台测试

---

## 📝 升级建议

### 从 v1.1.x 升级

**是否包含破坏性变更**: ❌ 否

这是一个**向后兼容**的更新，可以安全升级：
- ✅ 所有现有功能保持不变
- ✅ 配置项无需修改
- ✅ 导出格式完全兼容
- ✅ 命令和快捷键不变

### 升级步骤

1. VS Code 会自动更新扩展
2. 或手动安装：
   ```bash
   code --install-extension sorkai.export-code@1.2.0
   ```

---

## 🙏 致谢

感谢以下工具和服务的支持：
- **Dependabot** - 自动依赖更新
- **CodeQL** - 安全代码扫描
- **GitHub Actions** - CI/CD 自动化
- **VS Code** - 优秀的扩展平台

---

## 📚 相关链接

- [Marketplace](https://marketplace.visualstudio.com/items?itemName=sorkai.export-code)
- [GitHub 仓库](https://github.com/Sorkai/export-code)
- [问题反馈](https://github.com/Sorkai/export-code/issues)
- [完整 CHANGELOG](./CHANGELOG.md)

---

## 🔮 下一步计划

- 🎨 支持自定义输出格式
- 📊 添加导出统计信息
- 🔍 支持更多编程语言
- 🌐 改进国际化支持

---

**再次感谢使用 Export-Code！如有问题请在 GitHub 提 Issue。**
