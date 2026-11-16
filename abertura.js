/* FOCAMS | Abertura "A roda dos caciques"
   Oito lideranças surgem em roda, o arco verde da logomarca envolve o círculo,
   o arco de flecha se arma e a flecha dispara para o alto, revelando o nome.
   A tela se abre num círculo que cresce do centro. Aparece em toda entrada. */
(function(){
  var reduz = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var css = [
  '#fo-ab{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;cursor:pointer}',
  '#fo-ab .fundo{position:absolute;inset:0;width:100%;height:100%}',
  '#fo-ab .fundo rect.tela{fill:#0E2A1F}',
  '#fo-ab .fundo .furo{transform-box:fill-box;transform-origin:center;transform:scale(0)}',
  '#fo-ab.sai .fundo .furo{animation:foFuro 1.15s cubic-bezier(.7,0,.2,1) forwards}',
  '@keyframes foFuro{to{transform:scale(1)}}',
  '#fo-ab .grade{position:absolute;inset:0;background-image:repeating-linear-gradient(45deg,#C9973F 0 1px,transparent 1px 22px),repeating-linear-gradient(-45deg,#C9973F 0 1px,transparent 1px 22px);-webkit-mask-image:radial-gradient(circle at 50% 46%,#000 0,transparent 60%);mask-image:radial-gradient(circle at 50% 46%,#000 0,transparent 60%);opacity:0;animation:foGrade 2s ease forwards}',
  '@keyframes foGrade{to{opacity:.13}}',
  '#fo-ab.sai .grade{opacity:0;transition:opacity .4s}',
  '#fo-ab .palco{position:relative;display:grid;justify-items:center;gap:18px;transition:opacity .5s,transform .9s cubic-bezier(.7,0,.2,1)}',
  '#fo-ab.sai .palco{opacity:0;transform:scale(1.4)}',
  '#fo-ab svg.roda{width:min(420px,82vw);overflow:visible}',
  '#fo-ab .md{transform-box:fill-box;transform-origin:center;transform:scale(0);animation:foPop .55s cubic-bezier(.3,1.6,.5,1) forwards}',
  '@keyframes foPop{to{transform:scale(1)}}',
  '#fo-ab .md .z{fill:none;stroke:#fff;stroke-width:1.6;stroke-dasharray:60;stroke-dashoffset:60;animation:foTraco .5s ease forwards}',
  '#fo-ab .elo{fill:none;stroke:#4FA6BE;stroke-width:1;stroke-dasharray:4 6;opacity:0;animation:foOp 1s ease 1.3s forwards}',
  '#fo-ab .elipse{fill:none;stroke:#2F7D42;stroke-width:9;stroke-linecap:round;stroke-dasharray:900;stroke-dashoffset:900;animation:foTraco 1.4s cubic-bezier(.6,0,.2,1) 1.1s forwards}',
  '#fo-ab .arco{fill:none;stroke:#F2E9D8;stroke-width:4;stroke-linecap:round;stroke-dasharray:220;stroke-dashoffset:220;animation:foTraco .7s ease 1.7s forwards}',
  '#fo-ab .corda{stroke:#F2E9D8;stroke-width:1.4;opacity:0;animation:foOp .3s ease 2.2s forwards,foCorda .45s cubic-bezier(.3,0,.2,1) 2.35s forwards}',
  '@keyframes foCorda{50%{transform:translateX(-14px)}to{transform:none}}',
  '#fo-ab .flecha{opacity:0;animation:foOp .2s ease 2.3s forwards,foVoa .7s cubic-bezier(.5,0,.2,1) 2.6s forwards}',
  '@keyframes foVoa{to{transform:translate(0,-210px);opacity:0}}',
  '#fo-ab .rastro{stroke:#C9973F;stroke-width:2;stroke-linecap:round;stroke-dasharray:230;stroke-dashoffset:230;animation:foTraco .6s ease 2.65s forwards,foOp2 .8s ease 3.2s forwards}',
  '@keyframes foOp2{to{opacity:0}}',
  '#fo-ab .selo{opacity:0;transform-box:fill-box;transform-origin:center;transform:scale(.6);animation:foSelo .9s cubic-bezier(.3,1.4,.5,1) 3.15s forwards}',
  '@keyframes foSelo{to{opacity:1;transform:none}}',
  '#fo-ab .arco,#fo-ab .corda{transition:opacity .4s}',
  '#fo-ab .arcoesc{animation:foOp2 .4s ease 3s forwards}',
  '#fo-ab .luz{fill:url(#foLuz);opacity:0;animation:foOp 1s ease 2.8s forwards}',
  '@keyframes foTraco{to{stroke-dashoffset:0}}@keyframes foOp{to{opacity:1}}',
  '#fo-ab .nome{text-align:center;font-family:Fraunces,Georgia,serif;color:#F2E9D8}',
  '#fo-ab .nome b{display:block;font-size:clamp(2.2rem,6.4vw,3.6rem);font-weight:700;letter-spacing:.24em;padding-left:.24em}',
  '#fo-ab .nome b i{display:inline-block;font-style:normal;opacity:0;transform:translateY(-26px) rotate(-8deg);animation:foLetra .6s cubic-bezier(.2,1.4,.4,1) forwards}',
  '@keyframes foLetra{to{opacity:1;transform:none}}',
  '#fo-ab .nome span{display:block;margin-top:8px;font-family:Karla,system-ui,sans-serif;font-size:clamp(.66rem,1.7vw,.82rem);letter-spacing:.26em;text-transform:uppercase;color:rgba(242,233,216,.72);opacity:0;animation:foOp .8s ease 3.5s forwards}',
  '#fo-ab .pular{position:absolute;bottom:22px;right:24px;font:600 .62rem/1 Karla,system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:rgba(242,233,216,.45);transition:opacity .3s}',
  '#fo-ab.sai .pular{opacity:0}',
  '@media (prefers-reduced-motion:reduce){#fo-ab *{animation-duration:.01s!important;animation-delay:0s!important}}'
  ].join('\n');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var N = 8, R = 118, md = '', elos = '';
  for(var i = 0; i < N; i++){
    var a = -Math.PI / 2 + i / N * Math.PI * 2, x = Math.cos(a) * R, y = Math.sin(a) * R, d = (0.25 + i * 0.11).toFixed(2) + 's';
    md += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')"><g class="md" style="animation-delay:' + d + '">' +
      '<circle r="15" fill="#1D7A93"/><path d="M-15 0 A15 15 0 0 1 15 0Z" fill="#14100c"/>' +
      '<path class="z" style="animation-delay:calc(' + d + ' + .3s)" d="M-10 -3 l3.3 -4 3.3 4 3.3 -4 3.3 4 3.3 -4"/></g></g>';
    var b = -Math.PI / 2 + (i + 1) / N * Math.PI * 2;
    elos += '<line class="elo" x1="' + x.toFixed(1) + '" y1="' + y.toFixed(1) + '" x2="' + (Math.cos(b) * R).toFixed(1) + '" y2="' + (Math.sin(b) * R).toFixed(1) + '"/>';
  }
  var letras = 'FOCAMS'.split('').map(function(c, k){ return '<i style="animation-delay:' + (2.95 + k * 0.08).toFixed(2) + 's">' + c + '</i>'; }).join('');
  var html = '<div id="fo-ab" aria-hidden="true">' +
    '<svg class="fundo" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100"><defs><mask id="foMask"><rect x="-100" y="-100" width="300" height="300" fill="#fff"/>' +
    '<circle class="furo" cx="50" cy="50" r="90" fill="#000"/></mask></defs>' +
    '<rect class="tela" x="-100" y="-100" width="300" height="300" mask="url(#foMask)"/></svg>' +
    '<div class="grade"></div>' +
    '<div class="palco"><svg class="roda" viewBox="-190 -190 380 380"><defs><radialGradient id="foLuz"><stop offset="0" stop-color="#C9973F" stop-opacity=".45"/><stop offset="1" stop-color="#C9973F" stop-opacity="0"/></radialGradient></defs>' +
    '<circle class="luz" r="150"/>' +
    '<ellipse class="elipse" rx="168" ry="150" transform="rotate(-18)"/>' + elos + md +
    '<g class="arcoesc"><path class="arco" d="M-26 -62 Q 40 0 -26 62"/>' +
    '<line class="corda" x1="-26" y1="-62" x2="-26" y2="62"/></g>' +
    '<image class="selo" href="imgs/cursor-focams.png" x="-62" y="-62" width="124" height="124"/>' +
    '<line class="rastro" x1="0" y1="40" x2="0" y2="-190"/>' +
    '<g class="flecha"><line x1="0" y1="52" x2="0" y2="-58" stroke="#F2E9D8" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M0 -72 L-8 -54 L8 -54Z" fill="#C9973F"/><path d="M0 46 l-7 9 M0 40 l-7 9 M0 46 l7 9 M0 40 l7 9" stroke="#C9973F" stroke-width="2"/></g>' +
    '</svg><div class="nome"><b>' + letras + '</b><span>Fórum dos Caciques de Mato Grosso do Sul</span></div></div>' +
    '<span class="pular">toque para entrar</span></div>';

  function abrir(){
    var velho = document.getElementById('fo-ab'); if(velho) velho.remove();
    var t = document.createElement('div'); t.innerHTML = html; var ab = t.firstElementChild;
    document.body.insertBefore(ab, document.body.firstChild);
    document.documentElement.style.overflow = 'hidden';
    var feito = false;
    function fim(){
      if(feito) return; feito = true; ab.classList.add('sai');
      document.documentElement.style.overflow = '';
      window.dispatchEvent(new Event('abertura-fim'));
      setTimeout(function(){ ab.remove(); }, 1200);
    }
    setTimeout(fim, reduz ? 600 : 5000);
    ab.addEventListener('click', fim);
  }
  abrir();
  addEventListener('pageshow', function(e){ if(e.persisted) abrir(); });
})();
