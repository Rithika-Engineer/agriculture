const express = require('express');
const router = express.Router();

function getBotReply(text, t) {
  const lower = text.toLowerCase();
  if (lower.includes("crop") || lower.includes("பயிர்") || lower.includes("summer") || lower.includes("கோடை")) {
    return t
      ? "🌾 பிரச்சனை: பருவத்திற்கு பொருந்தாத பயிர் தேர்வு → மகசூல் குறையும்\n✍️ செய்ய வேண்டியது: உங்கள் நில வகை + பருவம் சொல்லுங்கள். கோடையில் நிலக்கடலை/சோளம் போன்றவை நல்ல தேர்வு.\n✅ நன்மைகள்: வளங்களை சரியாக பயன்படுத்தி மகசூல் மற்றும் லாபம் அதிகரிக்கும்"
      : "🌾 Problem: wrong crop choice for the season can reduce yield\nWhat to do: tell me your land type + season. In summer, groundnut and sorghum work well.\nBenefits: better yield potential and higher profit";
  }

  if (lower.includes("fertilizer") || lower.includes("உரம்")) {
    return t
      ? "🧪 பிரச்சனை: தவறான/அதிக உரம் → செலவு உயரும்; மண் ஆரோக்கியம் பாதிக்கும்\n✍️ செய்ய வேண்டியது: ஜீவாமிருதம்/பஞ்சகவ்யம் போன்ற இயற்கை உரம் பயன்படுத்துங்கள் (அட்டவணைபடி). கம்போஸ்ட் சேர்க்கவும்.\n✅ நன்மைகள்: செலவு குறையும், மண் வளம் உயரும், மகசூல் நிலையாக இருக்கும்"
      : "🧪 Problem: incorrect/excess fertilizer increases cost and may harm soil health\nWhat to do: use organic inputs like Jeevamrutham/Panchagavya (follow schedule) and add compost.\nBenefits: lower costs, better soil fertility, more stable yield";
  }

  if (lower.includes("pest") || lower.includes("பூச்சி")) {
    return t
      ? "🐛 பிரச்சனை: பூச்சி தாக்குதல் → பயிர் சேதம் + லாப இழப்பு\n✍️ செய்ய வேண்டியது: இலை அடிப்பகுதியை கண்காணித்து, வேம்பு எண்ணெய் கரைசலை வாரம் ஒருமுறை தெளிக்கவும். மழை வரும் நாளில் ரசாயன தெளிப்பை தவிர்க்கவும்.\n✅ நன்மைகள்: பயிர் இழப்பு குறையும்; பாதுகாப்பான முறையில் வளர்ச்சி கிடைக்கும்"
      : "🐛 Problem: pest outbreak can damage crops and reduce profit\nWhat to do: inspect leaves regularly; spray neem oil solution weekly; avoid chemical spraying before heavy rain.\nBenefits: reduced crop loss and safer pest management";
  }

  if (lower.includes("price") || lower.includes("விலை") || lower.includes("market") || lower.includes("சந்தை")) {
    return t
      ? "💰 பிரச்சனை: தவறான நேரத்தில் விற்பதால் விலை குறையும்\n✍️ செய்ய வேண்டியது: `Market` பகுதியில் மாவட்ட வாரியாக விலை பார்க்கவும். விலை போக்கு `up` என்றால் சீக்கிரம் விற்பனை செய்ய திட்டமிடுங்கள்.\n✅ நன்மைகள்: அதிக விற்பனை விலை; வருமானம் உயரும்"
      : "💰 Problem: selling at the wrong time can lower price\nWhat to do: check district-wise prices in `Market`. If trend is `up`, sell earlier; if `down`, plan storage/wait.\nBenefits: higher selling price and increased income";
  }

  if (lower.includes("profit") || lower.includes("லாபம்")) {
    return t
      ? "📊 பிரச்சனை: செலவு அதிகம் அல்லது விலை குறைவு → லாபம் குறையும்/நஷ்டம் வரும்\n✍️ செய்ய வேண்டியது: `Profit Calculator` இல் மொத்த செலவு + விற்பனை விலை உள்ளிடுங்கள். அதிக செலவு வரும் பகுதியை முதலில் குறைக்கவும்.\n✅ நன்மைகள்: செலவு குறைந்து லாபம் உயரும்; முடிவு தெளிவாக இருக்கும்"
      : "📊 Problem: high costs or low selling price reduces profit (or causes loss)\nWhat to do: use the `Profit Calculator` and reduce the highest cost item first.\nBenefits: lower costs and better profit planning";
  }

  if (lower.includes("weather") || lower.includes("வானிலை")) {
    return t
      ? "🌤 பிரச்சனை: வெப்பம்/மழை/ஈரப்பதம் காரணமாக பயிர் ஸ்டிரெஸ் அல்லது நோய் அபாயம்\n✍️ செய்ய வேண்டியது: `Weather` ஆலோசனையை பின்பற்றுங்கள்—வெப்பத்தில் காலை/மாலை பாசனம், ஈரப்பதம் அதிகத்தில் முன்னெச்சரிக்கை வேப்பம், அதிக மழையில் வடிகால் அமைத்தல்.\n✅ நன்மைகள்: சேதம் குறையும், நீர் சேமிக்கும், மகசூல் உயரும்"
      : "🌤 Problem: heat/rain/humidity can cause crop stress and disease risk\nWhat to do: follow `Weather` advisory—irrigate early/late in heat, use neem prevention if humidity is high, and create drainage in heavy rain.\nBenefits: prevents damage, saves water, improves yield";
  }

  return t
    ? "🤖 பிரச்சனை: உங்கள் கேள்வியை சரியாக புரிந்து செயல்முறை சொல்ல வேண்டுமே\n✍️ செய்ய வேண்டியது: பயிர்/பூச்சி/உரம்/விலை/வானிலை பற்றிய கேள்வியை கொஞ்சம் தெளிவாக கேளுங்கள்.\n✅ நன்மைகள்: உடனே செயல் திட்டம் கிடைக்கும்"
    : "🤖 Problem: I need a bit more detail to give exact actions\nWhat to do: ask about crops, pests, fertilizers, market prices, or weather.\nBenefits: you will get actionable guidance instantly";
}

// POST /api/chat
router.post('/', (req, res) => {
  try {
    const { text, lang } = req.body; // lang 'ta' for Tamil, else English
    if (!text) return res.status(400).json({ error: 'Text is required' });

    const isTamil = lang === 'ta';
    const reply = getBotReply(text, isTamil);
    
    // Simulate slight delay like an AI would have
    setTimeout(() => {
        res.status(200).json({ reply });
    }, 600);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error processing chat' });
  }
});

module.exports = router;
