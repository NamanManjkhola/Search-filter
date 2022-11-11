import './App.css';
import PropertyItems from './components/PropertyItems';
import data from './MOCKDATA.js';
import SearchFilter from './components/SearchFilter';
import { useState } from 'react';
import dayjs from 'dayjs';
import Navbar from './components/Navbar';

var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)


function App() {
  const[allData,setData] = useState(data);

  const generateLocationDataForDropdown = () => {
    return [...new Set(data.map((item) => item.location))];
  };

  const generateBathroomDataForDropdown = () => {
    return [...new Set(data.map((item) => item.bathroom))];
  };


  const handleFilterName = (name) => {
    const filteredData = data.filter(item => {
      if(item.name.toLowerCase().includes(name.toLowerCase())){
        return item;
      }
    });

    setData(filteredData);
  }

  const handleFilterLocation = (location) => {
    const filteredData = data.filter(item => {
      if(item.location === location){
        return item;
      }
    });

    setData(filteredData);
  }

  const handleFilterPrice = (price) => {
    const filteredData = data.filter(item => {
      const range = price.split("-");
      if(item.price>=range[0] && item.price<range[1]){
        return item;
      }
    });

    setData(filteredData);
  }

  const handleFilterDate = (date) => {
    const filteredData = data.filter(item => {
      if(dayjs(item.date).isSameOrBefore(dayjs(date))){
        return item;
      }
    });

    setData(filteredData);
  }

  const handleFilterBathroom = (bath) => {
    const filteredData = data.filter(item => {
      if(item.bathroom == bath){
        return item;
      }
    });

    setData(filteredData);
  }



  // const generateBedDataForDropdown = () => {
  //   return [...new Set(data.map((item) => item.bed))];
  // };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className='row'>
        <div className='col-sm-3'>
          <SearchFilter 
            location={generateLocationDataForDropdown()} 
            bathroom={generateBathroomDataForDropdown()}
            onNameFilter={handleFilterName}
            onLocationFilter={handleFilterLocation}
            onBathroomFilter={handleFilterBathroom}
            onDateFilter={handleFilterDate}
            onPriceFilter={handleFilterPrice}
          />
        </div>
      </div>
      <div className='col-sm-9'>
        <div className='row mt-5'>
          {
            allData.map((item) => {
              return (
                <PropertyItems item={item} key={item.id} />
              );  
            })
          }
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
