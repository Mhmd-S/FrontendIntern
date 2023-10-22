import React from 'react'
import { useState } from 'react'

const useNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return {
        menuOpen,
        toggleMenu
    }
}

export default useNavbar