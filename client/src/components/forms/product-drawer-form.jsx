import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from "antd";
import { useProductStore } from "../../store/useProducts";

const { Option } = Select;

export function ProductDrawerForm() {
  const [open, setOpen] = useState(false);
  const { add: createProduct, fetch: getProducts } = useProductStore();
  const [form] = Form.useForm(); // Create form instance

  const [state, setState] = useState({
    name: null,
    price: 0,
    stock: 0,
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onCancel = () => {
    setOpen(false);
  };

  // Handle form submission
  const onFinish = async (values) => {
    const response = await createProduct(values);
    if (!response) return console.log("Failed to get data");

    getProducts();

    setOpen(false); // Close drawer after submit
    form.resetFields(); // Reset form fields
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add new product
      </Button>
      <Drawer
        title="Add Product"
        width={420}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          hideRequiredMark
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please enter price" },
              { type: "number", message: "Must be number" },
            ]}
          >
            <InputNumber style={{ width: "50%" }} placeholder="Enter price" />
          </Form.Item>
          <Form.Item
            label="Stock"
            name="stock"
            rules={[
              { required: true, message: "Please enter stock" },
              { type: "number", message: "Must be number" },
            ]}
          >
            <InputNumber style={{ width: "50%" }} placeholder="Enter stock" />
          </Form.Item>
          {/* Buttons inside Form to keep them near the last input */}
          <Form.Item>
            <Space className="mt-4">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
        {/* <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: true, message: "Please enter product name" },
                ]}
              >
                <Input
                  placeholder="Please enter product name"
                  type="text"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: "Please enter price" }]}
              >
                <Input
                  type="number"
                  placeholder="Please enter price"
                  onChange={(e) =>
                    setState({ ...state, price: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="stock"
                label="Stock"
                rules={[{ required: true, message: "Please enter stock" }]}
              >
                <Input
                  type="number"
                  placeholder="Please enter stock"
                  onChange={(e) =>
                    setState({ ...state, stock: e.target.value })
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        </Form> */}
      </Drawer>
    </>
  );
}
