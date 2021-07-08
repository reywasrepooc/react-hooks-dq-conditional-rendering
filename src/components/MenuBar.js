import React from "react";

function MenuBar( {onButtonClick}) {
 

  return (
    <div className="ui four item menu">
      <span className="item active" onClick={() => onButtonClick("Profile")}>
        <i className="user large icon" />
      </span>

      <span className="item" onClick={() => onButtonClick("Photos")}>
        <i className="photo large icon" />
      </span>

      <span className="item" onClick={() => onButtonClick("Cocktails")}>
        <i className="cocktail large icon" />
      </span>

      <span className="item" onClick={() => onButtonClick("Pokemon")}>
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