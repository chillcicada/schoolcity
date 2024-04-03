# Jsd School city

> Web Framework for JSD School City's level test

## Features

## TODO

- [ ] refine the `level` page, priority: highest
- [ ] margate to nuxt3

## Deploy

### Native (nginx for example)

> with proxy pass to nodejs server, this is badly not recommended, but if you want to use it, you can use this config

```nginx
server {
  listen 80;
  server_name jsd-school-city.com;

  location / {
    proxy_pass http://localhost:3000; # Nodejs server, then you should config your nodejs server
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

> without proxy pass, with static files

```nginx
server {
  listen 80;
  server_name example.com;

  location / {
    try_files $uri $uri/ /index.html;
    root /path/to/your/static/files;
    index index.html;
  }
}
```

> with ssl

```nginx
server {
  listen 80;
  server_name example.com;

  location / {
    return 301 https://$server_name$request_uri;
  }
}

server {
  listen 443 ssl http2;
  server_name example.com;
  server_tokens off;

  ssl_certificate /path/to/your/cert.pem;
  ssl_certificate_key /path/to/your/cert.key;

  ssl_session_timeout 5m;
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers on;
  ssl_ciphers #your ciphers mode#;
  ssl_session_cache builtin:1000 shared:SSL:10m;
  ssl_dhparam /usr/local/nginx/conf/ssl/dhparam.pem;

  location / {
    try_files $uri $uri/ /index.html;
    root /path/to/your/static/files;
    index index.html;
  }

  access_log /path/to/your/logs/access.log;
  error_log /path/to/your/logs/error.log;
}
```

Then add this config as a vhost in your nginx config file. The config of Apache / Caddy / etc. is similar to this. You can search for it.

### Remote (vercel for example)

1. git clone this repository
2. open vercel and import this repository
3. deploy
