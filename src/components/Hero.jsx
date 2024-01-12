import { Button, Flex, Typography } from "antd";
const { Title, Paragraph } = Typography;
import Banner from "../assets/images/banner.png";

function Hero() {
	return (
		<Flex
			style={{
				height: "90dvh",
				padding: "0 64px",
			}}
			align="center"
			justify="center"
		>
			<Flex vertical justify="center">
				<div>
					<Title
						style={{ fontSize: "64px", fontWeight: "bolder", marginTop: 0 }}
					>
						Welcome to <span style={{ color: "#0060df" }}>Plan X</span>
					</Title>
				</div>
				<div style={{ width: "70%" }}>
					<Paragraph style={{ fontSize: "23px" }}>
						Your Ultimate Project Management Solution where efficiency meets
						excellence.
					</Paragraph>
				</div>
				<div style={{ width: "60%" }}>
					<Paragraph type="secondary" style={{ fontSize: "20px" }}>
						Optimize teamwork with our streamlined project planning. Centralize,
						integrate, save costs.
					</Paragraph>
				</div>
				<div>
					<Button type="primary" size="large">
						Get Started
					</Button>
				</div>
			</Flex>

			<div>
				<img src={Banner} alt="banner" style={{ width: "unset" }} />
			</div>
		</Flex>
	);
}

export default Hero;
