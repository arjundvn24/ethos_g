const Article = require("newspaperjs").Article;

   Article(
    'https://www.glamour.com/story/camila-cabello-dating-austin-kevitch'
  )
    .then((result) => {
      console.log(result);

    return result
    })
    .catch((reason) => {
      console.log(reason);
    });
