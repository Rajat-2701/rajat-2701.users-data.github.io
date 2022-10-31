import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import "./components/Card/Card.css";
import SearchUsers from "./components/Search-box/SearchUsers";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredUsers = monsters?.filter((monster) =>
      monster?.name.toLowerCase().includes(searchField?.toLowerCase())
    );
    console.log("filter", filteredUsers);
    return (
      <div className="App">
        <SearchUsers placeholder="Search User" handleChange={(e) => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredUsers} />
      </div>
    );
  }
}
