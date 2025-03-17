import { Button, Space, Table, Tag } from "antd";

import { useCallback, useEffect, useState } from "react";
import { useProductStore } from "../store/useProducts";
import { DeleteModal } from "./delete-modal";

const { Column } = Table;

// function EmptyState() {
//   return (
//     <div>nothing</div>
//   )
// }
export function ProductList() {
  const {
    fetch: getProducts,
    products,
    loading,
    delete: deleteProduct,
  } = useProductStore();

  useEffect(() => {
    getProducts();
  }, []);

  // if (!products.length && !loading) return <EmptyState />

  // Optimized delete function using useCallback
  const handleDelete = useCallback(
    async (id) => {
      await deleteProduct(id);
    },
    [] // Dependencies empty so function is memoized
  );
  return (
    <Table dataSource={products} className="mt-2" rowKey={(item) => item.id}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="Stock" dataIndex="stock" key="stock" />
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <Button>Edit</Button>
            <DeleteModal id={record.id} onDelete={handleDelete} />
          </Space>
        )}
      />
    </Table>
  );
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
