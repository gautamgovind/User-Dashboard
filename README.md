## System Requirements
# NodeJS > 17.5 (As fetch in node environment needs node version 17.5+)

To run this application follow below steps:
# go to folder dashboard and run `npm install` 
# go to client folder and run `npm install` 
# After installing node module 
    go to client folder and run `npm start` to run client application  on http://localhost:3000/
    got to dashboard and run `npm start` to start server on http://localhost:4000/
## check the below mentioned functionalities:
    # Functionalities that are supported
    # Load the list of patients
    # Sort patients by last names
    # Search patients by firstName, lastName, nhsNumber and vaccineType. A minimum of two characters needs to be typed to trigger the
    # Functionalities that are supported
    # Load the list of patients
    # Sort patients by last names
    # Search patients by firstName, lastName, nhsNumber and vaccineType. A minimum of two characters needs to be typed to trigger the search as per the requirements doc
    # The search functionality mentioned above is implemented on the node side. So we can search through any of the fields from the data using url params. For instance: http://localhost:3000/?search=Pasta

## How did you approach solving the problem? (Include any decision making around libraries used, tooling choices)
    In order to create dashboard with sort and filter functionalities, I divided tasks in four parts:
        1. create UI to render user list and input to search and select box to sort
        2. get the data from server and render on the page
        3. add search/filter functionality
        4. add sort functionality 
    Then verify these major functioanlities and 

    To develop UI, I have choose to use React as it is declarative, simple, component based, extensive, fast and support mobile and server side development too.
    To create api, route and server side filtering used express with node 
    I focused on avoiding lot of 3rd parties libraries to do this tasks so that I can demonstrate my knowledge of react, js and core FE concepts.

## How did you verify your solution works correctly?
    # How long did you spend on the exercise?
    # went through all of the acceptance criterias mentioned on the tasks
    # manually tested the application on local host 
    # hosted on vercel and tested it on server

# How long did you spend on the exercise?
    It almost took 3-4 hours to make this as I have not got a chance to finish it in one go due to work commitment. 
# What would you add if you had more time and how?
    There are several areas I can think of in order to improve this such as: 
    Styling of sort selection box prettier and some over all style 
    Unit test coverage could have been 100% 
    caching 