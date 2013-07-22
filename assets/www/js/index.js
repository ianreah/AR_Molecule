var app = {
    initialize: function() {
		document.addEventListener('deviceready', this.deviceready, false);
    },

    deviceready: function() {
        // hide the .pending <p> and show the .loading <p>
        document.querySelector('#deviceready .pending').className += ' hide';
        var loading = document.querySelector('#deviceready .loading');
        loading.className = loading.className.split('hide').join('');
        
        // load the AR world
        WikitudePlugin.isDeviceSupported(function() {
        	WikitudePlugin.loadARchitectWorld("assets/www/theWorld.html");
        },
        
        function() {
        	navigator.notification.alert('Unable to launch the augmented reality world on this device!');
        });
    }
};

app.initialize();