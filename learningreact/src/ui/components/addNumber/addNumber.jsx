import React from 'react'

export const AddNumber=(a ,b)=>{

    const sumNumber =React.useMemo(()=>a+b,[a,b]);
    return (
        <React.Fragment>

            {sumNumber}
        </React.Fragment>
    )
}