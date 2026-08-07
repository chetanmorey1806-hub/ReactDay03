import React from 'react'

const TernaryOp = () => {

    const isToggleIn = true;
   
    // if(isToggleIn){
    //    return(
    //      <h1>Welcome User</h1>
    //    ) 
    // }else{
    //     return(
    //         <h1>Please Login</h1>
    //     )
    // }

    return (
       <div>
                { isToggleIn ? ( <h1>Welcome User</h1>   )  : (  <h1>Please Login</h1>   )}
       </div>
    )
}

export default TernaryOp
