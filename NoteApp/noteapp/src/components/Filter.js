import React from "react";

const Filter = () => {
  return (
    <div className="flex align-middle justify-center p-2 gap-2 pl-52 overflow-x-auto sm:pl-0">
      <div className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-300 dark:text-gray-900">
        General
      </div>
      <div className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-300 dark:text-gray-900">
        Gray
      </div>
      <div className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-300 dark:text-gray-900">
        Orange
      </div>
      <div className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-gray-900">
        Green
      </div>
      <div className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-300 dark:text-gray-900">
        Yellow
      </div>
      <div className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-neutral-100 dark:text-gray-900">
        Neutral
      </div>
      <div className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-300 dark:text-gray-900">
        Purple
      </div>
      <div className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-300 dark:text-gray-900">
        Pink
      </div>
    </div>
  );
};

export default Filter;
