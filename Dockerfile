FROM node:8
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm cache clean --force
RUN npm install serve -g
EXPOSE 5000
CMD ["serve", "-s build"]
