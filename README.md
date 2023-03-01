# Note Taker

## Description 

This is an application that stores notes. Write a note with a title and a body and save it to a database with a click. Then reference it from a list on the left side. You can also delete the note here. 

<!-- [Video of Generated README](Need to Do This) -->

I store the questions in an array. Each question is stored in an object. It is defined using a type, a message (the question), and a name. I first create a function that will use inquirer to prompt the questions. Then we will pass the responses or answers into a function to write the file. This function will pass the answers into a generate markdown javascript file. We take this information and use it to create the file. It will console log for use if it is suscessful. You can view this all below. 

<!-- ![Screenshot](Need to Do This) -->

## Installation

Install npm via "npm init". Following this, you will need to install inquirer entering, "npm i inquirer@8.2.4". A folder named node_modules will populate. This shows proper steps are happening. Open the directory in the intergrated terminal or terminal you are using. Run the index.js file using node, i.e. "node index". Follow the prompts to beging the file generation. Once completed a file named "generated-readme.md" will appear. 

## Usage 

Once you have successfully installed the correct componenets you will be prompted with the series of questions when entering "node index". You must be in the correct file for this to work. Once the prompts have been completed, the "professional-README.md" file will be created. 

## Test

There is a professional-README.md file listed under the javascript folder in the assets sections. This is and example file that was created using the application. 

## Credits

Node.js, inquirer, UCB Starter Code

## Contact Me

<a href="https://www.linkedin.com/in/tyler-dinslage-profile/" target="_blank">LinkedIN Profile</a>

<a href="https://github.com/tylerdins88?tab=repositories" target="_blank">Github Repo</a>

## License

Listed in repo file. 