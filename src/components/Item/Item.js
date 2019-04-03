import React from 'react';


const Item =(props)=> {
    console.log(props)
    const {data} = props
return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.address}</p>
        </div>
    );
}

export default Item;