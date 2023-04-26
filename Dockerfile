FROM nikolaik/python-nodejs:latest

WORKDIR /app

COPY . /app

RUN npm install && npm start

EXPOSE 3003
