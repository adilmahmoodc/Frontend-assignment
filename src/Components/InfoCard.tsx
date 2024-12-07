import React from "react";
import { Typography } from "antd";


interface InfoCard {
  label: string;
  value: string | undefined;
}

const InfoCard: React.FC<InfoCard> = ({ label, value }) => {
  return (
    <div>
      <Typography.Title level={5}>{label}</Typography.Title>
      <Typography>{value}</Typography>
    </div>
  );
};

export default InfoCard;
