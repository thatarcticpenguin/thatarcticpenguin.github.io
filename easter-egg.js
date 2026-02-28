/**
 * 🐧 ARCTIC TERMINAL — Easter Egg v2
 *
 * Trigger : type  s u d o  anywhere on the page
 * Answer  : ./unlock.sh frost-7749-void-d33p-north
 *
 * Parts:
 *   1. frost  — git show a3f9c2e  (deleted .secrets)
 *   2. 7749   — imgview images/penguin.ascii  (depth marker)
 *   3. void   — nano notes/.hidden_note  (caesar shift 3, "yrlg")
 *   4. d33p   — cat logs/server.log  → base64 -d blob
 *   5. north  — env  → echo "bm9ydGg=" | base64 -d
 */
(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     FILESYSTEM
  ═══════════════════════════════════════════════════════════ */
  const FS = {
    type: 'dir',
    children: {

      'README.txt': {
        type: 'file',
        content:
'Welcome to my corner of the server.\n' +
'Totally normal here. Nothing unusual.\n\n' +
'If you\'re reading this, you probably already know\n' +
'something is off. That\'s fine.\n\n' +
'  "Hidden things stay hidden\n' +
'   only to those who don\'t look twice."\n\n' +
'Good luck.\n'
      },

      '.bash_history': {
        type: 'file', hidden: true,
        content:
'ls\n' +
'ls -a\n' +
'cat README.txt\n' +
'cd projects/vault\n' +
'git log\n' +
'git show a3f9c2e\n' +
'cd ~\n' +
'ls -a notes/\n' +
'nano notes/.hidden_note\n' +
'imgview images/penguin.ascii\n' +
'cat logs/server.log\n' +
'echo "SWYgeW91IGNhbiByZWFkIHRoaXMsIFBBUlQ0PWQzM3A=" | base64 -d\n' +
'env\n' +
'echo "bm9ydGg=" | base64 -d\n' +
'cd .vault\n' +
'./unlock.sh\n' +
'exit\n'
      },

      'notes': {
        type: 'dir',
        children: {
          'todo.txt': {
            type: 'file',
            content:
'TODO — thatarcticpenguin\n' +
'─────────────────────────\n' +
'[x] Push 1W1P week 1 post\n' +
'[ ] Fix broken blog thumbnail\n' +
'[ ] Update LinkedIn\n' +
'[ ] Check server logs (unusual traffic Tuesday — 10.0.0.1 keeps hitting /vault)\n' +
'[ ] Rotate vault credentials — something leaked, not sure where\n' +
'[ ] 1W1P week 2\n'
          },
          '.hidden_note': {
            type: 'file', hidden: true,
            content:
'mental note. don\'t put this anywhere obvious.\n\n' +
'third part of the vault combo, encoded so i don\'t forget:\n\n' +
'    ciphertext : yrlg\n' +
'    method     : caesar cipher\n' +
'    shift      : 3\n\n' +
'no one checks note folders.\n' +
'right?\n'
          }
        }
      },

      'images': {
        type: 'dir',
        children: {
          'penguin.ascii': {
            type: 'file', image: true,
            content:
'\n' +
'        ___\n' +
'       (   )\n' +
'        \\_/\n' +
'      ___|___\n' +
'     /  ___  \\\n' +
'    | / @ @ \\ |\n' +
'    | \\  ^  / |\n' +
'    |  |||||  |\n' +
'    |  |||||  |\n' +
'    \\__|   |__/\n' +
'       |   |\n' +
'      /|   |\\\n' +
'     /_|___|_\\\n\n' +
'  ─────────────────────────────────\n' +
'  SPECIMEN SCAN — APTENODYTES SP.\n' +
'  ─────────────────────────────────\n' +
'  location  : 90.0000° S, 0.0000° E\n' +
'  temp      : -41.2 °C\n' +
'  mass      : 22.4 kg\n' +
'  depth     : 7749m\n' +
'  status    : watching you\n' +
'  ─────────────────────────────────\n'
          }
        }
      },

      'logs': {
        type: 'dir',
        children: {
          'server.log': {
            type: 'file',
            content:
'[2025-01-18 00:01:03] INFO  nginx: worker process started\n' +
'[2025-01-18 00:01:03] INFO  server listening on :443\n' +
'[2025-01-18 08:14:22] INFO  GET /index.html 200 0.8ms\n' +
'[2025-01-18 08:14:22] INFO  GET /style.css 200 0.4ms\n' +
'[2025-01-18 09:30:01] INFO  GET /blogs/index.html 200 1.2ms\n' +
'[2025-01-18 11:45:19] WARN  rate limit hit: 10.0.0.1\n' +
'[2025-01-18 11:45:20] WARN  rate limit hit: 10.0.0.1\n' +
'[2025-01-18 11:45:20] WARN  rate limit hit: 10.0.0.1\n' +
'[2025-01-18 14:02:33] INFO  GET /blogs/http.html 200 0.9ms\n' +
'[2025-01-18 17:11:07] INFO  GET /favicon.ico 200 0.2ms\n' +
'[2025-01-19 02:47:58] NOTE  SWYgeW91IGNhbiByZWFkIHRoaXMsIFBBUlQ0PWQzM3A=\n' +
'[2025-01-19 09:00:00] INFO  scheduled backup complete\n' +
'[2025-01-19 12:31:45] INFO  GET /index.html 200 0.7ms\n' +
'[2025-01-19 22:05:12] INFO  TLS cert renewed\n' +
'[2025-01-20 01:00:00] INFO  cron: daily tasks complete\n' +
'[2025-01-20 03:14:15] WARN  suspicious auth attempt — vault endpoint\n'
          }
        }
      },

      'projects': {
        type: 'dir',
        children: {
          'vault': {
            type: 'dir',
            git: true,
            gitLog: [
              {
                hash: 'a3f9c2e1b4d7f8a2c9e5b3d6f1a4c7e2b5d8f3a1',
                short: 'a3f9c2e',
                author: 'thatarcticpenguin',
                email: 'sabareeshvinodh458@gmail.com',
                date: 'Mon Jan 20 03:14:15 2025 +0530',
                message: 'remove sensitive data before push',
                diff:
'diff --git a/.secrets b/.secrets\n' +
'deleted file mode 100644\n' +
'index 4b825dc..0000000\n' +
'--- a/.secrets\n' +
'+++ /dev/null\n' +
'@@ -1,6 +0,0 @@\n' +
'-# vault credentials — DO NOT COMMIT\n' +
'-# adding to .gitignore after this\n' +
'-\n' +
'-VAULT_PART1=frost\n' +
'-\n' +
'-# combination format: [p1]-[p2]-[p3]-[p4]-[p5]'
              },
              {
                hash: '7b2d1f4a9c3e6b8d2f5a1c4e7b3d6a9f2c5e8b1d',
                short: '7b2d1f4',
                author: 'thatarcticpenguin',
                email: 'sabareeshvinodh458@gmail.com',
                date: 'Sun Jan 19 21:45:02 2025 +0530',
                message: 'add unlock mechanism',
                diff:
'diff --git a/unlock.sh b/unlock.sh\n' +
'new file mode 100755\n' +
'--- /dev/null\n' +
'+++ b/unlock.sh\n' +
'@@ -0,0 +1,7 @@\n' +
'+#!/bin/bash\n' +
'+# Arctic Vault — unlock script\n' +
'+# Usage: ./unlock.sh [combination]\n' +
'+# Format: [p1]-[p2]-[p3]-[p4]-[p5]\n' +
'+echo "checking combination..."\n' +
'+exit 1'
              },
              {
                hash: '2c8e5a1d4f7b3e6a9c2f5b8d1e4a7c3f6b9e2d5a',
                short: '2c8e5a1',
                author: 'thatarcticpenguin',
                email: 'sabareeshvinodh458@gmail.com',
                date: 'Sun Jan 19 18:30:00 2025 +0530',
                message: 'initial commit',
                diff:
'diff --git a/README.md b/README.md\n' +
'new file mode 100644\n' +
'--- /dev/null\n' +
'+++ b/README.md\n' +
'@@ -0,0 +1,9 @@\n' +
'+# ARCTIC VAULT\n' +
'+\n' +
'+A personal lockbox. Five-part combination required.\n' +
'+\n' +
'+Format: [p1]-[p2]-[p3]-[p4]-[p5]\n' +
'+\n' +
'+The parts are scattered across the system.\n' +
'+\n' +
'+That\'s intentional.'
              }
            ],
            children: {
              'README.md': {
                type: 'file',
                content:
'# ARCTIC VAULT\n\n' +
'A personal lockbox. Five-part combination required.\n\n' +
'Format: [p1]-[p2]-[p3]-[p4]-[p5]\n\n' +
'The parts are scattered across the system.\n' +
'That\'s intentional.\n'
              },
              'config.json': {
                type: 'file',
                content:
'{\n' +
'  "vault_version": "3.0",\n' +
'  "encryption": "AES-256-GCM",\n' +
'  "parts_required": 5,\n' +
'  "last_modified": "2025-01-20",\n' +
'  "owner": "thatarcticpenguin",\n' +
'  "status": "locked"\n' +
'}\n'
              }
            }
          }
        }
      },

      '.vault': {
        type: 'dir', hidden: true,
        children: {
          'unlock.sh': {
            type: 'file', executable: true,
            content:
'#!/bin/bash\n' +
'# Arctic Vault — unlock script\n' +
'# Usage: ./unlock.sh [combination]\n' +
'# Format: [p1]-[p2]-[p3]-[p4]-[p5]\n' +
'echo "checking combination..."\n' +
'exit 1\n'
          }
        }
      }
    }
  };

  /* ═══════════════════════════════════════════════════════════
     ENV VARS  (part 5 hidden here)
  ═══════════════════════════════════════════════════════════ */
  const ENV_VARS = {
    USER:       'penguin',
    HOME:       '/home/penguin',
    SHELL:      '/bin/bash',
    TERM:       'xterm-256color',
    LANG:       'en_US.UTF-8',
    PATH:       '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
    PWD:        '/home/penguin',
    HOSTNAME:   'arctic',
    VAULT_HINT5:'bm9ydGg=',
    LOGNAME:    'penguin',
    SHLVL:      '1',
  };

  /* ═══════════════════════════════════════════════════════════
     STATE
  ═══════════════════════════════════════════════════════════ */
  let cwd          = ['~'];
  let termActive   = false;
  let inputLocked  = false;
  let keyBuffer    = '';
  let cmdHistArr   = [];
  let historyIdx   = -1;
  let windowState  = 'normal';
  let dragState    = null;
  const CORRECT    = 'frost-7749-void-d33p-north';

  /* ═══════════════════════════════════════════════════════════
     TRIGGER — type "sudo" anywhere on page
  ═══════════════════════════════════════════════════════════ */
  document.addEventListener('keydown', e => {
    if (termActive) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key.length === 1) keyBuffer += e.key.toLowerCase();
    if (keyBuffer.length > 12) keyBuffer = keyBuffer.slice(-12);
    if (keyBuffer.endsWith('sudo')) { keyBuffer = ''; bootTerminal(); }
  });

  /* ═══════════════════════════════════════════════════════════
     FILESYSTEM HELPERS
  ═══════════════════════════════════════════════════════════ */
  function resolvePath(p) {
    if (!p) return null;
    if (p === '~' || p === '/home/penguin') return ['~'];
    let parts;
    if (p.startsWith('~/')) {
      parts = ['~', ...p.slice(2).split('/').filter(Boolean)];
    } else if (p.startsWith('/')) {
      if (!p.startsWith('/home/penguin')) return null;
      parts = ['~', ...p.slice('/home/penguin'.length).split('/').filter(Boolean)];
    } else {
      parts = [...cwd];
      p.split('/').filter(Boolean).forEach(seg => {
        if (seg === '..') { if (parts.length > 1) parts.pop(); }
        else if (seg !== '.') parts.push(seg);
      });
    }
    return parts;
  }

  function getNode(pa) {
    if (!pa) return null;
    let node = FS;
    pa.forEach(seg => {
      if (seg === '~') { node = FS; return; }
      node = node && node.children && node.children[seg] || null;
    });
    return node;
  }

  function cwdStr() { return cwd.length === 1 ? '~' : '~/' + cwd.slice(1).join('/'); }
  function absPath(pa) { return !pa || pa.length <= 1 ? '/home/penguin' : '/home/penguin/' + pa.slice(1).join('/'); }

  /* ═══════════════════════════════════════════════════════════
     STYLES
  ═══════════════════════════════════════════════════════════ */
  function injectStyles() {
    if (document.getElementById('at-style')) return;
    const s = document.createElement('style');
    s.id = 'at-style';
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');

      #at-overlay {
        position: fixed; inset: 0; z-index: 99999;
        pointer-events: none;
      }

      /* ── GLASS WINDOW ── */
      #at-win-wrap {
        pointer-events: all;
        position: absolute;
        width: min(920px, 94vw);
        height: min(620px, 88vh);
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;

        background: rgba(8, 13, 22, 0.72);
        backdrop-filter: blur(40px) saturate(180%) brightness(1.08);
        -webkit-backdrop-filter: blur(40px) saturate(180%) brightness(1.08);

        border: 1px solid rgba(255,255,255,0.07);
        box-shadow:
          0 0 0 1px rgba(255,255,255,0.03),
          0 40px 120px rgba(0,0,0,0.75),
          0 0 100px rgba(0,100,255,0.05),
          inset 0 1px 0 rgba(255,255,255,0.07),
          inset 0 -1px 0 rgba(0,0,0,0.3);

        font-family: 'JetBrains Mono', 'Courier New', monospace;
        transition: width 0.28s cubic-bezier(0.4,0,0.2,1),
                    height 0.28s cubic-bezier(0.4,0,0.2,1),
                    border-radius 0.28s cubic-bezier(0.4,0,0.2,1);
        will-change: transform;
      }

      #at-win-wrap.at-maximized {
        width: 100vw !important;
        height: 100vh !important;
        border-radius: 0 !important;
        top: 0 !important; left: 0 !important;
      }

      #at-win-wrap.at-minimized {
        width: 260px !important;
        height: 38px !important;
        border-radius: 20px !important;
        bottom: 20px;
        left: 20px;
        top: auto !important;
        cursor: pointer;
      }

      /* ── TITLE BAR ── */
      #at-titlebar {
        display: flex;
        align-items: center;
        padding: 0 14px;
        height: 38px;
        flex-shrink: 0;
        background: rgba(255,255,255,0.025);
        border-bottom: 1px solid rgba(255,255,255,0.05);
        cursor: grab;
        user-select: none;
      }
      #at-titlebar:active { cursor: grabbing; }

      .at-dot {
        width: 12px; height: 12px; border-radius: 50%;
        border: none; padding: 0; cursor: pointer;
        flex-shrink: 0;
        position: relative;
        transition: filter 0.15s, transform 0.12s;
        background: none;
        outline: none;
      }
      .at-dot + .at-dot { margin-left: 8px; }
      .at-dot:hover { filter: brightness(1.3); transform: scale(1.1); }
      .at-dot:active { transform: scale(0.9); }
      .at-dot.r { background: #ff5f57; box-shadow: 0 0 8px rgba(255,80,70,0.4); }
      .at-dot.y { background: #febc2e; box-shadow: 0 0 8px rgba(254,180,40,0.35); }
      .at-dot.g { background: #28c840; box-shadow: 0 0 8px rgba(40,200,60,0.35); }
      .at-dot::after {
        content: attr(data-icon);
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
        font-size: 8px; font-weight: 900;
        color: rgba(0,0,0,0.45);
        opacity: 0; transition: opacity 0.12s;
      }
      .at-dot:hover::after { opacity: 1; }

      #at-titletext {
        flex: 1; text-align: center;
        font-size: 11.5px; color: rgba(255,255,255,0.22);
        letter-spacing: 0.04em; pointer-events: none;
      }
      .at-title-spacer { width: 44px; flex-shrink: 0; }

      /* ── BODY ── */
      #at-body {
        flex: 1; overflow-y: auto;
        padding: 14px 18px 8px;
        display: flex; flex-direction: column;
        min-height: 0;
      }
      #at-body::-webkit-scrollbar { width: 5px; }
      #at-body::-webkit-scrollbar-track { background: transparent; }
      #at-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }

      #at-output {
        flex: 1; font-size: 12.5px; line-height: 1.72;
        color: rgba(210,225,240,0.88);
        white-space: pre-wrap; word-break: break-word;
      }

      #at-output .p   { color: #5bc8ff; }
      #at-output .ps  { color: #4de88e; }
      #at-output .err { color: #ff6b6b; }
      #at-output .ok  { color: #4de88e; }
      #at-output .dim { color: rgba(255,255,255,0.28); }
      #at-output .hi  { color: #ffd166; }
      #at-output .add { color: #4de88e; }
      #at-output .del { color: #ff6b6b; }
      #at-output .hdr { color: #74b9ff; }
      #at-output .sys { color: #a29bfe; }
      #at-output .img { color: #81ecec; font-size: 11px; line-height: 1.35; }
      #at-output .exe { color: #55efc4; }
      #at-output .dir { color: #74b9ff; }
      #at-output .hid { color: rgba(255,255,255,0.22); }
      #at-output .ek  { color: #ffeaa7; }
      #at-output .ev  { color: #81ecec; }

      /* ── INPUT ROW ── */
      #at-input-row {
        display: flex; align-items: center;
        padding: 8px 0 4px; flex-shrink: 0;
        border-top: 1px solid rgba(255,255,255,0.06);
        margin-top: 4px;
      }
      #at-prompt-label {
        color: #5bc8ff; font-size: 12.5px;
        white-space: nowrap; flex-shrink: 0; pointer-events: none;
      }
      #at-input {
        flex: 1; background: transparent; border: none; outline: none;
        color: rgba(230,240,255,0.92);
        font-family: 'JetBrains Mono', 'Courier New', monospace;
        font-size: 12.5px; caret-color: #5bc8ff; padding: 0 4px;
        min-width: 0;
      }

      /* ── NANO ── */
      #at-nano {
        position: absolute; inset: 0;
        background: rgba(5,10,20,0.94);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        display: flex; flex-direction: column; z-index: 20;
        animation: at-slidein 0.18s ease;
        font-family: 'JetBrains Mono', 'Courier New', monospace;
      }
      @keyframes at-slidein {
        from { opacity:0; transform: translateY(8px); }
        to   { opacity:1; transform: none; }
      }
      #at-nano-topbar {
        background: rgba(0,80,130,0.55);
        backdrop-filter: blur(8px);
        color: #81ecec; text-align: center;
        padding: 5px 12px; font-size: 11.5px;
        letter-spacing: 0.07em;
        border-bottom: 1px solid rgba(129,236,236,0.15);
        flex-shrink: 0;
      }
      #at-nano-content {
        flex: 1; padding: 14px 18px;
        overflow-y: auto; font-size: 12.5px;
        line-height: 1.8; color: rgba(210,230,245,0.9);
        white-space: pre-wrap;
      }
      #at-nano-content::-webkit-scrollbar { width: 5px; }
      #at-nano-content::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
      #at-nano-footer {
        background: rgba(0,60,100,0.45); border-top: 1px solid rgba(255,255,255,0.06);
        padding: 6px 14px; display: flex; gap: 18px; flex-wrap: wrap; flex-shrink: 0;
      }
      .at-nk { font-size: 10.5px; color: rgba(255,255,255,0.3); }
      .at-nk span { color: #81ecec; margin-right: 4px; }

      /* ── CERT OVERLAY ── */
      #at-cert-overlay {
        position: fixed; inset: 0; z-index: 999999;
        background: rgba(0,0,0,0.86);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        animation: at-fade 0.4s ease;
        padding: 20px; overflow-y: auto;
        font-family: 'JetBrains Mono', 'Courier New', monospace;
      }
      @keyframes at-fade  { from { opacity:0; } to { opacity:1; } }
      @keyframes at-pop   { from { opacity:0; transform:scale(0.94) translateY(14px); } to { opacity:1; transform:none; } }

      /* name screen */
      #at-name-screen { text-align: center; color: rgba(210,225,240,0.9); animation: at-fade 0.4s ease; }
      .at-ns-lbl { font-size: 12px; letter-spacing: 0.2em; color: #5bc8ff; text-transform: uppercase; opacity: 0.8; margin-bottom: 6px; }
      .at-ns-sub { font-size: 11px; color: rgba(255,255,255,0.28); margin-bottom: 30px; }
      #at-name-input {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(91,200,255,0.3); border-radius: 6px;
        padding: 10px 18px; color: #fff;
        font-family: 'JetBrains Mono', 'Courier New', monospace;
        font-size: 15px; outline: none; width: 300px;
        caret-color: #5bc8ff;
        transition: border-color 0.2s, box-shadow 0.2s;
        text-align: center;
      }
      #at-name-input:focus {
        border-color: rgba(91,200,255,0.6);
        box-shadow: 0 0 0 3px rgba(91,200,255,0.08), 0 0 24px rgba(91,200,255,0.05);
      }
      #at-name-input::placeholder { color: rgba(255,255,255,0.18); }
      .at-ns-hint { margin-top: 12px; font-size: 10.5px; color: rgba(255,255,255,0.18); }

      /* certificate */
      #at-certificate {
        position: relative;
        width: min(760px, 96vw);
        background: linear-gradient(155deg, #07101e 0%, #0a1322 40%, #060e1c 100%);
        border: 1px solid rgba(255,255,255,0.06);
        border-radius: 4px;
        padding: 44px 52px 40px;
        box-shadow:
          0 0 0 8px rgba(80,160,255,0.03),
          0 0 0 9px rgba(255,255,255,0.03),
          0 50px 140px rgba(0,0,0,0.85),
          inset 0 0 100px rgba(0,60,140,0.06);
        animation: at-pop 0.65s cubic-bezier(0.16,1,0.3,1) both;
        text-align: center; overflow: hidden;
      }
      /* corner brackets */
      #at-certificate::before,
      #at-certificate::after,
      .at-c-br, .at-c-tr {
        content: '';
        position: absolute;
        width: 72px; height: 72px;
        border: 1px solid rgba(91,200,255,0.16);
        pointer-events: none;
      }
      #at-certificate::before { top: 18px; left: 18px; border-right: none; border-bottom: none; }
      #at-certificate::after  { bottom: 18px; right: 18px; border-left: none; border-top: none; }
      .at-c-br { bottom: 18px; left: 18px; border-right: none; border-top: none; }
      .at-c-tr { top: 18px; right: 18px; border-left: none; border-bottom: none; }

      .at-c-glow {
        position: absolute; top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        width: 500px; height: 500px;
        background: radial-gradient(ellipse, rgba(0,80,220,0.06) 0%, transparent 70%);
        pointer-events: none;
      }

      .at-c-top     { font-size: 9.5px; letter-spacing: 0.32em; color: rgba(91,200,255,0.4); text-transform: uppercase; margin-bottom: 5px; }
      .at-c-div     { width: 130px; height: 1px; background: linear-gradient(90deg,transparent,rgba(91,200,255,0.28),transparent); margin: 11px auto; }
      .at-c-sub     { font-size: 9.5px; letter-spacing: 0.18em; color: rgba(255,255,255,0.25); text-transform: uppercase; }
      .at-c-title   { font-family: 'Times New Roman', serif; font-size: clamp(28px,4.5vw,40px); color: #fff; letter-spacing: 0.05em; margin: 6px 0; text-shadow: 0 0 32px rgba(91,200,255,0.28); }
      .at-c-body    { font-family: 'Times New Roman', serif; font-size: 14px; color: rgba(200,215,235,0.62); line-height: 1.95; }
      .at-c-name    { font-family: 'Times New Roman', serif; font-size: clamp(22px,3.5vw,34px); color: #fff; margin: 8px 0 18px; text-shadow: 0 0 22px rgba(91,200,255,0.3); display: inline-block; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 5px; min-width: 200px; }
      .at-c-parts   { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin: 18px 0 14px; }
      .at-c-part    { padding: 3px 12px; border: 1px solid rgba(91,200,255,0.18); border-radius: 3px; font-size: 9.5px; letter-spacing: 0.1em; color: #81ecec; background: rgba(0,80,150,0.1); }
      .at-c-penguin { font-size: 9.5px; line-height: 1.3; color: rgba(91,200,255,0.25); margin: 8px 0; letter-spacing: 0.01em; }

      .at-c-footer  { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 26px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.055); }
      .at-c-sig-name  { font-family: 'Times New Roman', serif; font-size: 18px; color: rgba(255,255,255,0.55); font-style: italic; }
      .at-c-sig-label { font-size: 8.5px; letter-spacing: 0.14em; color: rgba(255,255,255,0.18); text-transform: uppercase; margin-top: 3px; }

      .at-c-stamp {
        width: 70px; height: 70px; border: 1.5px solid rgba(91,200,255,0.28);
        border-radius: 50%; display: flex; flex-direction: column;
        align-items: center; justify-content: center; flex-shrink: 0; position: relative;
      }
      .at-c-stamp::before {
        content: ''; position: absolute; inset: 5px;
        border: 1px solid rgba(91,200,255,0.12); border-radius: 50%;
      }
      .at-c-stamp-icon { font-size: 22px; z-index: 1; margin-bottom: 1px; }
      .at-c-stamp-text { font-size: 7px; letter-spacing: 0.1em; color: rgba(91,200,255,0.45); text-align: center; line-height: 1.4; text-transform: uppercase; z-index: 1; }

      .at-c-date-val   { font-size: 11px; color: rgba(255,255,255,0.38); letter-spacing: 0.05em; }
      .at-c-date-label { font-size: 8.5px; letter-spacing: 0.14em; color: rgba(255,255,255,0.16); text-transform: uppercase; margin-top: 3px; text-align: right; }

      .at-c-badge { display: inline-block; margin-top: 22px; padding: 6px 20px; border: 1px solid rgba(77,232,142,0.22); border-radius: 3px; font-size: 9px; letter-spacing: 0.2em; color: #4de88e; background: rgba(77,232,142,0.04); text-transform: uppercase; text-shadow: 0 0 10px rgba(77,232,142,0.25); }

      .at-cert-actions { display: flex; gap: 10px; justify-content: center; margin-top: 20px; }
      .at-cert-btn {
        background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.4); padding: 8px 22px; border-radius: 6px; cursor: pointer;
        font-family: 'JetBrains Mono', 'Courier New', monospace; font-size: 11px;
        letter-spacing: 0.05em; transition: all 0.2s; backdrop-filter: blur(8px);
      }
      .at-cert-btn:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.72); }
      .at-cert-btn.primary { border-color: rgba(91,200,255,0.28); color: #5bc8ff; background: rgba(91,200,255,0.05); }
      .at-cert-btn.primary:hover { background: rgba(91,200,255,0.1); border-color: rgba(91,200,255,0.48); box-shadow: 0 0 18px rgba(91,200,255,0.1); }
    `;
    document.head.appendChild(s);
  }

  /* ═══════════════════════════════════════════════════════════
     BOOT TERMINAL
  ═══════════════════════════════════════════════════════════ */
  function bootTerminal() {
    termActive = true;
    injectStyles();

    const overlay = document.createElement('div');
    overlay.id = 'at-overlay';

    const wrap = document.createElement('div');
    wrap.id = 'at-win-wrap';
    wrap.innerHTML = `
      <div id="at-titlebar">
        <button class="at-dot r" id="at-btn-close" data-icon="✕" title="Close"></button>
        <button class="at-dot y" id="at-btn-min"   data-icon="−" title="Minimize"></button>
        <button class="at-dot g" id="at-btn-max"   data-icon="+" title="Maximize"></button>
        <div id="at-titletext">penguin@arctic — bash — 80×24</div>
        <div class="at-title-spacer"></div>
      </div>
      <div id="at-body">
        <div id="at-output"></div>
        <div id="at-input-row">
          <span id="at-prompt-label"><span style="color:#5bc8ff">penguin@arctic</span><span style="color:rgba(255,255,255,0.3)">:</span><span id="at-cwd-lbl" style="color:#4de88e">~</span><span style="color:rgba(255,255,255,0.38)">$&nbsp;</span></span>
          <input id="at-input" autocomplete="off" spellcheck="false" />
        </div>
      </div>
    `;

    overlay.appendChild(wrap);
    document.body.appendChild(overlay);

    // initial position — centered
    const W0 = Math.min(920, window.innerWidth * 0.94);
    const H0 = Math.min(620, window.innerHeight * 0.88);
    wrap.style.left = ((window.innerWidth  - W0) / 2) + 'px';
    wrap.style.top  = ((window.innerHeight - H0) / 2) + 'px';

    // entrance animation
    wrap.style.opacity = '0';
    wrap.style.transform = 'scale(0.97) translateY(14px)';
    wrap.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        wrap.style.opacity = '1';
        wrap.style.transform = 'none';
      });
    });

    // window controls
    document.getElementById('at-btn-close').addEventListener('click', e => { e.stopPropagation(); closeTerminal(); });
    document.getElementById('at-btn-min').addEventListener('click',   e => { e.stopPropagation(); minimizeTerminal(); });
    document.getElementById('at-btn-max').addEventListener('click',   e => { e.stopPropagation(); maximizeTerminal(); });

    wrap.addEventListener('click', () => { if (windowState === 'minimized') restoreTerminal(); });

    // drag
    document.getElementById('at-titlebar').addEventListener('mousedown', startDrag);

    const input = document.getElementById('at-input');
    input.addEventListener('keydown', onKeyDown);
    overlay.addEventListener('mousedown', e => {
      if (!e.target.closest('#at-titlebar') && !e.target.closest('.at-dot')) input.focus();
    });

    printBoot();
    input.focus();
  }

  /* ═══════════════════════════════════════════════════════════
     WINDOW MANAGEMENT
  ═══════════════════════════════════════════════════════════ */
  function closeTerminal() {
    document.getElementById('at-overlay')?.remove();
    document.getElementById('at-style')?.remove();
    document.getElementById('at-cert-overlay')?.remove();
    termActive = false; inputLocked = false; windowState = 'normal';
    cwd = ['~']; cmdHistArr = []; historyIdx = -1; dragState = null;
    keyBuffer = '';
  }

  function minimizeTerminal() {
    if (windowState === 'minimized') { restoreTerminal(); return; }
    const wrap = document.getElementById('at-win-wrap');
    if (!wrap) return;
    windowState = 'minimized';
    wrap.classList.remove('at-maximized');
    wrap.classList.add('at-minimized');
    wrap.style.left = '20px';
    wrap.style.top  = 'auto';
  }

  function restoreTerminal() {
    const wrap = document.getElementById('at-win-wrap');
    if (!wrap) return;
    windowState = 'normal';
    wrap.classList.remove('at-minimized', 'at-maximized');
    wrap.style.top  = '';
    const W0 = Math.min(920, window.innerWidth * 0.94);
    const H0 = Math.min(620, window.innerHeight * 0.88);
    wrap.style.left = ((window.innerWidth  - W0) / 2) + 'px';
    wrap.style.top  = ((window.innerHeight - H0) / 2) + 'px';
    setTimeout(() => { document.getElementById('at-input')?.focus(); }, 300);
  }

  function maximizeTerminal() {
    const wrap = document.getElementById('at-win-wrap');
    if (!wrap) return;
    if (windowState === 'maximized') {
      restoreTerminal();
    } else {
      windowState = 'maximized';
      wrap.classList.remove('at-minimized');
      wrap.classList.add('at-maximized');
      wrap.style.left = '0'; wrap.style.top = '0';
      setTimeout(() => { document.getElementById('at-input')?.focus(); }, 300);
    }
  }

  function startDrag(e) {
    if (windowState !== 'normal') return;
    if (e.target.classList.contains('at-dot')) return;
    const wrap = document.getElementById('at-win-wrap');
    const rect = wrap.getBoundingClientRect();
    dragState = { sx: e.clientX, sy: e.clientY, ox: rect.left, oy: rect.top };
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag, { once: true });
    e.preventDefault();
  }
  function onDrag(e) {
    if (!dragState) return;
    const wrap = document.getElementById('at-win-wrap');
    if (!wrap) return;
    wrap.style.transition = 'none';
    wrap.style.left = (dragState.ox + e.clientX - dragState.sx) + 'px';
    wrap.style.top  = (dragState.oy + e.clientY - dragState.sy) + 'px';
  }
  function stopDrag() {
    dragState = null;
    document.removeEventListener('mousemove', onDrag);
    const wrap = document.getElementById('at-win-wrap');
    if (wrap) wrap.style.transition = '';
  }

  /* ═══════════════════════════════════════════════════════════
     OUTPUT HELPERS
  ═══════════════════════════════════════════════════════════ */
  function out(html) {
    const el = document.getElementById('at-output');
    if (!el) return;
    el.innerHTML += html;
    const body = document.getElementById('at-body');
    if (body) body.scrollTop = body.scrollHeight;
  }
  function outln(html = '') { out(html + '\n'); }
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function colorizeDiff(text) {
    return text.split('\n').map(l => {
      if (/^(diff |index |deleted file|new file|old mode|new mode)/.test(l)) return `<span class="dim">${esc(l)}</span>`;
      if (l.startsWith('---') || l.startsWith('+++') || l.startsWith('@@')) return `<span class="hdr">${esc(l)}</span>`;
      if (l.startsWith('-')) return `<span class="del">${esc(l)}</span>`;
      if (l.startsWith('+')) return `<span class="add">${esc(l)}</span>`;
      return `<span class="dim">${esc(l)}</span>`;
    }).join('\n');
  }
  function updateCwd() {
    const el = document.getElementById('at-cwd-lbl');
    if (el) el.textContent = cwdStr();
  }

  function printBoot() {
    outln(`<span class="dim">Last login: Mon Jan 20 03:14:15 2025 from 127.0.0.1</span>`);
    outln();
    outln(`<span class="sys"> 🐧  thatarcticpenguin's private server — unauthorized access expected, apparently.</span>`);
    outln(`<span class="dim">    type 'help' for available commands. 'exit' to leave.</span>`);
    outln();
  }

  /* ═══════════════════════════════════════════════════════════
     INPUT HANDLING
  ═══════════════════════════════════════════════════════════ */
  function onKeyDown(e) {
    if (inputLocked) { e.preventDefault(); return; }
    const input = document.getElementById('at-input');
    if (!input) return;

    if (e.key === 'Enter') {
      const val = input.value; input.value = ''; historyIdx = -1;
      if (val.trim()) cmdHistArr.unshift(val.trim());
      echoCmd(val); runCommand(val.trim());
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx < cmdHistArr.length - 1) { historyIdx++; input.value = cmdHistArr[historyIdx]; setTimeout(() => input.setSelectionRange(9999,9999),0); }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) { historyIdx--; input.value = cmdHistArr[historyIdx]; }
      else { historyIdx = -1; input.value = ''; }
    } else if (e.key === 'Tab') {
      e.preventDefault(); doTab(input);
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault(); const o = document.getElementById('at-output'); if (o) o.innerHTML = '';
    } else if (e.ctrlKey && e.key === 'c') {
      e.preventDefault(); outln(`<span class="err">^C</span>`); outln(); updateCwd();
    }
  }

  function echoCmd(val) {
    outln(`<span class="p">penguin@arctic</span><span style="color:rgba(255,255,255,0.3)">:</span><span class="ps">${esc(cwdStr())}</span><span style="color:rgba(255,255,255,0.38)">$</span> ${esc(val)}`);
  }

  function doTab(input) {
    const parts = input.value.trimStart().split(/\s+/);
    if (parts.length < 2) return;
    const partial = parts[parts.length - 1];
    const node = getNode(cwd);
    if (!node || !node.children) return;
    const all = Object.keys(node.children);
    const matches = all.filter(k => k.startsWith(partial));
    if (matches.length === 1) {
      const isDir = node.children[matches[0]].type === 'dir' || node.children[matches[0]].git;
      parts[parts.length - 1] = matches[0] + (isDir ? '/' : '');
      input.value = parts.join(' ');
    } else if (matches.length > 1) {
      echoCmd(input.value); outln(matches.join('   ')); outln(); updateCwd();
    }
  }

  /* ═══════════════════════════════════════════════════════════
     COMMAND ROUTER
  ═══════════════════════════════════════════════════════════ */
  function runCommand(raw) {
    if (!raw) { outln(); updateCwd(); return; }

    // pipe handling
    if (raw.includes('|')) { handlePipe(raw); outln(); updateCwd(); return; }

    const tokens = raw.match(/(?:[^\s"']+|"[^"]*"|'[^']*')/g) || [];
    const cmd = tokens[0];
    const args = tokens.slice(1).map(a => a.replace(/^['"]|['"]$/g,''));

    const map = {
      ls:           () => cmdLs(args),
      cd:           () => cmdCd(args),
      cat:          () => cmdCat(args),
      pwd:          () => outln(absPath(cwd)),
      whoami:       () => outln('penguin'),
      hostname:     () => outln('arctic'),
      uname:        () => outln('Linux arctic 5.15.0-1 #1 SMP x86_64 GNU/Linux'),
      date:         () => outln(new Date().toUTCString()),
      nano:         () => cmdNano(args),
      imgview:      () => cmdImgview(args),
      git:          () => cmdGit(args),
      env:          () => cmdEnv(),
      base64:       () => cmdBase64(args),
      file:         () => cmdFile(args),
      strings:      () => cmdStrings(args),
      grep:         () => cmdGrep(args),
      echo:         () => outln(esc(args.join(' '))),
      history:      () => cmdHistCmd(),
      man:          () => cmdMan(args),
      help:         () => cmdHelp(),
      clear:        () => { const o = document.getElementById('at-output'); if (o) o.innerHTML=''; },
      exit:         () => { outln(`<span class="dim">logout</span>`); setTimeout(closeTerminal,500); },
      quit:         () => { outln(`<span class="dim">logout</span>`); setTimeout(closeTerminal,500); },
      sudo:         () => outln(`<span class="err">sudo: permission denied. nice try.</span>`),
      ssh:          () => outln(`<span class="dim">ssh: connect to host vault.arctic port 22: Connection refused</span>`),
      curl:         () => outln(`<span class="err">curl: (6) Could not resolve host — offline environment</span>`),
      wget:         () => outln(`<span class="err">wget: network unavailable</span>`),
      './unlock.sh':() => cmdUnlock(args),
      'unlock.sh':  () => outln(`<span class="err">bash: unlock.sh: Permission denied — use ./unlock.sh</span>`),
      bash:         () => {
        if (args[0] === 'unlock.sh') cmdUnlock(args.slice(1));
        else outln(`<span class="err">bash: ${esc(args[0]||'')}: No such file or directory</span>`);
      },
    };

    if (map[cmd]) map[cmd]();
    else outln(`<span class="err">bash: ${esc(cmd)}: command not found</span>`);

    outln(); updateCwd();
  }

  /* ═══════════════════════════════════════════════════════════
     PIPE
  ═══════════════════════════════════════════════════════════ */
  function handlePipe(raw) {
    // echo "BASE64" | base64 -d
    const b64pipe = raw.match(/echo\s+["']?([A-Za-z0-9+/=]+)["']?\s*\|\s*base64\s+-d/);
    if (b64pipe) {
      try { outln(esc(atob(b64pipe[1]))); }
      catch { outln(`<span class="err">base64: invalid input</span>`); }
      return;
    }
    // cat FILE | grep PATTERN
    const grepPipe = raw.match(/cat\s+(\S+)\s*\|\s*grep\s+["']?(.+?)["']?\s*$/);
    if (grepPipe) {
      const node = getNode(resolvePath(grepPipe[1]));
      if (!node) { outln(`<span class="err">cat: ${esc(grepPipe[1])}: No such file or directory</span>`); return; }
      const re = new RegExp(grepPipe[2], 'i');
      (node.content||'').split('\n').filter(l => re.test(l)).forEach(l => outln(esc(l)));
      return;
    }
    outln(`<span class="err">bash: pipe expression not supported here</span>`);
  }

  /* ═══════════════════════════════════════════════════════════
     COMMANDS
  ═══════════════════════════════════════════════════════════ */
  function cmdHelp() {
    outln(`<span class="hi">available commands</span>`);
    outln(`<span class="dim">──────────────────────────────────────────────</span>`);
    [['ls [-a] [path]','list directory contents'],
     ['cd [path]','change directory'],
     ['cat [file]','print file contents'],
     ['nano [file]','open file in editor (Ctrl+X to exit)'],
     ['imgview [file]','render image file (any key to exit)'],
     ['git log / git show [hash]','view git history'],
     ['env','print environment variables'],
     ['echo "..." | base64 -d','decode base64 string'],
     ['base64 -d [file]','decode base64 file'],
     ['grep [pattern] [file]','search file for pattern'],
     ['strings [file]','extract printable strings'],
     ['file [name]','identify file type'],
     ['history','show command history'],
     ['pwd / whoami / date','system info'],
     ['clear','clear terminal'],
     ['exit','close terminal'],
    ].forEach(([c,d]) => outln(`  <span class="ok">${esc(c).padEnd(28)}</span>${esc(d)}`));
  }

  function cmdLs(args) {
    const showHidden = args.some(a => a.startsWith('-') && a.includes('a'));
    const pathArg = args.find(a => !a.startsWith('-'));
    const target = pathArg ? resolvePath(pathArg) : cwd;
    const node = getNode(target);
    if (!node) { outln(`<span class="err">ls: cannot access '${esc(pathArg||'')}': No such file or directory</span>`); return; }
    if (node.type === 'file') { outln(esc(pathArg || cwdStr())); return; }

    const kids = node.children || {};
    const entries = Object.entries(kids)
      .filter(([n]) => showHidden || !n.startsWith('.'))
      .sort(([a,ca],[b,cb]) => {
        const da = ca.type==='dir'||ca.git, db = cb.type==='dir'||cb.git;
        return da===db ? a.localeCompare(b) : da?-1:1;
      });

    if (showHidden) outln(`<span class="hid">.  ..</span>`);
    if (!entries.length) return;

    outln(entries.map(([name,child]) => {
      const h = name.startsWith('.');
      if (child.type==='dir'||child.git) return `<span class="${h?'hid':'dir'}">${esc(name)}/</span>`;
      if (child.executable)              return `<span class="${h?'hid':'exe'}">${esc(name)}*</span>`;
      if (child.image)                   return `<span class="${h?'hid':'hi'}">${esc(name)}</span>`;
      return `<span class="${h?'hid':''}">${esc(name)}</span>`;
    }).join('  '));
  }

  function cmdCd(args) {
    const dest = args[0] || '~';
    const target = resolvePath(dest);
    if (!target) { outln(`<span class="err">cd: ${esc(dest)}: No such file or directory</span>`); return; }
    const node = getNode(target);
    if (!node) { outln(`<span class="err">cd: ${esc(dest)}: No such file or directory</span>`); return; }
    if (node.type !== 'dir' && !node.git) { outln(`<span class="err">cd: ${esc(dest)}: Not a directory</span>`); return; }
    cwd = target;
    updateCwd();
  }

  function cmdCat(args) {
    if (!args.length) { outln(`<span class="err">cat: missing operand</span>`); return; }
    args.forEach(arg => {
      const node = getNode(resolvePath(arg));
      if (!node) { outln(`<span class="err">cat: ${esc(arg)}: No such file or directory</span>`); return; }
      if (node.type==='dir'||node.git) { outln(`<span class="err">cat: ${esc(arg)}: Is a directory</span>`); return; }
      outln(esc(node.content));
    });
  }

  function cmdNano(args) {
    if (!args.length) { outln(`<span class="err">nano: missing filename</span>`); return; }
    const target = resolvePath(args[0]);
    const node = getNode(target);
    if (!node) { outln(`<span class="err">nano: ${esc(args[0])}: No such file or directory</span>`); return; }
    if (node.type==='dir'||node.git) { outln(`<span class="err">nano: ${esc(args[0])}: Is a directory</span>`); return; }

    inputLocked = true;
    const wrap = document.getElementById('at-win-wrap');
    const fname = args[0].split('/').pop();
    const nano = document.createElement('div');
    nano.id = 'at-nano';
    nano.innerHTML = `
      <div id="at-nano-topbar">GNU nano 7.2 &nbsp;—&nbsp; ${esc(fname)} &nbsp;—&nbsp; Read Only</div>
      <div id="at-nano-content">${esc(node.content)}</div>
      <div id="at-nano-footer">
        <span class="at-nk"><span>^X</span>Exit</span>
        <span class="at-nk"><span>^W</span>Search</span>
        <span class="at-nk"><span>^G</span>Help</span>
        <span class="at-nk"><span>PgUp/Dn</span>Scroll</span>
        <span style="margin-left:auto;font-size:10px;color:rgba(129,236,236,0.28)">[Read Only]</span>
      </div>
    `;
    wrap.appendChild(nano);

    const closeNano = e => {
      if ((e.ctrlKey && e.key==='x') || e.key==='Escape') {
        nano.remove(); inputLocked = false;
        document.removeEventListener('keydown', closeNano);
        document.getElementById('at-input')?.focus();
        outln(); updateCwd();
      }
    };
    document.addEventListener('keydown', closeNano);
  }

  function cmdImgview(args) {
    if (!args.length) { outln(`<span class="err">imgview: missing filename</span>`); return; }
    const target = resolvePath(args[0]);
    const node = getNode(target);
    if (!node) { outln(`<span class="err">imgview: ${esc(args[0])}: No such file or directory</span>`); return; }
    if (!node.image) {
      outln(`<span class="err">imgview: ${esc(args[0])}: unsupported format</span>`);
      outln(`<span class="dim">supported: .ascii .png .jpg</span>`);
      return;
    }
    outln(`<span class="dim">[ imgview v1.3.2 — ${esc(args[0].split('/').pop())} ]</span>`);
    outln();
    outln(`<span class="img">${esc(node.content)}</span>`);
    outln(`<span class="dim">[ any key to return ]</span>`);
    inputLocked = true;
    setTimeout(() => {
      document.addEventListener('keydown', function resume() {
        inputLocked = false;
        document.removeEventListener('keydown', resume);
        outln(); updateCwd();
        document.getElementById('at-input')?.focus();
      }, { once: true });
    }, 200);
  }

  function cmdGit(args) {
    const sub = args[0];
    const gitNode = (function findGit() {
      for (let i = cwd.length; i >= 1; i--) {
        const n = getNode(cwd.slice(0, i));
        if (n && n.git) return n;
      }
      return null;
    })();

    if (sub === 'log') {
      if (!gitNode) { outln(`<span class="err">fatal: not a git repository</span>`); return; }
      gitNode.gitLog.forEach(c => {
        outln(`<span class="hi">commit ${esc(c.hash)}</span>`);
        outln(`<span class="dim">Author: ${esc(c.author)} <${esc(c.email)}></span>`);
        outln(`<span class="dim">Date:   ${esc(c.date)}</span>`);
        outln(); outln(`    ${esc(c.message)}`); outln();
      });
    } else if (sub === 'show') {
      if (!gitNode) { outln(`<span class="err">fatal: not a git repository</span>`); return; }
      const h = args[1] || '';
      const c = gitNode.gitLog.find(x => x.hash.startsWith(h) || x.short === h);
      if (!c) { outln(`<span class="err">fatal: ambiguous argument '${esc(h)}': unknown revision</span>`); return; }
      outln(`<span class="hi">commit ${esc(c.hash)}</span>`);
      outln(`<span class="dim">Author: ${esc(c.author)} <${esc(c.email)}></span>`);
      outln(`<span class="dim">Date:   ${esc(c.date)}</span>`);
      outln(); outln(`    ${esc(c.message)}`); outln();
      outln(colorizeDiff(c.diff));
    } else if (sub === 'status') {
      if (!gitNode) { outln(`<span class="err">fatal: not a git repository</span>`); return; }
      outln(`On branch main\nnothing to commit, working tree clean`);
    } else if (sub === 'branch') {
      if (!gitNode) { outln(`<span class="err">fatal: not a git repository</span>`); return; }
      outln(`<span class="ok">* main</span>`);
    } else if (sub === 'diff') {
      outln(`<span class="dim">(clean working tree)</span>`);
    } else {
      outln(`<span class="err">git: '${esc(sub||'')}' is not a git command.</span>`);
      outln(`<span class="dim">try: log  show [hash]  status  branch  diff</span>`);
    }
  }

  function cmdEnv() {
    Object.entries(ENV_VARS).forEach(([k,v]) => {
      outln(`<span class="ek">${esc(k)}</span>=<span class="ev">${esc(v)}</span>`);
    });
  }

  function cmdBase64(args) {
    const decode = args.some(a => a==='-d'||a==='--decode');
    const fileArg = args.find(a => !a.startsWith('-'));
    if (!fileArg) { outln(`<span class="err">base64: missing operand</span>\n<span class="dim">usage: base64 -d FILE  or  echo "..." | base64 -d</span>`); return; }
    if (!decode) { outln(`<span class="err">base64: encoding not supported in this environment</span>`); return; }
    const node = getNode(resolvePath(fileArg));
    if (!node) { outln(`<span class="err">base64: ${esc(fileArg)}: No such file or directory</span>`); return; }
    try { outln(esc(atob(node.content.trim()))); }
    catch { outln(`<span class="err">base64: invalid input</span>`); }
  }

  function cmdFile(args) {
    if (!args.length) { outln(`<span class="err">file: missing operand</span>`); return; }
    args.forEach(a => {
      const n = getNode(resolvePath(a));
      if (!n) { outln(`${esc(a)}: <span class="err">No such file or directory</span>`); return; }
      if (n.type==='dir'||n.git) { outln(`${esc(a)}: directory`); return; }
      if (n.image)      { outln(`${esc(a)}: ASCII text art`); return; }
      if (n.executable) { outln(`${esc(a)}: Bourne-Again shell script, executable`); return; }
      outln(`${esc(a)}: ASCII text`);
    });
  }

  function cmdStrings(args) {
    if (!args.length) { outln(`<span class="err">strings: missing operand</span>`); return; }
    const n = getNode(resolvePath(args[0]));
    if (!n) { outln(`<span class="err">strings: ${esc(args[0])}: No such file or directory</span>`); return; }
    (n.content||'').split('\n').map(l=>l.trim()).filter(l=>l.length>=4).forEach(l=>outln(esc(l)));
  }

  function cmdGrep(args) {
    const files = args.filter(a => !a.startsWith('-'));
    const pat = files.shift();
    if (!pat) { outln(`<span class="err">grep: missing pattern</span>`); return; }
    if (!files.length) { outln(`<span class="dim">(usage: grep PATTERN FILE)</span>`); return; }
    files.forEach(f => {
      const n = getNode(resolvePath(f));
      if (!n) { outln(`<span class="err">grep: ${esc(f)}: No such file or directory</span>`); return; }
      if (n.type==='dir') { outln(`<span class="err">grep: ${esc(f)}: Is a directory</span>`); return; }
      const re = new RegExp(pat, 'gi');
      (n.content||'').split('\n').filter(l=>re.test(l)).forEach(l =>
        outln(esc(l).replace(new RegExp(esc(pat),'gi'), m => `<span class="hi">${m}</span>`))
      );
    });
  }

  function cmdHistCmd() {
    [...cmdHistArr].reverse().forEach((c,i) => outln(`  ${String(i+1).padStart(3)}  ${esc(c)}`));
  }

  function cmdMan(args) {
    const p = args[0]||'';
    if (!p) { outln(`<span class="err">What manual page do you want?</span>`); return; }
    if (/^unlock/.test(p)) {
      outln(`<span class="hi">UNLOCK.SH(1)              Arctic Vault Manual</span>`);
      outln(); outln(`<span class="hi">SYNOPSIS</span>   ./unlock.sh [combination]`);
      outln(`<span class="hi">FORMAT</span>     [p1]-[p2]-[p3]-[p4]-[p5]`);
      outln(`<span class="hi">NOTE</span>       must be run from within the .vault directory`);
      outln(); outln(`<span class="dim">(END)</span>`);
    } else { outln(`<span class="err">No manual entry for ${esc(p)}</span>`); }
  }

  /* ═══════════════════════════════════════════════════════════
     UNLOCK
  ═══════════════════════════════════════════════════════════ */
  function cmdUnlock(args) {
    const inVault = cwd.length >= 2 && cwd[cwd.length - 1] === '.vault';
    if (!inVault) {
      outln(`<span class="err">bash: ./unlock.sh: No such file or directory</span>`);
      outln(`<span class="dim">hint: are you in the right directory?</span>`);
      return;
    }
    const key = (args[0] || '').trim();
    outln(`<span class="dim">checking combination...</span>`);
    inputLocked = true;

    setTimeout(() => {
      if (key === CORRECT) {
        outln(`<span class="ok">✓ combination accepted.</span>`);
        outln(`<span class="dim">unlocking vault...</span>`);
        setTimeout(showNameInput, 1300);
      } else {
        inputLocked = false;
        if (!key) {
          outln(`<span class="err">usage: ./unlock.sh [p1]-[p2]-[p3]-[p4]-[p5]</span>`);
        } else {
          const parts = key.split('-');
          outln(`<span class="err">✗ invalid combination: "${esc(key)}"</span>`);
          if (parts.length !== 5) outln(`<span class="dim">  expected 5 parts, got ${parts.length}</span>`);
          else outln(`<span class="dim">  access denied.</span>`);
        }
        outln(); updateCwd();
      }
    }, 1000);
  }

  /* ═══════════════════════════════════════════════════════════
     NAME INPUT
  ═══════════════════════════════════════════════════════════ */
  function showNameInput() {
    const el = document.createElement('div');
    el.id = 'at-cert-overlay';
    el.innerHTML = `
      <div id="at-name-screen">
        <div class="at-ns-lbl">🐧 &nbsp; Arctic Vault — Cleared</div>
        <div class="at-ns-sub">all five parts found. combination accepted.</div>
        <div class="at-ns-sub" style="margin-top:-18px;margin-bottom:26px;color:rgba(255,255,255,0.18);font-size:10px">enter your name to receive your certificate</div>
        <input id="at-name-input" type="text" placeholder="your name" autocomplete="off" spellcheck="false" maxlength="48" />
        <div class="at-ns-hint">press <span style="color:#5bc8ff">Enter</span> to generate</div>
      </div>
    `;
    document.body.appendChild(el);
    const inp = document.getElementById('at-name-input');
    inp.focus();
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const name = inp.value.trim() || 'Anonymous';
        el.remove();
        showCertificate(name);
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     CERTIFICATE
  ═══════════════════════════════════════════════════════════ */
  function showCertificate(name) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', timeZoneName:'short' });

    const el = document.createElement('div');
    el.id = 'at-cert-overlay';
    el.innerHTML = `
      <div id="at-certificate">
        <div class="at-c-br"></div>
        <div class="at-c-tr"></div>
        <div class="at-c-glow"></div>

        <div class="at-c-top">thatarcticpenguin.github.io</div>
        <div class="at-c-div"></div>
        <div class="at-c-sub">certificate of completion</div>
        <div class="at-c-title">Arctic Vault</div>
        <div class="at-c-div" style="width:200px"></div>

        <div class="at-c-body" style="margin-top:22px">This certifies that</div>
        <div class="at-c-name">${esc(name)}</div>
        <div class="at-c-body">
          successfully breached the Arctic Vault<br>
          by discovering all five hidden parts<br>
          and constructing the correct five-part combination.
        </div>

        <div class="at-c-parts">
          <span class="at-c-part" title="git show a3f9c2e">P1 · frost</span>
          <span class="at-c-part" title="imgview penguin.ascii">P2 · 7749</span>
          <span class="at-c-part" title="nano .hidden_note caesar+3">P3 · void</span>
          <span class="at-c-part" title="server.log base64 decode">P4 · d33p</span>
          <span class="at-c-part" title="env VAULT_HINT5 base64">P5 · north</span>
        </div>

        <div class="at-c-div" style="width:80px;margin-top:6px"></div>
        <div class="at-c-penguin">
     ___
    (   )
     \\_/
   ___|___
  /  ___  \\
 | / @ @ \\ |
 | \\  ^  / |
 |  |||||  |
 \\__|   |__/</div>

        <div class="at-c-footer">
          <div>
            <div class="at-c-sig-name">thatarcticpenguin</div>
            <div class="at-c-sig-label">site owner · arctic server</div>
          </div>
          <div class="at-c-stamp">
            <div class="at-c-stamp-icon">🐧</div>
            <div class="at-c-stamp-text">VAULT<br>CLEARED</div>
          </div>
          <div style="text-align:right">
            <div class="at-c-date-val">${esc(dateStr)}</div>
            <div class="at-c-date-val" style="font-size:10px;opacity:0.55">${esc(timeStr)}</div>
            <div class="at-c-date-label">date issued</div>
          </div>
        </div>

        <div class="at-c-badge">✓ &nbsp; VAULT CLEARED &nbsp;·&nbsp; thatarcticpenguin.github.io</div>
      </div>

      <div class="at-cert-actions">
        <button class="at-cert-btn primary" id="at-dl-btn">⬇ &nbsp; download as PNG</button>
        <button class="at-cert-btn" id="at-cert-close-btn">close</button>
      </div>
    `;
    document.body.appendChild(el);

    document.getElementById('at-cert-close-btn').addEventListener('click', closeTerminal);
    document.getElementById('at-dl-btn').addEventListener('click', () => downloadCert(name, dateStr, timeStr));
  }

  /* ═══════════════════════════════════════════════════════════
     DOWNLOAD CERTIFICATE AS PNG
  ═══════════════════════════════════════════════════════════ */
  function downloadCert(name, dateStr, timeStr) {
    const DPR = 2, W = 900, H = 620;
    const cv = document.createElement('canvas');
    cv.width = W * DPR; cv.height = H * DPR;
    const c = cv.getContext('2d');
    c.scale(DPR, DPR);

    // background
    const bg = c.createLinearGradient(0,0,W*0.6,H);
    bg.addColorStop(0,'#07101e'); bg.addColorStop(0.5,'#0a1322'); bg.addColorStop(1,'#060e1c');
    c.fillStyle = bg; c.fillRect(0,0,W,H);

    // glow
    const glo = c.createRadialGradient(W/2,H/2,60,W/2,H/2,320);
    glo.addColorStop(0,'rgba(0,80,220,0.07)'); glo.addColorStop(1,'transparent');
    c.fillStyle=glo; c.fillRect(0,0,W,H);

    // border
    c.strokeStyle='rgba(255,255,255,0.06)'; c.lineWidth=1;
    c.strokeRect(0.5,0.5,W-1,H-1);

    // corner brackets
    const brk = (x,y,dx,dy) => {
      c.strokeStyle='rgba(91,200,255,0.2)'; c.lineWidth=1;
      c.beginPath();
      c.moveTo(x,y+dy*60); c.lineTo(x,y); c.lineTo(x+dx*60,y);
      c.stroke();
    };
    brk(20,20,1,1); brk(W-20,20,-1,1); brk(20,H-20,1,-1); brk(W-20,H-20,-1,-1);

    const divLine = (cy,w=130) => {
      const g=c.createLinearGradient(W/2-w/2,0,W/2+w/2,0);
      g.addColorStop(0,'transparent'); g.addColorStop(0.5,'rgba(91,200,255,0.28)'); g.addColorStop(1,'transparent');
      c.fillStyle=g; c.fillRect(W/2-w/2,cy,w,1);
    };

    c.textAlign='center';
    let y=50;

    c.fillStyle='rgba(91,200,255,0.4)'; c.font='9.5px monospace';
    c.fillText('THATARCTICPENGUIN.GITHUB.IO',W/2,y); y+=14;
    divLine(y); y+=12;
    c.fillStyle='rgba(255,255,255,0.22)'; c.font='9.5px monospace';
    c.fillText('CERTIFICATE OF COMPLETION',W/2,y); y+=22;

    c.fillStyle='#fff'; c.font='normal 36px "Times New Roman",serif';
    c.shadowColor='rgba(91,200,255,0.3)'; c.shadowBlur=20;
    c.fillText('Arctic Vault',W/2,y); c.shadowBlur=0; y+=8;
    divLine(y,210); y+=26;

    c.fillStyle='rgba(200,215,235,0.62)'; c.font='13px "Times New Roman",serif';
    c.fillText('This certifies that',W/2,y); y+=30;

    c.fillStyle='#fff'; c.font='normal 30px "Times New Roman",serif';
    c.shadowColor='rgba(91,200,255,0.3)'; c.shadowBlur=16;
    c.fillText(name,W/2,y); c.shadowBlur=0;
    const nw=c.measureText(name).width;
    c.strokeStyle='rgba(255,255,255,0.14)'; c.lineWidth=1;
    c.beginPath(); c.moveTo(W/2-nw/2-12,y+6); c.lineTo(W/2+nw/2+12,y+6); c.stroke();
    y+=26;

    c.fillStyle='rgba(200,215,235,0.62)'; c.font='13px "Times New Roman",serif';
    c.fillText('successfully breached the Arctic Vault',W/2,y); y+=18;
    c.fillText('by discovering all five hidden parts',W/2,y); y+=18;
    c.fillText('and constructing the correct combination.',W/2,y); y+=26;

    // parts badges
    const parts=['P1 · frost','P2 · 7749','P3 · void','P4 · d33p','P5 · north'];
    const bw=100,bh=22,bgap=8;
    const totalBW=parts.length*bw+(parts.length-1)*bgap;
    let bx=W/2-totalBW/2;
    c.font='9px monospace';
    parts.forEach(p => {
      c.fillStyle='rgba(0,80,150,0.18)'; c.strokeStyle='rgba(91,200,255,0.2)'; c.lineWidth=1;
      c.beginPath(); c.rect(bx,y-bh+5,bw,bh); c.fill(); c.stroke();
      c.fillStyle='#81ecec'; c.textAlign='center';
      c.fillText(p,bx+bw/2,y+1);
      bx+=bw+bgap;
    });
    y+=30;

    // footer divider
    c.strokeStyle='rgba(255,255,255,0.055)'; c.lineWidth=1;
    c.beginPath(); c.moveTo(40,y); c.lineTo(W-40,y); c.stroke(); y+=18;

    // sig
    c.textAlign='left'; c.font='italic 17px "Times New Roman",serif';
    c.fillStyle='rgba(255,255,255,0.52)'; c.fillText('thatarcticpenguin',50,y);
    c.font='8.5px monospace'; c.fillStyle='rgba(255,255,255,0.18)';
    c.fillText('SITE OWNER · ARCTIC SERVER',50,y+13);

    // stamp
    const cx=W/2, cy2=y+5;
    c.beginPath(); c.arc(cx,cy2,28,0,Math.PI*2);
    c.strokeStyle='rgba(91,200,255,0.28)'; c.lineWidth=1.5; c.stroke();
    c.beginPath(); c.arc(cx,cy2,22,0,Math.PI*2);
    c.strokeStyle='rgba(91,200,255,0.1)'; c.lineWidth=1; c.stroke();
    c.font='20px serif'; c.textAlign='center'; c.fillText('🐧',cx,cy2+5);
    c.font='6.5px monospace'; c.fillStyle='rgba(91,200,255,0.42)';
    c.fillText('CLEARED',cx,cy2+21);

    // date
    c.textAlign='right'; c.font='11px monospace';
    c.fillStyle='rgba(255,255,255,0.36)'; c.fillText(dateStr,W-50,y);
    c.font='9px monospace'; c.fillStyle='rgba(255,255,255,0.16)'; c.fillText('DATE ISSUED',W-50,y+13);
    y+=40;

    // badge
    c.font='9px monospace'; c.textAlign='center';
    const badge='VAULT CLEARED  ·  THATARCTICPENGUIN.GITHUB.IO';
    const badgeW=c.measureText(badge).width+42;
    c.fillStyle='rgba(77,232,142,0.05)'; c.strokeStyle='rgba(77,232,142,0.2)'; c.lineWidth=1;
    c.beginPath(); c.rect(W/2-badgeW/2,y-15,badgeW,23); c.fill(); c.stroke();
    c.fillStyle='#4de88e'; c.fillText(badge,W/2,y);

    const a=document.createElement('a');
    a.download=`arctic-vault-${name.replace(/\s+/g,'-').toLowerCase()}.png`;
    a.href=cv.toDataURL('image/png');
    a.click();
  }

})();
