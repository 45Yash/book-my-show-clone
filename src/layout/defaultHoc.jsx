import React from 'react';
import NavbarComponent from '../components/Navbar/NavbarComponent';

const DefaultHoc = (Component) =>
  ({...props}) =>  
  {
  return (
    <div>
      <NavbarComponent />
      <Component {...props} />
      
    </div>

  )
}

export default DefaultHoc;