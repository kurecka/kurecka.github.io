import * as React from "react"

export default function Event(props) {
    return (
        <div className="pt-small block">
        <ul className="block relative">
            <div className="font-extralight absolute right-0 hidden sm:block">{props.date}</div>
            <li className="font-normal block"><span className="font-extralight sm:hidden">{props.date}: </span>{props.title}</li>
            <li className="-mt-1 mb-1 font-extralight">{props.subtext}</li>
            {props.body ? <li className="font-extralight">{props.body}</li> : undefined}
        </ul>
        </div>
    )
}