// https://commitlint.js.org
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved',
      ],
      issuePrefixes: ['#'],
      noteKeywords: ['BREAKING CHANGE'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  rule: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新增新功能
        'fix',      // 修复问题/错误
        'perf',     // 优化/性能提升
        'style',    // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
        'docs',     // 仅仅修改了文档/注释，比如README, CHANGELOG, CONTRIBUTE等等
        'test',     // 新增测试用例或是更新现有测试
        'refactor', // 重构代码(既没有新增功能，也没有修复 bug)
        'build',    // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'ci',       // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'chore',    // 依赖更新/脚手架配置修改等
        'revert',   // 回滚某个更早之前的提交
        'wip',      // 开发中
        'workflow', // 工作流改进
        'types',    // 类型定义文件更改
        'release',  // 发布版本
        'merge',   // 分支合并 Merge branch ? of ?
        'conflict', // 解决合并过程中的冲突
      ]
    ]
  }
}