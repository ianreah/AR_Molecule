var theWorld = {
    initialize: function() {
		var tracker = new AR.Tracker("res/caffeine.wtc");
		var overlay = new AR.Label("X", 1);
		
		new AR.Trackable2DObject(tracker, "target", {drawables: {cam: overlay}});
    }
};

theWorld.initialize();