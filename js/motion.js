/* MOTION — GSAP + ScrollTrigger only. Hidden states are set here (never in CSS) so the page is complete without JS or with reduced motion. */
(function(){
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(pointer:fine)').matches,small=matchMedia('(max-width:900px)').matches;
const intro=$('#intro');
if(!window.gsap||!window.ScrollTrigger||rm){intro&&intro.remove();return}
gsap.registerPlugin(ScrollTrigger);document.documentElement.style.scrollBehavior='smooth';
const chars=el=>{el.innerHTML=[...el.textContent].map(c=>`<span class="ch">${c}</span>`).join('');return $$('.ch',el)};

/* ---------- HERO ENTRANCE (built paused → hidden states apply immediately, played when the intro opens) ---------- */
const heroC=$$('.hero-name .split').flatMap(chars);
const hero=gsap.timeline({paused:true,defaults:{ease:'power3.out'}})
 .from(heroC,{yPercent:118,duration:1.1,stagger:.045},0)
 .fromTo('.portrait .art',{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:1.4,ease:'power3.inOut'},.15)
 .from('.portrait .art img',{scale:1.3,duration:1.8},.15)
 .from('.hero-meta>*,.hero-sub,.hero-foot>*',{opacity:0,y:14,stagger:.08,duration:.9},.7)
 .from('.hero-rule',{scaleX:0,transformOrigin:'left',duration:1.5,ease:'power3.inOut'},.5)
 .from('.portrait .anno',{opacity:0,x:-12,stagger:.2,duration:.8},1.5);

/* ---------- INTRO: draw logo → wordmark → line → logo-shaped hole expands into the hero ---------- */
let seen=false;try{seen=sessionStorage.getItem('nf')}catch(e){}
if(seen){intro.remove();hero.timeScale(1.6).play()}else{
 const cx=innerWidth/2-170+22,cy=innerHeight/2,X=cx-22,Y=cy-42,pct={v:0};
 gsap.set(['#hole','#lstroke'],{x:X,y:Y});gsap.set('#hole',{scale:0,svgOrigin:`${cx} ${cy}`});gsap.set('#iring',{attr:{cx,cy},opacity:0});
 const tl=gsap.timeline({defaults:{ease:'power3.out'},onComplete:()=>{intro.remove();try{sessionStorage.setItem('nf','1')}catch(e){}}});
 tl.fromTo('#lstroke',{strokeDashoffset:1},{strokeDashoffset:0,duration:1.2,ease:'power2.inOut'},.2)
  .fromTo('.iname b',{yPercent:112},{yPercent:0,duration:.9},.8)
  .from('.iname i',{opacity:0,duration:.6},1.1)
  .to('#iring',{opacity:1,duration:.4},1)
  .to('#iring',{rotation:360,svgOrigin:`${cx} ${cy}`,duration:2.4,ease:'none'},1)
  .fromTo('.iline',{scaleX:0},{scaleX:1,duration:1.1,ease:'power3.inOut'},1)
  .to(pct,{v:100,duration:1.7,ease:'power1.inOut',onUpdate:()=>{$('#ipct').textContent=Math.round(pct.v)}},.2)
  .addLabel('open',1.95)
  .set('#hole',{scale:1},'open')
  .to(['.iw','#lstroke','#iring','.ib','#skip'],{opacity:0,duration:.35,ease:'none'},'open')
  .to('#hole',{scale:110,duration:1.5,ease:'power3.in'},'open+=.1')
  .add(()=>hero.play(),'open+=.65');
 $('#skip').onclick=()=>tl.timeScale(4);
}

/* ---------- PROGRESS + SECTION BACKGROUND SHIFT ---------- */
ScrollTrigger.create({start:0,end:'max',onUpdate:s=>{gsap.set('#prog',{scaleX:s.progress});$('#pc').textContent=Math.round(s.progress*100)}});
gsap.fromTo('#manifesto',{backgroundColor:'#111110',color:'#F8F7F3'},{backgroundColor:'#EAE7DF',color:'#171715',ease:'none',scrollTrigger:{trigger:'#manifesto',start:'top 92%',end:'top 22%',scrub:true}});
gsap.from('.vl',{scaleY:0,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:'#manifesto',start:'top 60%',end:'bottom 70%',scrub:true}});

/* ---------- HERO SCROLL: name rises, portrait expands 1 → 1.12, supporting copy leaves ---------- */
gsap.timeline({scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}})
 .to('.hero-name',{yPercent:-24,ease:'none'},0).to('.portrait',{yPercent:-10,ease:'none'},0).to('.portrait .art',{scale:1.12,ease:'none'},0)
 .to('.hero-sub,.hero-meta',{opacity:0,ease:'none'},0);

/* ---------- TEXT REVEALS ---------- */
$$('.rl').forEach(h=>gsap.from($$('.ln>span',h),{yPercent:112,duration:1.1,stagger:.11,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 84%',once:true}}));
$$('.rv,[data-reveal]').forEach(el=>{gsap.from(el,{opacity:0,y:44,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
 const a=$('.art',el);if(a&&el.matches('.pj'))gsap.from(a,{clipPath:'inset(100% 0 0 0)',duration:1.3,ease:'power3.inOut',scrollTrigger:{trigger:el,start:'top 85%',once:true}})});
gsap.from('.five span',{opacity:.08,yPercent:45,stagger:.2,ease:'none',scrollTrigger:{trigger:'.five',start:'top 88%',end:'bottom 62%',scrub:true}});
gsap.to('.mq .tr',{xPercent:-38,ease:'none',scrollTrigger:{trigger:'.mq',start:'top bottom',end:'bottom top',scrub:.6}});

/* ---------- SPATIAL: images drift at their own speed ---------- */
$$('.art img').forEach(i=>gsap.fromTo(i,{yPercent:-5},{yPercent:5,ease:'none',scrollTrigger:{trigger:i.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
gsap.fromTo('.pt .art',{clipPath:'inset(9% 9% 9% 9%)'},{clipPath:'inset(0% 0% 0% 0%)',ease:'none',scrollTrigger:{trigger:'.pt',start:'top 85%',end:'center 45%',scrub:true}});
gsap.from('.pt .anno',{opacity:0,x:24,scrollTrigger:{trigger:'.pt',start:'top 55%',once:true}});

/* ---------- MECHANICAL: wheel rolls the track; rotation derived from distance travelled ---------- */
const wheel=$('#wheel'),track=$('#track');
ScrollTrigger.create({trigger:track,start:'top 88%',end:'bottom 30%',scrub:true,onUpdate:s=>{
 const p=s.progress,W=track.clientWidth-wheel.clientWidth,x=p*W,R=wheel.clientWidth*.49;
 gsap.set(wheel,{x});gsap.set('#wg',{rotation:x/R*57.2958,svgOrigin:'100 100'});
 $$('.wl').forEach(l=>gsap.set(l,{opacity:Math.max(0,1-Math.abs(p-l.dataset.p)*9)}));
 $$('.tk').forEach(t=>t.classList.toggle('on',p>=t.dataset.at-.02&&p<(+t.dataset.at+.3)))}});

/* ---------- HOVER: displacement on project images, floating archive preview ---------- */
if(fine){
 $$('.pj').forEach(p=>{const a=$('.art',p),im=$('img',a);
  p.addEventListener('mouseenter',()=>{a.classList.add('hov');gsap.to('#dm',{attr:{scale:34},duration:.45,ease:'power2.out'});gsap.to(im||a,{scale:1.025,duration:.9,ease:'power3.out'})});
  p.addEventListener('mouseleave',()=>{gsap.to('#dm',{attr:{scale:0},duration:.6,ease:'power2.inOut',onComplete:()=>a.classList.remove('hov')});gsap.to(im||a,{scale:1,duration:.9,ease:'power3.out'})})});
 const pv=$('#pv'),pi=$('img',pv),px=gsap.quickTo(pv,'x',{duration:.5,ease:'power3'}),py=gsap.quickTo(pv,'y',{duration:.5,ease:'power3'});
 $$('.row').forEach(r=>{r.addEventListener('mouseenter',()=>{const s=r.dataset.img;pi.style.display='';pi.src=s?'assets/images/'+s:'';pv.dataset.ph=$('b',r).textContent;gsap.to(pv,{opacity:1,scale:1,duration:.4})});
  r.addEventListener('mouseleave',()=>gsap.to(pv,{opacity:0,scale:.92,duration:.3}))});
 addEventListener('mousemove',e=>{px(e.clientX+28);py(e.clientY-90)});gsap.set(pv,{scale:.92});
 /* cursor: only over meaningful targets */
 const c=$('#cur'),cx=gsap.quickTo(c,'x',{duration:.25}),cy=gsap.quickTo(c,'y',{duration:.25});
 addEventListener('mousemove',e=>{cx(e.clientX+46);cy(e.clientY+4)});
 document.addEventListener('mouseover',e=>{const t=e.target.closest('[data-cursor]');c.textContent=t?t.dataset.cursor:'';gsap.to(c,{opacity:t?1:0,duration:.25})});
 /* hero pointer response */
 const hs=$('#hero'),qx=gsap.quickTo('.portrait','x',{duration:.9,ease:'power3'}),qy=gsap.quickTo('.portrait','y',{duration:.9,ease:'power3'}),nx=gsap.quickTo('.hero-name','x',{duration:1.1,ease:'power3'});
 hs.addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;qx(x*-26);qy(y*-18);nx(x*10);$('#co').textContent=`X ${(x*100).toFixed(2)} · Y ${(y*100).toFixed(2)}`});
 /* magnetic */
 $$('[data-mag]').forEach(m=>{const mx=gsap.quickTo(m,'x',{duration:.5,ease:'power3'}),my=gsap.quickTo(m,'y',{duration:.5,ease:'power3'});
  m.addEventListener('mousemove',e=>{const r=m.getBoundingClientRect();mx((e.clientX-r.left-r.width/2)*.3);my((e.clientY-r.top-r.height/2)*.3)});m.addEventListener('mouseleave',()=>{mx(0);my(0)})});
}
/* ---------- CONTACT: moving object on the closing line ---------- */
gsap.to('.road i',{left:'100%',duration:7,ease:'none',repeat:-1});
addEventListener('load',()=>ScrollTrigger.refresh());
})();
