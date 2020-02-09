import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/haojingying/Desktop/my-project/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
          LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
        exact: true,
      },
      {
        path: '/user/login',
        name: 'login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ '/Users/haojingying/Desktop/my-project/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Login" */ '../User/Login'),
              LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Login').default,
        exact: true,
      },
      {
        path: '/user/register',
        name: 'register',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ '/Users/haojingying/Desktop/my-project/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Register" */ '../User/Register'),
              LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Register').default,
        exact: true,
      },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ '/Users/haojingying/Desktop/my-project/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__RegisterResult" */ '../User/RegisterResult'),
              LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                .default,
            })
          : require('../User/RegisterResult').default,
        exact: true,
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    routes: [
      {
        path: '/',
        redirect: '/CWGL/analysis',
        authority: ['admin', 'user'],
        exact: true,
      },
      {
        path: '/CWGL',
        name: '财务管理',
        icon: 'dashboard',
        routes: [
          {
            path: '/CWGL/analysis',
            name: '总揽',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CWGL__models__activities.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__chart.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__form.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__monitor.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CWGL__Analysis" */ '../CWGL/Analysis'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CWGL/Analysis').default,
            exact: true,
          },
          {
            path: '/CWGL/basic-form',
            name: '财务单录入',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CWGL__models__activities.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__chart.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__form.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__monitor.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CWGL__BasicForm" */ '../CWGL/BasicForm'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CWGL/BasicForm').default,
            exact: true,
          },
          {
            path: '/CWGL/step-form',
            name: '电子缴费',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CWGL__models__activities.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__chart.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__form.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__monitor.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CWGL__StepForm" */ '../CWGL/StepForm'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CWGL/StepForm').default,
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/CWGL/step-form',
                redirect: '/CWGL/step-form/info',
                exact: true,
              },
              {
                path: '/CWGL/step-form/info',
                name: 'info',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__CWGL__models__activities.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/activities.js').then(
                          m => {
                            return { namespace: 'activities', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__chart.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/chart.js').then(
                          m => {
                            return { namespace: 'chart', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__form.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__monitor.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/monitor.js').then(
                          m => {
                            return { namespace: 'monitor', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__CWGL__StepForm" */ '../CWGL/StepForm/Step1'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../CWGL/StepForm/Step1').default,
                exact: true,
              },
              {
                path: '/CWGL/step-form/confirm',
                name: 'confirm',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__CWGL__models__activities.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/activities.js').then(
                          m => {
                            return { namespace: 'activities', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__chart.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/chart.js').then(
                          m => {
                            return { namespace: 'chart', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__form.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__monitor.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/monitor.js').then(
                          m => {
                            return { namespace: 'monitor', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__CWGL__StepForm" */ '../CWGL/StepForm/Step2'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../CWGL/StepForm/Step2').default,
                exact: true,
              },
              {
                path: '/CWGL/step-form/result',
                name: 'result',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__CWGL__models__activities.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/activities.js').then(
                          m => {
                            return { namespace: 'activities', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__chart.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/chart.js').then(
                          m => {
                            return { namespace: 'chart', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__form.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__monitor.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/monitor.js').then(
                          m => {
                            return { namespace: 'monitor', ...m.default };
                          },
                        ),
                        import(/* webpackChunkName: 'p__CWGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/rule.js').then(
                          m => {
                            return { namespace: 'rule', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__CWGL__StepForm" */ '../CWGL/StepForm/Step3'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../CWGL/StepForm/Step3').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/CWGL/table-list',
            name: '表单查询',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CWGL__models__activities.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/activities.js').then(
                      m => {
                        return { namespace: 'activities', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__chart.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/chart.js').then(
                      m => {
                        return { namespace: 'chart', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__form.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__monitor.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/monitor.js').then(
                      m => {
                        return { namespace: 'monitor', ...m.default };
                      },
                    ),
                    import(/* webpackChunkName: 'p__CWGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CWGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CWGL__TableList" */ '../CWGL/TableList'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CWGL/TableList').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/CLGL',
        name: '车检信息管理',
        icon: 'form',
        routes: [
          {
            path: '/CLGL/inputdata',
            name: '基本信息录入',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CLGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CLGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CLGL__inputdata" */ '../CLGL/inputdata'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CLGL/inputdata').default,
            exact: true,
          },
          {
            path: '/CLGL/success',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CLGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CLGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CLGL__Success" */ '../CLGL/Success'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CLGL/Success').default,
            exact: true,
          },
          {
            path: '/CLGL/table-list',
            name: '车检结果查询',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CLGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CLGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CLGL__TableList" */ '../CLGL/TableList'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CLGL/TableList').default,
            exact: true,
          },
          {
            path: '/CLGL/Xxxx',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__CLGL__models__rule.js' */ '/Users/haojingying/Desktop/my-project/src/pages/CLGL/models/rule.js').then(
                      m => {
                        return { namespace: 'rule', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__CLGL__Xxxx" */ '../CLGL/Xxxx'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../CLGL/Xxxx').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/account/settings',
        name: '用户管理',
        icon: 'user',
        routes: [
          {
            path: '/account/center/articles',
            name: '个人中心',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Account__Center__Articles" */ '../Account/Center/Articles'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Center/Articles').default,
            exact: true,
          },
          {
            path: '/account/settings/base',
            name: '个人设置',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/haojingying/Desktop/my-project/src/pages/Account/Settings/models/geographic.js').then(
                      m => {
                        return { namespace: 'geographic', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Account__Settings__BaseView" */ '../Account/Settings/BaseView'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Settings/BaseView').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/XTSZ',
        name: '系统设置',
        icon: 'table',
        exact: true,
      },
      {
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Center'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Center/Center').default,
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
                exact: true,
              },
              {
                path: '/account/center/articles',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Articles'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Articles').default,
                exact: true,
              },
              {
                path: '/account/center/applications',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Applications'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Applications').default,
                exact: true,
              },
              {
                path: '/account/center/projects',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Center__Center" */ '../Account/Center/Projects'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Center/Projects').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/haojingying/Desktop/my-project/src/pages/Account/Settings/models/geographic.js').then(
                      m => {
                        return { namespace: 'geographic', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/Info'),
                  LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                    .default,
                })
              : require('../Account/Settings/Info').default,
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
                exact: true,
              },
              {
                path: '/account/settings/base',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/haojingying/Desktop/my-project/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/BaseView'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/BaseView').default,
                exact: true,
              },
              {
                path: '/account/settings/security',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/haojingying/Desktop/my-project/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/SecurityView'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/SecurityView').default,
                exact: true,
              },
              {
                path: '/account/settings/binding',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/haojingying/Desktop/my-project/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/BindingView'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/BindingView').default,
                exact: true,
              },
              {
                path: '/account/settings/notification',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Account__Settings__models__geographic.js' */ '/Users/haojingying/Desktop/my-project/src/pages/Account/Settings/models/geographic.js').then(
                          m => {
                            return { namespace: 'geographic', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Account__Settings__Info" */ '../Account/Settings/NotificationView'),
                      LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Account/Settings/NotificationView').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('/Users/haojingying/Desktop/my-project/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/haojingying/Desktop/my-project/node_modules/_umi-build-dev@1.17.1@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
