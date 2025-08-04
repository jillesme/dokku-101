# Dokku 101 - Hello Dokku

This is a simple Docker image that runs an Express application which serves HTML that renders the dokku logo.

## Building the Image Locally

If you want to run this locally, first build the image:

``` bash
$ docker build . -t jilles/hello-dokku
```

Then you want to run it. We add a few flags:
1. `--init` --  Run an init inside the container that forwards signals and reaps processes. This is so that ctrl+c works to kill the process and container
1. `-it` -- Interactive + TTY
1. `--rm` -- Automatically remove the container and its associated anonymous volumes when it exits
1. `--name` -- Name of the container instead of just a hash
1. `-p 3000:3000` -- Forwards port 3000 on our host to port 3000 on our container

``` bash
$ docker run --init -it --rm --name hello-dokku -p 3000:3000 jilles/hello-dokku
```
