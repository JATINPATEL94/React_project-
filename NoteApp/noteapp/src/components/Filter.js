import React from "react";

const Filter = () => {
  return (
    <div className="flex align-middle justify-center">
      <div className="w-fit flex p-2  gap-2  overflow-y-hidden overflow-x-auto">
        <div className="bg-blue-300 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-300 dark:text-gray-900">
          General
        </div>
        <div className="bg-gray-300 min-w-fit text-gray-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-300 dark:text-gray-900">
          Important
        </div>
        <div className="bg-orange-300 min-w-fit text-gray-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-300 dark:text-gray-900">
          Personal
        </div>
        <div className="bg-green-300 min-w-fit text-gray-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-300 dark:text-gray-900">
          Work
        </div>
        <div className="bg-yellow-300 min-w-fit flex  text-gray-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-300 dark:text-gray-900">
          To-Do
        </div>
        <div className="bg-neutral-100 min-w-fit text-gray-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-neutral-100 dark:text-gray-900">
          Finance
        </div>
        <div className="bg-purple-300 min-w-fit text-gray-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-300 dark:text-gray-900">
          Goals
        </div>
        <div className="bg-pink-300 min-w-fit text-gray-900 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-300 dark:text-gray-900">
          Fitness
        </div>
      </div>
    </div>
  );
};

export default Filter;
