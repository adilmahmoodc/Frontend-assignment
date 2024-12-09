import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import { TableProps } from "antd/es/table";
import UserDetailModel from "../Components/UserDetailModal";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getUser, searchUser } from "../store/Users/UserDetails";
import { RootState } from "../store/store"; // Import RootState

interface Company {
  name: string;
  department: string;
  title: string;
  address?: {
    address: string;
  };
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  email: string;
  phone: string;
  company?: Company;
}

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

type ColumnTypes = Exclude<TableProps<DataType>["columns"], undefined>;

const DataTable: React.FC = () => {
  const { users } = useAppSelector((state: RootState) => state.users); // Use RootState here

  const dispatch = useAppDispatch();
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>("");
  const [modalData, setModalData] = useState<DataType | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const defaultColumns: (ColumnTypes[number] & { dataIndex: keyof DataType })[] = [
    {
      title: "First Name",
      dataIndex: "firstName",
      width: "30%",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
  ];

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (users?.length) {
      const formattedData: DataType[] = users.map((user: User, index: number) => ({
        key: index,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        companyName: user.company?.name || "N/A",
        departmentName: user.company?.department || "N/A",
        jobTitle: user.company?.title,
        companyAddress: user.company?.address?.address,
      }));
      setDataSource(formattedData);
    } else {
      setDataSource([]);
    }
  }, [users]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (debouncedSearchText) {
        dispatch(searchUser(debouncedSearchText));
      } else {
        dispatch(getUser());
      }
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [debouncedSearchText, dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchText(query);
    setDebouncedSearchText(query);
  };

  const handleRowClick = (record: DataType) => {
    setModalData(record);
    setOpen(true);
  };

  return (
    <div className="set-table-container">
      <div className="search-container">
        <Input.Search
          placeholder="Search by any field"
          value={searchText}
          onChange={handleSearch}
          style={{ width: "100%", maxWidth: "350px", marginBottom: 16 }}
          allowClear
        />
      </div>
      <Table<DataType>
        rowClassName={() => "editable-row pointer-row"}
        bordered
        dataSource={dataSource}
        columns={defaultColumns.map((column) => ({
          ...column,
          onHeaderCell: () => ({
            style: {
              padding: "8px",
            },
          }),
          onCell: () => ({
            style: {
              cursor: "pointer",
            },
          }),
        }))}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        locale={{
          emptyText: dataSource.length === 0 ? "No users found" : "No data",
        }}
        scroll={{ x: "max-content" }}
      />
      {open && modalData && (
        <UserDetailModel open={open} onClose={() => setOpen(false)} modalData={modalData} />
      )}
    </div>
  );
};

export default DataTable;
