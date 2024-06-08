import React from 'react'

export default function MenuItem({image, altText, price, item, updateShoppingCart, id}) {
    const addToCart = () => {
        console.log('getting here')
        updateShoppingCart(id);
      };

  return (
        <div className="col-4">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start h-100" alt={altText} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">     
                            <h5 className="card-title">{item}</h5>
                            <p className="card-text"><small className="text-body-secondary">{`$${price}`}</small></p>
                            <button onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}