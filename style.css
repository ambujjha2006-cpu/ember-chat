:root {
  --bg: #12181b;
  --surface: #1a2226;
  --surface-2: #212a2f;
  --border: #2b363b;
  --text: #e8e6df;
  --text-muted: #8a9399;
  --accent: #e8a33d;
  --accent-dim: #6b5327;
  --user-bubble: #2a3a3f;
  --assistant-accent: #e8a33d;
  --danger: #d9705a;

  --font-display: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

* { box-sizing: border-box; }

html, body {
  height: 100%;
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

button { font-family: inherit; }

.app {
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 100vh;
}

/* ---------- Sidebar ---------- */
.sidebar {
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 20px 14px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 6px 20px;
}

.brand-mark {
  color: var(--accent);
  font-size: 10px;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.new-chat-btn {
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.new-chat-btn:hover { border-color: var(--accent); }
.new-chat-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

.session-list {
  margin-top: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.session-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 9px 10px;
  border-radius: 7px;
  font-size: 13.5px;
  color: var(--text-muted);
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.session-item:hover { background: var(--surface-2); color: var(--text); }
.session-item.active {
  background: var(--surface-2);
  color: var(--text);
  border-color: var(--border);
}

.session-item .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.session-item .delete-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  opacity: 0;
  font-size: 13px;
  padding: 2px 4px;
}

.session-item:hover .delete-btn { opacity: 1; }
.session-item .delete-btn:hover { color: var(--danger); }

.sidebar-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 6px 2px;
  font-size: 11.5px;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
  margin-top: 10px;
  padding-top: 14px;
}

.dot-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(232, 163, 61, 0.6);
  animation: pulse 2.2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(232, 163, 61, 0.5); }
  70% { box-shadow: 0 0 0 6px rgba(232, 163, 61, 0); }
  100% { box-shadow: 0 0 0 0 rgba(232, 163, 61, 0); }
}

/* ---------- Chat pane ---------- */
.chat-pane {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 0;
}

.chat-header {
  padding: 18px 32px;
  border-bottom: 1px solid var(--border);
}

.chat-header h1 {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: var(--text-muted);
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.empty-state {
  margin: auto;
  text-align: center;
  max-width: 480px;
}

.empty-state .eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 6px;
}

.empty-state h2 {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  margin: 0 0 10px;
}

.empty-state .sub {
  color: var(--text-muted);
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0;
}

.msg {
  display: flex;
  gap: 12px;
  max-width: 720px;
  animation: rise 0.25s ease;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.msg.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.avatar {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 12px;
  margin-top: 2px;
}

.msg.assistant .avatar {
  background: var(--accent-dim);
  color: var(--accent);
}

.msg.user .avatar {
  background: var(--surface-2);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

.bubble {
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14.5px;
  line-height: 1.65;
  white-space: pre-wrap;
  word-break: break-word;
}

.msg.assistant .bubble {
  background: var(--surface);
  border-left: 2px solid var(--assistant-accent);
  border-radius: 4px 12px 12px 12px;
}

.msg.user .bubble {
  background: var(--user-bubble);
  border-radius: 12px 4px 12px 12px;
}

.bubble code {
  font-family: var(--font-mono);
  background: rgba(255,255,255,0.06);
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 13px;
}

.bubble pre {
  background: #0f1416;
  border: 1px solid var(--border);
  padding: 12px;
  border-radius: 8px;
  overflow-x: auto;
}
.bubble pre code { background: none; padding: 0; }

.typing {
  display: flex;
  gap: 4px;
  padding: 6px 2px;
}
.typing span {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--text-muted);
  animation: bounce 1.2s infinite ease-in-out;
}
.typing span:nth-child(2) { animation-delay: 0.15s; }
.typing span:nth-child(3) { animation-delay: 0.3s; }
@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-4px); opacity: 1; }
}

.error-note {
  color: var(--danger);
  font-size: 13px;
  font-family: var(--font-mono);
}

/* ---------- Composer ---------- */
.composer {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 16px 32px 24px;
  border-top: 1px solid var(--border);
}

.composer textarea {
  flex: 1;
  resize: none;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 12px 14px;
  border-radius: 10px;
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.5;
  max-height: 160px;
}

.composer textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.composer button {
  background: var(--accent);
  color: #1a1206;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: filter 0.15s ease;
}

.composer button:hover { filter: brightness(1.08); }
.composer button:disabled { opacity: 0.5; cursor: not-allowed; }

/* ---------- Scrollbars ---------- */
.session-list::-webkit-scrollbar, .messages::-webkit-scrollbar { width: 8px; }
.session-list::-webkit-scrollbar-thumb, .messages::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 4px;
}

/* ---------- Responsive ---------- */
@media (max-width: 720px) {
  .app { grid-template-columns: 1fr; }
  .sidebar {
    position: fixed;
    inset: 0 30% 0 0;
    z-index: 10;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
  .sidebar.open { transform: translateX(0); }
  .chat-header, .messages, .composer { padding-left: 18px; padding-right: 18px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.001ms !important; }
}
