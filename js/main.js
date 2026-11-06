/* Renders content from data.js and wires non-animated UI (menu, index, section label). */
(function(){
const N=NF,$=(s,c=document)=>c.querySelector(s),B='assets/images/';
const img=(src,alt,lazy)=>`<img ${lazy===false?'':'loading="lazy"'} src="${B+src}" alt="${alt}" onerror="this.remove()">`;
const meta=p=>`<span>${p.n} — ${p.c}</span><span>Year — ${p.year||'to verify'} · Status — ${p.status||'to verify'}</span>`;
$('#wk').innerHTML=N.projects.map(p=>`<a class="pj ${p.cls}" href="#archive" data-cursor="Open" data-reveal>
 <div class="art" data-ph="${p.t} — ${B+p.img}">${img(p.img,p.t+' project visual')}</div>
 <div class="cp"><h3 class="t"><span>${p.t}</span><em>↗</em></h3><p>${p.d}</p><div class="mono">${meta(p)}</div></div></a>`).join('');
const all=N.projects.map(p=>[p.t,p.c,p.img]).concat(N.archiveExtra);
$('#rows').innerHTML=all.map((p,i)=>`<a class="row" href="#work" data-cursor="Open" data-img="${p[2]||''}"><span class="mono mute">00${i+1}</span><b>${p[0]}</b><span class="c mute">${p[1]}</span><span class="s mono mute">Status — to verify</span><span>↗</span></a>`).join('');
const bp='<svg viewBox="0 0 300 160" fill="none" stroke="currentColor" stroke-width=".7"><circle cx="110" cy="80" r="62"/><circle cx="110" cy="80" r="38" stroke-dasharray="3 3"/><circle cx="110" cy="80" r="8"/><path d="M110 8V152M38 80h144M190 80h100M190 18h100M190 142h100M286 18v124"/><path d="M280 18l6-6 6 6M280 142l6 6 6-6"/></svg>';
$('#labg').innerHTML=N.lab.map((l,i)=>`<div class="lc" data-reveal><span class="mono mute">${l[0]}</span>${i==0?bp:''}<h3>${l[1]}</h3></div>`).join('');
$('#colg').innerHTML=N.collection.map((c,i)=>`<figure class="ci" data-cursor="Explore" data-reveal><div class="art" data-ph="${c.t} ${c.r} — ${B+c.img}">${img(c.img,c.t)}</div><figcaption class="cap mono"><span>Nº 00${i+1} · ${c.k} — ${c.t}</span><span>Date — add</span></figcaption></figure>`).join('');
$('#jr').innerHTML=N.journal.map((t,i)=>`<div class="jr" data-reveal><span class="d mono mute">Unpublished</span><b>${t}</b><span class="c mono mute">Idea 0${i+1}</span><span>→</span></div>`).join('');
const L=N.links,mail=$('.em');
if(L.email){mail.outerHTML=`<a class="em" data-mag href="mailto:${L.email}" style="color:inherit">${L.email}</a>`}
$('#soc').innerHTML=[['GitHub',L.github],['LinkedIn',L.linkedin],['Instagram',L.instagram]].map(([n,u])=>u?`<a href="${u}" rel="noopener" target="_blank" data-mag>${n} ↗</a>`:`<span>${n} — to supply</span>`).join('');
$('#menu').innerHTML=N.nav.map((n,i)=>`<a href="${n[1]}"><small>0${i+1}</small>${n[0]}</a>`).join('');
$('#index').innerHTML=N.index.map((n,i)=>`<a href="${n[1]}" data-h="${n[1]}"><span>0${i}</span>${n[0]}</a>`).join('');
// menu / index
const mb=$('#burger'),mn=$('#menu'),ix=$('#index'),bi=$('#ix');
function menu(o){mn.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);mb.textContent=o?'Close':'Menu';document.body.style.overflow=o?'hidden':''}
mb.onclick=()=>menu(!mn.classList.contains('open'));mn.onclick=()=>menu(false);
bi.onclick=()=>{const o=ix.classList.toggle('open');bi.setAttribute('aria-expanded',o);bi.textContent=o?'Index −':'Index +'};ix.onclick=e=>e.target.closest('a')&&ix.classList.remove('open');
addEventListener('keydown',e=>{if(e.key==='Escape'){menu(false);ix.classList.remove('open')}});
// section label
const secs=[...document.querySelectorAll('section[data-l]')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const id='#'+e.target.id;$('#lbl').textContent='System / '+e.target.dataset.l;
 document.querySelectorAll('#index a').forEach(a=>a.classList.toggle('on',a.dataset.h===id&&a.textContent!=='Intro'));document.querySelectorAll('.nl').forEach(a=>a.classList.toggle('on',a.getAttribute('href')===id))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(s=>io.observe(s));
})();
