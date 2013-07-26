var theWorld = {
    initialize: function() {
		var model = new AR.Model("res/caffeine.wt3", {
			scale: { x: 0.1, y: 0.1, z: 0.1 }
		});
		
		var spinAnimation = new AR.PropertyAnimation(model, "rotate.roll",
				0, 360, 10000, {type: AR.CONST.EASING_CURVE_TYPE.LINEAR});
		
		var tracker = new AR.Tracker("res/caffeine.wtc", {
			onLoaded : function() {
				spinAnimation.start(-1);
			}
		});
		
		new AR.Trackable2DObject(tracker, "target", {drawables: {cam: model}});
    }
};

theWorld.initialize();