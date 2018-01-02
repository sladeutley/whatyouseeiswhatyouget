// Create an array of objects that represents famous people (see structure below).
// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

let famousPerson = [
    {
        name: "Kevin Durant", 
        profession: "Basketball Player",
        bio: "is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). He has won an NBA championship, an NBA Most Valuable Player Award, the Bill Russell NBA Finals Most Valuable Player Award, the NBA All-Star Game Most Valuable Player Award, four NBA scoring titles, the NBA Rookie of the Year Award, and two Olympic gold medals. Durant has also been selected to seven All-NBA teams and eight NBA All-Star teams.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kevin_Durant_-_TechCrunch_Disrupt_SF_2017_-_Day_2_%2836517991413%29.jpg/440px-Kevin_Durant_-_TechCrunch_Disrupt_SF_2017_-_Day_2_%2836517991413%29.jpg",
        lifespan: {
            birth: 1988,
            death: "",
        }
    },
    {
        name: "Alison Brie",
        profession: "Actress",
        bio: "is an American actress, producer, and model. She is best known for her starring role as Annie Edison in the NBC/Yahoo! sitcom Community (2009–2015) and Trudy Campbell in the AMC drama series Mad Men (2007–2015). Brie currently voices Diane Nguyen on the Netflix animated series BoJack Horseman (2014–present) and portrays Ruth Wilder on the Netflix comedy-drama series GLOW (2017–present), for which she received a nomination for the Golden Globe Award for Best Actress – Television Series Musical or Comedy and the Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Comedy Series.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alison_Brie_by_Gage_Skidmore_2.jpg/440px-Alison_Brie_by_Gage_Skidmore_2.jpg",
        lifespan: {
            birth: 1982,
            death: "",
        }
    },
    {
        name: "Frank Marshall", 
        profession: "Producer",
        bio: "is an American film producer and director, often working in collaboration with his wife, Kathleen Kennedy. With Kennedy and Steven Spielberg, he was one of the founders of Amblin Entertainment. In 1991, he founded, with Kennedy, The Kennedy/Marshall Company, a film production company which has a contract with DreamWorks. Since May 2012, with Kennedy taking on the role of President of Lucasfilm, Marshall has been Kennedy/Marshall's sole principal.[1] Marshall has consistently collaborated with directors Steven Spielberg, Paul Greengrass and Peter Bogdanovich.",  
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Frank_Marshall_Deauville_2012.jpg/440px-Frank_Marshall_Deauville_2012.jpg", 
        lifespan: {
            birth: 1946,
            death: "",
        }
    },
    {
        name: "Rita Hayworth", 
        profession: "Actress",
        bio: `was an American actress and dancer. She achieved fame during the 1940s as one of the era's top stars, appearing in a total of 61 films over 37 years. The press coined the term "The Love Goddess" to describe Hayworth after she had become the most glamorous screen idol of the 1940s. She was the top pin-up girl for GIs during World War II.[1]`,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rita_Hayworth-publicity.JPG/440px-Rita_Hayworth-publicity.JPG", 
        lifespan: {
            birth: 1918,
            death: 1917,
        }
    },
]

for (let i=0; i < famousPerson.length; i++) {
    output.innerHTML += 
    `<div class="famousPersonClass">
    <strong>Person</strong>:
    <header>${famousPerson[i].name}: ${famousPerson[i].profession}</header>
    <section>Biography: ${famousPerson[i].bio} <div><img src=${famousPerson[i].image}></div></section>
    <footer>Birth:${famousPerson[i].lifespan.birth}<br>Death:${famousPerson[i].lifespan.death}</footer>
    <br>
    </div>`
};