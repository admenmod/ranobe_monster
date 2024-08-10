FROM node:21.6.2
COPY . .
RUN npm install next@latest react@latest react-dom@latest && git submodule update --init
CMD npm run dev
