FROM node:16.13.1-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install

ENV REACT_APP_API_URL=http://api-svc:5000

COPY . .

ENV REACT_APP_API_URL=http://api-svc:5000

EXPOSE 3000

CMD ["npm", "start"]