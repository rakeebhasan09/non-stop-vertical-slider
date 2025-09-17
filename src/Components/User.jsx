const User = ({ user }) => {
	return (
		<div className="shadow p-7 rounded-2xl">
			<img
				className="w-28 h-28 rounded-full block mx-auto"
				src="https://i.ibb.co.com/spmwXc9y/download.jpg"
				alt=""
			/>
			<h3 className="text-center text-[18px] mt-2">{user.name}</h3>
		</div>
	);
};

export default User;
