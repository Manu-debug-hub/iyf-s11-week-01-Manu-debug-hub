// main.js - small behaviors: set year and toggle nav
document.addEventListener('DOMContentLoaded',function(){
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var btn=document.getElementById('navToggle');
  var nav=document.getElementById('main-nav');
  if(btn && nav){
    btn.addEventListener('click',function(){
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      var hidden = nav.getAttribute('aria-hidden') === 'true';
      nav.setAttribute('aria-hidden', String(!hidden));
    });
  }
});
