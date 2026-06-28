// ===========================================================
// NAV — mobile toggle + scroll shadow
// ===========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
}));

// ===========================================================
// SCROLL REVEAL
// ===========================================================
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ===========================================================
// SCROLL CUE
// ===========================================================
document.getElementById('scrollCue').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// ===========================================================
// MARQUEE — duplicate content for seamless loop
// ===========================================================
const track = document.getElementById('marqueeTrack');
track.innerHTML += track.innerHTML;

// ===========================================================
// SESSION UPTIME COUNTER (fun, on-brand: latency-obsessed)
// ===========================================================
const uptimeEl = document.getElementById('uptime');
const sessionStart = Date.now();
function pad(n){ return n.toString().padStart(2, '0'); }
setInterval(() => {
  const diff = Math.floor((Date.now() - sessionStart) / 1000);
  const h = pad(Math.floor(diff / 3600));
  const m = pad(Math.floor((diff % 3600) / 60));
  const s = pad(diff % 60);
  uptimeEl.textContent = `SESSION ${h}:${m}:${s}`;
}, 1000);

// ===========================================================
// FOOTER YEAR
// ===========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ===========================================================
// TERMINAL — the signature interactive element
// ===========================================================
const termOutput = document.getElementById('termOutput');
const termInput = document.getElementById('termInput');

const PROJECTS = [
  { name: 'Bhasha-Stream', tag: 'Ultra-low-latency duplex voice AI for code-switched Indic speech.', url: 'https://github.com/SushanthKS06/Bhasha-Stream' },
  { name: 'EvoThinker',    tag: 'Agentic tree-search research agent inspired by Sakana AI Scientist-v2.', url: 'https://github.com/SushanthKS06/EvoThinker' },
  { name: 'QuMail',        tag: 'Quantum-secured email client with four selectable encryption levels.', url: 'https://github.com/SushanthKS06/QuMail' },
  { name: 'RadixKV',       tag: 'Prefix-aware KV cache orchestrator for agentic LLM workloads.', url: 'https://github.com/SushanthKS06/RadixKV' },
];

function printLine(html, cls = '') {
  const div = document.createElement('div');
  div.className = 'line' + (cls ? ' ' + cls : '');
  div.innerHTML = html;
  termOutput.appendChild(div);
  termOutput.scrollTop = termOutput.scrollHeight;
}

function printEcho(cmd) {
  printLine(cmd, 'echo');
}

const COMMANDS = {
  help() {
    printLine(`Available commands:`);
    printLine(`  <span class="accent-text">whoami</span>      — who is this guy`);
    printLine(`  <span class="accent-text">projects</span>    — list the work`);
    printLine(`  <span class="accent-text">stack</span>       — tools &amp; tech`);
    printLine(`  <span class="accent-text">experience</span>  — work history`);
    printLine(`  <span class="accent-text">contact</span>     — how to reach me`);
    printLine(`  <span class="accent-text">sudo hire-me</span> — try it`);
    printLine(`  <span class="accent-text">clear</span>       — clear the screen`);
  },
  whoami() {
    printLine(`Sushanth K S — AI/ML Engineer &amp; Systems Builder.`);
    printLine(`Final-year B.Tech (IT), SKCET Coimbatore — graduating 2026.`);
    printLine(`Most recently wrapped a contract at CodeWisp (YC W26). Building production AI infra.`);
  },
  projects() {
    PROJECTS.forEach((p, i) => {
      printLine(`${i + 1}. <span class="accent-text">${p.name}</span> — ${p.tag}`);
    });
    printLine(`Type "open &lt;name&gt;" to open one on GitHub.`);
  },
  ls() { COMMANDS.projects(); },
  stack() {
    printLine(`Languages    : Python, Go, Java, TypeScript`);
    printLine(`AI / Agents  : LLM Orchestration, LangGraph, Multi-Agent Systems, vLLM, RAG`);
    printLine(`Infra / Data : FastAPI, Docker, Kafka, Redis, gRPC, pgvector`);
    printLine(`Certs        : AWS Dev Associate, GCP Fundamentals, DeepLearning.AI Multi-Agent Systems`);
  },
  experience() {
    printLine(`2026          Contract AI/ML Engineer @ CodeWisp (YC W26) — wrapped`);
    printLine(`2025          Data Analyst Intern @ Elevate Labs`);
  },
  contact() {
    printLine(`Email     : sushanth.ks06@gmail.com`);
    printLine(`LinkedIn  : linkedin.com/in/sushanth-k-s-a10933235`);
    printLine(`GitHub    : github.com/SushanthKS06`);
  },
  resume() {
    printLine(`Resume incoming — ping me on LinkedIn or email and I'll send it straight over.`);
  },
  date() {
    printLine(new Date().toString());
  },
  clear() {
    termOutput.innerHTML = '';
  },
  'sudo hire-me'() {
    printLine(`[sudo] checking credentials for sushanth...`);
    printLine(`<span class="accent-text">Access granted.</span> Initiating onboarding sequence:`);
    printLine(`  [##########] 100%  culture fit`);
    printLine(`  [##########] 100%  ships fast`);
    printLine(`  [##########] 100%  reads error logs before asking ChatGPT`);
    printLine(`Reach out: sushanth.ks06@gmail.com — let's talk.`);
  },
};

function runCommand(raw) {
  const cmd = raw.trim();
  if (!cmd) return;
  printEcho(cmd);

  const lower = cmd.toLowerCase();

  if (lower.startsWith('open ')) {
    const name = lower.replace('open ', '').trim();
    const proj = PROJECTS.find(p => p.name.toLowerCase().includes(name));
    if (proj) {
      printLine(`Opening ${proj.name}…`);
      window.open(proj.url, '_blank', 'noopener');
    } else {
      printLine(`No project matching "${name}". Try "projects" to list them.`);
    }
    return;
  }

  if (lower === 'cat resume.md') { COMMANDS.resume(); return; }

  if (COMMANDS[lower]) {
    COMMANDS[lower]();
  } else {
    printLine(`command not found: ${cmd} — try "help"`);
  }
}

// boot sequence
const BOOT_LINES = [
  'booting portfolio.sh...',
  'loading career.log... done',
  'mounting ./projects (4 entries)... done',
  'type "help" to see available commands',
];
let bootIndex = 0;
function bootStep() {
  if (bootIndex < BOOT_LINES.length) {
    printLine(BOOT_LINES[bootIndex]);
    bootIndex++;
    setTimeout(bootStep, 260);
  }
}
bootStep();

termInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    runCommand(termInput.value);
    termInput.value = '';
  }
});

// clicking anywhere in the terminal focuses the input
document.getElementById('terminal').addEventListener('click', () => termInput.focus());

// ===========================================================
// CONSOLE EASTER EGG
// ===========================================================
console.log(
  '%cLooking under the hood? I like that.\n%cReach me: sushanth.ks06@gmail.com',
  'color:#ffb020;font-size:14px;font-family:monospace;',
  'color:#9b9ba1;font-size:12px;font-family:monospace;'
);
