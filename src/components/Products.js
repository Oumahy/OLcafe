import { useState } from 'react'
import data from '../json/data.json'
import 'boxicons';


const Products = ()=>{
    const [filter,setFilter] =useState('main-menu');
    return (
    <section className="products section" id="products">
    <div className="products__container container">
      <h2 className="section__title">
         Discover our menu & choose <br />
         your meal.
      </h2>

      <ul className="products__filters">
        <li
          className={`products__item products__line ${filter === 'main-menu' && 'active-product'}`}
          onClick={()=>setFilter('main-menu')}
          data-filter=".delicacies"
        >
          <h3 className="products__title">Main Menu</h3>
          <span className="products__stock">3 products</span>
        </li>
        <li className={`products__item products__line ${filter === 'coffee' && 'active-product'}`} 
        onClick={()=>setFilter('coffee')} data-filter=".coffee">
          <h3 className="products__title">Drinks</h3>
          <span className="products__stock">4 products</span>
        </li>
        <li className={`products__item products__line ${filter === 'desserts' && 'active-product'}`}
          onClick={()=>setFilter('desserts')} data-filter=".cake">
          <h3 className="products__title">Culinary</h3>
          <span className="products__stock">4 products</span>
        </li>
      </ul>

      <div className="products__content grid">
      {data.categories.map((category, index) => (
        category.category === filter && (
             <article className={`products__card ${category.category}`} key={index}>
                <div className="products__shape">
                    <img
                    src={category.imageUrl}
                    alt=""
                    className="products__img"
                    />
                </div>
                <div className="products__data">
                    <h2 className="products__price">${category.price}</h2>
                    <h3 className="products__name">{category.title}</h3>

                    <button className="button products__button">
                    <i className="bx bx-shopping-bag"></i>
                    </button>
                </div>
                </article>
            )
            ))}

        
{/*   Avant d'introduire json :   
  </div>
        </article>
        <article className="products__card main-menu">
          <div className="products__shape">
            <img
              src="./media/main-menu2.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$60</h2>
            <h3 className="products__name">Sunshine Breakfast</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        <article className="products__card main-menu">
          <div className="products__shape">
            <img
              src="./media/main-menu3.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$45</h2>
            <h3 className="products__name">Rise & Dine </h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        <article className="products__card main-menu">
          <div className="products__shape">
            <img
              src="./media/main-menu4.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$40</h2>
            <h3 className="products__name">Morning Bliss</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        
        <article className="products__card coffee">
          <div className="products__shape">
            <img
              src="./media/coffee.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$17</h2>
            <h3 className="products__name">Espresso</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        <article className="products__card coffee">
          <div className="products__shape">
            <img
              src="./media/coffee2.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$12</h2>
            <h3 className="products__name">Dark Chocolate </h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        <article className="products__card coffee">
          <div className="products__shape">
            <img
              src="./media/coffee3.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$20</h2>
            <h3 className="products__name">Caramel Drift Delight</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        
        <article className="products__card dessert">
          <div className="products__shape">
            <img
              src="./media/dessert1.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$26</h2>
            <h3 className="products__name">Heavenly Brownie</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        <article className="products__card dessert">
          <div className="products__shape">
            <img
              src="./media/dessert2.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$25</h2>
            <h3 className="products__name">Dark Muffins</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        <article className="products__card dessert">
          <div className="products__shape">
            <img
              src="./media/dessert3.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$25</h2>
            <h3 className="products__name">Berry Muffins</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
          </div>
        </article>
        <article className="products__card dessert">
          <div className="products__shape">
            <img
              src="./media/dessert4.jpg"
              alt=""
              className="products__img"
            />
          </div>
          <div className="products__data">
            <h2 className="products__price">$30</h2>
            <h3 className="products__name">Donuts</h3>

            <button className="button products__button">
              <i className="bx bx-shopping-bag"></i>
            </button>
 */}

      </div>
    </div>
  </section>)
}


export default Products;
