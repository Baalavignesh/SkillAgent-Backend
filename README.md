# SkillAgent Backend - Node.js Application

![main logo](https://github.com/Baalavignesh/SkillAgent-React/blob/main/src/assets/readmelogo.png?raw=true)

# Project Overview: Skills-Based Workforce Development Application

The application is designed to help users acquire new skills efficiently using AI. Built with open-source AI, the platform provides personalized learning plans based on user preferences, helping individuals and businesses accelerate skill acquisition and onboarding processes.

## Technology Stack
- **Frontend**: React with Tailwind CSS for styling
- **Backend**: Node.js with TypeScript
- **Hosting**: React app hosted on an S3 bucket, backend on an EC2 instance
- **Database & Authentication**: Firebase for data storage and user authentication
- **AI Integration**: OpenAI's Assistant for personalized learning experiences

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/baalavignesh/skillagent-backend.git
   ```
2. **Navigate to the project directory:**
    ```bash
    cd skillagent-backend
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm run dev
This will run the application locally. To deploy on an EC2 instance, use PM2 for process management. SSH into the EC2 instance, install the necessary software and package(Node, Git, etc.). Clone the Git Repo and navigate inside the directory.
    
    pm2 start npm run dev
    pm2 save
    pm2 startup


## Technologies Used
- **Node.js 18+**: JavaScript runtime for building the server-side application.
- **TypeScript 5.3**: Superset of JavaScript that compiles to plain JavaScript, providing type safety.
- **Express.js**: Web framework for building RESTful APIs.
- **Firebase**: For Firestore database and user authentication management.
- **OpenAI**: To power the intelligent assistant with advanced AI capabilities.

## Folder Structure
The application follows the Model-View-Controller (MVC) architecture to separate concerns and maintain organized code:

- **server.ts**: The entry point of the application.
- **controller/**: Contains all controller functions that handle requests and responses.
- **routes/**: Maps the routes to the appropriate controller functions.
- **config/**: Contains the configurations for Firebase and OpenAI.
- **const/**: Stores basic constants used throughout the application.
- **middleware/**: Implements middleware to check for bearer tokens, allowing only authenticated users to access certain routes.


## Key Features
- **AI Assistant**: Provides real-time guidance and responses to users, maintaining context through OpenAI's threads feature.
- **User Authentication**: Secure authentication using Firebase, allowing only registered users to access specific routes.
- **MVC Structure**: Organized codebase for maintainability and scalability.

## Application Use Case
Users can register using their email and password. Once registered, they can enter details about the skill they wish to learn, including:
- What they want to learn
- Desired learning speed
- Current skill level

Based on this information, OpenAI generates a personalized course plan tailored to their timeline (e.g., a 7-day learning plan). Users can then navigate through daily study plans and engage in conversations with a personalized AI tutor (powered by OpenAI’s Assistant), which provides customized responses to their queries.

The platform keeps a record of all interactions using OpenAI's threads feature, allowing users to revisit past conversations to reinforce learning or resolve doubts.

## Workforce Development Use Case
The app is particularly useful for workforce development, enabling companies to create tailored course plans for employees who need to onboard a new project requiring specific skills. Employees can complete the assigned course, earn a certificate, and seamlessly join the project with the required expertise. This streamlines the onboarding process for both companies and employees.

## Future Enhancements
- **Text-to-Voice**: Convert learning content into audio for easier consumption.
- **Real-time Voice Assistant**: Allow users to interact with the AI tutor through voice commands.
- **File and Image Uploads**: Provide additional resources and context by uploading files or images.
- **Quizzes**: Validate learning progress with quizzes for each course.






