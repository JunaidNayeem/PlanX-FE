import { theme } from "antd";
import { useState } from "react";

const useTheme = () => {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(true);

	const handleClick = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};

	const custom = {
		algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
	};

	return { handleClick, custom, isDarkMode };
};

export default useTheme;
