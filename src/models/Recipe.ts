class Recipe {
  title: string;

  ingredients: Array<string>;

  link: string;

  gif: string;

  constructor({ title, ingredients, link, gif }: Recipe) {
    this.title = title;
    this.ingredients = ingredients;
    this.link = link;
    this.gif = gif;
  }
}

export default Recipe;
