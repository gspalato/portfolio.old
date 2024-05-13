FROM alpine AS build
    WORKDIR /app

    RUN addgroup -S app \
        && adduser -S app -G app

    # Install Node.js and NPM
    RUN apk add --update nodejs npm
    RUN npm i yarn serve -g

    # Install dependencies
    COPY package.json .
    RUN yarn

    # Copy source code.
    COPY . .

    RUN yarn build

FROM build AS final
    USER app
    EXPOSE 8080
    CMD ["serve", "-s", "dist", "-l", "8080"]