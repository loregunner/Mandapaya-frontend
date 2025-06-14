/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

const useAnimation = (initialMode: boolean) => {   
    const [AnimationOpen, setAnimationOpen] = useState<any>(initialMode)   
    const toggle = () => setAnimationOpen(!AnimationOpen)   
    return [AnimationOpen, setAnimationOpen, toggle] 
}

export default useAnimation       