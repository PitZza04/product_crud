import React from "react";
import { Button, Modal, message } from "antd";

export function DeleteModal({ id, onDelete }) {
  const showDeleteConfirm = () => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          if (onDelete) onDelete(id); // Call parent function with the ID
          message.success("Item deleted successfully");
        } catch (error) {
          message.error("Failed to delete item");
        }
      },
    });
  };

  return (
    <Button type="primary" danger onClick={showDeleteConfirm}>
      Delete
    </Button>
  );
}
