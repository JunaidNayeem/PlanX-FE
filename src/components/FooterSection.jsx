import Footer from "rc-footer";
import "rc-footer/assets/index.css";

function FooterSection() {
	return (
		<Footer
			columns={[
				{
					icon: (
						<img
							src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
							alt="plan-x-logo"
						/>
					),
					title: "Plan-X",
					url: "https://planx.com",
					description: "Plan-X to compete Space-X",
					openExternal: true,
				},
			]}
			bottom={`Plan-X ©${new Date().getFullYear()} All Rights Reserved.`}
		/>
	);
}

export default FooterSection;
