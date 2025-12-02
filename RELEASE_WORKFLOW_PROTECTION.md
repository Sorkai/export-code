# Release Workflow 测试保护说明

## 🛡️ 测试保护机制

为了确保发布的代码质量，Release workflow 现在包含**强制测试步骤**。

## 📋 发布前检查流程

当你推送 tag 触发 Release workflow 时，会按以下顺序执行：

```
1. Checkout code          ✓
2. Setup Node.js         ✓
3. Install dependencies  ✓
4. Run linter           ✓ 检查代码规范
5. Compile TypeScript   ✓ 确保编译通过
6. Install Xvfb         ✓ 安装测试环境
7. Run tests            ✓ 运行完整测试套件 ⚠️ 关键步骤
   └─ 如果测试失败，后续步骤不会执行
8. Package extension    ✓ 打包扩展
9. Create GitHub Release ✓ 创建发布
10. Publish to Marketplace ✓ 发布到商店
```

## ⚠️ 测试失败的影响

如果任何测试失败：
- ❌ workflow 会立即停止
- ❌ 不会打包扩展
- ❌ 不会创建 GitHub Release
- ❌ 不会发布到 Marketplace
- 📧 你会收到失败通知

## ✅ 优势

### 为什么在 Release workflow 中运行测试？

1. **即时反馈**：发布前立即发现问题
2. **原子性**：测试和发布在同一个 workflow
3. **简单可靠**：不依赖其他 workflow 的状态
4. **完整验证**：
   - Lint 检查
   - TypeScript 编译
   - 集成测试
   - 所有步骤串行执行，任何失败都会阻止发布

## 🔄 与其他 Workflow 的关系

| Workflow | 触发时机 | 作用 |
|----------|---------|------|
| **CI** | Push to main / PR | 多平台测试 (Ubuntu, Windows, macOS) |
| **Test** | Push to main / PR | 多版本 VS Code 测试 (1.80.0, stable) |
| **Release** | Push tag (v*) | **包含完整测试** + 打包 + 发布 |

### 冗余但必要

虽然 CI 和 Test workflows 已经运行测试，但 Release workflow **必须**重新运行，因为：
- ✅ 确保 tag 对应的代码确实通过测试
- ✅ 避免手动打 tag 时跳过 CI
- ✅ 防止意外情况（如 main 分支测试通过，但 tag 指向其他 commit）

## 📝 本地发布前建议

虽然 Release workflow 会自动运行测试，但建议在本地先验证：

```bash
# 1. 运行完整验证
npm run lint
npm run compile
npm test

# 2. 确保所有通过后再创建版本
npm version minor  # 或 patch/major

# 3. 推送到 GitHub
git push --follow-tags
```

## 🚨 如果 Release 失败怎么办？

### 场景 1：测试失败

```bash
# 1. 查看 GitHub Actions 日志找到失败原因
# 2. 本地修复问题
git add .
git commit -m "fix: 修复测试失败问题"

# 3. 删除旧标签
git tag -d v1.2.0
git push origin :refs/tags/v1.2.0

# 4. 重新创建并推送
git tag -a v1.2.0 -m "chore: release v1.2.0"
git push --follow-tags
```

### 场景 2：打包失败

检查是否是版本对齐问题（参考 `插件更新发布方法.md` 中的版本对齐章节）。

### 场景 3：发布到 Marketplace 失败

检查 `VSCE_PAT` secret 是否过期或权限不足。

## 🎯 最佳实践

1. **本地先测试**：避免浪费 CI 资源
2. **小步提交**：每次改动都运行测试
3. **查看 Actions 日志**：失败时第一时间查看详细日志
4. **使用 draft release**（可选）：先发布草稿，验证后再公开

## 📚 相关文档

- [GitHub Actions Workflow 语法](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [插件更新发布方法](./插件更新发布方法.md)
- [VS Code 扩展开发](https://code.visualstudio.com/api)
