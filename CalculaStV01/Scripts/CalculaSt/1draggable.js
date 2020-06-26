//######################################################################################################
//############################################ | DRAGGABLE | ###########################################
//######################################################################################################
$( "#ferramentas" ).draggable({
classes: {"ui-draggable": "highlight"},
cursor: "crosshair",
//cursorAt: { left: 5 },
//grid: [ 50, 20 ],
//helper: "clone",
//iframeFix: true,
opacity: 0.35,
//refreshPositions: true,
//revert: true,
//scroll: false,
//snap: true,
//drag: function( event, ui ) {
	// Keep the left edge of the element
	// at least 100 pixels from the container
	//ui.position.left = Math.min( 100, ui.position.left );
//  },
//containment: "parent",
containment: "document",
});