import React from 'react';

class GoogleAuth extends React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '746905593209-dglfm84vh6a32rlveut3p1qapj1rktbv.apps.googleusercontent.com',
        scope: 'email'
      })
    })
  }

  render(){
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth
