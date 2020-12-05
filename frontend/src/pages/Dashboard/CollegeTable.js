import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

const CollegeTable = ({ dataSource }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (id) => <Link to={`/college/${id}`}>{id}</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Courses",
      dataIndex: "courses",
      key: "courses",
      render: (courses) => (
        <>
          {courses.map((course) => (
            <Tag color="blue" key={course}>
              {course.title}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "No Of Students",
      dataIndex: "noOfStudents",
      key: "noOfStudents",
    },
  ];

  return <Table size="small" dataSource={dataSource} columns={columns} />;
};

export default CollegeTable;
