---
order: 0
title: 演示
iframe: 400
---

基本页脚。

```jsx
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { Icon } from 'antd';

const links = [
  {
    key: '帮助',
    title: '帮助',
    href: '',
  },
  {
    key: 'github',
    title: <Icon type="github" />,
    href: '',
    blankTarget: true,
  },
  {
    key: '条款',
    title: '条款',
    href: '',
    blankTarget: true,
  },
];

const copyright = (
  <div>
    试用版 <Icon type="copyright" /> 平谷自主研发
  </div>
);

ReactDOM.render(
  <div style={{ background: '#f5f5f5', overflow: 'hidden' }}>
    <div style={{ height: 280 }} />
    <GlobalFooter links={links} copyright={copyright} />
  </div>,
  mountNode
);
```
