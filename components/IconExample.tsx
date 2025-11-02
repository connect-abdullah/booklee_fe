import { FaHeart, FaBook, FaStar, FaGithub } from "react-icons/fa";

export default function IconExample() {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        React Icons Example
      </h2>
      <div className="flex gap-6 text-4xl">
        <FaHeart className="text-red-500 hover:scale-110 transition-transform cursor-pointer" />
        <FaBook className="text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
        <FaStar className="text-yellow-500 hover:scale-110 transition-transform cursor-pointer" />
        <FaGithub className="text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform cursor-pointer" />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Hover over the icons to see them scale!
      </p>
    </div>
  );
}
