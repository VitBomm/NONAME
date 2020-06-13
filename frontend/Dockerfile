FROM node:latest
WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install

EXPOSE 8001
CMD ["npm", "start"]

