import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className='home'>
        <h1>Welcome to MyLexi!</h1>
        <h5>MyLexi is a social app where users can grow their and practice their vocabulary.</h5>
      </div>
    )
  }
}

export default Home;
