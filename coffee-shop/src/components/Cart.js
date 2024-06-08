import React, { useState } from "react";

export default function Cart() {
    return (
        <div>
        {props.shoppingCart && props.shoppingCart.length > 0 ? (
            props.shoppingCart.map(cartItem => (
            <p key={cartItem.id}>{`${cartItem.item}-$${cartItem.price}`}</p>
            ))
        ) : (
            <p>You have no items in the cart</p>
        )}
    </div> 
    )
}