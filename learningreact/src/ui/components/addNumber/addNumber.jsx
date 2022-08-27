import React from 'react'

export const AddNumber=()=>{
    const a = 1;
    const b = a;
    
    const sumNumber = React.useMemo(() => a + b, [a, b]);
    const [aNumber, setANumber] = React.useState()
    React.useEffect(() => {
        if (sumNumber) {
        setANumber(sumNumber)
    }
    }, [sumNumber])

    console.log(aNumber)
    
    return (
        <React.Fragment>
            <image href={ 'https://placekitten.com/200/200'} />
            
            {aNumber}
        </React.Fragment>
    )
}