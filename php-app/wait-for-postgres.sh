#!/bin/bash
set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD=${POSTGRES_PASSWORD} psql -h "postgres" -p "5432" -U${POSTGRES_USER} -d${POSTGRES_DB}; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd
