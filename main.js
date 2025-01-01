// Language Translation Functions
function bodoTranslate(text, script) {
  console.log('Bodo Translator: Input:', text, 'Script:', script);

  const bodoDictionary = {
    good morning: { original: 'পেপেম মনপ', latin: 'pelem monop' },
    world: { original: '𑑛𑑨𑑒𑒌', latin: 'mwnthang' },
    love: { original: '𑑖𑑧𑑙𑑦', latin: 'brwi' },
    peace: { original: '𑑥𑑧𑑒𑑣𑑧𑑛', latin: 'swnsw' },
  };

  const words = text.trim().toLowerCase().split(' ');  // Normalize the input text
  const translatedWords = words.map(word => {
    if (bodoDictionary[word]) {
      return bodoDictionary[word][script];
    } else {
      console.warn('Bodo Translator: Word not found:', word);
      return '[unknown]'; // Placeholder for unknown words
    }
  });

  console.log('Bodo Translator: Output:', translatedWords.join(' '));
  return translatedWords.join(' ');
}

function kochTranslate(text, script) {
  console.log('Koch Translator: Input:', text, 'Script:', script);

  const kochDictionary = {
    hello: { original: '𑑰𑒎𑒑𑒋', latin: 'naojw' },
    world: { original: '𑒋𑒈𑒐𑒏', latin: 'dwngkw' },
    love: { original: '𑒌𑒄𑒇𑒍', latin: 'lajon' },
    peace: { original: '𑒅𑒌𑒇𑒈', latin: 'thumng' },
  };

  const words = text.trim().toLowerCase().split(' ');  // Normalize the input text
  const translatedWords = words.map(word => {
    if (kochDictionary[word]) {
      return kochDictionary[word][script];
    } else {
      console.warn('Koch Translator: Word not found:', word);
      return '[unknown]'; // Placeholder for unknown words
    }
  });

  console.log('Koch Translator: Output:', translatedWords.join(' '));
  return translatedWords.join(' ');
}

// DOM Elements
const sourceLang = document.getElementById('source-lang');
const sourceText = document.getElementById('source-text');
const outputLang = document.getElementById('output-lang');
const translatedText = document.getElementById('translated-text');
const translateBtn = document.getElementById('translate-btn');

// Translation Logic
translateBtn.addEventListener('click', () => {
  const sourceLanguage = sourceLang.value; // Get source language
  const text = sourceText.value; // Get user input
  const targetScript = outputLang.value; // Get output script (original/latin)

  let translation = '';

  try {
    switch (sourceLanguage) {
      case 'bodo':
        translation = bodoTranslate(text, targetScript);
        break;
      case 'koch':
        translation = kochTranslate(text, targetScript);
        break;
      default:
        translation = 'Invalid language selection.';
    }
 // Check for "My name is" pattern
  if (sourceText.toLowerCase().startsWith("my name is")) {
    const name = sourceText.slice(11).trim(); // Extract the name after "My name is"
    
    const template =
      templates[sourceLang] && templates[sourceLang][outputLang];
    
    if (template) {
      const translatedText = template.replace("{name}", name); // Replace placeholder with the name
      document.getElementById("translated-text").value = translatedText;
    } else {
      document.getElementById("translated-text").value = "Translation not available.";
    }
  } else {
    document.getElementById("translated-text").value =
      "Please enter text in the format: 'My name is [Your Name]'.";
  }
  } catch (error) {
    console.error('Translation Error:', error);
    translation = 'Error in translation. Check console for details.';
  }

  // Update output textarea
  translatedText.value = translation;
});
