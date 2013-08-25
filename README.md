FictionalGameDesign
===================

just a fun experiment, has music and everything :-)

It's just a 1 day project I put together.  No real reason.  I'll try to clean up the code a bit, so it can 
hopefully be useful as a reference for some common techniques.

The music is made by [8bit.js](https://github.com/meenie/8bit.js).  

Some newish tricks/tools it uses:

 - [border-image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)
 - the Audio API (through 8bit.js)
 - a data URI as a background image (made with ijk.io's [pixel background designer](http://ijk.io/img/bg)] 
 - [Google Web Fonts](http://www.google.com/fonts)
 - the `::before` pseudo element (written as `:before` for CSS2 compatibility)
 - 3D CSS transform to turn the running character around
 
 
 Some oldish tricks/tools it uses:
 
 - jQuery
 - relative positioning (everything is in a sliding container, animated with `jQuery.animate`)
 - animated gif (for the walking animation)
   - two images alternate being visible: stand.gif and walk.gif
   - they change on keydown and keyup

- setInterval and [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/window.clearInterval)
