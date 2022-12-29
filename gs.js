const google =require('googlethis');

async function start() {
    // A simple search
    const res = await google.search('Eva Watson', {
      page: 1,
      safe: false,
      additional_params: {
        hl: 'en'    
      }
    });
    console.info('Search Results:', res.results);
    
  }
  
  start();

  