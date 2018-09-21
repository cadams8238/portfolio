const phytochorContent = {
  title: 'Phytochor',
  img: {
    src: require('../images/projects_phytochor-screenshots.svg'),
    alt: "Phytochor project screenshots"
  },
  description: `Phytochor lets you know when to water
  your garden based on the weather. Weather data is
  based off the zip code provided by the user and
  fetched from Open Weather Map's API. Users can
  create multiple gardens at their will.`,
  links: {
    app: 'https://garden-client.herokuapp.com/',
    code: 'https://github.com/cadams8238/Garden-app_client'
  },
  stack: `React, Redux, CSS Modules, HTML, JavaScript, Node, Express, MongoDB, Mongoose, Mocha/Chai`
};

const bingoContent = {
  title: 'B Movie Bingo',
  img: {
    src: require('../images/bmovie.svg'),
    alt: "B movie bingo project screenshots"
  },
  description: `Make watching B Movies more
  enjoyable with B Movie Bingo. Plug in a B Movie
  and watch with your friends. Look out for
  popular B Movie cliches and mark them off
  on your card when you see them in action!`,
  links: {
    app: 'https://bmoviebingo.netlify.com/',
    code: 'https://github.com/cadams8238/b-movie-bingo'
  },
  stack: 'Vue, CSS, HTML'
};

const emojiContent = {
  title: 'Learn Emoji',
  img: {
    src: require('../images/emoji.svg'),
    alt: "Learn Emoji project screenshots"
  },
  description: `Can't find the right words to say?
  Use Emojis instead! Using a spaced repetition algorithm,
  this app improves your emoji vocabulary so that you
  can write less and say more!`,
  links: {
    app: 'https://spacedrep-client.herokuapp.com/',
    code: 'https://github.com/thinkful-ei21/courtney-james-spacedRepitition-client'
  },
  stack: 'React, Redux, CSS Modules, HTML, JavaScript, Node, Express, MongoDB, Mongoose'
};

const financeContent = {
  title: 'Acceptable Losses',
  img: {
    src: require('../images/finance.svg'),
    alt: "Acceptable Losses project screenshots"
  },
  description: `Never get surprised by a bill again! Acceptable Losses allows you to
  track your expenses, vizualize your total monthly expenses in different formats,
  and get reminder emails when they're due.`,
  links: {
    app: 'https://acceptable-losses-client.herokuapp.com/',
    code: 'https://github.com/thinkful-ei21/acceptable-losses-client'
  },
  stack: `React, Redux, CSS Modules, HTML, JavaScript, Node, Express, MongoDB, Mongoose,
  Moment, Nivo, Cron, NodeMailer, Mocha/Chai, Enzyme`
};


module.exports = {
  phytochorContent,
  bingoContent,
  emojiContent,
  financeContent
}
