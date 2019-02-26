# 开始运行

    docker-compose up -d

## mysql 命令

### 登录 mysql  

    -P 端口 -u 用户名 -p 密码
    mysql -P 33060 -u root -p  
    mysql -P 33060 -uroot -pprisma

    如果是在另外一个容器里访问
    mysql -h (局域网ip)192.168.1.6 -uroot -P 30000 -pprisma

### 查看数据库

    show databases;