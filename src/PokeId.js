import React, { Component } from 'react'


class PokeId extends Component {
  state = {
    pokemon: {
      name: '',
      height: '',
      weight: '',
    }
  }
  
  constructor(props) {
    super(props)
    this.fetchUserData(props)
  }

  fetchUserData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.match.params.pid}/`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { pokemon } = this.state
    //console.log(user.abilities)
    return (
      <div className="poke-user">
        <h2>Name: {pokemon.name}</h2>
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
        
      </div>
    )
  }
}

export default PokeId