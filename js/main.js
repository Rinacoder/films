var popup_e = document.getElementById('popup_e');
var popup_r = document.getElementById('popup_r');
var btn_e = document.getElementById('popup_e_b');
var btn_r = document.getElementById('popup_r_b');
var btn_einr = document.getElementById('popup__entrance');
var btn_rine = document.getElementById('popup__registration');
var close_e = document.getElementById('popup__close_e');
var close_r = document.getElementById('popup__close_r');
var bodyNode = document.body || document.getElementsByTagName('body')[0];

var check = document.getElementById('checkbox');
var reg_b = document.querySelector('#registrationBatton');



if(check.checked)
{
console.log(1);
reg_b.disabled = false;
}
else{
  console.log(2);
  
  reg_b.disabled = true;
}

btn_e.onclick = function(){
  popup_e.style.display = "block";
  bodyNode.style.overflow = "hidden";
}

btn_r.onclick = function(){
  popup_r.style.display = "block";
  bodyNode.style.overflow = "hidden";
}

btn_einr.onclick = function(){
  popup_e.style.display = "block";
  popup_r.style.display = "none";
}

btn_rine.onclick = function(){
  popup_r.style.display = "block";
  popup_e.style.display = "none";
}

close_r.onclick = function(){
  popup_r.style.display = "none";
  bodyNode.style.overflow = "auto";
}

close_e.onclick = function(){
  popup_e.style.display = "none";
  bodyNode.style.overflow = "auto";
}


