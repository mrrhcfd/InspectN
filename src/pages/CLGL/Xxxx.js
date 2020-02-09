import React, { PureComponent } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Descriptions, 
  Badge ,
  Row, Col
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

class Xxxx extends PureComponent {

  componentDidMount() {
    let id = window.location.href.split("?")[1].split("=")[1];
    //alert(decodeURI(id));
  }

  render() {

    return (
      <PageHeaderWrapper
        title={'外检结果电子单'}
        content={'外检结果电子单'}
      >
        <Card bordered={false}>
          <Descriptions title="平谷机动车检测场流转单" bordered column={4}  style={{marginBottom:10}}>
            <Descriptions.Item label="检验日期" span={4}>2020年2月27日</Descriptions.Item>

            <Descriptions.Item label="号牌号码" span={1.5}>京Q 10</Descriptions.Item>
            <Descriptions.Item label="车辆出厂日期" span={1.5}>2010-10-11</Descriptions.Item>
            <Descriptions.Item label="里程表读数" span={2}>256</Descriptions.Item>

            <Descriptions.Item label="检验类别" span={1.5} >定检</Descriptions.Item>   
            <Descriptions.Item label="驱动类型" span={1.5}>后驱</Descriptions.Item>     
            <Descriptions.Item label="变速箱" span={2}>自动</Descriptions.Item>

            <Descriptions.Item label="燃油类别" span={2}>汽油</Descriptions.Item>
            <Descriptions.Item label="车辆用途" span={2}>其它</Descriptions.Item>

            <Descriptions.Item label="是否有OBD" span={1}>是</Descriptions.Item>
            <Descriptions.Item label="OBD灯是否正常" span={1}>是</Descriptions.Item>
            <Descriptions.Item label="环保检测方法" span={2}>自由加速</Descriptions.Item>

            <Descriptions.Item label="供油方式" span={4}>机械泵</Descriptions.Item>

            <Descriptions.Item label="是否改造" span={1}> 否</Descriptions.Item>
            <Descriptions.Item label="进气方式" span={1}> 自吸</Descriptions.Item>
            <Descriptions.Item label="转速/功率" span={1}> 100/KW</Descriptions.Item>
            <Descriptions.Item label="缸数/排量" span={1}> 4/80</Descriptions.Item>

            <Descriptions.Item label="车辆机械情况" span={4}>车上仪表，影响安全或引起测试偏差的机械故障，排气污染控制装置泄漏</Descriptions.Item>
        
            <Descriptions.Item label="曲轴箱通风系统" span={4}>车辆油箱和油品，发动机变速箱和冷却系统等无渗漏，轮胎干燥清洁气压</Descriptions.Item>
            <Descriptions.Item label="燃油蒸发控制系统" span={4}>烧机油，中断ARS，ESP，EPC牵引力控制系统，关闭空调暖风附属设备</Descriptions.Item>
          
            <Descriptions.Item label="外地车发动机型号" span={2}>XXXXX</Descriptions.Item>
            <Descriptions.Item label="制造厂商" span={2}>XXXXX</Descriptions.Item>

            <Descriptions.Item label="汽油车催化器型号 前/左" span={2}>XX</Descriptions.Item>
            <Descriptions.Item label="后/右" span={2}>XX</Descriptions.Item>

            <Descriptions.Item label="柴油车DPF" span={2}>XXXXX</Descriptions.Item>
            <Descriptions.Item label="SCR" span={2}>XXXXX</Descriptions.Item>
          </Descriptions>
          <Button type="primary" icon="download" onClick={()=>{}}>
            电子单导出
          </Button>
          <Button style={{marginLeft:10}} onClick={()=>{ router.push('/CLGL/table-list');}}>
            返回查询
          </Button>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Xxxx;
