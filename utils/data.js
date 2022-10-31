const userNameList = [
    'Sidney123',
    'Gale702',
    'Dewey808',
    'Judy456',
    'Sam507',
    'Tara978',
    'Wes911',
    'Richie451',
    'Mindy357', 
    'Chad951',
    'Liv456',
    'Amber666',
    'Vince444'
  ];
  const emails = [
    'Scream1@hotmail.com',
    'Stab@gmail.com',
    'Ghostface@AOL.com',
    'Prescott@yahoo.com',
    'scarymovielover@msn.com'
  ];

  const thoughtList = [
    'Do you like scary movies?',
    'You should never say who\'s there',
    'You\'re making popcorn?',
    'You never told me your name...',
    'No Sid, don\'t you blame the movies. Movies doen\'t create psychos. Movies make psychos more creative!',
    'There are certain rules someone must abide by to survive a scary movie.',
    'The police are always off track with this s**t! If they\'d watch Prom Night, they\'d save time! There\'s a formula to it. A very simple formula!',
    'Everybody\'s a suspect!',
    'She looked dead, man. Still does',
    'You\'re not scared are ya?',
    'Who am I, the beer wench?',
    'We all go a little mad sometimes'
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUserName = () =>
    `${getRandomArrItem(userNameList)}`;
  
  //gets a random email
  const getRandomEmail = () => getRandomArrItem(emails);

  // Function to generate random thoughts that we can add to user object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtName: getRandomArrItem(thoughtList),
        score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUserName, getRandomThoughts,
  getRandomEmail 
 };
  