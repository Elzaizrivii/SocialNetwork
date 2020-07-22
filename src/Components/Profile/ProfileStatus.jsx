import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    editModeActive() {
        this.setState({
            editMode: true
        });
        this.state.editMode = true;
    };
    editModeDeActive() {
        this.setState({
            editMode: false
        });
        this.state.editMode = true;
    };

    render() {
        return (
            <div>
                <div onDoubleClick={this.editModeActive.bind(this)}>
                    {!this.state.editMode &&
                    <div>
                        {this.props.status}
                    </div>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input autoFocus={true} onBlur={this.editModeDeActive.bind(this)} placeholder='Привет мир'>
                    </input>}
                </div>
            </div>
        );
    }

}

export default ProfileStatus