FROM nginx:1.19
WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html
