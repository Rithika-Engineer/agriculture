require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("./models/Job");

async function seedJobs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Job.deleteMany({}); // optional, clears old jobs

    await Job.insertMany([
      {
        id: "agri_ext",
        titleEn: "Agriculture Extension / Field Assistant",
        titleTa: "விவசாய உதவியாளர் / விரிவாக்க பணியாளர்",
        icon: "🧑‍🌾",
        descriptionEn: "Help farmers with practices, guidance, and reporting.",
        descriptionTa: "பயிர் பராமரிப்பு வழிகாட்டல் மற்றும் தகவல் சேகரிப்பு.",
        applyEn: "Register with local agriculture department/NGO; prepare basic practice knowledge.",
        applyTa: "உள்ளூர் வேளாண்மை துறை/NGO இல் பதிவு; அடிப்படை பயிற்சி அறிவு தயாரிக்கவும்.",
      },
      {
        id: "agro_dealer",
        titleEn: "Agri Input / Seed Dealer (Part-time)",
        titleTa: "விதை/உரம் விற்பனை (பகுதி நேரம்)",
        icon: "🏪",
        descriptionEn: "Support farmers to choose right inputs and purchase.",
        descriptionTa: "சரியான உள்ளீடுகளை தேர்வு செய்து வாங்க உதவி.",
        applyEn: "Tie up with a supplier; offer honest guidance; maintain simple records.",
        applyTa: "விநியோகஸ்தருடன் இணை; நல்ல வழிகாட்டல் வழங்கவும்; எளிய பதிவுகள் வைத்திருக்கவும்.",
      },
      {
        id: "farm_services",
        titleEn: "Farm Services (Weeding, Irrigation Support)",
        titleTa: "பண்ணை சேவைகள் (களை அகற்றுதல், பாசனம் உதவி)",
        icon: "🛠️",
        descriptionEn: "Provide services to nearby farms on schedule basis.",
        descriptionTa: "அருகிலுள்ள பண்ணைகளுக்கு அட்டவணைப்படி சேவைகள் வழங்கவும்.",
        applyEn: "Collect a few trusted workers; offer weekly packages; coordinate schedules.",
        applyTa: "நம்பகமான சில தொழிலாளர்களை சேர்த்து; வார பாக்கேஜ்கள் வழங்கி; அட்டவணை ஒருங்கிணைக்கவும்.",
      },
    ]);

    console.log("Jobs saved in MongoDB");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
}

seedJobs();