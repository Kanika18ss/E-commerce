
import React from 'react'
import './DescriptionBox.css'

const DescriptionBox=()=>{
    return(
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>An e-commerce website is an online platform designed to facilitate the buying and selling of goods and services.
                    It typically includes features such as product listings, shopping carts, secure payment processing, and order management.
                    E-commerce websites serve as a digital storefront where businesses can showcase their products to a global audience, and consumers can browse, select,
                    and purchase items from the comfort of their homes.
                </p>
                <p>
                E-commerce websites offer an extensive range of features, including product categorization, detailed descriptions, reviews, and ratings. They also implement 
                secure payment gateways, sophisticated shopping carts, and order tracking systems to ensure smooth transactions and reliable delivery. Behind the scenes, these 
                websites rely on powerful databases to manage inventory and customer data.
                </p>
            </div>
        </div>
    ) 
}

export default DescriptionBox;