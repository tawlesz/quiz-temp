const $=(s,r=document)=>r.querySelector(s),app=$('#app'),L='ABCDEFGH';
const LS=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const uid=()=>Math.random().toString(36).slice(2,9);
const base=()=>JSON.parse(JSON.stringify(window.BUILTIN||[])).map(d=>(d.cards.forEach((c,i)=>c.id=d.id+'-'+i),d));
let decks=LS('qz_decks')||base(),stats=LS('qz_stats')||{},Z=null;
const saveD=()=>LS('qz_decks',decks),D=id=>decks.find(d=>d.id===id);
const h=x=>{app.innerHTML=x;scrollTo(0,0)};
const toast=m=>{const t=$('#toast');t.textContent=m;t.className='on';clearTimeout(toast.t);toast.t=setTimeout(()=>t.className='',2600)};
const go=x=>location.hash===x?route():location.hash=x;
const cnt=d=>{const m=d.cards.filter(c=>c.t=='mc').length,f=d.cards.length-m;return [m&&m+' múltipla escolha',f&&f+(f>1?' cartões':' cartão')].filter(Boolean).join(', ')||'vazio'};
function md(s){const k=[];s=String(s||'').replace(/```\w*\n?([\s\S]*?)```/g,(_,c)=>(k.push(c.replace(/\n$/,'')),'\u0001'+(k.length-1)+'\u0001'));
s=esc(s).replace(/(^\|.*\|[ \t]*(\n|$))+/gm,t=>{const r=t.trim().split('\n').filter(l=>!/^\|[\s:|-]+\|$/.test(l));return '<div class=tw><table>'+r.map((l,i)=>'<tr>'+l.replace(/^\||\|$/g,'').split('|').map(c=>{const g=i?'td':'th';return `<${g}>${c.trim()}</${g}>`}).join('')+'</tr>').join('')+'</table></div>'});
s=s.replace(/`([^`\n]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>').replace(/^- (.*)$/gm,'<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/g,m=>'<ul>'+m.replace(/\n/g,'')+'</ul>').replace(/\n/g,'<br>').replace(/<br>(<(ul|div|\u0001))/g,'$1').replace(/(<\/(ul|div)>)<br>/g,'$1');
return s.replace(/\u0001(\d+)\u0001/g,(_,i)=>'<pre><code>'+esc(k[i])+'</code></pre>')}
/* tema */
const setTh=t=>{document.documentElement.dataset.theme=t;LS('qz_theme',t);$('#theme').textContent=t=='dark'?'Modo claro':'Modo escuro'};
setTh(document.documentElement.dataset.theme||'light');$('#theme').onclick=()=>setTh(document.documentElement.dataset.theme=='dark'?'light':'dark');
/* rotas */
function route(){const p=location.hash.slice(2).split('/'),d=D(p[1]);if(p[0]!='d'||!d)return home();
if(p[2]=='quiz')return Z&&Z.d==d.id?quiz():go('#/d/'+d.id);if(p[2]=='result')return Z&&Z.d==d.id&&Z.res.length?result(d):go('#/d/'+d.id);
return p[2]=='manage'?manage(d):deck(d)}
addEventListener('hashchange',route);
function home(){h(`<h1>Escolha um baralho</h1><div class=grid>${decks.map(d=>{const s=stats[d.id];return `<a class=card href="#/d/${d.id}"><h2>${esc(d.nome)}</h2><p>${esc(d.desc||'')}</p><small>${cnt(d)}${s?`, melhor resultado ${s.best}%`:''}</small></a>`}).join('')}</div>
<div class=row><button class=btn onclick=newDeck()>Novo baralho</button></div>
<details class=more><summary>Backup e dados</summary><p class=mu>Suas edições ficam salvas neste navegador. Para levar a outro aparelho, exporte e importe o arquivo.</p><div class=row><button class=btn onclick=exp()>Exportar</button><label class=btn>Importar<input type=file accept=.json hidden onchange=imp(this)></label><button class="btn danger" onclick=reset()>Restaurar originais</button></div></details>`)}
function deck(d){h(`<a class=back href="#/">‹ Baralhos</a><h1>${esc(d.nome)}</h1><p class=mu>${esc(d.desc||'')}</p><p>${cnt(d)}</p><div class=row><button class="btn pri" ${d.cards.length?'':'disabled'} onclick="start('${d.id}')">Iniciar quiz</button><a class=btn href="#/d/${d.id}/manage">Gerenciar cartões</a></div>
${d.resumo&&d.resumo.length?`<details class=more><summary>Resumo para revisão rápida</summary><div class=tw><table>${d.resumo.map((r,i)=>'<tr>'+r.map(c=>i?`<td>${md(c)}</td>`:`<th>${esc(c)}</th>`).join('')+'</tr>').join('')}</table></div></details>`:''}`)}
/* quiz */
function start(id,ids){const d=D(id);Z={d:id,cards:d.cards.filter(c=>!ids||ids.includes(c.id)),i:0,res:[],lock:0};go('#/d/'+id+'/quiz')}
function quiz(){const d=D(Z.d),c=Z.cards[Z.i];if(!c)return go('#/d/'+d.id+'/result');
const top=`<div class=top><a class=back href="#/d/${d.id}">‹ Sair</a><span>${Z.i+1} de ${Z.cards.length}</span></div><div class=bar><i style="width:${Z.i/Z.cards.length*100}%"></i></div><div class=tema>${esc(c.tema||'')}</div>`;
h(top+(c.t=='mc'?`<div class=md>${md(c.q)}</div><div class=opts>${c.o.map((o,i)=>`<button class=opt onclick=pick(${i})><b>${L[i]}</b><span class=md>${md(o)}</span></button>`).join('')}</div><div id=fb></div>`
:`<div class=flip onclick=flip()><div class="face front"><div class=md>${md(c.q)}</div><small>Toque para virar</small></div><div class="face back"><div class=md>${md(c.a)}</div></div></div><div id=fb></div>`))}
const nb=()=>`<button class="btn pri" onclick=next()>${Z.i+1<Z.cards.length?'Próxima':'Ver resultado'}</button>`;
function pick(i){if(Z.lock)return;Z.lock=1;const c=Z.cards[Z.i],ok=i==c.c;Z.res.push({id:c.id,ok,pick:i});
document.querySelectorAll('.opt').forEach((b,k)=>{b.disabled=true;if(k==c.c)b.classList.add('ok');else if(k==i)b.classList.add('no')});
$('#fb').innerHTML=`<div class="fb ${ok?'ok':'no'}"><b>${ok?'Correto!':'Incorreto. A resposta certa é '+L[c.c]+'.'}</b><div class=md>${md(c.j||'')}</div></div>${nb()}`;$('#fb').scrollIntoView({block:'nearest'})}
function flip(){$('.flip').classList.toggle('on');if(!Z.lock){Z.lock=1;$('#fb').innerHTML='<p class=mu>Você acertou?</p><div class=row><button class="btn okb" onclick=grade(1)>Acertei</button><button class="btn nob" onclick=grade(0)>Errei</button></div>'}}
function grade(ok){Z.res.push({id:Z.cards[Z.i].id,ok:!!ok});next()}
function next(){Z.lock=0;Z.i++;quiz()}
function result(d){const r=Z.res,ok=r.filter(x=>x.ok).length,pct=Math.round(ok/r.length*100),bad=r.filter(x=>!x.ok);
const s=stats[d.id]||{best:0};stats[d.id]={best:Math.max(s.best,pct),last:pct};LS('qz_stats',stats);
h(`<h1>Resultado</h1><div class=score>${ok} de ${r.length}</div><p class=mu>${pct}% de acerto${bad.length?'':'. Sem erros, parabéns!'}</p>
<div class=row>${bad.length?'<button class="btn pri" onclick=redo()>Refazer só as erradas</button>':''}<button class=btn onclick="start('${d.id}')">Refazer tudo</button><a class=btn href="#/d/${d.id}">Voltar</a></div>
${bad.length?'<h2>Questões que você errou</h2>':''}${bad.map(x=>{const c=d.cards.find(k=>k.id==x.id);if(!c)return '';
return `<div class=rev><div class=tema>${esc(c.tema||'')}</div><div class=md>${md(c.q)}</div>`+(c.t=='mc'?`<p class=no><b>Sua resposta: ${L[x.pick]}</b></p><div class=md>${md(c.o[x.pick])}</div><p class=ok><b>Correta: ${L[c.c]}</b></p><div class=md>${md(c.o[c.c])}</div><p class=mu>Justificativa</p><div class=md>${md(c.j||'')}</div>`:`<p class=ok><b>Resposta</b></p><div class=md>${md(c.a)}</div>`)+'</div>'}).join('')}`)}
const redo=()=>start(Z.d,Z.res.filter(x=>!x.ok).map(x=>x.id));
/* edição */
function manage(d){h(`<a class=back href="#/d/${d.id}">‹ ${esc(d.nome)}</a><h1>Gerenciar cartões</h1>
<details class=more open><summary>Adicionar cartão</summary>
<label class=f>Tipo</label><select id=ty onchange="$('#mc').hidden=this.value!='mc';$('#fl').hidden=this.value=='mc'"><option value=mc>Múltipla escolha</option><option value=flip>Cartão de virar (pergunta e resposta)</option></select>
<label class=f>Tema (opcional)</label><input id=nt>
<div id=mc><label class=f>Enunciado</label><textarea id=nq></textarea>${[0,1,2,3,4].map(i=>`<label class=f>Alternativa ${L[i]}${i>1?' (opcional)':''}</label><input class=oi>`).join('')}
<label class=f>Alternativa correta</label><select id=nc>${[0,1,2,3,4].map(i=>`<option value=${i}>${L[i]}</option>`).join('')}</select><label class=f>Justificativa</label><textarea id=nj></textarea></div>
<div id=fl hidden><label class=f>Frente (pergunta)</label><textarea id=fq></textarea><label class=f>Verso (resposta). Use três crases para blocos de código.</label><textarea id=fa></textarea></div>
<div class=row><button class="btn pri" onclick="add('${d.id}')">Adicionar</button></div></details>
<h2>Cartões (${d.cards.length})</h2><ul class=list>${d.cards.map((c,i)=>`<li><span>${i+1}. ${c.t=='mc'?'':'[virar] '}${esc(c.tema||c.q.slice(0,60))}</span><button class="btn sm danger" onclick="del('${d.id}','${c.id}')">Remover</button></li>`).join('')||'<li class=mu>Nenhum cartão.</li>'}</ul>
<div class=row><button class="btn sm" onclick="ren('${d.id}')">Renomear baralho</button><button class="btn sm danger" onclick="delDeck('${d.id}')">Excluir baralho</button></div>`)}
function add(id){const d=D(id),g=x=>$(x).value.trim();let c;
if($('#ty').value=='mc'){const o=[...document.querySelectorAll('.oi')].map((e,i)=>[i,e.value.trim()]).filter(x=>x[1]),q=g('#nq'),k=o.findIndex(x=>x[0]==+$('#nc').value);
if(!q||o.length<2||k<0)return toast('Preencha o enunciado, ao menos 2 alternativas e marque uma correta que esteja preenchida.');c={t:'mc',q,o:o.map(x=>x[1]),c:k,j:g('#nj')}}
else{const q=g('#fq'),a=g('#fa');if(!q||!a)return toast('Preencha frente e verso.');c={t:'flip',q,a}}
c.tema=g('#nt');c.id=uid();d.cards.push(c);saveD();toast('Cartão adicionado');manage(d)}
function del(id,cid){if(!confirm('Remover este cartão?'))return;const d=D(id);d.cards=d.cards.filter(c=>c.id!=cid);saveD();manage(d)}
function newDeck(){const n=(prompt('Nome do novo baralho:')||'').trim();if(!n)return;const d={id:'d'+uid(),nome:n,desc:'',cards:[]};decks.push(d);saveD();go('#/d/'+d.id+'/manage')}
function ren(id){const d=D(id),n=(prompt('Novo nome:',d.nome)||'').trim();if(n){d.nome=n;saveD();manage(d)}}
function delDeck(id){if(!confirm('Excluir o baralho inteiro?'))return;decks=decks.filter(d=>d.id!=id);saveD();go('#/')}
function exp(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(decks,null,1)],{type:'application/json'}));a.download='baralhos.json';a.click()}
function imp(i){const f=i.files[0];if(!f)return;f.text().then(t=>{try{let a=JSON.parse(t);a=Array.isArray(a)?a:[a];a.forEach(d=>{if(!d.nome||!Array.isArray(d.cards))throw 0;d.id=d.id||'d'+uid();d.cards.forEach(c=>c.id=c.id||uid());const k=decks.findIndex(x=>x.id==d.id);k<0?decks.push(d):decks[k]=d});saveD();toast('Importado');home()}catch(e){toast('Arquivo inválido.')}})}
function reset(){if(!confirm('Voltar aos baralhos originais? Suas edições serão perdidas.'))return;decks=base();stats={};saveD();LS('qz_stats',stats);home()}
route();
