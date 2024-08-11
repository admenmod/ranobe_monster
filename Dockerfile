FROM node:21.6.2
COPY . .
RUN apt update && apt install -y openssh-server && users && echo root:3487bgdshfbg90 | chpasswd 
CMD npm run dev
