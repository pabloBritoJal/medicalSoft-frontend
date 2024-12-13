import { useState } from "react";
import { Link } from "react-router-dom";
import ClickOutside from "../ClickOutside";
import { ArrowDownIcon, LogoutIcon, ProfileIcon } from "../Svgs/sgvComponents";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { startLogout } from "../../store/auth/thunks";
import { FaUserDoctor } from "react-icons/fa6";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { displayName, photoURL } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await dispatch(startLogout());
  };

  console.log(photoURL);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {displayName}
          </span>
          <span className="block text-xs">Urologo</span>
        </span>
        <span className="h-12 w-12 rounded-full flex justify-center items-center">
          {photoURL === null ? (
            <FaUserDoctor />
          ) : (
            <img src={photoURL} alt="User" />
          )}
        </span>
        <ArrowDownIcon />
      </Link>

      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <ProfileIcon />
                My Profile
              </Link>
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            <LogoutIcon />
            Log Out
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
