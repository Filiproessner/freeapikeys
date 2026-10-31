const apiData = [
  {
    name: 'OpenAI Demo Gateway',
    category: 'AI',
    kind: 'Text + Vision',
    key: 'sk-demo-4a1c7e8d3a9f6c2b1e7d9f0a4c8e3d2b',
    badge: 'Demo',
    status: 'Ready for mockups',
    icon: 'O'
  },
  {
    name: 'MapQuest Studio',
    category: 'Maps',
    kind: 'Geocoding',
    key: 'AIzaSy7kQv3cM9xN2pV8rL4dF6hJ1tW0sY7uB3nC6mP9kR',
    badge: 'Maps',
    status: 'Preview only',
    icon: 'M'
  },
  {
    name: 'Stripe Sandbox',
    category: 'Payment',
    kind: 'Checkout',
    key: 'sk_test_4eC39HqLyjWDarjtT1zdp7dcK1oKxP9Q0w',
    badge: 'Payment',
    status: 'Testing mode',
    icon: 'S'
  },
  {
    name: 'Cloudflare Edge',
    category: 'Storage',
    kind: 'CDN + Secure',
    key: 'cf-demo-51ad2f1b8d6947b3a3ca9d89ac3d83e5',
    badge: 'Storage',
    status: 'Illustrative',
    icon: 'C'
  },
  {
    name: 'WeatherGrid Labs',
    category: 'Weather',
    kind: 'Forecast',
    key: 'wg-demo-7c3ea14a9ffb02d4cc8a9cd7d6eb2cf1',
    badge: 'Weather',
    status: 'Sandbox',
    icon: 'W'
  },
  {
    name: 'Algolia Search',
    category: 'Search',
    kind: 'Instant Search',
    key: 'algolia-demo-3f6b3ea1ca784d7d8d0a7f6bf7e8cc3a',
    badge: 'Search',
    status: 'UI mock',
    icon: 'A'
  },
  {
    name: 'Twilio Signal',
    category: 'Messaging',
    kind: 'SMS + Voice',
    key: 'ACd9e7f77bf8a75f3f8d5326f98d84ef3',
    badge: 'Messaging',
    status: 'Not active',
    icon: 'T'
  },
  {
    name: 'Gemini Studio',
    category: 'AI',
    kind: 'Multimodal',
    key: 'AIzaSyDemo7c3xP2m9rN8qF1dW4gH6jL0kV3uQ7sY9sX',
    badge: 'AI',
    status: 'Prototype',
    icon: 'G'
  }
];

const apiGrid = document.getElementById('apiGrid');

if (apiGrid) {
  apiGrid.innerHTML = apiData
    .map(
      (item) => `
        <article class="api-card">
          <div class="api-top">
            <div class="api-logo">${item.icon}</div>
            <span class="api-badge">${item.badge}</span>
          </div>
          <p class="api-kind">${item.category}</p>
          <h3 class="api-name">${item.name}</h3>
          <code>${item.key}</code>
          <div class="api-meta">
            <span>${item.kind}</span>
            <span>v1.0</span>
          </div>
          <div class="api-footer">
            <span class="api-status">${item.status}</span>
            <button class="copy-btn" data-copy="${item.key}">Kopieren</button>
          </div>
        </article>
      `
    )
    .join('');
}

const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy || '';

    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = 'Kopiert';
      setTimeout(() => {
        button.textContent = original;
      }, 1200);
    } catch (error) {
      button.textContent = 'Fehler';
      setTimeout(() => {
        button.textContent = 'Kopieren';
      }, 1200);
    }
  });
});

const chips = document.querySelectorAll('.chip');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
  });
});
