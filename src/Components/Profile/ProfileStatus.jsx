import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    editModeActive = () => {
        this.setState({
            editMode: true
        });
        this.state.editMode = true;
    };
    editModeDeActive = () => {
        this.setState({
            editMode: false
        });
        this.state.editMode = true;
        this.props.updateStatus(this.props.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <div onDoubleClick={this.editModeActive}>
                    {!this.state.editMode &&
                    <div>
                        {this.props.status || 'Напишите статус'}
                    </div>}
                </div>
                <div>
                    {this.state.editMode &&
                    <input
                        onChange={this.onStatusChange}
                        value={this.props.status}
                        autoFocus={true}
                        onBlur={this.editModeDeActive} placeholder='Привет мир'>
                    </input>}
                </div>
            </div>
        );
    }

}

export default ProfileStatus