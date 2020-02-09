export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/CWGL/analysis', authority: ['admin', 'user'] },
      // 财务管理
      {
        path: '/CWGL',
        name: '财务管理',
        icon: 'dashboard',
        routes: [
          {
            path: '/CWGL/analysis',
            name: '总揽',
            component: './CWGL/Analysis',
          },
          {
            path: '/CWGL/basic-form',
            name: '财务单录入',
            component: './CWGL/BasicForm',
          },
          {
            path: '/CWGL/step-form',
            name: '电子缴费',
            component: './CWGL/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/CWGL/step-form',
                redirect: '/CWGL/step-form/info',
              },
              {
                path: '/CWGL/step-form/info',
                name: 'info',
                component: './CWGL/StepForm/Step1',
              },
              {
                path: '/CWGL/step-form/confirm',
                name: 'confirm',
                component: './CWGL/StepForm/Step2',
              },
              {
                path: '/CWGL/step-form/result',
                name: 'result',
                component: './CWGL/StepForm/Step3',
              },
            ],
          },
          {
            path: '/CWGL/table-list',
            name: '表单查询',
            component: './CWGL/TableList',
          },
        ],
      },
      // 车检信息管理
      {
        path: '/CLGL',
        name: '车检信息管理',
        icon: 'form',
        routes: [
          {
            path: '/CLGL/inputdata',
            name: '基本信息录入',
            component: './CLGL/inputdata',
          },
          {
            path: '/CLGL/success',
            component: './CLGL/Success',
          },
          {
            path: '/CLGL/table-list',
            name: '车检结果查询',
            component: './CLGL/TableList',
          },
          {
            path: '/CLGL/Xxxx',
            component: './CLGL/Xxxx',
          },
        ],
      },
      // 用户管理
      {
        path: '/account/settings',
        name: '用户管理',
        icon: 'user',
        routes: [
          {
            path: '/account/center/articles',
            name: '个人中心',
            component: './Account/Center/Articles',
          },
          {
            path: '/account/settings/base',
            name: '个人设置',
            component: './Account/Settings/BaseView',
          }
        ],
      },
      // 系统设置
      {
        path: '/XTSZ',
        name: '系统设置',
        icon: 'table',
      },
      {
        
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
