const toast=document.getElementById('toast'),modal=document.getElementById('modal');
let reports=Number(localStorage.getItem('ek-reports')||0),points=Number(localStorage.getItem('ek-points')||0),toastTimer;
const $=id=>document.getElementById(id);
function updateStats(){$('reports').textContent=reports;$('points').textContent=points;}
updateStats();
const actions={
 photo:['Zgłoszenie zdjęcia','Podejrzany gołąb w kapturze. Po analizie ustalono, że to po prostu gołąb.'],
 place:['Zgłoszenie lokalizacji','Współrzędne fikcyjne: 52° N, 21° E. Podejrzana ławka została pouczona.'],
 tip:['Anonimowy donos','Treść: „Ktoś zjadł ostatniego pączka”. Podejrzany: głód.'],
 threats:['Lista zagrożeń','1. Człowiek, który mówi „zaraz będę”. 2. Gołąb zbyt pewny siebie. 3. Mokra skarpetka.'],
 map:['Mapa zgłoszeń','Mapa niedostępna, bo kartograf poszedł szukać drugiej skarpetki.'],
 ranking:['Ranking kofidentów','🥇 Pan Mietek — 42 punkty za zgłoszenie krzywo postawionego kubka. Postać fikcyjna.']
};
document.querySelectorAll('.tile').forEach(btn=>btn.addEventListener('click',()=>{
 const item=actions[btn.dataset.action];$('modalTitle').textContent=item[0];$('modalText').textContent=item[1];
 $('confirmBtn').textContent=['photo','place','tip'].includes(btn.dataset.action)?'Dodaj fikcyjne zgłoszenie':'Przyjmuję ten absurd';
 modal.dataset.action=btn.dataset.action;modal.showModal();
}));
$('confirmBtn').addEventListener('click',()=>{
 if(['photo','place','tip'].includes(modal.dataset.action)){
  reports++;points+=10;localStorage.setItem('ek-reports',reports);localStorage.setItem('ek-points',points);updateStats();showToast('Zapisano lokalnie. Żaden donos nie opuścił telefonu.');
 }else showToast('Absurd zatwierdzony przez komisję fikcyjną.');
 modal.close();
});
$('closeBtn').addEventListener('click',()=>modal.close());
$('aboutBtn').addEventListener('click',()=>{
 $('modalTitle').textContent='O aplikacji';$('modalText').textContent='e-Kofident to parodia. Nie wysyła zgłoszeń, nie pobiera lokalizacji, nie używa aparatu i nie przesyła danych na serwer.';
 $('confirmBtn').textContent='Rozumiem';modal.dataset.action='info';modal.showModal();
});
document.querySelectorAll('.bottom-nav button').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const tab=btn.dataset.tab;
 if(tab==='Start'){document.querySelector('.tiles').hidden=false;document.querySelector('.section-title').hidden=false;$('profilePanel').hidden=true;showToast('Strona główna. Komisja obserwuje gołębie.');}
 if(tab==='Zgłoszenia'){document.querySelector('.tiles').hidden=true;document.querySelector('.section-title').hidden=true;$('profilePanel').hidden=true;showToast(`Masz ${reports} fikcyjnych zgłoszeń. Zero prawdziwych donosów.`);}
 if(tab==='Porady'){document.querySelector('.tiles').hidden=true;document.querySelector('.section-title').hidden=true;$('profilePanel').hidden=true;showToast('Porada nr 1: nie oskarżaj gołębia bez dowodów.');}
 if(tab==='Profil'){document.querySelector('.tiles').hidden=true;document.querySelector('.section-title').hidden=true;$('profilePanel').hidden=false;$('profilePanel').scrollIntoView({behavior:'smooth',block:'center'});}
}));
$('resetBtn').addEventListener('click',()=>{reports=0;points=0;localStorage.removeItem('ek-reports');localStorage.removeItem('ek-points');updateStats();showToast('Statystyki wyzerowane. Gołąb odetchnął.');});
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2800);}
function updateClock(){const d=new Date();$('clock').textContent=d.toLocaleTimeString('pl-PL',{hour:'2-digit',minute:'2-digit'});}
updateClock();setInterval(updateClock,30000);
if('serviceWorker' in navigator && location.protocol.startsWith('http')) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
