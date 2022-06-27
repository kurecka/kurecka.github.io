import * as React from "react"
import { Link } from "gatsby"

function Journal(props) {
    return (
        <span className="font-extralight">, {props.journal} {props.volume} <span className="">({props.year})</span> {props.pages?props.pages.from + "-" + props.pages.to : ''}</span>
    )
}

function Medium(props) {
    if (props.type === 'journal') return <Journal {...props}/>
}

function authors(a) {
    return a.map(
        name => {
            const parts = name.split(',');
            parts.reverse();
            return parts.join(" ");
        }
    ).join(", ");
}

export default class Cite extends React.Component {
    render() {
        return (
            <div className="py-1">
                <span className="font-extralight">{authors(this.props.author)}</span>:&nbsp;
                {
                    this.props.doi
                    ? (<Link className="text-link" to={`https://doi.org/${this.props.doi}`}><span className="italic">{this.props.title}</span></Link>)
                    : (<span className="italic">{this.props.title}</span>)
                }
                
                <Medium {...this.props.medium}/>
            </div>
        )
    }
}