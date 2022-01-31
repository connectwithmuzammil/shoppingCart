import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Cartitem } from './Cartitem';
import { CartContext } from './Cart'

export const ContextCart = () => {

    const { item, clearCart,totalItem,totalAmount } = useContext(CartContext);

    if (item.length === 0) {
        return (
            <>
                <header>
                    <div className='continue-shopping'>
                        <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                        <h3>Continue shopping</h3>
                    </div>
                    <div className='cart-icon'>
                        <img src='./images/cart.png' />
                        <p>0</p>
                    </div>

                </header>
                <section className="main-cart-section">
                    <h1>shopping Cart</h1>
                    <p className="total-items">
                        you have <span className="total-items-count">0 </span>
                        items in shopping cart
                    </p>

                </section>
            </>
        );
    }

    return (
        <>

            <header>
                <div className='continue-shopping'>
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Continue shopping</h3>
                </div>
                <div className='cart-icon'>
                    <img src='./images/cart.png' />
                    <p>{totalItem}</p>
                </div>

            </header>
            <section className="main-cart-section">

                <h1>Shopping Cart</h1>
                <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>

                <div className='cart-items'>
                    <div className='cart-items-container'>
                        <Scrollbars>

                            {
                                item.map((e) => {
                                    return <Cartitem key={e.id} {...e} />
                                })
                            }

                        </Scrollbars>
                    </div>
                </div>

                <div className='card-total'>
                    <h3>
                        Cart Total : <span>{totalAmount}</span>
                    </h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>

            </section>

        </>
    );
};
