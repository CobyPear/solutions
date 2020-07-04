function Stopwatch() {

    let seconds = 0;
    let running;
    var isPaused = false;
    Object.defineProperty(this, "seconds", {
        get: function () {
            return seconds;
        }
    });

    this.start = function() {
        if (running) {
            throw new Error("Stopwatch is already running!");
        };

        running = true;

        let timer = setInterval(countUp, 1000);
        // Object.defineProperty(this, isPaused, {
        //     get: function() {
        //         return isPaused;
        //     }
        // });
      
        function countUp() {
            if (running) {
                seconds++;
            }
        };
    };

    this.stop = function stop() {
        if (!running) {
            throw new Error("Stopwatch is already stopped!");
        };
        
        running = false;

        isPaused = false;
    };

    this.reset = function reset() {
        Object.defineProperty(this, timer, {
            get: function() {
                return timer;
            }
        })
        clearInterval(timer)
    };

    this.duration = function duration() {
        Object.defineProperty(this, seconds, {
            get: function () {
                return seconds;
            }
        });
        console.log(parseInt(seconds));
    };
}

const sw = new Stopwatch();