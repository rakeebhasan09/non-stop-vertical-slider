// import { Suspense } from "react";
// import Users from "./Components/Users";
// import MarqueeSlider from "./Components/MarqueSlider";
import ProjectSlider from "./Components/ProjectSlider";

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

			{/* <div>
				<h2 className="text-[25px] text-center mb-5 mt-5">
					MargueeSlider Using Slick Slider
				</h2>
				<div>
					<div className="relative w-[200px] h-[5px] bg-black mx-auto">
						<div className="absolute top-[-3px] w-[20px] h-[10px] bg-red-600 animate-mymove"></div>
					</div>
				</div>
				<MarqueeSlider></MarqueeSlider>
			</div> */}
			<div>
				<h2 className="text-[25px] text-center mb-5 mt-5">
					Recent Project's
				</h2>
				<div className="container mx-auto">
					<div className="relative w-[150px] h-[5px] bg-black mx-auto">
						<div className="absolute top-[-3px] w-[20px] h-[10px] bg-red-600 animate-mymove"></div>
					</div>
					<ProjectSlider></ProjectSlider>
				</div>
			</div>
		</>
	);
}

export default App;
