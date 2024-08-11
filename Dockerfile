FROM node:21.6.2
COPY . .
RUN apt update && apt install -y openssh-server && users && echo 3487bgdshfbg90 | passwd  --stdin && npm i && git submodule update --init
CMD npm run dev
