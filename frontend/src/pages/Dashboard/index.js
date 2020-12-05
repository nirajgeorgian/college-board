import styled from "styled-components";
import YearBarChart from "./YearBarChart";
import CollegeTable from "./CollegeTable";
import config from "../../config";
import useFetch from "use-http";

const ChartWrapper = styled.div`
  padding: 1rem 0;
`;
const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Dashboard = () => {
  const { loading, error, data } = useFetch(`${config.apiUrl}/college`, {}, []);

  return (
    <div>
      {!loading && data && data.length > 0 && (
        <>
          <ChartWrapper>
            <YearBarChart companies={data} />
          </ChartWrapper>
          <TableWrapper>
            <CollegeTable dataSource={data} />
          </TableWrapper>
        </>
      )}
    </div>
  );
};

export default Dashboard;
