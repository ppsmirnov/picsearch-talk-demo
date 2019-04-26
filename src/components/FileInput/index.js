import React, {Component} from 'react';

class FileInput extends Component {
    render() {
        return (
            <input
                type="file"
                name="file"
                accept="image/*"
                ref={node => { this.input = node; }}
                onChange={this.props.onChange}
            />
        )
    }
}

export default FileInput
