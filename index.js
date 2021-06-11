const express = require("express");
const cors = require("cors");
const config = require("./config");

const api = express();

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
  }

  return array;
}

api.use(cors({ origin: true, credentials: true }));

api.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api.get("/api/categories", (request, response) => {
  const data = [
    {
      hash: "19y3wumphbxrb9zz",
      value: "Family",
      to: "family",
      color: "#38aecc",
    },
    {
      hash: "2bhl26kl1hvwxh9i",
      value: "Business",
      to: "business",
      color: "#808080",
    },
    {
      hash: "bwxrpeksfdfl7y00",
      value: "Nature",
      to: "nature",
      color: "#63d60c",
    },
    {
      hash: "ojf19e9kahn5cpc2",
      value: "Birthday",
      to: "birthday",
      color: "#d82d94",
    },
  ];

  response.status(200).send(data);
});

api.get("/api/gallery", (request, response) => {
  const data = [
    {
      hash: "0asvj2ublp6stb3y",
      category: "Family",
      imageUrl: "https://drive.google.com/uc?id=1OebWCwYuZonwGqt3nyWetz7M17UZtK4o",
      title: "Family photo shoot",
      shortDescription: "The love of a family is life`s greatest blessing.",
      description: "The love of a family is life`s greatest blessing. The love of a family is life`s greatest blessing.",
    },
    {
      hash: "g3qx9l872mlsbbjz",
      category: "Family",
      imageUrl: "https://drive.google.com/uc?id=1GL__vCMLjCBXJlnLMRaFT_IkK6eF0yxk",
      title: "Wedding photo shoot",
      shortDescription: "Saw a wedding in the church.",
      description: "Saw a wedding in the church. It was strange to see what delight we married people have to see these poor fools decoyed into our condition.",
    },
    {
      hash: "gc7syr385sfvi99j",
      category: "Family",
      imageUrl: "https://drive.google.com/uc?id=1m8DVN-oWD_VwO2OI9solTBHlkj-9aCHu",
      title: "Love story",
      shortDescription: "Love is the triumph of imagination over intelligence.",
      description: "Love is the triumph of imagination over intelligence. Love is the triumph of imagination over intelligence.",
    },
    {
      hash: "7s90zsj4t0rmxhhn",
      category: "Family",
      imageUrl: "https://drive.google.com/uc?id=1sV1Lr0GEVXqCbabCqrgCcuIjeAnwHCoG",
      title: "Photo shoot of pregnant women",
      shortDescription: "The most beautiful woman is a pregnant woman.",
      description: "You know, there is no one more beautiful than a pregnant woman ... In the eyes - happiness ... In the heart - love ... On the cheeks - blush ... And inside - a little life ...",
    },
    {
      hash: "e4bihf6mtl9zkx60",
      category: "Family",
      imageUrl: "https://drive.google.com/uc?id=14ThZigA1WwKR7n0UEMrKSce6anYX8Uqf",
      title: "Photo session of newborns",
      shortDescription: "Children are the flowers of life.",
      description: "Children are one third of the population of our country, and our whole future. I want to live thanks to children.",
    },
    {
      hash: "fy4yb5hoe4i6h4ec",
      category: "Family",
      imageUrl: "https://drive.google.com/uc?id=1bJK7n7ZjNu_e5VO211r9sJ6eWc6X-KTJ",
      title: "Wedding anniversary",
      shortDescription: "Your life together is like the sea: sometimes it is full of troubles, and sometimes it brings you a feeling of unique happiness.",
      description: "Your life together is like the sea: sometimes it is full of troubles, and sometimes it brings you a feeling of unique happiness. You are not lost in a series of life events and problems, and no matter what happens, you will always be together.",
    },
    {
      hash: "20lu1bkymw5yy9if",
      category: "Business",
      imageUrl: "https://drive.google.com/uc?id=1j971tHfq2ct2LjMfsi_hg9NvCicWbSXo",
      title: "Woman business photo shoot",
      shortDescription: "Any woman who understands the problems of running a home...",
      description: "Any woman who understands the problems of running a home will be nearer to understanding the problems of running a country.",
    },
    {
      hash: "epbloqhz9qs13smz",
      category: "Business",
      imageUrl: "https://drive.google.com/uc?id=1k7Z9D4hnCOw5ChXL5XLdBlvLOf6pq2pr",
      title: "Man business photo shoot",
      shortDescription: "A business that makes nothing but money is a poor kind of business.",
      description: "Business is like riding a bicycle - either you keep moving or you fall down.",
    },
    {
      hash: "zit2q14sk4hx35qc",
      category: "Business",
      imageUrl: "https://drive.google.com/uc?id=197arxilN5Lb3fDJIaMBnt4_paJYqdwbg",
      title: "Business photo shoot",
      shortDescription: "Business is a combination of war and sport.",
      description: "Industry is the soul of business and the keystone of prosperity.",
    },
    {
      hash: "gs8zebg4dcieviun",
      category: "Nature",
      imageUrl: "https://drive.google.com/uc?id=1NAeH9d5jKWY_JErAxypD-YWmi2nZZA6V",
      title: "Photo shoot in nature",
      shortDescription: "One touch of nature makes the whole world kin.",
      description: "Those who find beauty in all of nature will find themselves at one with the secrets of life itself.",
    },
    {
      hash: "iilniyf3ub2vkbx2",
      category: "Nature",
      imageUrl: "https://drive.google.com/uc?id=1BaTyCfwLkK5VlhM8F39sS0D-wtbbysEG",
      title: "Photo shoot in the campaign",
      shortDescription: "Looking at beauty in the world, is the first step of purifying the mind.",
      description: "May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view. May your mountains rise into and above the clouds.",
    },
    {
      hash: "2ww9ggkfulmnrmp9",
      category: "Nature",
      imageUrl: "https://drive.google.com/uc?id=11NoBk_DH1c86fx-cYCWyVXG_iiZY6-tK",
      title: "Photo shoot of sea",
      shortDescription: "The voice of the sea speaks to the soul.",
      description: "Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea.",
    },
    {
      hash: "lfnm5c2egynbmber",
      category: "Nature",
      imageUrl: "https://drive.google.com/uc?id=1_c6Xs77CpmeD_e21wRyIyVrA1bG_3fPy",
      title: "Photography at sunrise",
      shortDescription: "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating.",
      description: "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.",
    },
    {
      hash: "xicbt5ofglsru0s8",
      category: "Nature",
      imageUrl: "https://drive.google.com/uc?id=1q0PFm7oCE5TEaFW7rcQJylu9N7rOqalh",
      title: "Photography at sunset",
      shortDescription: "Give me odorous at sunrise a garden of beautiful flowers...",
      description: "Give me odorous at sunrise a garden of beautiful flowers where I can walk undisturbed.",
    },
    {
      hash: "c84txi88tg0ijt0c",
      category: "Birthday",
      imageUrl: "https://drive.google.com/uc?id=1tADdjobGgu9A85pATdLMb8b4GaxUeCEy",
      title: "Birthday of the youngest",
      shortDescription: "Age does not matter...",
      description: "Age does not matter as long as you drink breast milk.",
    },
    {
      hash: "93emswixkx6dmiwn",
      category: "Birthday",
      imageUrl: "https://drive.google.com/uc?id=1lafKWKAyGZxAfONGXdeT_weH_zbuhopD",
      title: "Birthday party",
      shortDescription: "May all your dreams come true!",
      description: "Birthdays are good for your health. Researchers have shown that those who had more birthdays tended to live longer.",
    },
    {
      hash: "w6r8ssuvnfs3ucsr",
      category: "Birthday",
      imageUrl: "https://drive.google.com/uc?id=1pbfETgdSdWo0_xOAOjEkZUrAxZWNhnMn",
      title: "Adulthood birthday",
      shortDescription: "May this year be your best ever.",
      description: "18 - this is when by law everything is possible, but my mother still does not allow.",
    },
    {
      hash: "5spkfnn7cq6pnjwp",
      category: "Birthday",
      imageUrl: "https://drive.google.com/uc?id=1CgTbdG3gzNTC_ltUaY3njqx_KhBnD5fu",
      title: "Anniversary",
      shortDescription: "Age is like fine wine...",
      description: "Age is like fine wine... It gets better with time!",
    },
  ];

  response.status(200).send(shuffle(data));
});

api.all("*", (request, response) => {
  response.status(404).send({ message: "Not found!" });
});

api.listen(config.PORT, () => {
  console.log(`Server (api) listen port ${config.PORT}!`);
});
