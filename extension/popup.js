// Load available voices
function loadVoices() {
  const voiceSelect = document.getElementById('voice');
  const voices = speechSynthesis.getVoices();
  
  voiceSelect.innerHTML = voices.map(voice => 
    `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
  ).join('');
}

speechSynthesis.onvoiceschanged = loadVoices;

// Load saved settings
chrome.runtime.sendMessage({ action: "getSettings" }, (settings) => {
  document.getElementById('voice').value = settings.voice;
  document.getElementById('rate').value = settings.rate;
  document.getElementById('pitch').value = settings.pitch;
  document.getElementById('volume').value = settings.volume;
  
  updateLabels();
});

// Update labels when sliders change
function updateLabels() {
  document.getElementById('rateValue').textContent = 
    `${document.getElementById('rate').value}x`;
  document.getElementById('pitchValue').textContent = 
    `${document.getElementById('pitch').value}x`;
  document.getElementById('volumeValue').textContent = 
    `${Math.round(document.getElementById('volume').value * 100)}%`;
}

['rate', 'pitch', 'volume'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateLabels);
});

// Save settings
document.getElementById('save').addEventListener('click', () => {
  const settings = {
    voice: document.getElementById('voice').value,
    rate: parseFloat(document.getElementById('rate').value),
    pitch: parseFloat(document.getElementById('pitch').value),
    volume: parseFloat(document.getElementById('volume').value)
  };

  chrome.runtime.sendMessage({ 
    action: "saveSettings",
    settings
  }, () => {
    window.close();
  });
});
