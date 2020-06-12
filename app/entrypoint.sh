#!/bin/sh

if [ "$DATABASE" = "postgresql" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQl_PORT; do 
        sleep 0.1
    done

    echo "PostgreSQL started"
fi

python manage.py flush --no-input
python manage.py migrate
python manage.py collectstatic --no-input --clear

exec "$@"
