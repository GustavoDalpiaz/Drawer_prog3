import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Nova Conta
      </Button>
      <Drawer
        title="Coloque as informações pedidas "
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onClose} type="primary">
              enviar
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Nome"
                label="Nome"
                rules={[
                  {
                    required: true,
                    message: 'Insira seu nome completo',
                  },
                ]}
              >
                <Input placeholder="Por favor insira seu nome completo" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[
                  {
                    required: true,
                    message: 'Por favor insira a URL',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Por favor insira a URL"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Proprietario"
                label="Proprietario"
                rules={[
                  {
                    required: true,
                    message: 'Por favor selecione um Proprietario',
                  },
                ]}
              >
                <Select placeholder="Por favor insira um Proprietario">
                  <Option value="Gustavo">Gustavo</Option>
                  <Option value="Erick">Erick</Option>
                  <Option value="Roberson">Roberson</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Tipo"
                label="Tipo"
                rules={[
                  {
                    required: true,
                    message: 'Por favor insira o Tipo',
                  },
                ]}
              >
                <Select placeholder="Por favor insira o Tipo">
                  <Option value="privado">Privado</Option>
                  <Option value="publico">Publico</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Senha"
                label="Senha"
                rules={[
                  {
                    required: true,
                    message: 'Por favor insira a senha',
                  },
                ]}
              >
                <Input.Password placeholder="Por favor insira a senha" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="Data"
                label="Data"
                rules={[
                  {
                    required: true,
                    message: 'Escolha a data ',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="Descrição"
                label="Descrição"
                rules={[
                  {
                    required: true,
                    message: 'Insira a descrição',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Insira a Descrição" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default App;
