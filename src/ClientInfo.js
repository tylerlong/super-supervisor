import React from 'react'

class ClientInfo extends React.Component {
  render () {
    return (
      <div>
      Server: <select><option>Sandbox</option><option>Production</option></select>
      Client ID: <input />
      Client Secret: <input type='password' />
      </div>
    )
  }
}

export default ClientInfo
