import React from "react";
import { Modal, Row, Col, Divider } from "antd";
import InfoCard from "../Components/InfoCard";
import "./index.css";

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  departmentName: string;
  jobTitle?: string;
  companyAddress?: string;
}

interface ModalProps {
  open: boolean;
  onClose: (value: boolean) => void;
  modalData: DataType;
}

const UserDetailModal: React.FC<ModalProps> = ({ open, onClose, modalData }) => {
  return (
    <Modal
      title={<div className="user-detail-modal-header">User Details</div>}
      centered
      open={open}
      onOk={() => onClose(false)}
      onCancel={() => onClose(false)}
      footer={null}
      styles={{ body: { padding: 0 } }}
    >
      <div className="user-detail-modal-body">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <InfoCard label="First Name" value={modalData?.firstName} />
          </Col>
          <Col span={12}>
            <InfoCard label="Last Name" value={modalData?.lastName} />
          </Col>
        </Row>
        <Divider className="user-detail-divider" />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <InfoCard label="Email" value={modalData?.email} />
          </Col>
          <Col span={12}>
            <InfoCard label="Phone" value={modalData?.phone} />
          </Col>
        </Row>
        <Divider className="user-detail-divider" />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <InfoCard label="Company Name" value={modalData?.companyName} />
          </Col>
          <Col span={12}>
            <InfoCard label="Company Address" value={modalData?.companyAddress} />
          </Col>
        </Row>
        <Divider className="user-detail-divider" />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <InfoCard label="Company Department" value={modalData?.departmentName} />
          </Col>
          <Col span={12}>
            <InfoCard label="Company Title" value={modalData?.jobTitle} />
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default UserDetailModal;
