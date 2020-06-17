# Sharex-Fileuploader

[![Join the chat at https://gitter.im/sharex-server/community](https://badges.gitter.im/sharex-server/community.svg)](https://gitter.im/sharex-server/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An Simple File Uploader for ShareX in NodeJS

### How to Use this Image

#### Use Docker HUB Image

```bash
docker run -e "APTOKEN=mysecrettoken" -e "APURL=http://localhost:3000" -p "3000:3000" ucode1337/sharex-server
# Its creating an automatic VOLUME if you want to change it use -v "PATH:/app/static"
```

#### Build it yourself

```bash
git clone https://git.ucode.space/Phil/sharex-server.git
cd sharex-server
docker build . -t sharexserver
docker run -e "APTOKEN=mysecrettoken" -e "APURL=http://localhost:3000" -p "3000:3000" sharexserver
```

#### ENVs to change if you want :)

- PORT      (Express PORT  DF:   3000)
- EXHOST    (Express HOST  DF:   "0.0.0.0")
- APTOKEN   (ShareX Token  DF:   "mysharexupload123")
- APURL     (ShareX Domain DF:   "http://localhost:3000")
