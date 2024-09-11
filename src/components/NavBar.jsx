import React from 'react';
import { SearchOutlined, FilterOutlined, ExportOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="w-full bg-white p-4 shadow-md flex items-center gap-8 rounded-md navbar">
      {/* Search Section */}
      <div className="w-full flex items-center ">
        <div className="searchbar">
          <input
            type="text"
            className="w-[20vw] input-box p-3 pl-10 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search"
          />
          <SearchOutlined className="absolute left-3 top-3 text-gray-500 search-icon" />
        </div>
      </div>

      {/* Filter and Export Section */}
      <div className="w-1/4 flex justify-end space-x-4">
        {/* Filter Button */}
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
          <FilterOutlined className="text-gray-600" />
          <span className="text-gray-600">Filter</span>
        </button>

        {/* Export Button */}
        <button className="flex items-center space-x-2 px-4 py-2 bg-teal-100 text-teal-600 border border-teal-300 rounded-md hover:bg-teal-200">
          <ExportOutlined />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
