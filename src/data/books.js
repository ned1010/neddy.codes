/*Book Section of about page */
/* Book structure should have following properties 
1. title: Name of the book
2. Author: name of the author
3. Message 
4. image
*/
const bookItems = [
	{
		id: Math.floor(Math.random() * 100000),
		title: "The 5 Love Languages",
		author: "Gary Chapman",
		message:
			'"Love, like languages, differs between people and understand this makes every relationship better."',
		img: "https://m.media-amazon.com/images/I/51hA4n4bgwL.jpg",
	},
	{
		id: Math.floor(Math.random() * 100000),
		title: "Do it Today",
		author: "Darius Foroux",
		message: '"Systems trumps willpower so key to success is having a routine that is impactful"',
		img: "https://m.media-amazon.com/images/I/61ePdebDa7L._SL1500_.jpg",
	},
	{
		id: Math.floor(Math.random() * 100000),
		title: "The Miracle Morning",
		author: "Hal Elrod",
		message:
			'"Who I become depends on what I am doing now so wake up before 8AM and action your ideas."',
		img: "https://m.media-amazon.com/images/I/51D5OEHQTSL.jpg ",
	},
	{
		id: Math.floor(Math.random() * 100000),
		title: "The Atomic Habits",
		author: "James Clear",
		message: '"Simplify and make it accessible to build a habit and complicate to avoid it."',
		img: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SL1500_.jpg",
	},
	{
		id: Math.floor(Math.random() * 100000),
		title: "Harry Potter Series",
		author: "JK Rowling",
		message: '"Love, Friendship and Courage triump over animosity and adversity."',
		img: "https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg",
	},
	{
		id: Math.floor(Math.random() * 100000),
		title: "The Psychology of Money",
		author: "Morgan Housel",
		message: '"If you can\'t control emotions, you can\'t control money."',
		img: "https://m.media-amazon.com/images/I/71TRUbzcvaL._SL1500_.jpg",
	},
];

export default bookItems;
