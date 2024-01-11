import { Layout, Menu } from "antd";
import React from "react";
import { navItems as items } from "../../data";
const { Header } = Layout;

function Navbar() {
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
		</Header>
	);
}

export default Navbar;
