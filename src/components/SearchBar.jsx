import React, { useState }  from 'react'
import { Divider, Input } from 'antd';

function SearchBar(props) {
    const { searchFilter } = props;
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
    setSearch(e.target.value);
    
    searchFilter(e.target.value);
    };

  return (
    <>
      <Divider>SearchBar</Divider>

      <label htmlFor="search">SearchBar</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default SearchBar



