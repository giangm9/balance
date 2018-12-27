var keyframes = anime({
  targets: '#keyframes .el',
  translateX: [
    { value: 250, duration: 500, delay: 500, elasticity: 0 },
    { value: 0, duration: 1000, delay: 500, elasticity: 0 }
  ],
  translateY: [
    { value: 20, duration: 500, delay: 1000, elasticity: 100 },
    { value: 0, duration: 500, delay: 1000, elasticity: 100 }
  ],
  scaleX: [
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900, elasticity: 300 },
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900, elasticity: 300 }
  ],
  scaleY: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  loop: true
});

keyframes.pause();
var time = 5 * 60;
if (getParam('time') == '10min') {
    time = 10 * 60;
}
var countdown = new Vue({
    el: '#countdown',
    data : {
        sceneName : "",
        content : getParam('title'),
        time : time,
        timer : null
    },
    methods : {

        start : function() {
            this.timer = setInterval(() => this.countdown(), 1000)
            keyframes.play();
        },

        countdown : function() {
            this.time--;
        }
    }

})


