import { Avatar, Button, Col, List, Row, Typography, theme } from "antd";
import { greenCheck } from "../../data";
const { Title } = Typography;

function Section({ title, data, image, colOrder }) {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<div
			style={{
				padding: 24,
				minHeight: 380,
				background: colorBgContainer,
				borderRadius: borderRadiusLG,
			}}
		>
			<Row gutter={128} align="middle">
				<Col order={colOrder}>
					<img src={image} alt="Blogs" />
				</Col>
				<Col flex={3}>
					<Title level={2}>{title}</Title>
					<List
						itemLayout="horizontal"
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									avatar={
										<Avatar src={greenCheck} style={{ marginTop: "15px" }} />
									}
									title={
										<span style={{ fontSize: "22px", fontWeight: "normal" }}>
											{item.title}
										</span>
									}
								/>
							</List.Item>
						)}
					/>
					<Button type="primary" size="large" style={{ margin: "25px" }}>
						Learn More
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default Section;
