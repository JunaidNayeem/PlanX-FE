import { Button, Divider, Layout, Menu, Flex } from "antd";
import { navItems as items } from "../../data";
import { Moon, Sun } from "lucide-react";

function Navbar({ handleClick, isDarkMode }) {
	const { Header } = Layout;
	return (
		<Header
			style={{
				position: "sticky",
				top: 0,
				zIndex: 1,
				width: "100%",
				display: "flex",
				alignItems: "center",
			}}
		>
			<div className="demo-logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["2"]}
				items={items}
				style={{
					flex: 1,
					minWidth: 0,
					justifyContent: "center",
				}}
			/>
			<Flex align="center">
				<Button type="primary" danger size="large">
					Free Trial
				</Button>
				<Divider type="vertical" style={{ backgroundColor: "gray" }} />
				<Button
					type="primary"
					shape="circle"
					size="large"
					onClick={handleClick}
				>
					{isDarkMode ? <Sun /> : <Moon />}
				</Button>
			</Flex>
		</Header>
	);
}

export default Navbar;
