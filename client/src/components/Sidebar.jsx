import { IoMdSearch } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { CiSignpostDuo1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
export const Sidebar = () => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="pb-2 space-y-2">
                <li>
                  <form action="#" method="GET" className="lg:hidden">
                    <label htmlFor="mobile-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <IoMdSearch size={25}/>
                      </div>
                      <input
                        type="text"
                        name="email"
                        id="mobile-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li>
                <li>
                  <a
                    href={'{{ "/" | relURL }}'}
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <MdOutlineDashboard size={25}/>
                    <span className="ml-3 sidebar-toggle-item">Dashboard</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    aria-controls="dropdown-layouts"
                    data-collapse-toggle="dropdown-layouts"
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
                  </button>
                </li>
                <li>
                  <button
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
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    aria-controls="dropdown-layouts"
                    data-collapse-toggle="dropdown-layouts"
                  >
                    <CiSignpostDuo1 size={25}/>
                    <span className="ml-3 sidebar-toggle-item">
                      Posts
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
                  </button>
                </li>
                <li>
                  <button
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
                  </button>
                </li>
                  </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
