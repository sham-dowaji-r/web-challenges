console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const postTitle = "Hallo";
const postText = "Welcome to my world";
let numberOflike = 50;
const postUser = "sham45";
const isReported = false;

numberOflike++;

console.log("Updated Likes:", numberOflike);
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log("Post Title:", postTitle);
console.log("Post Text:", postText);
console.log("number of like:", numberOflike);
console.log("Posted by:", postUser);
console.log("Is Reported:", isReported);
// --^-- write your code here --^--
