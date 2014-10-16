jQuery.css3Animation
====================

A plugin to create css3 animations without writing any scripts.



files to be include:

jQuery.css3Animation.js

jQuery.min.js (ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js)

animate.css (https://raw.github.com/daneden/animate.css/master/animate.css)



usage
=====

use class `css3animate` to add functionality to the element.

and data items to generate effects or time delay.

	
To animate elements in a group

	data-group="[element group]" //optional



Choose animation effects to animate element 

	data-animation="'[any css3 animations from animate.css]" 

for reference about effects goto (http://daneden.github.io/animate.css/)



Can delay animation of an element using data-delay

	data-delay="[delay time in ms]"> //optional



example
=======


`````<div class="css3animate" data-group="[element group]" data-animation="'[any css3 animations from animate.css]" data-delay="[delay time in ms]"></div>`````
