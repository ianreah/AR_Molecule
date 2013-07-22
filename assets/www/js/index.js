var app = {
    initialize: function() {
		document.addEventListener('deviceready', this.deviceready, false);
    },

    deviceready: function() {
        // hide the .pending <p> and show the .loading <p>
        document.querySelector('#deviceready .pending').className += ' hide';
        var loading = document.querySelector('#deviceready .loading');
        loading.className = loading.className.split('hide').join('');
    }
};

app.initialize();