export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 代码格式化
        'refactor', // 重构
        'perf', // 性能优化
        'test', // 测试相关
        'chore', // 构建过程或辅助工具的变动
        'ci', // CI配置文件和脚本的变动
        'build', // 构建系统或外部依赖的变动
        'revert', // 回滚
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
  prompt: {
    questions: {
      type: {
        description: '选择你要提交的类型:',
        enum: {
          feat: {
            description: '新功能',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '修复bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '文档更新',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: '代码格式化（不影响代码运行的变动）',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '重构（既不是新增功能，也不是修改bug的代码变动）',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '性能优化',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '增加测试',
            title: 'Tests',
            emoji: '🚨',
          },
          chore: {
            description: '构建过程或辅助工具的变动',
            title: 'Chores',
            emoji: '♻️',
          },
        },
      },
      scope: {
        description: '本次更改的范围（可选）:',
      },
      subject: {
        description: '写一个简短的变化描述:',
      },
      body: {
        description: '提供更详细的变更描述（可选）:',
      },
      isBreaking: {
        description: '是否有破坏性变更?',
      },
      breakingBody: {
        description: '破坏性变更的详细描述:',
      },
      breaking: {
        description: '描述破坏性变更:',
      },
      isIssueAffected: {
        description: '此变更是否影响某个issue?',
      },
      issuesBody: {
        description: '如果issues被关闭，需要详细描述:',
      },
      issues: {
        description: '添加issue引用 (例如 "fix #123", "re #123"):',
      },
    },
  },
}
