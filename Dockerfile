FROM node:alpine
EXPOSE 3000
VOLUME /app/static
COPY . /app
WORKDIR /app
RUN npm i
CMD ["npm", "start"]