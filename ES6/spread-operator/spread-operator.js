// Spread Operator Exercise

// Question:
// Lucy and Peter need to go grocery shopping. 
// On Lucy's shopping list she needs to buy: an apple, avocado, chips, chicken soup, and a watermelon.
// On Peter's shopping list, he needs to buy: bread, eggs, tofu, and ramen noodles.
// Can you create a mater shopping list that will look at both Lucy's and Peter's list to create a master shopping list.

//Answer
'use strict';

const lucyList = ['apple', 'avocado', 'chips', 'chicken soup', 'watermelon'];

const peterList = ['bread', 'eggs', 'tofu', 'ramen noodles'];

const masterList = [...lucyList, ...peterList];

console.log(masterList);