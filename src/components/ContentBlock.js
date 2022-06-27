import * as React from "react"
import Event from './Event'
import Cite from './Cite'

export default class ContentBlock extends React.Component {
    ContentBlock(props) {
        this.super(props)
    }

    render() {
        if (this.props.type === 'header') {
            return <h2 className='font-thin pt-10'>{this.props.title}</h2>
        }

        let body;
        if (this.props.type === 'events') {
            body = this.props.data.map(
                e => <Event {...e}/>
            );
        }
        if (this.props.type === 'citations') {
            body = (
                <ul className="list-disc">
                    {this.props.data.map(
                        c => <li><Cite {...c}/></li>
                    )}
                </ul>
            )
        }
        if (this.props.type === 'text') {
            body = this.props.data;
        }

        return (
            <div className={'py-med x-10'}>
                <h3 className="cap font-thin">{this.props.title}</h3>
                {body}
            </div>
        )
    }
}