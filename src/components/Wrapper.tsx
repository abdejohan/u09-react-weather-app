import React from 'react';

const Wrapper = (props: { children: React.ReactNode; }) => {
  
  return (
  
    <div className="wrapper">

      { props.children }

    </div>
  )
}

export default Wrapper;