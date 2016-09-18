# pse-screener.com

## Installation instructions.

1. $ npm install
2. $ gulp

Apache2 config
```
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName www.pse-screener.com
        DocumentRoot /var/www/pmorcilladev/pse_screener/api/public

        # this is where our front-end is
        Alias "/public" "/var/www/pmorcilladev/pse_screener/public/"
        # this is where the admin pagess are
        # Alias "/admin" "/var/www/pmorcilladev/yourebusiness/admin/app"

        <Directory "/var/www/pmorcilladev/pse_screener">
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