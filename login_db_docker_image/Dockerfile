FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD='password'
ENV MYSQL_DATABASE='loginDB'
ENV MYSQL_USER='admin'
ENV MYSQL_PASSWORD='adminadmin'
ENV MYSQL_ROOT_HOST 0.0.0.0

# USE IF YOU WOULD LIKE TO INSERT DATA INTO DOCKER IMAGE
ADD data.sql /docker-entrypoint-initdb.d

COPY my.cnf /usr/my.cnf
EXPOSE 3306
