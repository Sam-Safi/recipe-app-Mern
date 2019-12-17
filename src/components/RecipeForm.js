import React from "react";

export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      ingredients: [""],
      calories: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);

    const recipe = {
      title: this.state.title,
      ingredients: [this.state.ingredients],
      calories: this.state.calories
    };
    this.uploadNewRecipe(recipe);
  }

  async uploadNewRecipe(recipe) {
    const url = "http://localhost:4000/new";

    const response = await fetch(url, {
      method: "POST",
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
                value={this.state.ingredients}
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
