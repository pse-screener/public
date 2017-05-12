# pse

### Installation instructions.

1. $ npm install
2. $ gulp
3. export NODE_ENV=development

### Apache config

```
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName www.pse-screener.com
        DocumentRoot /var/www/pmorcilladev/pse_screener/api/public

        # this is where our front-end is
        Alias "/public" "/var/www/pmorcilladev/pse_screener/public"
        # this is where the admin pages are
        Alias "/admin" "/var/www/pmorcilladev/pse_screener/admin/app"

        <Directory "/var/www/pmorcilladev/pse_screener/api/public">
               Options Indexes FollowSymLinks MultiViews
               AllowOverride All
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        # ServerAlias *.pse-screener.com
        ServerName pse-screener.com
        RedirectMatch permanent ^/(.*) http://www.pse-screener.com/$1

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
=======
1. $ npm install
2. $ npm install -g gulp --save-dev

### Run task in public folder.

$ gulp


##### Common Issues

1. Note that you have to use the domain name not the IP address to access the page so that the reCaptcha will work. So update your hosts file in your windows OS. The name must also be same with <project_name>/admin/.../appConstantsFactory.js.
2. sudo ln -s /usr/bin/nodejs /usr/bin/node - issue with node and nodejs.
