import { useState } from 'react';
import ScanItem from '../ScanItem';

const useResults = () => {
  const [filter, setFilter] = useState('null');
  const [sortBy, setSortBy] = useState('null');

  // Function to filter results based on the selected filter
  const filterResults = (data, selectedFilter) => {
    if (selectedFilter === 'null') return data;
    return data.filter((scanInfo) => scanInfo.type === selectedFilter); // Replace 'type' with the actual property to filter by
  };

  // Function to sort results based on the selected sorting option
  const sortResults = (data, selectedSortBy) => {
    if (selectedSortBy === 'null') return data;
    return data.slice().sort((a, b) => {
      if (selectedSortBy === 'time') {
        const result = new Date(a.time) - new Date(b.time);
        return result; 
      } else if (selectedSortBy === 'number') {
        return b.number - a.number; 
      }
      return 0;
    });
  };

  // Function to render results
  const renderResults = (data) => {
    return data.map((scanInfo, index) => {
      return <ScanItem key={index} scanInfo={scanInfo} />;
    });
  };

  return {
    filter,
    setFilter,
    sortBy,
    setSortBy,
    filterResults,
    sortResults,
    renderResults,
  };
};


export default useResults;
