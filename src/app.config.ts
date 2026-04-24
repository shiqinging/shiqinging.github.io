export default {
  pages: [
    'pages/index/index',
    'pages/monthly/index',
    'pages/points/index',
    'pages/profile/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFF0F3',
    navigationBarTitleText: 'Zenith Discipline',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFF0F3',
  },
  tabBar: {
    custom: true,
    list: [
      { pagePath: 'pages/index/index', text: '首页' },
      { pagePath: 'pages/monthly/index', text: '月度看板' },
      { pagePath: 'pages/points/index', text: '积分中心' },
      { pagePath: 'pages/profile/index', text: '个人中心' },
    ],
  },
}
