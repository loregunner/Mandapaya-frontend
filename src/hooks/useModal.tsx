/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

const useModal = (initialMode: boolean) => {   
    const [modalOpen, setModalOpen] = useState<any>(initialMode)   
    const toggle = () => setModalOpen(!modalOpen)   
    return [modalOpen, setModalOpen, toggle] 
}

export default useModal