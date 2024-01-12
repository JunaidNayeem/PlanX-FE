import { Divider, Flex, Layout, Typography } from "antd";
import React from "react";
import { blog, blogImg, doc, docImg, workflow, workflowImg } from "../../data";
import Section from "./Section";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Features() {
	return (
		<Content className="content">
			<Flex vertical align="center">
				<Title style={{ fontWeight: "bolder" }}>Features</Title>
				<Paragraph strong style={{ fontSize: "18px", textAlign: "center" }}>
					Optimize teamwork with our streamlined project
				</Paragraph>
			</Flex>
			<Section title="Blogs" data={blog} image={blogImg} />
			<Divider type="horizontal" />
			<Section
				title="Workflow"
				data={workflow}
				colOrder={1}
				image={workflowImg}
			/>
			<Divider type="horizontal" />
			<Section title="Documentation" data={doc} image={docImg} />
			<Divider type="horizontal" />
		</Content>
	);
}

export default Features;
