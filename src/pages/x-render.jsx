import React, { useEffect } from 'react';
import {  Button, } from 'antd';
import Form, { useForm } from 'form-render';
import { Input } from 'element-react'
// import 'antd/dist/antd.css'
import 'element-theme-default';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '网址输入自定义组件',
      type: 'string',
      props: {
        disabled: '{{rootValue.showMore}}'
      },
      widget: 'site',
    }
  },
};

const SiteInput = props => {
  return <Input {...props} />;
};

const XRender = () => {
  const form = useForm();
  useEffect(() => {
    setTimeout(() => {
      form.setValues({showMore: true})
      console.log(form.getValues())
    },1000)
  }, [])

  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </div>
  );
};

export default XRender