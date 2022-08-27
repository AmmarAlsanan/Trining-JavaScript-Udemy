import { Button, Typography } from 'antd'
import React from 'react'

 const Counter:React.FC=()=>{
    const [counter,setCounter]=React.useState<number>(0);
    const {Text}=Typography;
    return (<React.Fragment>
<Text> The counter is {counter}</Text>
<Button onClick={()=>{setCounter(counter)}}>increment counter </Button>

    </React.Fragment>)
}

export default Counter;