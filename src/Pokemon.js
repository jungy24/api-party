import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './Pokemon.css'
import PokeId from './PokeId'

class Pokemon extends Component {

  state = {
    pid: ''
  }

  handleChange = (ev) => {
    const pid = ev.currentTarget.value
    this.setState({ pid })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pid}`)
  }

  render() {
    return (
      <div className="pokemon">
        <img className="pokemon-logo" src="https://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" alt="pokemon"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              value={this.state.pid}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Pokémon by ID</button>
          </div>
        </form>

        <Route exact path='/pokemon' render={() => (
          <h3 className='catch'>Gotta catch 'em all! Pokémon!</h3> 
        )} />
        <Route path='/pokemon/:pid' component={PokeId} />
      </div>
    )
  }  

}

export default Pokemon

