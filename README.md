## Travlr Getaways Full Stack Application

### Architecture
In this project, I used both Express-based frontend rendering and an Angular single-page application (SPA). The Express frontend uses server-side rendering with Handlebars, where each request reloads the page and dynamically inserts data. In contrast, the Angular SPA updates content dynamically without reloading the page, resulting in a faster and smoother user experience. Angular also uses components and services, which makes the frontend more modular and easier to maintain.

The backend uses MongoDB as a NoSQL database because it allows flexible storage of JSON-like data. This is useful for storing trip information that may change over time. MongoDB integrates well with Node.js and Express through Mongoose, which provides structure through schemas while maintaining flexibility.

### Functionality

JSON is a data format used to transfer data, while JavaScript is a programming language used to build application logic. In this project, JSON connects the frontend and backend. The server sends data as JSON through API endpoints, and the Angular frontend uses that data to display information dynamically.

I refactored code throughout the project to improve organization and efficiency. For example, I separated backend logic into routes, controllers, and models, and used Angular services to handle API calls. I also created reusable components like trip cards, which reduced duplicate code and made the user interface more consistent and easier to maintain

### Testing

Testing involved verifying that all API endpoints worked correctly using tools like Postman and the browser. I tested GET, POST, PUT, and DELETE requests to ensure full CRUD functionality. This included retrieving trips, adding new trips, updating existing trips, and deleting trips from the database.

After adding security, testing required using a JWT token. I first logged in to receive a token, then included it in the Authorization header when accessing protected routes. I tested both successful and failed authentication scenarios to ensure that unauthorized users could not access secure endpoints.

### Reflection

This course helped me build a strong understanding of full stack development using the MEAN stack. I learned how to create RESTful APIs, connect a database, build a frontend using Angular, and implement authentication with JWT.

One of the most valuable skills I developed was understanding how all parts of an application work together, from the database to the frontend. I also improved my debugging skills and learned how to manage issues across multiple layers of the application.

Overall, this project made me more confident as a developer and better prepared for real-world software development.
