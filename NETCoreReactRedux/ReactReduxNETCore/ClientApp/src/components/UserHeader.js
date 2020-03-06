import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component{

    // This event will use in case of Funciton MEmonization for every post's user detail
    // componentDidMount(){
    //     this.props.fetchUser(this.props.userId);
    // }


    render(){
        const {user} = this.props;
        if(!user)
        return <div>Loading...</div>
    return (<div className="header">{user.name}</div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
};

export default connect(mapStateToProps)(UserHeader);