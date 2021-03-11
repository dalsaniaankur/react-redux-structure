import React from 'react'
import { useSelector } from "react-redux";

export default function Header(props) {
    //const catrData = useSelector((state) => state.manageCartData.catrData);
    return (
        <div>
            Count: {props.data.catrData.length}
            <div>
                {props.data.catrData.map((item, index) => (
                    <div key={index}>{item.name} --- ${item.price} --- <button onClick={ () => props.removeToCartHandler(index) }>Remove</button></div>
                ))}
            </div>
        </div>
    )
}