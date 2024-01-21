export const formatTime = (timestamp) => {
	const date = new Date(timestamp);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const amOrPm = hours >= 12 ? "PM" : "AM";
	const formattedHours = hours % 12 || 12;
	const formattedMinutes = minutes.toString().padStart(2, "0");
	return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
};

export const formatDate = (timestamp) => {
	const date = new Date(timestamp);
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	const year = date.getFullYear();
	const time = formatTime(timestamp);
	return `${month}/${day}/${year} ${time}`;
};

export const formatDateTime = (timestamp) => {
	const date = new Date(timestamp);
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};
	return date.toLocaleDateString("en-US", options);
};

export const formatTimeLine = (timestamp) => {
	const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
		month: "long", // full month name
		day: "numeric", // day of the month
		year: "numeric", // four-digit year
	});
	return formattedDate;
};
