export default function TopBar() {
  return (
    <>
      <div className="bg-white flex gap-2 justify-end h-16 w-full items-center mb-5 fixed z-40 px-10">
        <button className="text-gray-500 hover:bg-gray-50 h-9 w-9 flex items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>

        <button className="bg-gray-100 p-2 text-black flex items-center justify-center rounded-full">
          <span>DM</span>
        </button>
      </div>
    </>
  );
}
