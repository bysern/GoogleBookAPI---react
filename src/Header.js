import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faBook)

const Header = () => {
    return(
        <header>
            <FontAwesomeIcon icon="book" size="2x" color="white"/>
            <h1>Book Worm</h1>
        </header>
    )
}

export default Header;