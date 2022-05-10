import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import s from './PocemonForm.module.css';

export default class PocemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      alert('Введите имя покемона');
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form className={s.Form} onSubmit={this.handleSubmit}>
        <div className={s.Wrapper}>
          <input
            className={s.Input}
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <button className={s.Btn}>
            <BsSearch />
          </button>
        </div>
      </form>
    );
  }
}
