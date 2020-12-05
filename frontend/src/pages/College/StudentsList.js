import { Table, Tag, Typography } from "antd";
import { Link } from "react-router-dom";

const StudentsList = ({ dataSource }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (id) => <Link to={`/student/${id}`}>{id}</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
      render: (skills) => (
        <>
          {skills.map((skills) => (
            <Tag color="blue" key={skills}>
              {skills}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Year Of Batch",
      dataIndex: "yearOfBatch",
      key: "yearOfBatch",
    },
  ];

  return (
    <Table
      title={() => <Typography.Title level={3}>student list</Typography.Title>}
      size="small"
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default StudentsList;
