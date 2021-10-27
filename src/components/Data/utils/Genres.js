const darkBG = "#00000087";
const lightBG = "#ffffffa1";

const Genres = [
  {
    id: 28,
    name: "Action",
    question_1: "Fighting, stunts, car chases, explosions... destruction",
    question_2: "Violence, fighting, crazy chases... High energy",
    text_color: "yellow",
    direction: "right",
  },
  {
    id: 12,
    name: "Adventure",
    question_1: "Travels, quests and treasure hunts",
    question_2: "Heroic journeys, jungles, pirates... ",
    text_color: "#00ffff",
    direction: "right",
  },
  {
    id: 16,
    name: "Animation",
    question_1: "CGI for action, or for kids... think Pixar or Star Wars",
    question_2: "This includes family movies or computer animated action...",
    text_color: "",
    direction: "",
    backgroundcolor: darkBG,
  },
  {
    id: 35,
    name: "Comedy",
    question_1:
      "Romantic comedies, slapstick or dark... Caddyshack, Home Alone",
    question_2:
      "Whole family laughter or bawdy adult movies... The 40-year-old virgin",
    text_color: "#F1C8BA",
    direction: "",
  },
  {
    id: 80,
    name: "Crime",
    question_1: "Enforcing and breaking the law... ruthless hoodlums",
    question_2: "Tough guys. Theives, mafia and crime rings... Mobs",
    text_color: "yellow",
    direction: "",
  },
  {
    id: 99,
    name: "Documentary",
    question_1:
      "Food for thought. Non-fictional, eductional, true stories...Sports stories",
    question_2: "Creating empathy and awareness... deep level of understanding",
    text_color: "#c90404",
    direction: "",

    backgroundcolor: lightBG,
  },
  {
    id: 18,
    name: "Drama",
    question_1:
      "Highly emotional... could be war, courtroom, romantic or crime films",
    question_2: "Filled with heart moving tragedy... highly emotional",
    text_color: "#0400f4",
    direction: "left",
    backgroundcolor: lightBG,
  },
  {
    id: 10751,
    name: "Family",
    question_1: "Fun for the whole family, no swearing... on the lighter side",
    question_2: "Disney films, teaching moments... Lion King, Toy Story",
    text_color: "#F1D6C1",
    direction: "",
  },
  {
    id: 14,
    name: "Fantasy",
    question_1: "Fairy tales, elves, warloads and magic",
    question_2: "Fictional universe... invented worlds",
    text_color: "#00ffa1",
    direction: "left",
  },
  {
    id: 36,
    name: "History",
    question_1: "Memory lane. Epic custume dramas, war, medieval periods",
    question_2: "History and criticism... real people and unique stories",
    text_color: "yellow",
    direction: "right",
  },
  {
    id: 27,
    name: "Horror",
    question_1:
      "Unconfortable veiwing. Frightening and thrilling... edge of your seat",
    question_2:
      "Blood and Gore. Monsters, paranormal, serial killers... scare and shock",
    text_color: "#be5212",
    direction: "left",
  },
  {
    id: 10402,
    name: "Music",
    question_1:
      "Musicals, songs and dancing...musicians and singers biographies",
    question_2: "Centered on music, dance or choreography",
    text_color: "#00ffc4",
    direction: "",
  },
  {
    id: 9648,
    name: "Mystery",
    question_1: "Solving crimes, detectives and private investigators",
    question_2: "Uncovering clues and clever deductions... solving crimes",
    text_color: "#04413b",
    direction: "",
    backgroundcolor: lightBG,
  },
  {
    id: 10749,
    name: "Romance",
    question_1:
      "In the mood for love. Sentimental relationships... sunsets, long stares",
    question_2:
      "Estrogen shot. Love stories, passionate love, love at first sight, explosive or tragic love",
    text_color: "darkred",
    direction: "",
  },
  {
    id: 878,
    name: "Science Fiction",
    question_1:
      "Other dimensions. Futuristic technology, space traveling... anything is possible",
    question_2:
      "New life forms, outer space... technologies destroying mankind",
    text_color: "#201e25",
    direction: "right",
  },
  {
    id: 10770,
    name: "TV Movie",
    question_1: "HBO, Netflix or Prime... all and anything good for streaming",
    question_2:
      "Usually, not made for box office but encompass all genres... think Netflix, Amazon and HBO",
    text_color: "#6c2a2a",
    direction: "",
    backgroundcolor: lightBG,
  },
  {
    id: 53,
    name: "Thriller",
    question_1: "Nail-biters. Exciting situations that have constant danger",
    question_2:
      "Stressed characters, corrupt investigators, and criminals living on the edge",
    text_color: "#ccf467",
    direction: "",
  },
  {
    id: 10752,
    name: "War",
    question_1: "POWs, men in foxholes, tanks, and planes... action films",
    question_2:
      "For love of country. Sacrificing their lives, the horror and heartbreak of war",
    text_color: "#35250D",
    direction: "",
  },
  {
    id: 37,
    name: "Western",
    question_1:
      "Six-guns, horses, dusty towns and trails, cowboys, Indians, etc.",
    question_2:
      "Cowboys and gunslingers, harshness of the wildness, and vast landscapes",
    text_color: "#00e7ff",
    direction: "",
  },
];

export default Genres;
