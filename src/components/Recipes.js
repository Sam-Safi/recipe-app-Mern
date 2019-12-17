import React from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";

export class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      msg: "Loading!"
    };
  }

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes() {
    fetch("http://localhost:4000/find")
      .then(data => data.json())
      .then(data => {
        this.setState({
          recipes: data
        });
      })
      .catch(e => {
        this.setState({ msg: "Error loading recipes" });
        console.log(e);
      });
  }

  handleDelete = async id => {
    const url = `http://localhost:4000/delete/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      mode: "cors"
    });
    console.log(response);

    this.loadRecipes();
  };

  render() {
    return (
      <React.Fragment>
        <h1>recipe</h1>
        <ListGroup>
          {this.state.recipes.map(recipe => {
            return (
              <ListGroup.Item key={recipe._id}>
                {recipe.title} - <Link to={`/edit/${recipe._id}`}> Edit</Link>
                <Button
                  variant="danger"
                  onClick={() => this.handleDelete(recipe._id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </React.Fragment>
    );
  }

  handleDeleteRecipe = async id => {
    const url = `http://localhost:4000/delete/${id}`;

    const result = await fetch(url, {
      method: "DELETE",
      mode: "cors"
    })
      .then(res => res.json())
      .catch(e => console.log(e));

    console.log(result);

    this.loadPosts();
  };
}

export default Recipes;
