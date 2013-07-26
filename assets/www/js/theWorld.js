var theWorld = {
    initialize: function() {
		var tracker = new AR.Tracker("res/caffeine.wtc");
		
		var model = new AR.Model("res/caffeine.wt3", {
			scale: { x: 0.1, y: 0.1, z: 0.1 }
		});
		
		new AR.Trackable2DObject(tracker, "target", {drawables: {cam: model}});
    }
};

theWorld.initialize();