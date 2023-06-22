import React, { useState } from 'react';

function MenuDriwer() {
    const [menuOpen, setMenuOpen] = useState(false);

    function OpenM() {
        setMenuOpen(menuOpen === false);
    }
    
    return(
        <div>
            <img onClick={OpenM} src="https://static.thenounproject.com/png/256131-200.png" alt="" className='icon' />

            {menuOpen &&  (
        <div className="drawer">
          <ul>
            <li>Setings
            <ul>
                <li>Driwer Menu ^ 
                <ul>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
              </ul>
                </li>
                <li>Menu Item </li>
                <li>Menu Item </li>
                <li>Menu Item </li>
              </ul>
            </li>
            <li>Notifiaction
            <ul>
                <li>Driwer Menu ^
                <ul>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
              </ul>
                </li>
                <li>Submenu Item 1 ^
                <ul>
                <li>Open Menu</li>
                <li>Open Menu</li>
                <li>Open Menu</li>
                <li>Open Menu</li>
                <li>Driwer Menu</li>
                
              </ul>
                </li>
                <li>Submenu Item 2</li>
                <li>Submenu Item 3 ^
                <ul>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
              </ul>
                </li>
                <li>Submenu Item 4</li>
                <li>Submenu Item 5</li>
              </ul>
            
            </li>
            <li>
              Started
              <ul>
                <li>Submenu Item 1</li>
                <li>Submenu Item 2</li>
                <li>Submenu Item 3 ^
                <ul>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
                <li>Driwer Menu</li>
              </ul>
                </li>
              </ul>
            </li>
            <li>Bin</li>
          </ul>
        </div>
      )}

        </div>
    )


}
export default MenuDriwer
