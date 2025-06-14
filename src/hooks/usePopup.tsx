/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

const usePopup = (initialMode: boolean) => {   
    const [PopupOpen, setPopupOpen] = useState<any>(initialMode)   
    const toggle = () => setPopupOpen(!PopupOpen)   
    return [PopupOpen, setPopupOpen, toggle] 
}

export default usePopup