import React, {  useState } from 'react'

const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue);
    const toggleHideShow = () => {
        setShow(!show);
    }
    return {show, toggleHideShow}
}

export default useToggle;