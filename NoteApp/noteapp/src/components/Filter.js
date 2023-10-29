import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Filter = () => {
  const context = useContext(NoteContext);
  const { notes } = context;

  // Create an array to store unique tag and Color combinations
  const uniqueTagColorCombinations = [];

  if (Array.isArray(notes)) {
    notes.forEach((note) => {
      // Check if the tag and Color combination is not in the uniqueTagColorCombinations array
      const isUnique = uniqueTagColorCombinations.every(
        (combo) => combo.tag !== note.tag || combo.Color !== note.Color
      );

      if (isUnique) {
        uniqueTagColorCombinations.push({
          tag: note.tag,
          Color: note.Color,
        });
      }
    });
  }

  return (
    <div className="flex align-middle justify-center">
      <div className="w-fit flex p-2 gap-2 overflow-y-hidden overflow-x-auto">
        {uniqueTagColorCombinations.length > 0 ? (
          uniqueTagColorCombinations.map((combo, index) => {
            return (
              <div
                key={index}
                className={` ${combo.Color} text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-gray-900`}
              >
                {combo.tag}
              </div>
            );
          })
        ) : (
          <p>No unique tag and Color combinations available.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
