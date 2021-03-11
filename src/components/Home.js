import React from 'react'
import { useDispatch } from "react-redux";

export default function Home(props) {
    return (
        <div>
            <button onClick={ () => props.addToCartHandler({price:1000, name:'i phone 11'}) } >Add To Cart</button>
        </div>
    )
}