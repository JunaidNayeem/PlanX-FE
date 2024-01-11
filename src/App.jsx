import { Layout } from "antd";
import React from "react";
import Features from "./components/Features";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Layout>
			<Navbar />
			<Features />
			<FooterSection />
		</Layout>
	);
}
export default App;
