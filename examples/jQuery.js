var jsdom = require('jsdom');

jsdom.env({
    html: 'http://reddit.com/'
  , scripts: ['http://code.jquery.com/jquery-1.7.1.min.js']

  , done: function(errors, window) {
		var $ = window.$;
		var cnt = 0;

		$("a.title").each(function() {
		    if (cnt++ < 3)
		        console.log(  $(this).text()  );
		});    
  }
});


