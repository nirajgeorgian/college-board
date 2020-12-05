import { Card, Col, Row, Typography } from "antd";

const RecommendedCollege = ({ colleges }) => {
  return (
    <>
      <Typography.Title level={3}>Recommended College</Typography.Title>
      {colleges &&
        colleges.map((collegeArray) => (
          <Row gutter={16}>
            {collegeArray.map((college) => (
              <Col span={6}>
                <Card title={college.name} bordered={false}>
                  <p>{`${college.city} - ${college.country}`}</p>
                  <p>{`${college.yearFounded} - ${college.noOfStudents} students`}</p>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
    </>
  );
};

export default RecommendedCollege;
