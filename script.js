
// Countdown to Sept 4, 6 PM ET
(function(){
  const el = document.getElementById('countdown');
  if(!el) return;
  const target = new Date('2025-09-04T18:00:00-04:00').getTime();
  function tick(){
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    el.textContent = `Launch in ${d}d ${h}h ${m}m ${s}s`;
  }
  setInterval(tick, 1000);
  tick();
})();
