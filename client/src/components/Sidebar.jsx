import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-20 flex flex-col w-64 h-full pt-16 font-normal lg:flex hidden sm:block"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col flex-1 h-full pt-0 bg-gray-800 border-gray-700">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="pb-2 space-y-2">
                <li>
                  <a
                    href='/dashboard/main'
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <MdOutlineDashboard size={25}/>
                    <span className="ml-3 sidebar-toggle-item">Dashboard</span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/dashboard/profile"
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <CgProfile size={25}/>
                    <span className="ml-3 sidebar-toggle-item">
                        Profile
                    </span>
                    <svg
                      className="flex-shrink-0 w-4 h-4 ml-auto text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/messages"
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    aria-controls="dropdown-layouts"
                    data-collapse-toggle="dropdown-layouts"
                  >
                    <MdMessage size={25}/>
                    <span className="ml-3 sidebar-toggle-item">
                      Messages
                    </span>
                    <svg
                      className="flex-shrink-0 w-4 h-4 ml-auto text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/notification"
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    aria-controls="dropdown-layouts"
                    data-collapse-toggle="dropdown-layouts"
                  >
                    <IoIosNotifications  size={25}/>
                    <span className="ml-3 sidebar-toggle-item">
                      Notifications
                    </span>
                    <svg
                      className="flex-shrink-0 w-4 h-4 ml-auto text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/settings"
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    aria-controls="dropdown-layouts"
                    data-collapse-toggle="dropdown-layouts"
                  >
                    <CiSettings size={25}/>
                    <span className="ml-3 sidebar-toggle-item">
                      Settings
                    </span>
                    <svg
                      className="flex-shrink-0 w-4 h-4 ml-auto text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </li>
                  </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
