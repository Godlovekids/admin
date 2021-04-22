module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: 'feat', name: 'feat:        新增功能' },
    { value: 'fix', name: 'fix:         修复bug' },
    { value: 'style', name: 'style:       代码格式' },
    { value: 'refactor', name: 'refactor:    代码重构' },
    { value: 'perf', name: 'perf:        性能优化' },
    { value: 'build', name: 'build:       构建流程变更' },
    { value: 'revert', name: 'revert:      回滚代码' }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook相关'],
    ['utils', 'utils相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(20)} ${description}`
    }
  }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // allowCustomScopes: true,
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',


  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

  // 交互提示信息
  messages: {
    type: '选择你要提交的类型:',
    scope: '\n选择一个scope:',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的scope:',
    subject: '填写变更描述:',
    body: '填写更加详细的变更描述:',
    breaking: '非兼容性重大的变更:',
    footer: '所有变更的issues closed:',
    confirmCommit: '提交代码:'
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],

  // 跳过要询问的步骤
  skipQuestions: ['body', 'footer'],

  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
