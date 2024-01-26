import React from "react";
import { CiViewList } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

const Table = ({ headers, data, showActions = true }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-striped">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b dark:border-gray-700`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4">
                  {cell}
                </td>
              ))}
              {showActions && (
                <td className="px-6 py-4 flex" style={{ display: "flex" }}>
                  <div className="mr-2 text-red-500 text-xl">
                    <a href="#">
                      <FaEdit />
                    </a>
                  </div>
                  <div className="text-blue-500 text-xl">
                    <a href="#">
                      <CiViewList />
                    </a>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
