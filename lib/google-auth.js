var googleapi = {
    authorize: function(options) {
        var deferred = $.Deferred();

        //Build the OAuth consent page URL
        var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + $.param({
            client_id: options.client_id,
            redirect_uri: options.redirect_uri,
            response_type: 'code',
            scope: options.scope
        });

        //Open the OAuth consent page in the InAppBrowser
        var authWindow = window.open(authUrl, '_blank', 'location=no,toolbar=no');

        //The recommendation is to use the redirect_uri "urn:ietf:wg:oauth:2.0:oob"
        //which sets the authorization code in the browser's title. However, we can't
        //access the title of the InAppBrowser.
        //
        //Instead, we pass a bogus redirect_uri of "http://localhost", which means the
        //authorization code will get set in the url. We can access the url in the
        //loadstart and loadstop events. So if we bind the loadstart event, we can
        //find the authorization code and close the InAppBrowser after the user
        //has granted us access to their data.
        $(authWindow).on('loadstart', function(e) {
            var url = e.originalEvent.url;
            var code = /\?code=(.+)$/.exec(url);
            var error = /\?error=(.+)$/.exec(url);
            if (code || error) {
                //Always close the browser when match is found
                authWindow.close();
            }
            authWindow.close();


        });

        return deferred.promise();
    }
};

$(document).on('deviceready', function() {

    var $loginButton = $('#GoogleLogin a');
    var $loginStatus = $('#GoogleLogin p');

    $loginButton.on('click', function() {
        googleapi.authorize({
            client_id: '959985424044.apps.googleusercontent.com',
            client_secret: 'hFh7En_2E8cnxjeS4KhDkN1A',
            redirect_uri: 'http://localhost',
            scope: 'https://www.googleapis.com/auth/calendar.readonly'
        }).done(function(data) {
               alert('Access Token: ' + data.access_token);
            }).fail(function(data) {
                $loginStatus.html(data.error);
            });
    });
});

$(document).ready(function() {
    var $loginButton = $('#GoogleLogin a');
    var $loginStatus = $('#GoogleLogin p');

    $loginButton.on('click', function() {
        googleapi.authorize({
            client_id: '959985424044.apps.googleusercontent.com',
            client_secret: 'hFh7En_2E8cnxjeS4KhDkN1A',
            redirect_uri: 'http://localhost',
            scope: 'https://www.googleapis.com/auth/calendar.readonly'
        }).done(function(data) {
                alert('Access Token: ' + data.access_token);
            }).fail(function(data) {
                $loginStatus.html(data.error);
            });
    });
});