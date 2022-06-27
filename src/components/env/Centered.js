import * as React from "react"

export default function Centered({children}) {
    return (
        <div className="mx-auto px-10 max-w-screen-md">
        {children}
        </div>
    )
}