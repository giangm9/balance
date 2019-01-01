var time = 5 * 60;
if (getParam("time") == "10min") {
  time = 10 * 60;
}
var ring = null;
var countdown = new Vue({
  el: "#countdown",
  data: {
    sceneName: "",
    content: getParam("title"),
    time: time,
    min: toMin(time),
    timer: null,
    percent: 0
  },
  methods: {
    start: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
    },

    countdown: function() {
      if (this.time == 0) {
        return;
      }
      this.time--;
      this.min = toMin(this.time);
      this.percent = ((time - this.time) / time) * 100;
      if (ring) {
        ring.update(this.percent);
      }
    }
  }
});

function toMin(time) {
  var min = Math.round(time / 60);
  var sec = time % 60;
  var result = min.toString();
  result += ":";
  if (sec < 10) result += "0";
  return result + sec.toString();
}

window.addEventListener("DOMContentLoaded", function() {
  var chart = document.getElementById("chart");
  var size = chart.offsetWidth;

  var options = {
    scaleColor: false,
    trackColor: "rgba(255,255,255,0.3)",
    barColor: "#E63946",
    lineWidth: size * 0.1,
    lineCap: "butt",
    size: size * 0.9,
    animate: false
  };

  ring = new EasyPieChart(chart, options);
});
