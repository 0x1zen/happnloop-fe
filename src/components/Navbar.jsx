import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice.js";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
  };
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl mx-5">
          happnloop<p className="text-secondary">.</p>
        </a>
      </div>
      <div className="flex items-center gap-2 mx-7">
        {/* Show name (outside the dropdown container) */}
        <span className="text-lg font-bold text-base-content hidden sm:block">
          {user?.userData?.name}
        </span>

        {/* Avatar + dropdown */}
        {user?.userData?.photoUrl && <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Profile"
                src={user?.userData?.photoUrl}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
