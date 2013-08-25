(function () {
    var direction, interval = 5000, timer,

        $document = $(document),
        $container = $('#slideContainer'),
        $char = $('#char'),
        $stand = $char.find("#stand"),
        $walk = $char.find("#walk"),
        shift,

        arrow = {
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };

    function speed(positive){
        var distance = 2000, str = positive ? "+=" : "-=";

        if (shift) {
            distance *= 3;
        }

        return str + distance;
    }

    function move() {
        var movement = speed(direction === arrow.left),

            width = $container.width(),
            left = $container.offset().left;

        if (left > -600 && direction === arrow.left) {
            $document.trigger("keyup");
            return;
        }
        if (left * -1 > (width * 100 - 500) && direction === arrow.right) {
            $document.trigger("keyup");
            return;
        }


        $container.stop(true).animate({
            left: movement
        }, interval, "linear"); // higher than desired interval for setInterval inaccuracy
    };

    $document.on("keydown", function (e) {
        if (e.which === arrow.left) {

            // need to flip it if we're not already facing left
            if (direction !== arrow.left) {
                $char.css({
                    transform: "rotateY(180deg)"
                });
            }
            direction = arrow.left;
        }
        else if (e.which === arrow.right) {
            if (direction !== arrow.right) {
                $char.css({
                    transform: "rotateY(0)"
                });
            }
            direction = arrow.right;
        }
        else {
            direction = null;
        }

        // Go faster with Shift
        shift = e.shiftKey;

        if (direction) {
            // swap to our walking animation
            $stand.hide();
            $walk.show();

            move();
            timer = setInterval(move, interval * 950);
        }
    });

    $document.on("keyup", function () {
        clearInterval(timer);
        $container.stop(true);  // remove all animations from the queue

        $walk.hide();
        $stand.show();
    });
})();