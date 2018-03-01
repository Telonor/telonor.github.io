import React from "react";

class Hostname extends React.Component {
    render() {
        return (
            <div>
                {this.props.nickname}@localhost:~{this.props.additional ? '$ ' + this.props.additional  : ''}
            </div>
        )
    }
}

export {Hostname};