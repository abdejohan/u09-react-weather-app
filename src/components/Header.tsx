import React from 'react';

const Header = () => {

  function removeWarning() {
    const gg = document.getElementsByClassName('header__top')[0] as HTMLElement;
    return gg.style.display = 'none';
    
  }

 

  return (

    <header className="header">
        <div className="header__top">
          <h5 className="header__warning">Obs! Site might use Geo Location to determine your position.</h5>
          <button className="header__X" onClick={removeWarning} >x</button>
        </div>
        <div className="header__image-container">
          <div className="header__background darken"></div>
          <article className="header__text">
            <h6>Welcome to</h6>
            <h3>YOUR DAILY FORECAST PROVIDER</h3>
          </article>
        </div>
    </header>


  )

}

export default Header;