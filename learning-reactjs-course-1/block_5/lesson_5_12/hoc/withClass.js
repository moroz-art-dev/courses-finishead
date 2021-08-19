import React from "react";

const WithClass = (Component, className) => {
 return props => {
   return (
       <section className={className}>
          <Component {...props} />
       </section>
   )
 }
}

export default WithClass