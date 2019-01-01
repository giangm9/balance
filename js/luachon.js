Vue.component("action-selector", {
  props: ["name", "act", "url", "time", "img"],
  template:
    "       <div class='select-wrapper'>" +
    "       <button class='select-button' v-on:click='act(url, time)'> " +
    "           <img class='select-icon' :src='img'/>" +
    "           <label class='select-label'>  " +
    "           {{name}}" +
    "           </label>" +
    "       </button>" +
    "   </div>"
});

var luachon = new Vue({
  el: "#luachon",
  data: {
    sceneName: "Lựa chọn hoạt động",
    time: "5min",
    actions: [
      {
        name: "Thư giãn",
        icon: "img/1.png",
        url: "a_thugian.html"
      },
      {
        name: "Phân tán suy nghĩ",
        icon: "img/2.png",
        url: "a_phantan.html"
      },
      {
        name: "Khích lệ bản thân",
        icon: "img/3.png",
        url: "a_khichle.html"
      },
      {
        name: "Giải thoát suy nghĩ tiêu cực",
        icon: "img/4.png",
        url: "a_giaithoat.html"
      },
      {
        name: "Hít thở",
        icon: "img/5.png",
        url: "a_hittho.html"
      },
      // RANDOM MUST BE PUT AT THE LAST
      // OR CHANGE act METHOD
      {
        name: "Ngẫu nhiên",
        icon: "img/6.png",
        url: "random"
      }
    ]
  },
  methods: {
    act: function(url, time) {
      if (url == "random") {
        var actions = this.$data.actions;
        var action = actions[Math.floor(Math.random() * (actions.length - 1))];
        url = action.url;
      }
      window.location.href = url + "?time=" + this.time;
    }
  }
});
