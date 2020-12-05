import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import styled from "styled-components";
import StudentsList from "./StudentsList";
import RecommendedCollege from "./RecommendedCollege";
import config from "../../config";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

const CollegeWrapper = styled.div``;
const CollegeTitle = styled.h1`
  padding: 0.5rem;
  display: inline;
  font-size: 3rem;
  border-bottom: 5px solid #137cbd;
`;
const CollegeLocation = styled.p`
  padding: 0.5rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const College = () => {
  const { id } = useParams();
  const [collegeList, setCollegeList] = useState([]);

  const url = `${config.apiUrl}/college/${id}`;
  const { loading, error, data } = useFetch(url, {}, []);

  useEffect(() => {
    const transformCollege = (collegList) => {
      const trandformedColleges = [];
      while (collegList.length > 0) {
        trandformedColleges.push(collegList.splice(0, 4));
      }

      setCollegeList(trandformedColleges);
    };

    if (data) {
      transformCollege(data.recommendedColleges);
    }
  }, [data]);

  return (
    <>
      {error && "Error!"}
      {loading && "Loading..."}
      <Content>
        {data && (
          <>
            <div>
              <CollegeTitle>
                {data.college.name} - {data.college.yearFounded}
              </CollegeTitle>
            </div>
            <CollegeLocation>
              {data.college.city} - {data.college.country}
            </CollegeLocation>
            <StudentsList dataSource={data.students} />
            {collegeList.length > 0 && (
              <RecommendedCollege colleges={collegeList} />
            )}
          </>
        )}
      </Content>
    </>
  );
};

export default College;
