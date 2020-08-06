setup = function() {
	//Over & Out Events 
	//Outer Div 
    t = 0;
	jQuery("#outeroverout").mouseover(function(){
	//alert('#outerTextoverout-> over');
	console.log('#outerTextoverout-> over');
	jQuery("#outerTextoverout").text("mouse over");

     t = t + 1
	jQuery("#outerCounterOver"). text(t + "overs");
    });

     z = 0;
	jQuery("#outeroverout").mouseout(function(){
		//console.log('outerTextoverout-> out');
		jQuery("#outerTextoverout").text("mouse out");

     z = z + 1;
	jQuery("#outerCounterOut"). text(z + "outs");
	});

	//Inner Div

    a = 0;
     jQuery("#inneroverout").mouseover(function() {
	// console.log('#innerTextoverout-> over');
	jQuery("#innerTextoverout").text("mouse over");


    a = a + 1;
	jQuery("#innerCounterOver").text(a + " overs");
    });

    i = 0;
    jQuery("#inneroverout").mouseout(function() {
	//console.log('innerTextoverout-> out');
	jQuery("#innerTextoverout").text("mouse out");

     i = i + 1;
	jQuery("#innerCounterOut").text(i + "outs");
    });

    // Enter and Leave Events
    // Outer Div
    d = 0;
    jQuery("#outerenterleave").mouseenter(function(){
    	//console.log('div.enterleave-> enter');
    	jQuery("#outerTextenterleave").text("mouse enter");

   d = d + 1;
    	jQuery("#outerCounterEnter").text(d + "enters");
    });

    n = 0;
    jQuery("#outerenterleave").mouseleave(function(){
    	//console.log('outerenterleave-> exit');
    	jQuery("#outerTextenterleave").text("mouse leave");

   n = n + 1;
    	jQuery("#outerCounterleave").text(n + "leave");

    });

    //Inner Div

    c = 0;
    jQuery("#innerenterleave").mouseenter(function(){
    	//console.log('div enterleave-> enter');
    	jQuery("#innerTextenterleave").text("mouse enter");

   c = c + 1;
    	jQuery("#innerCounterEnter").text(c + "enters");
    });

    y = 0;
    jQuery("#innerenterleave").mouseleave(function(){
    	// console.log('innerTextenterleave-> exit');
    	jQuery("#innerTextenterleave").text("mouse leave");

    	y = y + 1;
    	jQuery("#innerCounterLeave").text(y + "leaves");
    });

}

jQuery(document).ready(setup)
