FROM node:16.10.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --force
RUN npm install -g @angular/cli

COPY . /app

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --poll 500