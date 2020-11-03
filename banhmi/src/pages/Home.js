import React from 'react';
import Product from '../Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://i.pinimg.com/originals/30/f6/61/30f66165e45624f4efdfc239bb847643.jpg"
                />
                <div className="home__row">
                    <Product
                        id="8781"
                        title="Breaking Bad Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.55}
                    />
                    <Product
                        id="277887"
                        title="Pork Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="38099"
                        title="Spicy Pork Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                    <Product
                        id="478"
                        title="Beef Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                    <Product
                        id="5980"
                        title="Terriyaki Chicken Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={6.00}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="8767"
                        title="Bangin Special Sandwich"
                        description="fsfsd  fdfs  sfds fds fs f s fsd f sdfsdfsds fs"
                        image="https://grannys.ca/wp-content//uploads/2017/09/BahnMiSandwich.jpg"
                        price={7.00}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;