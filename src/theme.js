import { theme } from "antd";
import { useState } from "react";

const useTheme = () => {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(hours >= 19 ? true : false);

	const handleClick = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};

	const custom = {
		algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
	};

	return { handleClick, custom, isDarkMode };
};

export default useTheme;
