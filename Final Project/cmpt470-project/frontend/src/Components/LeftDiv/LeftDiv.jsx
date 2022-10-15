import React from 'react';
import './LeftDiv.css';
import SimpleBarReact from "simplebar-react";
import LeftSeachBar from "../LeftSearchBar/LeftSearchBar";
import LeftIngList from "../LeftIngList/LeftIngList";

function LeftDiv() {

    return (
        <div className="left">
            <LeftSeachBar />
            <h1 className="Ing-title">Selected Ingredients</h1>
            <LeftIngList />

            <h1 className="App-title"> Pantry</h1>
            <SimpleBarReact className="left_section">

                <div className="zone">
                    <div className="up">
                        <div className="vegatables"></div>
                        <div>
                            <h4 className="header_name"> Vegetables</h4>
                            <div className="description"> This is vegetable part</div>
                        </div>
                    </div>

                    <div class="section-divider"></div>

                    <div className="down">
                        <a href={'/recipes/search/rfi/Tomato'} className="small_tag small-2 medium-3 large-4 ">Tomato</a>
                        <a href={'/recipes/search/rfi/Onion'} className="small_tag small-2 medium-3 large-4 ">Onion</a>
                        <a href={'/recipes/search/rfi/Potato'} className="small_tag small-2 medium-3 large-4 ">Potato</a>
                        <a href={'/recipes/search/rfi/Broccoli'} className="small_tag small-2 medium-3 large-4 ">Broccoli</a>
                        <a href={'/recipes/search/rfi/Spinach'} className="small_tag small-2 medium-3 large-4 ">Spinach</a>
                        <a href={'/recipes/search/rfi/Corn'} className="small_tag small-2 medium-3 large-4 ">Corn</a>
                        <a href={'/recipes/search/rfi/Mushroom'} className="small_tag small-2 medium-3 large-4 ">Mushroom</a>
                        <a href={'/recipes/search/rfi/Garlic'} className="small_tag small-2 medium-3 large-4 ">Garlic</a>
                    </div>
                </div>

                <div className="zone">
                    <div className="up">
                        <div className="dairy_products"></div>
                        <div>
                            <h4 className="long_header_name"> Dairy Products</h4>
                            <div className="description"> This is Dairy Products part</div>
                        </div>
                    </div>

                    <div class="section-divider"></div>

                    <div className="down">
                        <a href={'/recipes/search/rfi/Milk'} className="small_tag small-2 medium-3 large-4 ">Milk</a>
                        <a href={'/recipes/search/rfi/Yogurt'} className="small_tag small-2 medium-3 large-4">Yogurt</a>
                        <a href={'/recipes/search/rfi/Cheese'} className="small_tag small-2 medium-3 large-4 ">Cheese</a>
                        <a href={'/recipes/search/rfi/Heavy%20Cream'} className="small_tag small-2 medium-3 large-4 ">Heavy Cream</a>
                        <a href={'/recipes/search/rfi/Butter'} className="small_tag small-2 medium-3 large-4 ">Butter</a>
                        <a href={'/recipes/search/rfi/Sour%20Cream'} className="small_tag small-2 medium-3 large-4 ">Sour Cream</a>
                        <a href={'/recipes/search/rfi/Condensed%20Milk'} className="small_tag small-2 medium-3 large-4 ">Condensed Milk</a>
                        <a href={'/recipes/search/rfi/Cream%20Cheese'} className="small_tag small-2 medium-3 large-4 ">Cream Cheese</a>
                    </div>
                </div>

                <div className="zone">
                    <div className="up">
                        <div className="meat"></div>
                        <div>
                            <h4 className="header_name"> Meats</h4>
                            <div className="description"> This is Meats part</div>
                        </div>
                    </div>

                    <div class="section-divider"></div>

                    <div className="down">
                        <a href={'/recipes/search/rfi/Chicken%20Breast'} className="small_tag small-2 medium-3 large-4 ">Chicken Breast</a>
                        <a href={'/recipes/search/rfi/Chicken%20Thigh'} className="small_tag small-2 medium-3 large-4">Chicken Thigh</a>
                        <a href={'/recipes/search/rfi/Ground%20Meat'} className="small_tag small-2 medium-3 large-4 ">Ground Meat</a>
                        <a href={'/recipes/search/rfi/Beef%20Sirloin'} className="small_tag small-2 medium-3 large-4 ">Beef Sirloin</a>
                        <a href={'/recipes/search/rfi/Pork'} className="small_tag small-2 medium-3 large-4 ">Pork</a>
                        <a href={'/recipes/search/rfi/Bacon'} className="small_tag small-2 medium-3 large-4 ">Bacon</a>
                        <a href={'/recipes/search/rfi/Ham'} className="small_tag small-2 medium-3 large-4 ">Ham</a>
                        <a href={'/recipes/search/rfi/Turkey%20Breast'} className="small_tag small-2 medium-3 large-4 ">Turkey Breast</a>
                    </div>
                </div>

                <div className="zone">
                    <div className="up">
                        <div className="Seafood"></div>
                        <div>
                            <h4 className="header_name"> Seafood</h4>
                            <div className="description"> This is Seafood part</div>
                        </div>
                    </div>

                    <div class="section-divider"></div>

                    <div className="down">
                        <a href={'/recipes/search/rfi/Salmon'} className="small_tag small-2 medium-3 large-4 ">Salmon</a>
                        <a href={'/recipes/search/rfi/Shrimp'} className="small_tag small-2 medium-3 large-4">Shrimp</a>
                        <a href={'/recipes/search/rfi/Cod'} className="small_tag small-2 medium-3 large-4 ">Cod</a>
                        <a href={'/recipes/search/rfi/Clam'} className="small_tag small-2 medium-3 large-4 ">Clam</a>
                        <a href={'/recipes/search/rfi/Oyster'} className="small_tag small-2 medium-3 large-4 ">Oyster</a>
                        <a href={'/recipes/search/rfi/Seaweed'} className="small_tag small-2 medium-3 large-4 ">Seaweed</a>
                        <a href={'/recipes/search/rfi/Squid'} className="small_tag small-2 medium-3 large-4 ">Squid</a>
                        <a href={'/recipes/search/rfi/Lobster'} className="small_tag small-2 medium-3 large-4 ">Lobster</a>
                    </div>
                </div>

                <div className="zone">
                    <div className="up">
                        <div className="Spices"></div>
                        <div>
                            <h4 className="long_header_name"> Spices & Seasoning</h4>
                            <div className="description"> This is Spices & Seasoning part</div>
                        </div>
                    </div>

                    <div class="section-divider"></div>

                    <div className="down">
                        <a href={'/recipes/search/rfi/Salt'} className="small_tag small-2 medium-3 large-4 ">Salt</a>
                        <a href={'/recipes/search/rfi/Black%20Pepper'} className="small_tag small-2 medium-3 large-4">Black Pepper</a>
                        <a href={'/recipes/search/rfi/Cumin'} className="small_tag small-2 medium-3 large-4 ">Cumin</a>
                        <a href={'/recipes/search/rfi/Turmeric'} className="small_tag small-2 medium-3 large-4 ">Turmeric</a>
                        <a href={'/recipes/search/rfi/Paprika'} className="small_tag small-2 medium-3 large-4 ">Paprika</a>
                        <a href={'/recipes/search/rfi/Cardamom'} className="small_tag small-2 medium-3 large-4 ">Cardamom</a>
                        <a href={'/recipes/search/rfi/Cinnamon'} className="small_tag small-2 medium-3 large-4 ">Cinnamon</a>
                        <a href={'/recipes/search/rfi/Nutmeg'} className="small_tag small-2 medium-3 large-4 ">Nutmeg</a>
                    </div>
                </div>

                <div className="zone">
                    <div className="up">
                        <div className="drinks"></div>
                        <div>
                            <h4 className="long_header_name"> Wine & Drinks</h4>
                            <div className="description"> This is Wine & Drinks part</div>
                        </div>
                    </div>

                    <div class="section-divider"></div>

                    <div className="down">
                        <a href={'/recipes/search/rfi/Red%20Wine'} className="small_tag small-2 medium-3 large-4 ">Red Wine</a>
                        <a href={'/recipes/search/rfi/Orange%20Juice'} className="small_tag small-2 medium-3 large-4">Orange Juice</a>
                        <a href={'/recipes/search/rfi/White%20Wine'} className="small_tag small-2 medium-3 large-4 ">White Wine</a>
                        <a href={'/recipes/search/rfi/Lemonade'} className="small_tag small-2 medium-3 large-4 ">Lemonade</a>
                        <a href={'/recipes/search/rfi/Beer'} className="small_tag small-2 medium-3 large-4 ">Beer</a>
                        <a href={'/recipes/search/rfi/Coffee'} className="small_tag small-2 medium-3 large-4 ">Coffee</a>
                        <a href={'/recipes/search/rfi/Apple%20Juice'} className="small_tag small-2 medium-3 large-4 ">Apple Juice</a>
                        <a href={'/recipes/search/rfi/Coconut%20Milk'} className="small_tag small-2 medium-3 large-4 ">Coconut Milk</a>
                    </div>
                </div>

            </SimpleBarReact>
        </div>
    )
}

export default LeftDiv;