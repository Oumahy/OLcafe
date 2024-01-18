const Special = ()=>{
    return <div className="special section container" id="special">
    <div className="special__container">
      <div className="special__box">
        <h2 className="section__title">
          O&L, Eat in Style, Sip with Grace<br />
          A Café for Every Taste!
        </h2>
      </div>

      <div className="special__category">
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/coffee-beans.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Culinary Delights</h3>
          <p className="special__description">
            Every Bite is a Symphony, Every Dish a Masterpiece.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/hot-drink.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title">Hot Elixirs</h3>
          <p className="special__description">
            Crafting Warm Moments, One Sip at a Time.
          </p>
        </div>
        <div className="special__group">
          <div className="special__img__border">
            <img
              src="./media/coffee-cup.png"
              alt=""
              className="special__img"
            />
          </div>
          <h3 className="special__title"> Iced Infusions</h3>
          <p className="special__description">
            Cool Sips, Bold Flavors, Your Refreshing Journey Begins.
          </p>
        </div>
      </div>
    </div>
  </div>
}


export default Special