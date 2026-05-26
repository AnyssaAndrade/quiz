const questions = [
  { q: "O que significa 'iSys'?", options: ["Institute of Systems", "Journal of Information Systems", "Information Systems Society", "International Systems"], a: "Journal of Information Systems" },
  { q: "O que significa 'CESI'?", options: ["Centro de Estudos em Sistemas de Informação", "Comissão Especial de Sistemas de Informação da SBC", "Comitê de Engenharia e Sistemas", "Conselho Especial de Sistemas Inteligentes"], a: "Comissão Especial de Sistemas de Informação da SBC" },
  { q: "A iSys é vinculada a qual sociedade científica?", options: ["IEEE", "ACM", "SBMAC", "SBC (Sociedade Brasileira de Computação)"], a: "SBC (Sociedade Brasileira de Computação)" },
  { q: "A iSys publica artigos em português, inglês ou ambos?", options: ["Apenas em Português", "Apenas em Inglês", "Ambos", "Espanhol"], a: "Ambos" },
  { q: "A iSys é uma revista científica ou um evento?", options: ["Revista Científica", "Evento", "Congresso", "Livro"], a: "Revista Científica" },
  { q: "Cite um tema que pode ser pesquisado em Sistemas de Informação.", options: ["Física Quântica", "Engenharia Civil", "Transformação Digital", "Química Orgânica"], a: "Transformação Digital" },
  { q: "A iSys possui acesso aberto?", options: ["Sim", "Não", "Apenas para autores", "Apenas para sócios da SBC"], a: "Sim" },
  { q: "A área de Sistemas de Informação costuma discutir:", options: ["Impactos organizacionais", "Uso de tecnologia", "Transformação digital", "Todas as anteriores"], a: "Todas as anteriores" },
  { q: "Qual destes elementos normalmente faz parte de um Sistema de Informação?", options: ["Pessoas", "Processos", "Tecnologia", "Todos os anteriores"], a: "Todos os anteriores" },
  { q: "Quantos anos tem a iSys?", options: ["10 anos", "15 anos", "18 anos", "20 anos"], a: "18 anos" },
  { q: "Qual o ano em que foram publicados os primeiros artigos da iSys?", options: ["2000", "2005", "2008", "2012"], a: "2008" },
  { q: "Você sabe a atual classificação Qualis CAPES da revista iSys?", options: ["A1", "A2", "A4", "B1"], a: "A4" },
  { q: "Quais as redes sociais que a iSys utiliza para divulgação?", options: ["TikTok e Twitter", "Instagram, LinkedIn e Google Scholar", "Apenas Facebook", "Apenas Instagram"], a: "Instagram, LinkedIn e Google Scholar" },
  { q: "Qual(is) o(s) tipo(s) de artigo(s) que a iSys aceita?", options: ["Apenas artigos completos", "Artigos científicos e comunicações curtas", "Apenas resumos expandidos", "Apenas artigos de revisão"], a: "Artigos científicos e comunicações curtas" },
  { q: "Qual é a data em que posso submeter artigos para a iSys?", options: ["Até dezembro de cada ano", "Apenas no primeiro semestre", "Fluxo contínuo", "Apenas durante o SBSI"], a: "Fluxo contínuo" },
  { q: "É necessário pagar para publicar na iSys?", options: ["Sim, uma taxa fixa", "Depende do tamanho do artigo", "Apenas não-sócios pagam", "Não, é gratuito"], a: "Não, é gratuito" },
  { q: "Qual é o repositório onde ficam disponíveis os artigos publicados na iSys?", options: ["IEEE Xplore", "SciELO", "SBCOpenLib (SOL)", "ResearchGate"], a: "SBCOpenLib (SOL)" },
  { q: "A revista iSys tem indexação no DBLP?", options: ["Sim", "Não", "Em processo de avaliação", "Apenas edições antigas"], a: "Sim" },
  { q: "É necessário ser vinculado a uma instituição específica para compor o comitê gestor da CESI?", options: ["Sim, apenas universidades públicas", "Sim, apenas instituições de pesquisa", "Não é necessário", "Sim, apenas sócios fundadores"], a: "Não é necessário" },
  { q: "A CESI tem Instagram?", options: ["Sim (@sbc_cesi)", "Não", "Apenas canal no YouTube", "Apenas página no Facebook"], a: "Sim (@sbc_cesi)" }
];

const rewards = ["Prêmio 1", "Prêmio 2", "Prêmio 3", "Prêmio 4"];
const colors = ["#e6178f", "#3b6dff", "#4ad6ff", "#8a4bff"];

let currentQuestion = {};
let selectedAnswer = null;
let isSpinning = false;
let currentRotation = 0;

const canvas = document.getElementById("wheel-canvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width/2, centerY = canvas.height/2, radius = centerX - 4;

function loadQuestion(){
  currentQuestion = questions[Math.floor(Math.random()*questions.length)];
  document.getElementById("question-text").innerText = currentQuestion.q;
  const cont = document.getElementById("options-container");
  cont.innerHTML = "";
  selectedAnswer = null;
  document.getElementById("feedback").classList.add("hidden");
  
  currentQuestion.options.forEach(opt=>{
    const b = document.createElement("button");
    b.className = "opt"; 
    b.innerText = opt;
    b.onclick = ()=>{
      document.querySelectorAll(".opt").forEach(x=>x.classList.remove("selected"));
      b.classList.add("selected");
      selectedAnswer = opt;
      document.getElementById("feedback").classList.add("hidden");
    };
    cont.appendChild(b);
  });
}

function drawWheel(){
  const arc = (Math.PI*2)/rewards.length;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  for(let i=0;i<rewards.length;i++){
    const angle = i*arc;
    ctx.beginPath();
    ctx.fillStyle = colors[i%colors.length];
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX,centerY,radius,angle,angle+arc);
    ctx.fill();
    ctx.save();
    ctx.translate(centerX,centerY);
    ctx.rotate(angle+arc/2);
    ctx.textAlign="right";
    ctx.fillStyle="#fff";
    ctx.font="bold 16px Inter,sans-serif";
    ctx.fillText(rewards[i], radius-18, 6);
    ctx.restore();
  }
  
  ctx.beginPath();
  ctx.fillStyle = "#0a0f3a";
  ctx.arc(centerX,centerY,30,0,Math.PI*2);
  ctx.fill();
  ctx.strokeStyle="#fff";
  ctx.lineWidth=2;
  ctx.stroke();
}

document.getElementById("submit-btn").addEventListener("click", ()=>{
  const fb = document.getElementById("feedback");
  if(!selectedAnswer){
    fb.innerText="Por favor, selecione uma opção!";
    fb.classList.remove("hidden"); 
    return;
  }
  if(selectedAnswer===currentQuestion.a){
    document.getElementById("question-card").classList.add("hidden");
    document.getElementById("wheel-card").classList.remove("hidden");
    drawWheel();
  } else {
    fb.innerText="Incorreto, tente novamente!";
    fb.classList.remove("hidden");
  }
});

document.getElementById("spin-btn").addEventListener("click", ()=>{
  if(isSpinning) return;
  isSpinning=true;
  
  document.getElementById("spin-btn").classList.add("hidden");
  document.getElementById("reward-box").classList.add("hidden");
  
  const idx = Math.floor(Math.random()*rewards.length);
  const arcDeg = 360/rewards.length;
  const stop = (270 - (idx*arcDeg + arcDeg/2) + 360) % 360;
  
  currentRotation += stop + 360*5;
  canvas.classList.remove("spin-reset");
  canvas.style.transform = `rotate(${currentRotation}deg)`;
  
  setTimeout(()=>{
    document.getElementById("reward-text").innerText = `🎁 Você ganhou: ${rewards[idx]}!`;
    document.getElementById("reward-box").classList.remove("hidden");
    currentRotation = currentRotation % 360;
    canvas.classList.add("spin-reset");
    canvas.style.transform = `rotate(${currentRotation}deg)`;
    isSpinning=false;
  },4000);
});

document.getElementById("restart").addEventListener("click",(e)=>{
  e.preventDefault();
  document.getElementById("wheel-card").classList.add("hidden");
  document.getElementById("question-card").classList.remove("hidden");
  document.getElementById("reward-box").classList.add("hidden");
  
  document.getElementById("spin-btn").classList.remove("hidden");
  
  loadQuestion();
});

loadQuestion();