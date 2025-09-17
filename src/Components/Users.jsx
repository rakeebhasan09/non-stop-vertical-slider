import { use } from "react";
import User from "./User";

const Users = ({ fetchesUsers }) => {
	{
		/* User Function */
	}
	const users = use(fetchesUsers);

	{
		/* Use Variable */
	}
	// const users = use(fetchUsers);

	return (
		<div className="container mx-auto mt-3">
			<div className="grid grid-cols-3 gap-5">
				{users.map((user) => (
					<User key={user.id} user={user}></User>
				))}
			</div>
		</div>
	);
};

export default Users;
