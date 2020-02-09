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
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@Form.create()
class InputData extends PureComponent {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        router.push('/CLGL/Success');
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderWrapper
        title={'车检基本信息录入'}
        content={'输入基本信息，用于外检上报数据'}
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label={'车牌号'}>
              {getFieldDecorator('carname', {
                rules: [
                  {
                    required: true,
                    message: '请输入车牌号',
                  },
                ],
              })(<Input placeholder={'请输入车牌号'} />)}
            </FormItem>
            <FormItem {...formItemLayout} label={'车架号'}>
              {getFieldDecorator('carjh', {
                rules: [
                  {
                    required: true,
                    message: '请输入车驾号',
                  },
                ],
              })(<Input placeholder={'请输入车驾号'} />)}
            </FormItem>
            <FormItem {...formItemLayout} label={'发动机号'}>
              {getFieldDecorator('carfdj', {
                rules: [
                  {
                    required: true,
                    message: '请输入发动机号',
                  },
                ],
              })(<Input placeholder={'请输入发动机号'} />)}
            </FormItem>
            <FormItem {...formItemLayout} 
              label={
                <span>
                车检描述
                <em className={styles.optional}>
                  <FormattedMessage id="form.optional" />
                  <Tooltip title={'记录特殊情况'}>
                    <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                  </Tooltip>
                </em>
              </span>}>
              {getFieldDecorator('goal', {
                rules: [
                  {
                    required: false,
                    message: formatMessage({ id: 'validation.goal.required' }),
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  placeholder={'记录特殊情况'}
                  rows={4}
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  客户姓名
                  <em className={styles.optional}>
                    <FormattedMessage id="form.optional" />              
                  </em>
                </span>
              }
            >
              {getFieldDecorator('client')(
                <Input placeholder={'客户姓名'} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  联系方式
                  <em className={styles.optional}>
                    <FormattedMessage id="form.optional" />
                  </em>
                </span>
              }
            >
              {getFieldDecorator('invites')(
                <Input placeholder={'客户手机'} />
              )}
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="form.submit" />
              </Button>
              <Button style={{ marginLeft: 8 }}>
                <FormattedMessage id="form.save" />
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default InputData;
