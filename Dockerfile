FROM node:21.6.2
COPY . .
RUN apt update && apt install -y openssh-server && npm i && git submodule update --init
CMD npm run dev
