/**
 * bharathiAssets.js - Centralized Asset Dictionary for All Assistant States
 * Prevents scattering of image paths throughout components.
 */
const getAssetPrefix = () => {
  return window.location.pathname.includes('/pages/') ? '../' : '';
};

const bharathiAssets = {
  idle: 'assets/images/bharathi.png',
  greeting: 'assets/images/bharathi.png',
  listening: 'assets/images/bharathi_listening.jpg',
  thinking: 'assets/images/bharathi_thinking.jpg',
  speaking: 'assets/images/bharathi_speaking.jpg',
  happy: 'assets/images/bharathi.png',
  confused: 'assets/images/bharathi.png',
  error: 'assets/images/bharathi.png',
  goodbye: 'assets/images/bharathi.png'
};

/** Retrieve full normalized image path for a given assistant state */
const getBharathiAsset = (stateName) => {
  const key = (stateName || 'idle').toLowerCase();
  const relPath = bharathiAssets[key] || bharathiAssets.idle;
  return getAssetPrefix() + relPath;
};

window.bharathiAssets = bharathiAssets;
window.getBharathiAsset = getBharathiAsset;
