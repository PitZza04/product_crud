import { Button, Space, Table, Tag } from 'antd';

import { useEffect, useState } from 'react';
import { useProductStore } from '../store/useProducts';


const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function EmptyState() {
  return (
    <div>nothing</div>
  )
}
export function ProductList(){
  
  const {fetch: getProducts, products, loading} = useProductStore()

  useEffect(() => {
    getProducts()
  }, [])
  
    if (!products.length && !loading) return <EmptyState />

  return (
  <Table dataSource={products} className='mt-2' rowKey={(item) => item.id }>
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Price" dataIndex="price" key="price" />
    <Column title="Stock" dataIndex="stock" key="stock" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Space>
      )}
    />
  </Table>
  )
}

// const dataSource = [
//   {
//     key: "1",
//     name: "Mike",
//     age: 32,
//     address: "10 Downing Street",
//   },
//   {
//     key: "2",
//     name: "John",
//     age: 42,
//     address: "10 Downing Street",
//   },
// ];

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
// ];

