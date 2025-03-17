import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useProductStore } from '../../store/useProducts';
import ColumnGroup from 'antd/es/table/ColumnGroup';

const { Option } = Select;

export function ProductDrawerForm (){
  const [open, setOpen] = useState(false);
  const {add: createProduct, fetch: getProducts} = useProductStore()
 const [state, setState] = useState({
        name: null,
        price: 0,
        stock: 0,
    })
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
    const onCancel = () => {
    setOpen(false);
  };

  const onSubmit = async () => {

    const response = await createProduct(state)

    setOpen(close)
    setState({
      name: '',
      price: 0,
      stock: 0,
    })
    if(!response.success) return
    getProducts()

  }
  
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add new product
      </Button>
      <Drawer
        title="Create a new account"
        width={420}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        
        extra={
          <Space>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={onSubmit}  type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark onSubmit={onSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter product name' }]}
              >
                <Input placeholder="Please enter product name" type='text' value={state.name}  onChange={(e) => setState({ ...state, name: e.target.value })} />
              </Form.Item>
            </Col>
           <Col span={12}>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: 'Please enter price' }]}
              >
                <Input type='number' placeholder="Please enter price"  onChange={(e) => setState({ ...state, price: e.target.value })} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          
          <Col span={12}>
              <Form.Item
                name="stock"
                label="Stock"
                rules={[{ required: true, message: 'Please enter stock' }]}
              >
                <Input type='number' placeholder="Please enter stock"  onChange={(e) => setState({ ...state, stock: e.target.value })} />
              </Form.Item>
            </Col>
          </Row>
       
        </Form>
      </Drawer>
    </>
  );
};

