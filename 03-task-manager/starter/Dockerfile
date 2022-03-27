FROM node:16-alpine3.14

# Create app directory
WORKDIR /user/wwww

# Install app dependencies
COPY package*.json .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
