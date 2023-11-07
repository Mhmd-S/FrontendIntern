import React from 'react';
import useResults from './hooks/useResults';
import {dummyData} from './dummydata';

const Results = () => {
  const { renderResults } = useResults();
  const { filter, setFilter, sortBy, setSortBy, filterResults, sortResults } = useResults();

  // Filter and sort the data based on the selected filter and sorting option
  const filteredAndSortedResults = sortResults(filterResults(dummyData, filter), sortBy);

  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly bg-[#1E293B] rounded-b-xl md:rounded-none md:rounded-r-xl shadow-[inset_5px_5px_15px_10px_#fafafa05]'>
      <div className='w-full flex p-3 justify-between'>
        <h1 className='text-3xl'>Results</h1>
        <div className='w-1/2 flex justify-between'>
          <select
            className='outline-none p-2 text-sm rounded-m text-cent bg-[#1E293B] border-2 border-sky-500'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value='null'>Filter</option>
            <option value='Email Scan'>Email Scans</option>
            <option value='URL Scan'>URL Scans</option>
            <option value='Network Scan'>Network Scans</option>
          </select>
          <select
            className='outline-none p-2 text-sm rounded-m text-cent bg-[#1E293B] border-2 border-sky-500'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value='null'>Sort By</option>
            <option value='time'>Time</option>
            <option value='number'>Test Number</option>
          </select>
        </div>
      </div>
      <div className='w-full h-full overflow-y-auto p-2'>
        {renderResults(filteredAndSortedResults)}
      </div>
    </div>
  );
};

export default Results;
