import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="flex justify-center w-full mb-16">
      <div className="flex border-b border-gray-200 w-[90%] lg:max-w-4xl py-5 justify-between">
        <div>
          <Link to="/">Todo App</Link>
        </div>
        <ul className="flex">
          {user ? (
            <li>
              <button
                onClick={onLogout}
                className=" py-[10px] px-[20px] border border-black rounded-md bg-black text-white font-bold text-center flex items-center justify-center"
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="flex items-center">
                  <FaSignInAlt className="mr-1" /> Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="flex items-center ml-4">
                  <FaUser className="mr-1" /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
export default Header;
