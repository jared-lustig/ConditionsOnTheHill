### DOCKER INSTALL INSTRUCTIONS

1. sudo apt install docker.io -y

2. Follow instructions on this page -> https://blog.nillsf.com/index.php/2020/06/29/how-to-automatically-start-the-docker-daemon-on-wsl2/

3. docker run jaredlustig/conditions-on-the-hill:1.0


### DEVELOPER NOTES

1. To start, you need to make a docker hub repository

2. Use docker build -t <username/reponame>:tagname
- This needs to be done in the directory that the docker file is made in.

3. docker push <username/reponame>:tagname