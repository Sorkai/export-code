# v1.2.0 发布前检查清单

## 📋 文档更新检查

### 1. CHANGELOG.md
- [x] 添加 v1.2.0 版本说明
- [x] 列出所有主要改进
- [x] 分类为：代码质量、安全性、CI/CD、依赖更新
- [x] 保留历史版本记录

**位置**: `CHANGELOG.md`

---

### 2. README.md
- [x] 添加新特性描述
- [x] 更新特性列表（安全可靠、持续更新）
- [x] 保持其他内容不变

**位置**: `README.md`

---

### 3. Copilot 指南
- [x] 更新开发工作流（添加版本发布）
- [x] 添加代码质量保证章节
- [x] 添加 CI/CD 流程说明
- [x] 更新版本历史

**位置**: `.github/copilot-instructions.md`

---

### 4. 发布说明
- [x] 创建详细的发布说明文档
- [x] 包含所有改进点的详细说明
- [x] 添加升级建议
- [x] 说明无破坏性变更

**位置**: `RELEASE_NOTES_v1.2.0.md`

---

## 🔍 需要人工检查的内容

### 文档准确性
- [ ] CHANGELOG.md 中的日期是否正确（2025-12-03）
- [ ] 所有功能描述是否准确
- [ ] 版本号描述是否符合语义化版本规范
- [ ] 没有遗漏重要的改动

### 发布说明完整性
- [ ] 是否清楚解释了主要改进
- [ ] 用户能否理解升级的价值
- [ ] 技术细节是否过于复杂或过于简单
- [ ] 是否需要补充使用示例

### 代码状态
- [ ] 所有 ESLint 错误已修复 ✅
- [ ] 所有测试通过 ✅
- [ ] 编译无错误 ✅
- [ ] CodeQL 警告已修复（需等待 GitHub 扫描）

---

## 📝 待提交的文件

```
modified:   .github/copilot-instructions.md
modified:   CHANGELOG.md
modified:   README.md
new file:   RELEASE_NOTES_v1.2.0.md
```

---

## 🚀 发布流程

### 1. 检查完成后提交
```bash
git add .
git commit -m "docs: 准备 v1.2.0 发布

- 更新 CHANGELOG.md 记录所有改进
- 更新 README.md 添加新特性
- 更新 Copilot 指南文档
- 创建详细的发布说明"
```

### 2. 创建主要版本
```bash
npm run release:minor
```

这会：
- 将版本从 1.1.5 → 1.2.0
- 创建带签名的 git tag
- 自动提交 package.json 和 package-lock.json

### 3. 推送到 GitHub
```bash
git push --follow-tags
```

这会自动触发：
- GitHub Actions 构建
- 创建 GitHub Release
- 发布到 VS Code Marketplace

---

## ⚠️ 注意事项

### 为什么是 Minor 版本而不是 Major？
虽然改动很多，但：
- ✅ 没有破坏性变更
- ✅ 所有现有功能保持不变
- ✅ API 完全向后兼容
- ✅ 用户配置无需修改

根据语义化版本规范：
- **Major (1.x.x → 2.x.x)**: 破坏性变更
- **Minor (x.1.x → x.2.x)**: 新功能，向后兼容 ✅
- **Patch (x.x.1 → x.x.2)**: Bug 修复

所以使用 `npm run release:minor` 是正确的！

---

## 📊 本次更新统计

### 代码改动
- 修改文件: 2 个 (runTest.ts, utils/index.ts)
- 修复问题: 6 个 ESLint 错误
- 安全修复: 4 个 CodeQL 警告

### 依赖更新
- TypeScript: 5.3.3 → 5.9.3
- @types/node: 16.x → 24.10.1
- @types/vscode: 1.85.0 → 1.106.1
- ESLint: v8 → v9
- glob: 旧版 → 10.5.0

### 文档更新
- 新增: 1 个文件 (RELEASE_NOTES_v1.2.0.md)
- 修改: 3 个文件 (CHANGELOG.md, README.md, copilot-instructions.md)

---

## ✅ 检查完毕后

在这个文件中标记 [ ] 为 [x]，然后告诉我可以执行发布命令。
