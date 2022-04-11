#Base image taken from https://github.com/cypress-io/cypress-docker-images/tree/master/included
FROM cypress/browsers:node16.14.0-slim-chrome99-ff97
#Create the folder where our project will be store
RUN mkdir /sfautomation
#Make it work directory
WORKDIR /sfautomation
#Copy the essentials files we need to RUN our scripts
COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm Install
#Executable commands the container will use[Exec Form]
ENTRYPOINT [ "npm", "cypress", "run" ]
#Run the executable
CMD [ "executable" ]