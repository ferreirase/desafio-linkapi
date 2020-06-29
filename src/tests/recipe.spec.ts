/* eslint-disable import/no-extraneous-dependencies */
import assert from 'assert';
import * as chai from 'chai';
import 'mocha';
import nock from 'nock';
import GetRecipesService from '../services/GetRecipesService';
import GetOneGifService from '../services/GetOneGifService';
import FormattedRecipeService from '../services/FormatRecipeService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

describe('Recipes Suite Test', () => {
  before(() => {
    const response = {
      title: 'Recipe Puppy',
      version: 0.1,
      href: 'http://www.recipepuppy.com/',
      results: [
        {
          title: '\nBreakfast Sandwich Recipe\n\n',
          href: 'http://cookeatshare.com/recipes/breakfast-sandwich-56800',
          ingredients: 'bread, eggs, monterey jack cheese, tomato',
          thumbnail: 'http://img.recipepuppy.com/893208.jpg',
        },
        {
          title: 'Bacon and Egg Sandwich',
          href: 'http://www.recipezaar.com/Bacon-and-Egg-Sandwich-56191',
          ingredients: 'bacon, eggs, miracle whip, tomato, bread',
          thumbnail: 'http://img.recipepuppy.com/111943.jpg',
        },
        {
          title: 'Breakfast on the Barbie',
          href: 'http://www.recipezaar.com/Breakfast-on-the-Barbie-249485',
          ingredients: 'bacon, bread, eggs, ketchup, tomato',
          thumbnail: 'http://img.recipepuppy.com/190484.jpg',
        },
        {
          title: 'Club Sandwiches-aussie Style',
          href: 'http://www.recipezaar.com/Club-Sandwiches-aussie-Style-100089',
          ingredients: 'bread, cheese spread, eggs, ham, salt, tomato',
          thumbnail: 'http://img.recipepuppy.com/316870.jpg',
        },
        {
          title: 'WWII Spam and Egg Sandwich',
          href:
            'http://allrecipes.com/Recipe/WWII-Spam-and-Egg-Sandwich/Detail.aspx',
          ingredients:
            'american cheese, bread, butter, eggs, spam, onions, tomato',
          thumbnail: 'http://img.recipepuppy.com/11951.jpg',
        },
        {
          title: 'Savoury Egg Tarts',
          href:
            'http://www.bestrecipes.com.au/recipe/Savoury-Egg-Tarts-L923.html',
          ingredients:
            'bread, chilli, eggs, bacon, tomato, cheese, cracked black pepper',
          thumbnail: 'http://img.recipepuppy.com/539739.jpg',
        },
        {
          title: 'Tomato and Cheese Strata',
          href: 'http://recipe.aol.com/recipe/tomato-and-cheese-strata/83345',
          ingredients:
            'bread, tomato, cheddar cheese, green onion, eggs, milk, salt',
          thumbnail: 'http://img.recipepuppy.com/600849.jpg',
        },
        {
          title: 'BLT Fried Egg-And-Cheese Sandwich',
          href:
            'http://www.recipezaar.com/BLT-Fried-Egg-And-Cheese-Sandwich-268059',
          ingredients:
            'bacon, lettuce, eggs, mayonnaise, monterey jack cheese, tomato, butter, bread',
          thumbnail: 'http://img.recipepuppy.com/176759.jpg',
        },
        {
          title: 'Breakfast Club Sandwich',
          href: 'http://www.recipezaar.com/Breakfast-Club-Sandwich-267610',
          ingredients:
            'bacon, lettuce, eggs, mayonnaise, salt, bread, tomato, toothpicks',
          thumbnail: 'http://img.recipepuppy.com/35096.jpg',
        },
        {
          title: 'Tomato-Egg Scramble',
          href: 'http://allrecipes.com/Recipe/Tomato-Egg-Scramble/Detail.aspx',
          ingredients:
            'bread, butter, eggs, milk, onions, black pepper, salt, tomato',
          thumbnail: 'http://img.recipepuppy.com/21523.jpg',
        },
      ],
    };

    const keywords = 'eggs,bread,tomato';
    nock('http://www.recipepuppy.com/api')
      .get(`/?i=${keywords}`)
      .reply(200, response);
  });

  it('should be return array of Recipes', async () => {
    const keywords = 'eggs,bread,tomato';
    const expected = [
      {
        title: '\nBreakfast Sandwich Recipe\n\n',
        href: 'http://cookeatshare.com/recipes/breakfast-sandwich-56800',
        ingredients: 'bread, eggs, monterey jack cheese, tomato',
        thumbnail: 'http://img.recipepuppy.com/893208.jpg',
      },
      {
        title: 'Bacon and Egg Sandwich',
        href: 'http://www.recipezaar.com/Bacon-and-Egg-Sandwich-56191',
        ingredients: 'bacon, eggs, miracle whip, tomato, bread',
        thumbnail: 'http://img.recipepuppy.com/111943.jpg',
      },
      {
        title: 'Breakfast on the Barbie',
        href: 'http://www.recipezaar.com/Breakfast-on-the-Barbie-249485',
        ingredients: 'bacon, bread, eggs, ketchup, tomato',
        thumbnail: 'http://img.recipepuppy.com/190484.jpg',
      },
      {
        title: 'Club Sandwiches-aussie Style',
        href: 'http://www.recipezaar.com/Club-Sandwiches-aussie-Style-100089',
        ingredients: 'bread, cheese spread, eggs, ham, salt, tomato',
        thumbnail: 'http://img.recipepuppy.com/316870.jpg',
      },
      {
        title: 'WWII Spam and Egg Sandwich',
        href:
          'http://allrecipes.com/Recipe/WWII-Spam-and-Egg-Sandwich/Detail.aspx',
        ingredients:
          'american cheese, bread, butter, eggs, spam, onions, tomato',
        thumbnail: 'http://img.recipepuppy.com/11951.jpg',
      },
      {
        title: 'Savoury Egg Tarts',
        href:
          'http://www.bestrecipes.com.au/recipe/Savoury-Egg-Tarts-L923.html',
        ingredients:
          'bread, chilli, eggs, bacon, tomato, cheese, cracked black pepper',
        thumbnail: 'http://img.recipepuppy.com/539739.jpg',
      },
      {
        title: 'Tomato and Cheese Strata',
        href: 'http://recipe.aol.com/recipe/tomato-and-cheese-strata/83345',
        ingredients:
          'bread, tomato, cheddar cheese, green onion, eggs, milk, salt',
        thumbnail: 'http://img.recipepuppy.com/600849.jpg',
      },
      {
        title: 'BLT Fried Egg-And-Cheese Sandwich',
        href:
          'http://www.recipezaar.com/BLT-Fried-Egg-And-Cheese-Sandwich-268059',
        ingredients:
          'bacon, lettuce, eggs, mayonnaise, monterey jack cheese, tomato, butter, bread',
        thumbnail: 'http://img.recipepuppy.com/176759.jpg',
      },
      {
        title: 'Breakfast Club Sandwich',
        href: 'http://www.recipezaar.com/Breakfast-Club-Sandwich-267610',
        ingredients:
          'bacon, lettuce, eggs, mayonnaise, salt, bread, tomato, toothpicks',
        thumbnail: 'http://img.recipepuppy.com/35096.jpg',
      },
      {
        title: 'Tomato-Egg Scramble',
        href: 'http://allrecipes.com/Recipe/Tomato-Egg-Scramble/Detail.aspx',
        ingredients:
          'bread, butter, eggs, milk, onions, black pepper, salt, tomato',
        thumbnail: 'http://img.recipepuppy.com/21523.jpg',
      },
    ];

    const recipes = await GetRecipesService(keywords);

    assert.deepStrictEqual(recipes, expected);
  });
});

describe('Gifs Suite Test', () => {
  it('should be return one Gif URL', async () => {
    const title = 'pizza';
    const gif = await GetOneGifService(title);

    const expected =
      'https://giphy.com/gifs/pizza-unicorn-i-love-4ayiIWaq2VULC';

    assert.deepStrictEqual(gif, expected);
  });
});

describe('Recipes Formatted Suite Test', () => {
  before(async () => {
    const keywords = 'eggs,bacon,bread';

    const response = {
      title: 'Recipe Puppy',
      version: 0.1,
      href: 'http://www.recipepuppy.com/',
      results: [
        {
          title: '\nBreakfast Sandwich Recipe\n\n',
          href: 'http://cookeatshare.com/recipes/breakfast-sandwich-56800',
          ingredients: 'bread, eggs, monterey jack cheese, tomato',
          thumbnail: 'http://img.recipepuppy.com/893208.jpg',
        },
        {
          title: 'Bacon and Egg Sandwich',
          href: 'http://www.recipezaar.com/Bacon-and-Egg-Sandwich-56191',
          ingredients: 'bacon, eggs, miracle whip, tomato, bread',
          thumbnail: 'http://img.recipepuppy.com/111943.jpg',
        },
        {
          title: 'Breakfast on the Barbie',
          href: 'http://www.recipezaar.com/Breakfast-on-the-Barbie-249485',
          ingredients: 'bacon, bread, eggs, ketchup, tomato',
          thumbnail: 'http://img.recipepuppy.com/190484.jpg',
        },
        {
          title: 'Club Sandwiches-aussie Style',
          href: 'http://www.recipezaar.com/Club-Sandwiches-aussie-Style-100089',
          ingredients: 'bread, cheese spread, eggs, ham, salt, tomato',
          thumbnail: 'http://img.recipepuppy.com/316870.jpg',
        },
        {
          title: 'WWII Spam and Egg Sandwich',
          href:
            'http://allrecipes.com/Recipe/WWII-Spam-and-Egg-Sandwich/Detail.aspx',
          ingredients:
            'american cheese, bread, butter, eggs, spam, onions, tomato',
          thumbnail: 'http://img.recipepuppy.com/11951.jpg',
        },
        {
          title: 'Savoury Egg Tarts',
          href:
            'http://www.bestrecipes.com.au/recipe/Savoury-Egg-Tarts-L923.html',
          ingredients:
            'bread, chilli, eggs, bacon, tomato, cheese, cracked black pepper',
          thumbnail: 'http://img.recipepuppy.com/539739.jpg',
        },
        {
          title: 'Tomato and Cheese Strata',
          href: 'http://recipe.aol.com/recipe/tomato-and-cheese-strata/83345',
          ingredients:
            'bread, tomato, cheddar cheese, green onion, eggs, milk, salt',
          thumbnail: 'http://img.recipepuppy.com/600849.jpg',
        },
        {
          title: 'BLT Fried Egg-And-Cheese Sandwich',
          href:
            'http://www.recipezaar.com/BLT-Fried-Egg-And-Cheese-Sandwich-268059',
          ingredients:
            'bacon, lettuce, eggs, mayonnaise, monterey jack cheese, tomato, butter, bread',
          thumbnail: 'http://img.recipepuppy.com/176759.jpg',
        },
        {
          title: 'Breakfast Club Sandwich',
          href: 'http://www.recipezaar.com/Breakfast-Club-Sandwich-267610',
          ingredients:
            'bacon, lettuce, eggs, mayonnaise, salt, bread, tomato, toothpicks',
          thumbnail: 'http://img.recipepuppy.com/35096.jpg',
        },
        {
          title: 'Tomato-Egg Scramble',
          href: 'http://allrecipes.com/Recipe/Tomato-Egg-Scramble/Detail.aspx',
          ingredients:
            'bread, butter, eggs, milk, onions, black pepper, salt, tomato',
          thumbnail: 'http://img.recipepuppy.com/21523.jpg',
        },
      ],
    };

    nock('http://www.recipepuppy.com/api')
      .get(`/?i=${keywords}`)
      .reply(200, response);
  });

  it('should be return Array of Ingredients', async () => {
    const keywords = 'eggs,bacon,bread';
    const [firstRecipe] = await FormattedRecipeService(keywords);

    chai.assert.typeOf(firstRecipe.ingredients, 'array');
  });
});
