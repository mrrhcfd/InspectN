import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '首页',
          title: '首页',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: '',
          blankTarget: true,
        },
        {
          key: '平谷研发',
          title: '平谷研发',
          href: '',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          试用版 <Icon type="copyright" /> 平谷自主研发
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
