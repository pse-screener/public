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
        Alias "/public" "/var/www/pmorcilladev/pse_screener/public"
        # this is where the admin pagess are
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

# HTTP Requests
**Requesting token**
curl http://www.pse-screener.com/oauth/token -d 'grant_type=password&username=test@gmail.com.com&password=123456&client_id=1&client_secret=mjy4eilKhSJPd8y4IkHUPxiYvzB3UMShxNyJGZVz'

**New registration**
$ curl -H "Accept: application/json " http://www.pse-screener.com/register -d "fName=Jhunex&lName=Jun&gender=M&email=test1@gmail.com&password=123456&mobileNo=09206939093&password_confirmation=123456" > /d/tmp/error.html