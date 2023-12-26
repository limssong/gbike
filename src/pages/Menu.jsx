import { useState } from "react"

const Menu = () => {
  const [menu, setMenu] = useState('menu');
  const toggleMenu = () => {
    if (menu === true) {
      setMenu(false)
    }
    else {
      setMenu(true);
    }
  }
  
  return (
    <>
      <menu className={menu === true ? 'menu active' : 'menu'} onClick={toggleMenu}>
        <li>Why Open Enterprise</li>
        <li>Features</li>
        <li>Contribute</li>
        <li>Request early access</li>
      </menu>
    </>
  )
}

export default Menu