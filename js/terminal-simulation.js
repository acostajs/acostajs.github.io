function typeText(element, text, index, speed, callback) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    setTimeout(function () {
      typeText(element, text, index + 1, speed, callback);
    }, speed);
  } else if (callback) {
    callback();
  }
}

function typeInput(inputElement, text, index, speed, callback) {
  if (index < text.length) {
    inputElement.value += text.charAt(index);
    setTimeout(function () {
      typeInput(inputElement, text, index + 1, speed, callback);
    }, speed);
  } else if (callback) {
    callback();
  }
}

function getRunningText() {
  const lang = document.documentElement.lang || 'en';
  if (window.translations && window.translations[lang] && window.translations[lang]['terminal-running']) {
    return window.translations[lang]['terminal-running'];
  }
  return lang === 'fr' 
    ? "[EN COURS] Exécution de l'automatisation du navigateur Playwright..." 
    : "[RUNNING] Executing Playwright Browser Automation...";
}

export function startTerminalSimulation() {
  const terminal = document.querySelector('.terminal-code');
  const mockInput = document.getElementById('mock-search-input');
  const mockBtn = document.getElementById('mock-submit-btn');
  const successBadge = document.querySelector('.hero-badge-success');

  if (!terminal || !mockInput || !mockBtn || !successBadge) {
    return;
  }

  let timeoutId = null;

  function runSequence() {
    terminal.textContent = '';
    mockInput.value = '';
    mockBtn.classList.remove('active-click');
    successBadge.classList.remove('visible');

    const promptSpan = document.createElement('span');
    promptSpan.className = 'terminal-prompt';
    promptSpan.textContent = 'user@portfolio:~$ ';
    terminal.appendChild(promptSpan);

    const commandTextSpan = document.createElement('span');
    terminal.appendChild(commandTextSpan);

    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'terminal-cursor';
    terminal.appendChild(cursorSpan);

    const command = 'pytest tests/e2e/test_portfolio.py';
    typeText(commandTextSpan, command, 0, 60, function () {
      cursorSpan.remove();
      terminal.appendChild(document.createTextNode('\n'));

      const runningLine = document.createElement('div');
      runningLine.textContent = getRunningText();
      terminal.appendChild(runningLine);
      terminal.appendChild(document.createTextNode('\n'));

      terminal.scrollTop = terminal.scrollHeight;

      timeoutId = setTimeout(function () {
        const query = 'Juan Acosta';
        typeInput(mockInput, query, 0, 80, function () {
          timeoutId = setTimeout(function () {
            mockBtn.classList.add('active-click');
            
            timeoutId = setTimeout(function () {
              mockBtn.classList.remove('active-click');
              
              successBadge.classList.add('visible');

              const successLine = document.createElement('div');
              successLine.style.color = '#2563eb';
              successLine.textContent = '✓ 1 passed in 0.41s';
              terminal.appendChild(successLine);
              terminal.appendChild(document.createTextNode('\n'));

              const newPromptSpan = document.createElement('span');
              newPromptSpan.className = 'terminal-prompt';
              newPromptSpan.textContent = 'user@portfolio:~$ ';
              terminal.appendChild(newPromptSpan);

              const newCursorSpan = document.createElement('span');
              newCursorSpan.className = 'terminal-cursor';
              terminal.appendChild(newCursorSpan);

              terminal.scrollTop = terminal.scrollHeight;

              timeoutId = setTimeout(runSequence, 6000);
            }, 250);
          }, 400);
        });
      }, 800);
    });
  }

  runSequence();

  return function cleanup() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
}
