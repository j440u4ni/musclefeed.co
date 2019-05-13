import React, { Component } from 'react';
import NextHead from 'next/head';

export class GuestHeader extends Component {
    constructor(props) { super(props); }
    render() {
    return(
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{this.props.title || ''}</title>
            <meta name="description" content={this.props.description || ''} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </NextHead>
    );
    }
}