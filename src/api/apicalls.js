import axios from 'axios';
export const TopAnime = async (type = 'ANIME', sortType, format) => {
  let query = `
{
  
  Page(page: 1, perPage: 50) {
    
   media(type: ${type},sort: ${sortType},format: ${format}) {

        idMal
        id
        title {
            userPreferred
        
        
      }
     coverImage {
     
       medium
       
     }
    
    }
  }
}

`;

  // Define the config we'll need for our Api request
  var url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
        //variables: variables,
      }),
    };

  const response = await fetch(url, options);
  const res = await response.json();
  return res.data;
};
//37510
// reviews {
//   edges {
//     node {
//       id
//       ratingAmount
//       score
//       rating
//       summary
//     }
//   }
// }

// characters {
//   edges {
//     id
//   }
// }
export const getAnime = async (id) => {
  let query = `
  {

      Media(id:${id}) {
        idMal
        format
        type
        studios {
          nodes {
            id
            name
          }
         
        }
        averageScore
        description
        popularity
        seasonYear
        season
        favourites
        countryOfOrigin
        episodes
        status
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        genres
      
        
       
        rankings {
      
          rank
        }
        title {
        
        
          userPreferred
        }
        coverImage {
      
          medium
      
        }
        bannerImage
      }
    }
  
  
  `;

  // Define our query variables and values that will be used in the query request
  //   var variables = {
  //     sort: sortType,
  //   };

  // Define the config we'll need for our Api request
  var url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
        // variables: variables,
      }),
    };

  const response = await fetch(url, options);
  const res = await response.json();
  return res.data;
};

export const getChar = async (id) => {
  let query = `
  {

      Media(id:${id}) {
      
        characters {
          nodes{
            id
            name {       
              first
              last
              full
              native
            }
            image {
              large
              medium
            }
          }
        }
      }
    }
  
  
  `;

  // Define our query variables and values that will be used in the query request
  //   var variables = {
  //     sort: sortType,
  //   };

  // Define the config we'll need for our Api request
  var url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
        // variables: variables,
      }),
    };

  const response = await fetch(url, options);
  const res = await response.json();
  return res.data;
};
