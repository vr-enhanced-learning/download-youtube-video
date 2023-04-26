FROM nikolaik/python-nodejs:latest

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3003

CMD ["npm", "start"]
