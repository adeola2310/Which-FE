import React, { FC } from 'react'

export interface TextProps {
    children: string
}
const Text: FC<TextProps> = ({ children }: TextProps) => {
    return (
        <p>{children}</p>
    )
}

export default Text;