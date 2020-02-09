import React, { Fragment } from 'react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Button, Row, Col, Icon, Steps, Card ,message} from 'antd';
import Result from '@/components/Result';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import router from 'umi/router';

const { Step } = Steps;

const today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const desc1 = (
  <div
    style={{
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.45)',
      position: 'relative',
      left: 42,
      textAlign: 'left',
    }}
  >
    <div style={{ margin: '8px 0 4px' }}>
      <FormattedMessage id="app.result.success.step1-operator" defaultMessage="Qu Lili" />
      <Icon style={{ marginLeft: 8 }} type="dingding-o" />
    </div>
    <div>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div style={{ fontSize: 12, position: 'relative', left: 42, textAlign: 'left' }}>
    <div style={{ margin: '8px 0 4px' }}>
      <FormattedMessage id="app.result.success.step2-operator" defaultMessage="Zhou Maomao" />
      <Icon type="dingding-o" style={{ color: '#00A0E9', marginLeft: 8 }} />
    </div>
    <div>
      <a href="">
        <FormattedMessage id="app.result.success.step2-extra" defaultMessage="Urge" />
      </a>
    </div>
  </div>
);

const extra = (
  <Fragment>
    <div
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: '500',
        marginBottom: 20,
      }}
    >
      外观检查信息录入环节
    </div>
    <Row style={{ marginBottom: 16 }}>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
          基本信息录入
        </span>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
          操作员:
        </span>
          王宇辰
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
          录入时间：
        </span>
         {date}
      </Col>
    </Row>
    <Steps style={{ marginLeft: -42, width: 'calc(100% + 84px)' }} progressDot current={2}>
      <Step
        title={
          <span style={{ fontSize: 14 }}>
            开始录入
          </span>
        }
      />
      <Step
        title={
          <span style={{ fontSize: 14 }}>
            确认信息
          </span>
        }
      />
      <Step
        title={
          <span style={{ fontSize: 14 }}>
            完成
          </span>
        }
      />
    </Steps>
  </Fragment>
);

const actions = (
  <Fragment>
    <Button type="primary" onClick={()=>{ router.push('/CLGL/Inputdata'); }}>
      返回录入
    </Button>
    <Button onClick={()=>{ router.push('/CLGL/Xxxx?id=1');}}>
      查看电子单
    </Button>
    <Button onClick={()=>{message.success('该条记录删除成功');}}>
      删除记录
    </Button>
  </Fragment>
);

export default () => (
  <PageHeaderWrapper>
    <Card bordered={false}>
      <Result
        type="success"
        title={'车检信息录入成功'}
        description={'车检信息录入成功，可以进行外观检测，也可在车检结果查询页面输入车牌号对车辆信息进行查询'}
        extra={extra}
        actions={actions}
        style={{ marginTop: 48, marginBottom: 16 }}
      />
    </Card>
  </PageHeaderWrapper>
);
