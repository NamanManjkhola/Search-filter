import React,{useState} from 'react'
const SearchFilter = ({location, onNameFilter, bathroom, onLocationFilter, onBathroomFilter, onDateFilter, onPriceFilter}) => {

    const[filters, setFilters] = useState({
        name: '', date: '', price: '', loc: '', bathroom: ''
    });


    const handleInput = (field) => (event) => {
        const{value} =  event.target;   

        setFilters({
            ...filters,
            [field]: value
        });

        switch(field){
            case "name":
                // setName(value);
                onNameFilter(value);
                break;
            case "date":
                // setDate(value); 
                onDateFilter(value);
                break;
            case "price":
                // setPrice(value); 
                onPriceFilter(value);
                break;
            case "loc":
                // setLocation(value);
                onLocationFilter(value); 
                break;
            case "bathroom":
                // setBeds(value); 
                onBathroomFilter(value);
                break;
            default:
                break;
        }
    };

    // console.log(location);
    return (
        <div className="row my-5">
            <div className="col">
                <h4 className="bottom-bottom">Filters</h4>
            </div>
            <div className="col-sm-12 my-2">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="name" 
                    value={filters.name}
                    onChange={handleInput("name")}/> 
            </div>

            <div className="col-sm-12 my-2">
                <label htmlFor="date">When to move in</label>
                <input type="date" className="form-control" id="date" onChange={handleInput("date")}/>
            </div>

            <div className="col-sm-12 my-2">
                <label htmlFor="price">Price</label>
                <select className="form-control" id="price" onChange={handleInput("price")}>
                        <option value="">-Select-</option>
                        <option value="1000-2000">$1000-$2000</option>
                        <option value="2000-3000">$2000-$3000</option>
                        <option value="3000-4000">$3000-$4000</option>
                        <option value="4000-5001">$4000-$5000</option>

                </select>                 
            </div>

            <div className="col-sm-12 my-2">
                <label htmlFor="bathroom">Bathrooms</label>
                <select className="form-control" id="bathroom" onChange={handleInput("bathroom")}>
                        <option value="">-Select-</option>
                        {bathroom.map((bath) => {
                            return (
                                <option value={bath} key={bath}>
                                    {bath}
                                </option>
                            );
                        })}
                </select>                 
            </div>

            <div className="col-sm-12 my-2">
                <label htmlFor="location">Location</label>
                <select className="form-control" id="loc" onChange={handleInput("loc")}>
                        <option value="">-Select-</option>
                        {location.map((loc) => {
                            return (
                                <option value={loc} key={loc}>
                                    {loc}
                                </option>
                            );
                        })}
                </select>                 
            </div>
        </div>
    )
}

export default SearchFilter;