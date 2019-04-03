import React from 'react';


const Item =(props)=> {
    console.log(props)
    const {data} = props
return (
        <div>
            title : {data.title}
        </div>
    );
}

export default Item;