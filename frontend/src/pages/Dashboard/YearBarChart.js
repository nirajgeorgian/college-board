import { Chart, Interval, Tooltip, Axis, Coordinate } from "bizcharts";

const YearBarChart = ({ companies }) => {
  const generateData = (companies) => {
    const data = {};

    companies.forEach((_company) => {
      data[_company.yearFounded] = data[_company.yearFounded] + 1 || 1;
    });

    const companyData = [];
    for (const [key, value] of Object.entries(data)) {
      companyData.push({ year: key, college: value });
    }

    return companyData;
  };

  return (
    <Chart height={400} data={generateData(companies)} autoFit>
      <Coordinate type="polar" innerRadius={0.2} />
      <Axis visible={true} />
      <Tooltip showTitle={true} />
      <Interval
        position="year*population"
        adjust="stack"
        color="year"
        element-highlight
        style={{
          lineWidth: 1,
          stroke: "#fff",
        }}
        label={[
          "year",
          {
            offset: -15,
          },
        ]}
      />
    </Chart>
  );
};

export default YearBarChart;
