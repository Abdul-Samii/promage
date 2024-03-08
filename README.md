#Back-End(server)
use npm run dev to start the project

#FRONT-END
use npm run start to run the front end

#Stand-Alone Logger
The communication between the api and the logger is handled with the help of websockets.
use npm run start to run the logger.

A middleware with the name SendEvents is use in every request, so whenever a request is made to the api server, the loggs which include the event name is sent to the logger and there it is save in a file using fs.

#Things which are missing
Due to time limitation I am unable to implement the interconnect interface.
What I was thinking is to create a file with that contains all the possible events of the projects and using webhooks we can handle any incomming requests to the application and will redirect it to the respective route.