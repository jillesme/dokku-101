# Dokku 101 - Hello Dokku

This is a simple Docker container that runs an Express application which serves HTML that renders the dokku logo.

## Building the Image Locally

If you want to run this locally, first build the image:

``` bash
$ docker build . -t jilles/hello-dokku
```

Then you want to run it. We add a few flags:
1. `--rm` -- Automatically remove the container and its associated anonymous volumes when it exits
2. `--name` -- Name of the container instead of just a hash
3. `-p 3000:3000` -- Forwards port 3000 on our host to port 3000 on our container

``` bash
$ docker run --rm --name hello-dokku -p 3000:3000 jilles/hello-dokku
```
