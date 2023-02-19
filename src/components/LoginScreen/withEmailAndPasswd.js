import React from 'react'

const withEmailAndPasswd = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props){
      super(props);
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangePassword = this.handleChangePassword.bind(this)
      this.state = {
          email: '',
          password: ''
      }
  }

    handleChangeEmail=(data)=>{
      this.setState({
        email: data
      })
    }
    handleChangePassword(data){
      this.setState({
        password: data
      })
    }

    render(){
        return <WrappedComponent data={this.state} setEmail={this.handleChangeEmail} setPassword={this.handleChangePassword}/>
    }
  }
}

export default withEmailAndPasswd