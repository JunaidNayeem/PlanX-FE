import { ConfigProvider, Layout } from "antd";
import Features from "./components/Features";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import useTheme from "./theme";
import Hero from "./components/Hero";

function App() {
	const { custom, handleClick, isDarkMode } = useTheme();
	return (
		<ConfigProvider theme={custom}>
			<Layout>
				<Navbar handleClick={handleClick} isDarkMode={isDarkMode} />
				<Hero />
				<Features />
				<FooterSection />
			</Layout>
		</ConfigProvider>
	);
}
export default App;
