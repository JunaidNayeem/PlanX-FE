import { theme } from "antd";
import { useState } from "react";

const useTheme = () => {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const mode = hours >= 19 || hours <= 7 ? true : false;
	const [isDarkMode, setIsDarkMode] = useState(mode);

	const handleClick = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};

	const custom = {
		algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
	};

	return { handleClick, custom, isDarkMode };
};

export default useTheme;
