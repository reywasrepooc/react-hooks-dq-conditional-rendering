import React from "react";

function MenuBar( {onButtonClick, selectedPage}) {
 
const buttonClick = (event) => {
  if (event.target.className === "item") 
  return onButtonClick(event.target.id)
}
  return (
    <div className="ui four item menu">
      <span id="Profile" className= {selectedPage === "Profile" ? "item active" : "item"} onClick={buttonClick}>
        <i className="user large icon" />
      </span>

      <span id="Photos" className={selectedPage === "Photos" ? "item active" : "item" } onClick={buttonClick}>
        <i className="photo large icon" />
      </span>

      <span id="Cocktails" className={selectedPage === "Cocktails" ? "item active" : "item" } onClick={buttonClick}>
        <i className="cocktail large icon" />
      </span>

      <span id="Pokemon" className={selectedPage === "Pokemon" ? "item active" : "item" } onClick={buttonClick}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;


 /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */