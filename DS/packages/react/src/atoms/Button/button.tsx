import React from 'react'

interface Props
{
    label: string;
}

export const Button: React.FC<Props> = ({label}) =>
{
    return (
        <button>{ label}</button>
    )
}