import React from 'react'
import { useLocation } from 'react-router-dom';

const AnimatedRoutes = ({children}) => {
  const location = useLocation();
  // Keying on the path remounts the div, replaying the CSS animation on each navigation
  return (
    <div key={location.pathname} className="page-in">
        {children}
    </div>
  )
}

export default AnimatedRoutes
