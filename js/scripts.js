// Storing messages in an array

let quotes = ['The Best Way To Get Started Is To Quit Talking And Begin Doing.', 'Don’t Let Yesterday Take Up Too Much Of Today.', 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.'];

let authors = ['Harry Potter', 'Bill Einstein', 'Frodolph']

for (let i=0; i < quotes.length; i++) {
    document.getElementById("quote").innerHTML = `<h1>${quotes[i]}</h1>`;
}