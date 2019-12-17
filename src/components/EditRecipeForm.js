import React from "react";

export class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      ingredients: [],
      calories: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const record = await fetch(
      `http://localhost:4000/find/${this.props.match.params.id}`
    );
    const recipe = await record.json();
    this.setState({
      title: recipe.title,
      ingredients: recipe.ingredients,
      calories: recipe.calories
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "ingredients") {
      this.setState({ [name]: [value] });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);

    const recipe = {
      title: this.state.title,
      ingredients: [this.state.ingredients[0]],
      calories: this.state.calories
    };
    this.EditRecipe(recipe);
  }

  async EditRecipe(recipe) {
    const url = `http://localhost:4000/update/${this.props.match.params.id}`;

    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe)
    })
      .then(res => res.json())
      .catch(e => console.log(e));

    console.log(response);

    if (response) this.props.history.push("/");
  }

  render() {
    return (
      <div className={"container"}>
        <form onSubmit={this.handleSubmit}>
          <div className={"form-group"}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={this.state.title}
                className={"form-control"}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={"form-group"}>
            <label>
              Ingredients:
              <input
                className={"form-control"}
                value={this.state.ingredients[0]}
                name="ingredients"
                onChange={this.handleChange}
                cols="100"
                rows="10"
              />
            </label>
          </div>
          <div className={"form-group"}>
            <label>
              Calories:
              <input
                type="text"
                name="calories"
                value={this.state.calories}
                className={"form-control"}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={"form-group"}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
