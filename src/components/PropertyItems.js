import * as React from 'react';
const PropertyItems = ({item}) => {
    return (
        <div className='col-sm-4'>
                <div className='card my-2'>
                <img src={item?.image} className='card-img-top' alt='' />
                <div className="card-body">
                    <h5 className="card-title">
                        {item?.name}
                    </h5>
                    <p className="card-text">{item?.price}</p>
                    <p className="card-text">{item?.location}</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyItems;