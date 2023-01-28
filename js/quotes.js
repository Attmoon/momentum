const quotes = [
    {
        quote: "Life is either a daring adventure or nothing.",
        author: "Helen Keller"
    },
    {
        quote: "Life is tough, but it's tougher when you're stupid.",
        author: "JOHN WAYNE."
    },
    {
        quote: "Youth is something very new: twenty years ago no one mentioned it.",
        author: "Coco Chanel"
    },
    {
        quote: "Life is as tedious as a twice-told tale, vexing the dull ear of a drowsy man.",
        author: "William Shakespeare"
    },
    {
        quote: "We did not change as we grew older; we just became more clearly ourselves.",
        author: "Lynn Hall"
    },
    {
        quote: "Nature gives you the face you have at twenty; it is up to you to merit the face you have at fifty.",
        author: "Coco Chanel"
    },
    {
        quote: "Life is just a mirror, and what you see out there, you must first see inside of you.",
        author: "Wally Amos"
    },
    {
        quote: "A preoccupation with the future not only prevents us from seeing the present as it is but often prompts us to rearrange the past.",
        author: "Eric Hoffer"
    },
    {
        quote: "We can draw lessons from the past, but we cannot live in it.",
        author: "Lyndon B. Johnson"
    },
    {
        quote: "Those who cannot remember the past are condemned to repeat it.",
        author: "George Santayana"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;