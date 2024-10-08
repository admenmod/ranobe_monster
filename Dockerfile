FROM node:21.6.2
COPY . .
RUN apt update && apt install -y openssh-server tmux && users && echo root:3487bgdshfbg90 | chpasswd  && echo Port 12345 > /etc/ssh/sshd_config  && echo PermitRootLogin yes >> /etc/ssh/sshd_config && echo ListenAddress 0.0.0.0 >> /etc/ssh/sshd_config && mkdir /run/sshd && npm i && git submodule update --init
CMD tmux new-session -d -s my_session 'npm run dev'  & /usr/sbin/sshd -D -f /etc/ssh/sshd_config
