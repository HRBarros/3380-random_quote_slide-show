/******************************************
*****************************************/

//To prevent quote repetition
let previousIndex = -1;

/*** 
 * `quotes` array 
***/
const quotes = [
    {
      quote:
        "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      source: "Patrick McKenzie",
      citation: "Twitter",
      year: "2016",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      source: "Nelson Mandela",
    },
    {
      quote:
        "Life is what happens when you're busy making other plans.",
      source: "John Lennon",
      year: "1981",
    },
    {
      quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      source: "Benjamin Franklin",
    },
    {
      quote: "I have no idols. I admire work, dedication and competence.",
      source: "Ayrton Senna",
    },
  ];

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    let index = Math.floor(Math.random() * quotes.length);
  
    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    let randomQuote;
    do {
      index = Math.floor(Math.random() * quotes.length);
      randomQuote = quotes[index];      
    } 
    while (index === previousIndex);  
    previousIndex = index;  
     // 3. Return the variable storing the random quote object
    return randomQuote;
  };


/***
 * `printQuote` function
***/
const printQuote = () => {
    // 1. Create a variable that calls the getRandomQuote()
    // function
    let RandomQuote = getRandomQuote();
    
    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    let PtoHTML1 = `<p class="quote">${RandomQuote.quote}</p>
    <p class="source">${RandomQuote.source}`;

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string
    if (RandomQuote.citation) {
        PtoHTML1 += `, <span>${RandomQuote.citation}</span>`;
    }
    if (RandomQuote.year) {
        PtoHTML1 += `, <span>${RandomQuote.year}</span>`;
    }

    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    PtoHTML1 += `</p>`;
  
    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}
    document.getElementById("quote-box").innerHTML = PtoHTML1;
  };


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/

document.getElementById('load-quote').addEventListener("click", printQuote);