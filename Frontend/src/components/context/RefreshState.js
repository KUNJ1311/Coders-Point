import { useState } from "react";
import RefreshContext from "./refreshContext";
const RefreshState = (props) => {
	const [refresh, setRefresh] = useState(true);
	return <RefreshContext.Provider value={{ refresh, setRefresh }}>{props.children}</RefreshContext.Provider>;
};
export default RefreshState;
