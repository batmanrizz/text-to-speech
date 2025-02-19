let currentUtterance = null;

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "readText") {
    stopSpeaking();
    speakText(request.text);
  }
});

// Stop current speech
function stopSpeaking() {
  if (currentUtterance) {
    speechSynthesis.cancel();
  }
}

// Speak text with saved settings
function speakText(text) {
  chrome.runtime.sendMessage({ action: "getSettings" }, (settings) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    
    utterance.voice = voices.find(v => v.name === settings.voice) || voices[0];
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;
    utterance.volume = settings.volume;

    currentUtterance = utterance;
    speechSynthesis.speak(utterance);

    utterance.onend = () => {
      currentUtterance = null;
    };
  });
}

// Add floating controls
const controls = document.createElement('div');
controls.className = 'voice-reader-controls';
controls.innerHTML = `
  <button id="pauseResume">⏸️</button>
  <button id="stop">⏹️</button>
`;
document.body.appendChild(controls);

document.getElementById('pauseResume').addEventListener('click', () => {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  } else {
    speechSynthesis.pause();
  }
});

document.getElementById('stop').addEventListener('click', stopSpeaking);
