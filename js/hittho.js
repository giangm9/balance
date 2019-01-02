var orb = document.getElementById("orb");
var start = document.getElementById("start");
var ok = document.getElementById("ok");
var pop = document.getElementById("pop");

start.onclick = function() {
  orb.classList.add("orb_1");
};

ok.onclick = function() {
  pop.style.display = "none";
};
