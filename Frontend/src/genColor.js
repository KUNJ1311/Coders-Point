const lightColors = ["#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FF7043", "#D32F2F", "#4CAF50", "#1976D2", "#512DA8", "#0288D1", "#00796B", "#43A047", "#FF8A65", "#C2185B", "#7B1FA2", "#303F9F", "#1565C0", "#004D40", "#FFC400", "#FF9100", "#FF3D00", "#FF6E40", "#DD2C00", "#C51162", "#8E24AA", "#5E35B1", "#3949AB", "#1E88E5", "#039BE5", "#00ACC1", "#00897B", "#43A047", "#FFB74D", "#D81B60", "#9E9D24", "#8D6E63", "#F4511E", "#795548", "#FFAB00"];

export const getRandomLightColor = () => {
	const randomIndex = Math.floor(Math.random() * lightColors.length);
	return lightColors[randomIndex];
};
