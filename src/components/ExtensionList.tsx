import React from "react";
import type { Extension } from "../App";

interface ExtensionProps {
  allExtensions: Extension[];
  filter: string;
  setFilter: (value: string) => void;
}

const ExtensionList: React.FC<ExtensionProps> = ({
  allExtensions,
  filter,
  setFilter,
}) => {
  void allExtensions;
  void filter;
  return (
    <div className="flex  flex-col sm:flex-row gap-6 justify-between text-color mx-12 items-center py-3 mb-6">
      <h2 className="text-[30px] sm:text-[23px] font-semibold">Extension List</h2>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            ( setFilter("all"));
          }}
          className="button-element py-1 px-2.5 rounded-[15px] text-[14px]  cursor-pointer"
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("active");
          }}
          className="button1-element p-1 px-3.5 rounded-2xl font-light text-[14px] hover:bg-element2 cursor-pointer"
        >
          Active
        </button>
        <button
          onClick={() => {
            setFilter("inactive");
          }}
          className="button1-element p-1 px-3.5 rounded-2xl font-light text-[14px] hover:bg-element2 cursor-pointer"
        >
          Inactive
        </button>
      </div>
    </div>
  );
};

export default ExtensionList;
