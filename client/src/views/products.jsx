import { Button, Modal, Drawer } from "antd";
import { ProductList } from "../components/product-list";
import {useState} from 'react'

import { ProductForm } from "../components/product-form";
import { ProductDrawerForm } from "../components/forms/product-drawer-form";

export function Products() {
  const [open, setOpen] = useState(false);


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-2xl">Products</p>
          <p className="text-gray-600">Manage products</p>
        </div>
         <ProductDrawerForm />
      </div>
      <ProductList />
   
      {/* <Modal title="Add Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal> */}
    </div>
  );
}
