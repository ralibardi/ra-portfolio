// Check if the user is on iOS
const isIos = (): boolean => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

// Check if the app is already installed
const isInStandaloneMode = (): boolean =>
  'standalone' in window.navigator && (window.navigator.standalone as boolean);

// Show the installation prompt if the criteria are met
if (isIos() && !isInStandaloneMode()) {
  const iosPrompt = document.getElementById('apple-prompt');
  if (iosPrompt) {
    iosPrompt.style.display = 'block';
    const pElement = document.createElement('p');
    pElement.innerHTML =
      'To install this app, tap <strong>Share</strong> and then <strong>Add to Home Screen</strong>.';
    iosPrompt.appendChild(pElement);
  }
}
