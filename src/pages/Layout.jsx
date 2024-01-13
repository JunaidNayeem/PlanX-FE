import { ConfigProvider, Layout as Layer } from "antd";
import { Outlet } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import useTheme from "../theme";

function Layout() {
	const { custom, isDarkMode, handleClick } = useTheme();
	return (
		<ConfigProvider theme={custom}>
			<Layer>
				<Navbar isDarkMode={isDarkMode} handleClick={handleClick} />
				<Outlet />
				<FooterSection />
			</Layer>
		</ConfigProvider>
	);
}

export default Layout;
