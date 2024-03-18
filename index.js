// Write your code in this file!
const currentUser="Lema";
//const welcomeMessage =currentUser ;
const welcomeMessage = `Welcome to Flatbook,  ${currentUser}!`;

//const excitedWelcomeMessage= "WELCOME TO FLATBOOK, ";
//const excitedWelcomeMessage= `WELCOME TO FLATBOOK, ${currentUser}!`;
const excitedWelcomeMessage= welcomeMessage.toUpperCase();

//const shortGreeting= "Welcome, "
const shortGreeting= `Welcome, ${currentUser.slice(0,2)}!`;