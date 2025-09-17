// import { Suspense } from "react";
// import Users from "./Components/Users";
import MarqueeSlider from "./Components/MarqueSlider";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
// 	(res) => res.json()
// );

// const callUsers = async () => {
// 	const res = await fetch("https://jsonplaceholder.typicode.com/users");
// 	return res.json();
// };

function App() {
	// const fetchesUsers = callUsers();
	return (
		<>
			{/* <Suspense fallback={<h2>Users Data Is Comming.</h2>}>
				User Function
				<Users fetchesUsers={fetchesUsers}></Users>

				Use Variable
				<Users fetchUsers={fetchUsers}></Users>
			</Suspense> */}

			<div>
				<h2 className="text-[25px] text-center mb-5 mt-5">
					MargueeSlider Using Slick Slider
				</h2>
				<MarqueeSlider></MarqueeSlider>
			</div>
		</>
	);
}

export default App;
