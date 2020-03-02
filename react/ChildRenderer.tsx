import * as React from 'react'

interface Props {
    children: any
}

const ChildrenRenderer: React.FC<Props> = ({ children }) => children

export default ChildrenRenderer