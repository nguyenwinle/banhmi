import React from 'react';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
import { useHistory } from 'react-router-dom'
import Product from '../Product'
import Hero from '../Hero'
import Menu from '../Menu'
import CheckoutProduct from '../CheckoutProduct'

const Order = () => {
    const [{ basket }, dispatch] = useStateValue();

    const history = useHistory()

    return (
        <div className="order">
            <Hero />
            <Menu />
            <div className="order__container">
                <div className="order__row">
                    <Product
                        id="8781"
                        itemNumber="1"
                        title="Breaking Bread Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.55}
                    />
                    <Product
                        id="277887"
                        title="Pork Sandwich"
                        itemNumber="2"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                    <Product
                        id="38099"
                        itemNumber="3"
                        title="Spicy Pork Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                    <Product
                        id="478"
                        itemNumber="4"
                        title="Beef Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                    <Product
                        id="5980"
                        itemNumber="5"
                        title="Terriyaki Chicken Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                    <Product
                        id="8767"
                        itemNumber="6"
                        title="Bangin Special Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={7.00}
                    />
                </div>
            </div>
            <div className="order__checkout">
                {basket.length === 0 && <p>Your basket is empty. Add items to get started.</p>}
                {
                    basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                        />
                    ))
                }
                <CurrencyFormat
                    //optional chaining
                    renderText={(value) => (<p>Subtotal ({basket ?.length} {basket ?.length > 1 ? 'items' : 'item'}): <strong>{value}</strong></p>)}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                >
                </CurrencyFormat>
                <button onClick={e => { basket.length > 0 ? history.push("/checkout") : e.preventDefault() }}>{basket.length > 0 ? 'Review Items' : 'Basket is Empty'}</button>
            </div>
        </div>
    );
};

export default Order;