import "./../styles/App.css";
import React from "react";
import Photo from "./photo";
import Header from "./header";
import { useState, createContext } from "react";

export const UserContext = createContext()
function App() {
	const [input, setinput] = useState("Mountains")
	return (
		<UserContext.Provider value={{input:input , setinput:setinput}}>
			<div id="main" >
				<Header  />
				<Photo />
			</div>
		</UserContext.Provider>
	)
}


export default App;
