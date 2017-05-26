# Builds a Docker to deliver dist/
FROM nginx:latest
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html
