import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  height: 100%;
  border-right: 0;
  width: 100%;
  padding-top: 2rem;
`;

const Header = () => {
  return (
    <StyledMenu mode="inline">
      <Menu.Item key="dashboard">
        <Link to="/">Dashboard</Link>
      </Menu.Item>
    </StyledMenu>
  );
};

export default Header;
