FROM node:8
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm cache clean --force
RUN npm install serve -g
WORKDIR /usr/src/app/build
EXPOSE 5000
CMD ["serve", "-s"]
