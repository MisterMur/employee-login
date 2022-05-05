FROM node:alpine 
# set working directory
WORKDIR /usr/src/app
# install and cache app dependencies
COPY package.json ./
COPY package-lock.json ./
ADD package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]