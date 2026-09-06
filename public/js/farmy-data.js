// FARMY Agronomic Reference Database
// Contains verified agronomic profiles for smallholder crops & pests in India

(typeof window !== "undefined" ? window : globalThis).CROPS = [
  {
    "id": "tomato",
    "name": "Tomato",
    "sci": "Solanum lycopersicum",
    "category": "Vegetable",
    "emoji": "🍅",
    "seasons": [
      "Kharif",
      "Rabi"
    ],
    "months": "June–July or Oct–Nov",
    "temp": [
      18,
      27
    ],
    "ph": [
      6,
      6.8
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      50,
      70
    ],
    "rainfall": "Moderate, 600–1000mm/yr, avoid waterlogging",
    "sunlight": "Full sun, 6–8 hrs/day",
    "water": "Medium",
    "irrigation": "Every 4–6 days; drip preferred",
    "waterCritical": "Flowering and fruit development — irregular watering causes blossom-end rot and fruit cracking",
    "npk": {
      "n": 120,
      "p": 60,
      "k": 60
    },
    "fertNote": "Split nitrogen into 3 doses; add well-rotted FYM 10 t/acre at land prep",
    "duration": 120,
    "planting": [
      "Prepare well-drained raised beds",
      "Add 10 t/acre farmyard manure while ploughing",
      "Raise seedlings in nursery for 25–30 days before transplanting",
      "Treat seeds with Trichoderma to prevent damping-off",
      "Transplant healthy seedlings in evening hours",
      "Planting depth: 1–2 cm for seed, transplant to first true-leaf node",
      "Spacing: 60cm x 45cm",
      "Best planted at start of Kharif or Rabi season"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–7",
        "care": "Keep nursery soil moist, shaded",
        "water": "Light daily sprinkling",
        "fert": "None",
        "warn": "Avoid waterlogging, causes damping-off"
      },
      {
        "name": "Seedling",
        "days": "7–25",
        "care": "Harden seedlings before transplant",
        "water": "Moderate, every 2 days",
        "fert": "Starter dose of DAP at transplant",
        "warn": "Protect from strong sun for first week"
      },
      {
        "name": "Vegetative",
        "days": "25–45",
        "care": "Stake plants, remove suckers",
        "water": "Every 4–6 days",
        "fert": "1st nitrogen top-dress",
        "warn": "Watch for aphids and leaf curl virus"
      },
      {
        "name": "Flowering",
        "days": "45–65",
        "care": "Ensure pollination, avoid stress",
        "water": "Consistent, critical stage",
        "fert": "2nd nitrogen + potash dose",
        "warn": "Water stress now causes flower drop"
      },
      {
        "name": "Fruiting",
        "days": "65–95",
        "care": "Support heavy branches",
        "water": "Consistent, avoid sudden changes",
        "fert": "Final potash-heavy dose",
        "warn": "Irregular watering causes blossom-end rot & cracking"
      },
      {
        "name": "Harvesting",
        "days": "95–120",
        "care": "Pick at breaker/red stage depending on market",
        "water": "Reduce gradually",
        "fert": "Stop fertilizing",
        "warn": "Handle fruit gently to avoid bruising"
      }
    ],
    "pests": [
      "aphid",
      "earlyblight",
      "fruitborer",
      "wilt"
    ],
    "yieldPerAcre": [
      8000,
      14000
    ],
    "costPerAcre": 28000,
    "priceEstimate": 12
  },
  {
    "id": "potato",
    "name": "Potato",
    "sci": "Solanum tuberosum",
    "category": "Vegetable",
    "emoji": "🥔",
    "seasons": [
      "Rabi"
    ],
    "months": "Oct–Nov",
    "temp": [
      15,
      24
    ],
    "ph": [
      5.5,
      6.5
    ],
    "soils": [
      "Sandy loam",
      "Loamy"
    ],
    "humidity": [
      60,
      80
    ],
    "rainfall": "Low to moderate, sensitive to waterlogging",
    "sunlight": "Full sun, 6+ hrs/day",
    "water": "Medium",
    "irrigation": "Every 7–10 days",
    "waterCritical": "Tuber initiation and bulking stage",
    "npk": {
      "n": 100,
      "p": 50,
      "k": 100
    },
    "fertNote": "Potash-heavy; apply full P & K at planting, split N",
    "duration": 100,
    "planting": [
      "Plough field 2–3 times to fine tilth",
      "Use certified disease-free tubers",
      "Cut and treat seed tubers with fungicide if large",
      "Plant tubers 5–7cm deep",
      "Spacing: 60cm rows x 20cm plants",
      "Earth-up soil around stems at 30 and 45 days"
    ],
    "stages": [
      {
        "name": "Sprouting",
        "days": "0–15",
        "care": "Keep soil moist, not waterlogged",
        "water": "Light, frequent",
        "fert": "Full P & K basal dose",
        "warn": "Rotting in waterlogged soil"
      },
      {
        "name": "Vegetative",
        "days": "15–35",
        "care": "First earthing-up",
        "water": "Every 7 days",
        "fert": "1st N top-dress",
        "warn": "Watch for aphid-spread viruses"
      },
      {
        "name": "Tuber initiation",
        "days": "35–55",
        "care": "Second earthing-up",
        "water": "Critical — do not let soil dry",
        "fert": "2nd N top-dress",
        "warn": "Water stress reduces tuber number"
      },
      {
        "name": "Bulking",
        "days": "55–80",
        "care": "Maintain even moisture",
        "water": "Consistent, critical stage",
        "fert": "None additional",
        "warn": "Late blight risk in humid weather"
      },
      {
        "name": "Maturity/Harvest",
        "days": "80–100",
        "care": "Stop irrigation 10 days before harvest",
        "water": "Withhold near end",
        "fert": "None",
        "warn": "Cure tubers in shade before storage"
      }
    ],
    "pests": [
      "lateblight",
      "aphid",
      "cutworm"
    ],
    "yieldPerAcre": [
      8000,
      12000
    ],
    "costPerAcre": 26000,
    "priceEstimate": 10
  },
  {
    "id": "onion",
    "name": "Onion",
    "sci": "Allium cepa",
    "category": "Vegetable",
    "emoji": "🧅",
    "seasons": [
      "Rabi",
      "Kharif"
    ],
    "months": "Oct–Dec or May–June",
    "temp": [
      13,
      28
    ],
    "ph": [
      6,
      7
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      50,
      70
    ],
    "rainfall": "Low, sensitive to excess moisture near harvest",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 7–10 days",
    "waterCritical": "Bulb development stage",
    "npk": {
      "n": 100,
      "p": 50,
      "k": 50
    },
    "fertNote": "Avoid excess N near maturity — delays bulbing",
    "duration": 130,
    "planting": [
      "Raise seedlings in nursery 6 weeks",
      "Prepare fine, well-drained beds",
      "Transplant seedlings 10–12cm deep",
      "Spacing: 15cm x 10cm",
      "Best in cool, dry season"
    ],
    "stages": [
      {
        "name": "Nursery",
        "days": "0–35",
        "care": "Keep nursery bed moist and weed-free",
        "water": "Light daily",
        "fert": "Small starter dose",
        "warn": "Damping-off in overwatered nursery"
      },
      {
        "name": "Vegetative",
        "days": "35–70",
        "care": "Weed regularly, thin plants",
        "water": "Every 7 days",
        "fert": "1st N dose",
        "warn": "Thrips can damage young leaves"
      },
      {
        "name": "Bulb initiation",
        "days": "70–95",
        "care": "Maintain even moisture",
        "water": "Critical stage",
        "fert": "K-heavy dose",
        "warn": "Long days trigger bulbing — check variety/season match"
      },
      {
        "name": "Bulb development",
        "days": "95–120",
        "care": "Reduce nitrogen",
        "water": "Steady, reduce gradually",
        "fert": "None",
        "warn": "Excess water causes bulb rot"
      },
      {
        "name": "Maturity/Harvest",
        "days": "120–130",
        "care": "Harvest when tops fall over and dry",
        "water": "Stop 2 weeks before harvest",
        "fert": "None",
        "warn": "Cure bulbs in shade for storage"
      }
    ],
    "pests": [
      "thrips",
      "purpleblotch"
    ],
    "yieldPerAcre": [
      7000,
      10000
    ],
    "costPerAcre": 24000,
    "priceEstimate": 14
  },
  {
    "id": "carrot",
    "name": "Carrot",
    "sci": "Daucus carota",
    "category": "Vegetable",
    "emoji": "🥕",
    "seasons": [
      "Rabi"
    ],
    "months": "Sep–Oct",
    "temp": [
      16,
      24
    ],
    "ph": [
      6,
      6.8
    ],
    "soils": [
      "Sandy loam",
      "Loamy"
    ],
    "humidity": [
      50,
      70
    ],
    "rainfall": "Moderate, well-drained essential",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 6–8 days",
    "waterCritical": "Root development stage",
    "npk": {
      "n": 60,
      "p": 60,
      "k": 80
    },
    "fertNote": "Avoid fresh manure — causes forked roots",
    "duration": 100,
    "planting": [
      "Deep-plough sandy loam soil, remove stones",
      "Sow seeds directly, 1cm deep",
      "Spacing: 30cm rows, thin to 5–8cm between plants",
      "Avoid recently manured land"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–14",
        "care": "Keep top soil moist",
        "water": "Light, frequent",
        "fert": "None",
        "warn": "Slow, uneven germination is normal"
      },
      {
        "name": "Seedling",
        "days": "14–35",
        "care": "Thin overcrowded seedlings",
        "water": "Every 5–6 days",
        "fert": "Starter P dose",
        "warn": "Weed competition stunts roots"
      },
      {
        "name": "Root development",
        "days": "35–75",
        "care": "Keep soil loose around roots",
        "water": "Consistent, critical stage",
        "fert": "K-heavy dose",
        "warn": "Irregular watering causes split roots"
      },
      {
        "name": "Maturity/Harvest",
        "days": "75–100",
        "care": "Check root size before full harvest",
        "water": "Reduce before harvest",
        "fert": "None",
        "warn": "Delayed harvest causes woody texture"
      }
    ],
    "pests": [
      "leafminer",
      "rootrot"
    ],
    "yieldPerAcre": [
      6000,
      9000
    ],
    "costPerAcre": 20000,
    "priceEstimate": 15
  },
  {
    "id": "brinjal",
    "name": "Brinjal (Eggplant)",
    "sci": "Solanum melongena",
    "category": "Vegetable",
    "emoji": "🍆",
    "seasons": [
      "Kharif",
      "Rabi"
    ],
    "months": "June–July or Oct–Nov",
    "temp": [
      21,
      30
    ],
    "ph": [
      5.5,
      6.8
    ],
    "soils": [
      "Loamy",
      "Sandy loam",
      "Clay loam"
    ],
    "humidity": [
      55,
      75
    ],
    "rainfall": "Moderate",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 5–7 days",
    "waterCritical": "Flowering and fruiting",
    "npk": {
      "n": 100,
      "p": 50,
      "k": 50
    },
    "fertNote": "Apply FYM 10 t/acre at planting, split N in 3 doses",
    "duration": 130,
    "planting": [
      "Raise nursery 4–5 weeks",
      "Prepare beds with FYM",
      "Transplant in evening",
      "Spacing: 75cm x 60cm",
      "Stake tall varieties"
    ],
    "stages": [
      {
        "name": "Nursery/Seedling",
        "days": "0–30",
        "care": "Shade nursery, harden before transplant",
        "water": "Light daily",
        "fert": "Starter dose",
        "warn": "Damping-off if overwatered"
      },
      {
        "name": "Vegetative",
        "days": "30–55",
        "care": "Stake and prune weak shoots",
        "water": "Every 5–7 days",
        "fert": "1st N dose",
        "warn": "Watch for shoot borer damage"
      },
      {
        "name": "Flowering",
        "days": "55–80",
        "care": "Support branches",
        "water": "Consistent, critical",
        "fert": "2nd N + K dose",
        "warn": "Fruit and shoot borer intensifies now"
      },
      {
        "name": "Fruiting/Harvest",
        "days": "80–130",
        "care": "Pick fruit young and glossy, continuous harvest",
        "water": "Steady",
        "fert": "Light maintenance dose",
        "warn": "Overripe fruit turns bitter and seedy"
      }
    ],
    "pests": [
      "shootborer",
      "aphid",
      "wilt"
    ],
    "yieldPerAcre": [
      9000,
      13000
    ],
    "costPerAcre": 25000,
    "priceEstimate": 11
  },
  {
    "id": "chilli",
    "name": "Chilli",
    "sci": "Capsicum annuum",
    "category": "Vegetable",
    "emoji": "🌶️",
    "seasons": [
      "Kharif",
      "Rabi"
    ],
    "months": "June–July or Nov–Dec",
    "temp": [
      20,
      30
    ],
    "ph": [
      6,
      7
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      50,
      70
    ],
    "rainfall": "Moderate, sensitive to waterlogging",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 6–8 days",
    "waterCritical": "Flowering to fruit-set",
    "npk": {
      "n": 90,
      "p": 50,
      "k": 50
    },
    "fertNote": "Split N in 3 doses; avoid excess N which delays flowering",
    "duration": 150,
    "planting": [
      "Raise nursery 30–35 days",
      "Treat seeds with Trichoderma",
      "Transplant into raised beds",
      "Spacing: 60cm x 45cm",
      "Mulch to retain moisture"
    ],
    "stages": [
      {
        "name": "Nursery",
        "days": "0–35",
        "care": "Shade and water lightly",
        "water": "Light daily",
        "fert": "None",
        "warn": "Damping-off risk"
      },
      {
        "name": "Vegetative",
        "days": "35–60",
        "care": "Weed and stake if needed",
        "water": "Every 6–8 days",
        "fert": "1st N dose",
        "warn": "Aphid and thrips buildup"
      },
      {
        "name": "Flowering",
        "days": "60–90",
        "care": "Avoid water stress",
        "water": "Critical stage",
        "fert": "2nd N + K dose",
        "warn": "Flower drop from heat or stress"
      },
      {
        "name": "Fruiting/Harvest",
        "days": "90–150",
        "care": "Pick continuously as pods mature",
        "water": "Steady",
        "fert": "Maintenance dose",
        "warn": "Anthracnose (fruit rot) risk in humid weather"
      }
    ],
    "pests": [
      "thrips",
      "anthracnose",
      "aphid"
    ],
    "yieldPerAcre": [
      2500,
      4500
    ],
    "costPerAcre": 27000,
    "priceEstimate": 60
  },
  {
    "id": "cucumber",
    "name": "Cucumber",
    "sci": "Cucumis sativus",
    "category": "Vegetable",
    "emoji": "🥒",
    "seasons": [
      "Zaid",
      "Kharif"
    ],
    "months": "Feb–Mar or June–July",
    "temp": [
      20,
      30
    ],
    "ph": [
      6,
      6.8
    ],
    "soils": [
      "Sandy loam",
      "Loamy"
    ],
    "humidity": [
      60,
      80
    ],
    "rainfall": "Moderate",
    "sunlight": "Full sun",
    "water": "Medium-High",
    "irrigation": "Every 3–5 days",
    "waterCritical": "Flowering and fruit development",
    "npk": {
      "n": 60,
      "p": 40,
      "k": 40
    },
    "fertNote": "Apply FYM at planting, split N in 2 doses",
    "duration": 65,
    "planting": [
      "Prepare raised beds or ridges",
      "Sow 2–3 seeds per hill, 2cm deep",
      "Thin to 1 healthy plant per hill",
      "Spacing: 1m x 0.5m",
      "Provide trellis for climbing varieties"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–7",
        "care": "Keep soil warm and moist",
        "water": "Light daily",
        "fert": "None",
        "warn": "Cold soil delays germination"
      },
      {
        "name": "Vegetative",
        "days": "7–25",
        "care": "Train vines onto trellis",
        "water": "Every 3–5 days",
        "fert": "1st N dose",
        "warn": "Watch for whitefly"
      },
      {
        "name": "Flowering",
        "days": "25–40",
        "care": "Ensure pollinator activity",
        "water": "Critical stage",
        "fert": "2nd dose N+K",
        "warn": "Poor pollination causes misshapen fruit"
      },
      {
        "name": "Fruiting/Harvest",
        "days": "40–65",
        "care": "Harvest young and tender, frequently",
        "water": "Steady, do not let dry",
        "fert": "None",
        "warn": "Powdery mildew in humid, still air"
      }
    ],
    "pests": [
      "whitefly",
      "powderymildew"
    ],
    "yieldPerAcre": [
      8000,
      12000
    ],
    "costPerAcre": 18000,
    "priceEstimate": 9
  },
  {
    "id": "okra",
    "name": "Okra (Ladyfinger)",
    "sci": "Abelmoschus esculentus",
    "category": "Vegetable",
    "emoji": "🫛",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "months": "June–July or Feb–Mar",
    "temp": [
      22,
      32
    ],
    "ph": [
      6,
      6.8
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      55,
      75
    ],
    "rainfall": "Moderate",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 5–7 days",
    "waterCritical": "Flowering and pod formation",
    "npk": {
      "n": 80,
      "p": 40,
      "k": 40
    },
    "fertNote": "Split N in 2 doses",
    "duration": 60,
    "planting": [
      "Direct sow, 2cm deep",
      "Spacing: 45cm x 30cm",
      "Thin weak seedlings",
      "Avoid waterlogged fields"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–7",
        "care": "Keep soil moist",
        "water": "Light daily",
        "fert": "None",
        "warn": "Poor germination in cold soil"
      },
      {
        "name": "Vegetative",
        "days": "7–30",
        "care": "Weed regularly",
        "water": "Every 5–7 days",
        "fert": "1st N dose",
        "warn": "Jassids and aphids on young leaves"
      },
      {
        "name": "Flowering/Pod",
        "days": "30–60",
        "care": "Harvest pods every 2–3 days while tender",
        "water": "Consistent",
        "fert": "2nd N dose",
        "warn": "Overmature pods turn fibrous quickly"
      }
    ],
    "pests": [
      "jassid",
      "fruitborer",
      "yellowmosaic"
    ],
    "yieldPerAcre": [
      6000,
      9000
    ],
    "costPerAcre": 16000,
    "priceEstimate": 16
  },
  {
    "id": "rice",
    "name": "Rice (Paddy)",
    "sci": "Oryza sativa",
    "category": "Grain",
    "emoji": "🌾",
    "seasons": [
      "Kharif"
    ],
    "months": "June–July",
    "temp": [
      20,
      35
    ],
    "ph": [
      5.5,
      6.5
    ],
    "soils": [
      "Clay",
      "Clay loam"
    ],
    "humidity": [
      70,
      90
    ],
    "rainfall": "High, 1000–2000mm, needs standing water",
    "sunlight": "Full sun",
    "water": "High",
    "irrigation": "Maintain 2–5cm standing water through most stages",
    "waterCritical": "Tillering to flowering — never let field dry",
    "npk": {
      "n": 100,
      "p": 50,
      "k": 50
    },
    "fertNote": "Apply N in 3 splits: basal, tillering, panicle initiation",
    "duration": 130,
    "planting": [
      "Raise seedlings in wet nursery 25–30 days",
      "Puddle main field thoroughly",
      "Transplant 2–3 seedlings per hill",
      "Spacing: 20cm x 15cm",
      "Maintain shallow standing water after transplant"
    ],
    "stages": [
      {
        "name": "Nursery/Transplant",
        "days": "0–25",
        "care": "Maintain shallow water in nursery",
        "water": "Standing water",
        "fert": "Basal dose",
        "warn": "Seedling shock if transplanted too old"
      },
      {
        "name": "Tillering",
        "days": "25–55",
        "care": "Weed, maintain water level",
        "water": "2–5cm standing water",
        "fert": "1st top-dress",
        "warn": "Drying now sharply cuts tiller number"
      },
      {
        "name": "Panicle initiation",
        "days": "55–80",
        "care": "Do not let field dry",
        "water": "Critical stage",
        "fert": "2nd top-dress",
        "warn": "Stem borer risk increases"
      },
      {
        "name": "Flowering",
        "days": "80–100",
        "care": "Maintain water, avoid stress",
        "water": "Critical stage",
        "fert": "None",
        "warn": "Heat/water stress reduces grain fill"
      },
      {
        "name": "Maturity/Harvest",
        "days": "100–130",
        "care": "Drain field 10 days before harvest",
        "water": "Drain gradually",
        "fert": "None",
        "warn": "Harvest at golden-yellow stage to avoid shattering"
      }
    ],
    "pests": [
      "stemborer",
      "blast",
      "bph"
    ],
    "yieldPerAcre": [
      2000,
      2800
    ],
    "costPerAcre": 22000,
    "priceEstimate": 20
  },
  {
    "id": "maize",
    "name": "Maize (Corn)",
    "sci": "Zea mays",
    "category": "Grain",
    "emoji": "🌽",
    "seasons": [
      "Kharif",
      "Rabi"
    ],
    "months": "June–July or Oct–Nov",
    "temp": [
      18,
      32
    ],
    "ph": [
      5.8,
      7
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      50,
      75
    ],
    "rainfall": "Moderate, 500–800mm",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 7–10 days",
    "waterCritical": "Tasseling and silking (flowering)",
    "npk": {
      "n": 120,
      "p": 60,
      "k": 40
    },
    "fertNote": "Split N in 3 doses: basal, knee-high, tasseling",
    "duration": 100,
    "planting": [
      "Deep plough and level field",
      "Sow seeds 4–5cm deep",
      "Spacing: 60cm x 20cm",
      "Avoid waterlogged soil"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–10",
        "care": "Keep soil moist, not wet",
        "water": "Light",
        "fert": "Basal dose",
        "warn": "Poor drainage causes seed rot"
      },
      {
        "name": "Vegetative",
        "days": "10–45",
        "care": "Weed control, earthing-up",
        "water": "Every 7–10 days",
        "fert": "Knee-high N dose",
        "warn": "Fall armyworm risk in whorls"
      },
      {
        "name": "Tasseling/Silking",
        "days": "45–65",
        "care": "Ensure no water stress",
        "water": "Critical stage",
        "fert": "Final N dose",
        "warn": "Water stress now sharply cuts yield"
      },
      {
        "name": "Grain fill",
        "days": "65–90",
        "care": "Monitor for stem borer",
        "water": "Steady, reduce gradually",
        "fert": "None",
        "warn": "Bird damage near maturity"
      },
      {
        "name": "Maturity/Harvest",
        "days": "90–100",
        "care": "Harvest when husks dry and brown",
        "water": "Stop before harvest",
        "fert": "None",
        "warn": "Delayed harvest invites grain mold"
      }
    ],
    "pests": [
      "fallarmyworm",
      "stemborer"
    ],
    "yieldPerAcre": [
      2200,
      3200
    ],
    "costPerAcre": 18000,
    "priceEstimate": 18
  },
  {
    "id": "wheat",
    "name": "Wheat",
    "sci": "Triticum aestivum",
    "category": "Grain",
    "emoji": "🌾",
    "seasons": [
      "Rabi"
    ],
    "months": "Nov–Dec",
    "temp": [
      10,
      25
    ],
    "ph": [
      6,
      7.5
    ],
    "soils": [
      "Loamy",
      "Clay loam"
    ],
    "humidity": [
      40,
      60
    ],
    "rainfall": "Low, needs irrigation",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "4–6 irrigations across season",
    "waterCritical": "Crown root initiation (~21 days) and flowering",
    "npk": {
      "n": 100,
      "p": 50,
      "k": 40
    },
    "fertNote": "Split N: basal, crown root stage, flowering",
    "duration": 120,
    "planting": [
      "Fine tilth seedbed",
      "Sow seeds 4–5cm deep in rows",
      "Spacing: 20cm rows",
      "Sow within first 2 weeks of Rabi window for best yield"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–10",
        "care": "Light irrigation after sowing",
        "water": "Light",
        "fert": "Basal dose",
        "warn": "Delayed sowing lowers yield"
      },
      {
        "name": "Crown root/Tillering",
        "days": "10–40",
        "care": "First irrigation critical",
        "water": "Critical stage",
        "fert": "1st N top-dress",
        "warn": "Weed competition reduces tillers"
      },
      {
        "name": "Jointing/Booting",
        "days": "40–75",
        "care": "Maintain steady moisture",
        "water": "Every 15–20 days",
        "fert": "2nd N dose",
        "warn": "Rust disease risk in humid spells"
      },
      {
        "name": "Flowering/Grain fill",
        "days": "75–105",
        "care": "Avoid water stress",
        "water": "Critical stage",
        "fert": "None",
        "warn": "Heat stress during grain fill cuts weight"
      },
      {
        "name": "Maturity/Harvest",
        "days": "105–120",
        "care": "Harvest when grain is hard and golden",
        "water": "Stop before harvest",
        "fert": "None",
        "warn": "Delayed harvest causes shattering losses"
      }
    ],
    "pests": [
      "aphid",
      "rust"
    ],
    "yieldPerAcre": [
      1600,
      2200
    ],
    "costPerAcre": 16000,
    "priceEstimate": 22
  },
  {
    "id": "millet",
    "name": "Millet (Bajra)",
    "sci": "Pennisetum glaucum",
    "category": "Grain",
    "emoji": "🌾",
    "seasons": [
      "Kharif"
    ],
    "months": "June–July",
    "temp": [
      25,
      35
    ],
    "ph": [
      5.5,
      7.5
    ],
    "soils": [
      "Sandy",
      "Sandy loam"
    ],
    "humidity": [
      30,
      60
    ],
    "rainfall": "Low, drought-tolerant, 350–500mm",
    "sunlight": "Full sun",
    "water": "Low",
    "irrigation": "Mostly rainfed; irrigate only in prolonged dry spells",
    "waterCritical": "Flowering stage, if irrigation available",
    "npk": {
      "n": 40,
      "p": 20,
      "k": 20
    },
    "fertNote": "Low input crop; basal + one top-dress sufficient",
    "duration": 90,
    "planting": [
      "Suited to light sandy soils and low rainfall areas",
      "Sow seeds 2–3cm deep",
      "Spacing: 45cm x 15cm",
      "Thin excess seedlings after 2 weeks"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–8",
        "care": "Minimal care, rainfed",
        "water": "Rain-dependent",
        "fert": "Basal dose",
        "warn": "Bird damage on seedlings"
      },
      {
        "name": "Vegetative",
        "days": "8–40",
        "care": "Light weeding",
        "water": "Rain-dependent",
        "fert": "1st N top-dress",
        "warn": "Shoot fly in dry spells"
      },
      {
        "name": "Flowering",
        "days": "40–65",
        "care": "Irrigate if possible during dry spell",
        "water": "Critical if rain absent",
        "fert": "None",
        "warn": "Downy mildew in wet, humid conditions"
      },
      {
        "name": "Maturity/Harvest",
        "days": "65–90",
        "care": "Harvest when grain hardens",
        "water": "Minimal",
        "fert": "None",
        "warn": "Bird damage near maturity"
      }
    ],
    "pests": [
      "shootfly",
      "downymildew"
    ],
    "yieldPerAcre": [
      600,
      1000
    ],
    "costPerAcre": 9000,
    "priceEstimate": 24
  },
  {
    "id": "chickpea",
    "name": "Chickpea (Chana)",
    "sci": "Cicer arietinum",
    "category": "Pulse",
    "emoji": "🫘",
    "seasons": [
      "Rabi"
    ],
    "months": "Oct–Nov",
    "temp": [
      15,
      25
    ],
    "ph": [
      6,
      7.5
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      30,
      50
    ],
    "rainfall": "Low, drought-tolerant",
    "sunlight": "Full sun",
    "water": "Low",
    "irrigation": "1–2 irrigations only, at branching & pod filling",
    "waterCritical": "Pod filling stage",
    "npk": {
      "n": 20,
      "p": 50,
      "k": 20
    },
    "fertNote": "Low nitrogen — legume fixes its own; focus on phosphorus",
    "duration": 100,
    "planting": [
      "Sow in residual moisture after monsoon",
      "Seed treatment with Rhizobium culture recommended",
      "Sow 5–8cm deep",
      "Spacing: 30cm x 10cm"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–10",
        "care": "Sow in adequate residual soil moisture",
        "water": "Minimal",
        "fert": "Basal P dose",
        "warn": "Waterlogging kills seedlings"
      },
      {
        "name": "Vegetative",
        "days": "10–45",
        "care": "One light weeding",
        "water": "Rain/residual moisture",
        "fert": "None additional",
        "warn": "Watch for pod borer moths"
      },
      {
        "name": "Flowering/Pod filling",
        "days": "45–80",
        "care": "Irrigate lightly if very dry",
        "water": "Critical if no rain",
        "fert": "None",
        "warn": "Pod borer is the major yield-loss risk"
      },
      {
        "name": "Maturity/Harvest",
        "days": "80–100",
        "care": "Harvest when pods dry and rattle",
        "water": "None",
        "fert": "None",
        "warn": "Delayed harvest causes shattering"
      }
    ],
    "pests": [
      "podborer",
      "wilt"
    ],
    "yieldPerAcre": [
      400,
      700
    ],
    "costPerAcre": 8000,
    "priceEstimate": 55
  },
  {
    "id": "groundnut",
    "name": "Groundnut (Peanut)",
    "sci": "Arachis hypogaea",
    "category": "Pulse",
    "emoji": "🥜",
    "seasons": [
      "Kharif"
    ],
    "months": "June–July",
    "temp": [
      22,
      30
    ],
    "ph": [
      6,
      6.5
    ],
    "soils": [
      "Sandy loam",
      "Sandy"
    ],
    "humidity": [
      50,
      70
    ],
    "rainfall": "Moderate, 500–750mm",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 10–15 days if not rainfed",
    "waterCritical": "Flowering and peg penetration (pod formation)",
    "npk": {
      "n": 20,
      "p": 40,
      "k": 40
    },
    "fertNote": "Gypsum application at flowering improves pod filling",
    "duration": 110,
    "planting": [
      "Loosen soil deeply for easy pegging",
      "Sow pods 5cm deep",
      "Spacing: 30cm x 10cm",
      "Ensure good drainage"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–10",
        "care": "Keep soil loose and moist",
        "water": "Light",
        "fert": "Basal dose",
        "warn": "Crusted soil blocks emergence"
      },
      {
        "name": "Vegetative",
        "days": "10–35",
        "care": "Weed before flowering begins",
        "water": "Every 10–15 days",
        "fert": "None additional",
        "warn": "Leaf spot disease in humid weather"
      },
      {
        "name": "Flowering/Pegging",
        "days": "35–65",
        "care": "Light earthing-up to help peg entry",
        "water": "Critical stage",
        "fert": "Gypsum at flowering",
        "warn": "Dry soil blocks peg penetration, cuts pod count"
      },
      {
        "name": "Pod filling/Harvest",
        "days": "65–110",
        "care": "Reduce water near maturity",
        "water": "Steady, then reduce",
        "fert": "None",
        "warn": "Harvest promptly to avoid aflatoxin risk in wet soil"
      }
    ],
    "pests": [
      "leafspot",
      "aphid"
    ],
    "yieldPerAcre": [
      1000,
      1600
    ],
    "costPerAcre": 15000,
    "priceEstimate": 52
  },
  {
    "id": "greengram",
    "name": "Green Gram (Moong)",
    "sci": "Vigna radiata",
    "category": "Pulse",
    "emoji": "🫛",
    "seasons": [
      "Kharif",
      "Zaid"
    ],
    "months": "June–July or Mar–Apr",
    "temp": [
      25,
      35
    ],
    "ph": [
      6.2,
      7.2
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      50,
      70
    ],
    "rainfall": "Moderate",
    "sunlight": "Full sun",
    "water": "Low-Medium",
    "irrigation": "Every 10–12 days if no rain",
    "waterCritical": "Flowering and pod formation",
    "npk": {
      "n": 20,
      "p": 40,
      "k": 20
    },
    "fertNote": "Short-duration legume; low nitrogen need",
    "duration": 65,
    "planting": [
      "Sow directly after light ploughing",
      "Rhizobium seed treatment recommended",
      "Sow 3–4cm deep",
      "Spacing: 30cm x 10cm"
    ],
    "stages": [
      {
        "name": "Germination",
        "days": "0–7",
        "care": "Keep soil moist",
        "water": "Light",
        "fert": "Basal dose",
        "warn": "Waterlogging causes seed rot"
      },
      {
        "name": "Vegetative",
        "days": "7–30",
        "care": "One weeding at 20 days",
        "water": "Every 10–12 days",
        "fert": "None",
        "warn": "Whitefly can spread yellow mosaic virus"
      },
      {
        "name": "Flowering/Pod",
        "days": "30–55",
        "care": "Avoid water stress",
        "water": "Critical stage",
        "fert": "None",
        "warn": "Yellow mosaic virus reduces pod set"
      },
      {
        "name": "Maturity/Harvest",
        "days": "55–65",
        "care": "Harvest in 2–3 pickings as pods mature",
        "water": "None",
        "fert": "None",
        "warn": "Pods shatter if left too long"
      }
    ],
    "pests": [
      "whitefly",
      "yellowmosaic"
    ],
    "yieldPerAcre": [
      300,
      500
    ],
    "costPerAcre": 7000,
    "priceEstimate": 65
  },
  {
    "id": "banana",
    "name": "Banana",
    "sci": "Musa spp.",
    "category": "Fruit",
    "emoji": "🍌",
    "seasons": [
      "Year-round (best: Jun or Feb)"
    ],
    "months": "June–July or Feb–Mar",
    "temp": [
      20,
      32
    ],
    "ph": [
      6,
      7.5
    ],
    "soils": [
      "Loamy",
      "Clay loam"
    ],
    "humidity": [
      70,
      90
    ],
    "rainfall": "High, needs consistent moisture, no waterlogging",
    "sunlight": "Full sun, wind protection helpful",
    "water": "High",
    "irrigation": "Every 4–7 days, drip preferred",
    "waterCritical": "Shooting (bunch emergence) to fruit filling",
    "npk": {
      "n": 200,
      "p": 60,
      "k": 300
    },
    "fertNote": "Very potassium-hungry; apply in monthly split doses",
    "duration": 330,
    "planting": [
      "Use disease-free tissue-culture suckers",
      "Dig pits 60x60x60cm, fill with FYM + topsoil",
      "Spacing: 1.8m x 1.8m",
      "Plant at start of main growing season"
    ],
    "stages": [
      {
        "name": "Establishment",
        "days": "0–60",
        "care": "Mulch to retain moisture",
        "water": "Every 4–7 days",
        "fert": "Basal FYM + starter dose",
        "warn": "Waterlogging causes rhizome rot"
      },
      {
        "name": "Vegetative",
        "days": "60–180",
        "care": "Remove excess suckers, keep 1 follower",
        "water": "Every 4–7 days",
        "fert": "Monthly split N-K doses",
        "warn": "Nutrient deficiency shows as yellow leaf margins"
      },
      {
        "name": "Shooting/Flowering",
        "days": "180–250",
        "care": "Support plant against wind",
        "water": "Critical stage",
        "fert": "K-heavy dose",
        "warn": "Water stress now reduces bunch size"
      },
      {
        "name": "Fruit filling",
        "days": "250–300",
        "care": "Cover bunch to protect from sun/pests",
        "water": "Consistent",
        "fert": "Final K dose",
        "warn": "Fruit cracking from irregular watering"
      },
      {
        "name": "Harvest",
        "days": "300–330",
        "care": "Harvest when fingers are plump and rounded",
        "water": "Reduce",
        "fert": "None",
        "warn": "Handle bunches carefully to avoid bruising"
      }
    ],
    "pests": [
      "aphid",
      "sigatoka",
      "nematode"
    ],
    "yieldPerAcre": [
      18000,
      25000
    ],
    "costPerAcre": 60000,
    "priceEstimate": 14
  },
  {
    "id": "mango",
    "name": "Mango",
    "sci": "Mangifera indica",
    "category": "Fruit",
    "emoji": "🥭",
    "seasons": [
      "Perennial — plant at monsoon start"
    ],
    "months": "June–July (planting)",
    "temp": [
      24,
      35
    ],
    "ph": [
      5.5,
      7.5
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      40,
      60
    ],
    "rainfall": "Moderate, dry spell needed before flowering",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 10–15 days for young trees; mature trees mostly rain-fed",
    "waterCritical": "Fruit development stage; avoid irrigation just before flowering",
    "npk": {
      "n": 500,
      "p": 250,
      "k": 500,
      "note": "grams per mature tree per year"
    },
    "fertNote": "Apply in 2 split doses per year, after harvest and before flowering",
    "duration": 1460,
    "planting": [
      "Dig large pits 1m x 1m, fill with FYM + topsoil",
      "Use grafted saplings for earlier, reliable fruiting",
      "Spacing: 8–10m between trees",
      "Plant at start of monsoon for establishment"
    ],
    "stages": [
      {
        "name": "Establishment (Yr 1)",
        "days": "0–365",
        "care": "Regular watering, staking",
        "water": "Every 7–10 days",
        "fert": "Light starter dose",
        "warn": "Young trees vulnerable to waterlogging"
      },
      {
        "name": "Juvenile growth (Yr 2–3)",
        "days": "365–1095",
        "care": "Formative pruning",
        "water": "Every 10–15 days",
        "fert": "Annual split dose",
        "warn": "Avoid heavy fertilizing which delays flowering"
      },
      {
        "name": "Flowering",
        "days": "~1200 (season)",
        "care": "Withhold irrigation before flowering to induce it",
        "water": "Reduce sharply pre-flowering",
        "fert": "Post-harvest dose only",
        "warn": "Rain/humidity during flowering causes fruit drop and mildew"
      },
      {
        "name": "Fruit development",
        "days": "+60–90 after flowering",
        "care": "Support heavy branches",
        "water": "Critical stage",
        "fert": "None",
        "warn": "Fruit fly damage during ripening"
      },
      {
        "name": "Harvest",
        "days": "variable by variety",
        "care": "Harvest at mature-green stage for transport",
        "water": "Reduce",
        "fert": "Post-harvest dose",
        "warn": "Handle to avoid latex staining and bruising"
      }
    ],
    "pests": [
      "fruitfly",
      "powderymildew",
      "hopper"
    ],
    "yieldPerAcre": [
      4000,
      8000
    ],
    "costPerAcre": 35000,
    "priceEstimate": 40
  },
  {
    "id": "papaya",
    "name": "Papaya",
    "sci": "Carica papaya",
    "category": "Fruit",
    "emoji": "🍈",
    "seasons": [
      "Year-round (best: Feb–Mar or Jun–Jul)"
    ],
    "months": "Feb–Mar or June–July",
    "temp": [
      22,
      32
    ],
    "ph": [
      6,
      7
    ],
    "soils": [
      "Loamy",
      "Sandy loam"
    ],
    "humidity": [
      60,
      80
    ],
    "rainfall": "Moderate, cannot tolerate waterlogging",
    "sunlight": "Full sun",
    "water": "Medium",
    "irrigation": "Every 5–7 days",
    "waterCritical": "Flowering and fruit development",
    "npk": {
      "n": 250,
      "p": 250,
      "k": 500,
      "note": "grams per plant per year"
    },
    "fertNote": "Apply in monthly split doses starting 1 month after planting",
    "duration": 270,
    "planting": [
      "Dig pits 45x45x45cm with FYM",
      "Use disease-free nursery seedlings",
      "Spacing: 2m x 2m",
      "Ensure excellent drainage — most sensitive to waterlogging"
    ],
    "stages": [
      {
        "name": "Establishment",
        "days": "0–45",
        "care": "Shade young plants briefly after transplant",
        "water": "Every 5–7 days",
        "fert": "Starter dose",
        "warn": "Root rot in waterlogged soil"
      },
      {
        "name": "Vegetative",
        "days": "45–150",
        "care": "Remove excess male plants once sex is visible",
        "water": "Every 5–7 days",
        "fert": "Monthly split doses",
        "warn": "Mite and aphid buildup on undersides of leaves"
      },
      {
        "name": "Flowering",
        "days": "150–180",
        "care": "Monitor pollination",
        "water": "Consistent",
        "fert": "K-heavy dose",
        "warn": "Ringspot virus (spread by aphids) is the major risk"
      },
      {
        "name": "Fruit development/Harvest",
        "days": "180–270",
        "care": "Harvest at colour-break stage for transport",
        "water": "Steady",
        "fert": "Maintenance dose",
        "warn": "Handle fruit gently, high latex content stains"
      }
    ],
    "pests": [
      "aphid",
      "ringspot",
      "mite"
    ],
    "yieldPerAcre": [
      25000,
      40000
    ],
    "costPerAcre": 45000,
    "priceEstimate": 12
  }
];

(typeof window !== "undefined" ? window : globalThis).PESTS = {
  "aphid": {
    "name": "Aphids",
    "type": "Pest",
    "tags": [
      "insects visible",
      "yellow leaves",
      "mold or fungus"
    ],
    "cause": "Small sap-sucking insects that cluster on new growth and undersides of leaves; thrive in warm, dry weather",
    "prevention": [
      "Encourage natural predators (ladybirds, lacewings)",
      "Avoid excess nitrogen which encourages soft new growth",
      "Use yellow sticky traps to monitor early"
    ],
    "organic": [
      "Spray neem oil solution every 7 days",
      "Introduce ladybird beetles",
      "Strong water spray to dislodge colonies"
    ],
    "mechanical": [
      "Remove and destroy heavily infested shoots"
    ],
    "chemical": {
      "active": "Imidacloprid (as locally approved)",
      "warning": "Only use if organic controls fail and infestation is severe",
      "ppe": "Gloves, mask, long sleeves",
      "phi": "Follow label pre-harvest interval, typically 7–14 days"
    }
  },
  "earlyblight": {
    "name": "Early Blight",
    "type": "Disease",
    "tags": [
      "brown spots",
      "yellow leaves"
    ],
    "cause": "Fungal disease (Alternaria) favoured by warm, humid conditions and leaf wetness",
    "prevention": [
      "Rotate crops, avoid planting tomato/potato repeatedly in same field",
      "Ensure good spacing for airflow",
      "Remove infected plant debris"
    ],
    "organic": [
      "Spray copper-based fungicide preventively",
      "Neem oil as a preventive spray"
    ],
    "mechanical": [
      "Prune lower infected leaves and destroy them"
    ],
    "chemical": {
      "active": "Mancozeb (as locally approved)",
      "warning": "Apply preventively, not after heavy infection",
      "ppe": "Gloves, mask",
      "phi": "Follow label, typically 5–7 days"
    }
  },
  "fruitborer": {
    "name": "Fruit Borer",
    "type": "Pest",
    "tags": [
      "holes in leaves",
      "insects visible"
    ],
    "cause": "Moth larvae that bore into fruit and shoots",
    "prevention": [
      "Use pheromone traps to monitor and trap adult moths",
      "Remove and destroy damaged fruit promptly",
      "Intercrop with marigold as a trap crop"
    ],
    "organic": [
      "Spray Bacillus thuringiensis (Bt)",
      "Neem seed kernel extract spray"
    ],
    "mechanical": [
      "Hand-pick and destroy infested fruit/shoots"
    ],
    "chemical": {
      "active": "Emamectin benzoate (as locally approved)",
      "warning": "Rotate chemical classes to avoid resistance",
      "ppe": "Gloves, mask, eye protection",
      "phi": "Follow label, typically 3–5 days"
    }
  },
  "wilt": {
    "name": "Bacterial/Fusarium Wilt",
    "type": "Disease",
    "tags": [
      "wilting"
    ],
    "cause": "Soil-borne bacteria or fungus blocking water transport in the plant",
    "prevention": [
      "Practice crop rotation with non-host crops",
      "Use resistant varieties where available",
      "Improve field drainage"
    ],
    "organic": [
      "Soil solarization before planting",
      "Apply Trichoderma-enriched compost"
    ],
    "mechanical": [
      "Remove and destroy wilted plants immediately, do not compost"
    ],
    "chemical": {
      "active": "No reliable curative chemical control",
      "warning": "Focus on prevention and resistant varieties",
      "ppe": "—",
      "phi": "—"
    }
  },
  "lateblight": {
    "name": "Late Blight",
    "type": "Disease",
    "tags": [
      "brown spots",
      "mold or fungus",
      "wilting"
    ],
    "cause": "Fungus-like pathogen (Phytophthora) spreading fast in cool, wet, humid weather",
    "prevention": [
      "Use certified disease-free seed tubers",
      "Avoid overhead irrigation in cool weather",
      "Ensure good field drainage"
    ],
    "organic": [
      "Preventive copper-based fungicide spray"
    ],
    "mechanical": [
      "Destroy infected foliage immediately"
    ],
    "chemical": {
      "active": "Metalaxyl + Mancozeb (as locally approved)",
      "warning": "Apply before rain in high-risk weather, resistance can develop",
      "ppe": "Gloves, mask",
      "phi": "Follow label, typically 7 days"
    }
  },
  "cutworm": {
    "name": "Cutworm",
    "type": "Pest",
    "tags": [
      "holes in leaves",
      "wilting"
    ],
    "cause": "Caterpillars that cut young stems at soil level, active at night",
    "prevention": [
      "Deep ploughing before planting exposes larvae to predators/sun",
      "Remove weeds which host larvae"
    ],
    "organic": [
      "Neem cake application to soil",
      "Hand-collect larvae at dusk"
    ],
    "mechanical": [
      "Place collars around stems of young transplants"
    ],
    "chemical": {
      "active": "Chlorpyrifos soil application (as locally approved)",
      "warning": "Use only as last resort, harmful to soil organisms",
      "ppe": "Gloves, mask",
      "phi": "Follow label strictly"
    }
  },
  "thrips": {
    "name": "Thrips",
    "type": "Pest",
    "tags": [
      "insects visible",
      "yellow leaves"
    ],
    "cause": "Tiny slender insects that scrape and suck plant tissue, thrive in hot dry weather",
    "prevention": [
      "Blue sticky traps for monitoring",
      "Avoid water stress which increases susceptibility"
    ],
    "organic": [
      "Neem oil spray every 5–7 days"
    ],
    "mechanical": [
      "Remove weeds around field that host thrips"
    ],
    "chemical": {
      "active": "Spinosad (as locally approved)",
      "warning": "Rotate with different chemical classes",
      "ppe": "Gloves, mask",
      "phi": "Follow label, typically 3–5 days"
    }
  },
  "purpleblotch": {
    "name": "Purple Blotch",
    "type": "Disease",
    "tags": [
      "brown spots",
      "mold or fungus"
    ],
    "cause": "Fungal disease favoured by humid weather and dense planting",
    "prevention": [
      "Avoid overcrowded planting for airflow",
      "Rotate crops"
    ],
    "organic": [
      "Copper-based fungicide, preventive spray"
    ],
    "mechanical": [
      "Remove and destroy infected leaves"
    ],
    "chemical": {
      "active": "Mancozeb (as locally approved)",
      "warning": "Apply preventively in humid seasons",
      "ppe": "Gloves, mask",
      "phi": "Follow label, typically 7 days"
    }
  },
  "leafminer": {
    "name": "Leaf Miner",
    "type": "Pest",
    "tags": [
      "holes in leaves",
      "yellow leaves"
    ],
    "cause": "Larvae that tunnel between leaf layers leaving pale winding trails",
    "prevention": [
      "Yellow sticky traps",
      "Remove and destroy affected leaves early"
    ],
    "organic": [
      "Neem oil spray"
    ],
    "mechanical": [
      "Hand-pick and destroy mined leaves"
    ],
    "chemical": {
      "active": "Spinosad (as locally approved)",
      "warning": "Only if infestation is severe",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "rootrot": {
    "name": "Root Rot",
    "type": "Disease",
    "tags": [
      "wilting",
      "mold or fungus"
    ],
    "cause": "Fungal disease in poorly drained, waterlogged soil",
    "prevention": [
      "Improve drainage, raised beds in heavy soil",
      "Avoid overwatering"
    ],
    "organic": [
      "Trichoderma soil application at planting"
    ],
    "mechanical": [
      "Remove and destroy affected plants"
    ],
    "chemical": {
      "active": "Carbendazim soil drench (as locally approved)",
      "warning": "Prevention is more effective than cure",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "shootborer": {
    "name": "Shoot & Fruit Borer",
    "type": "Pest",
    "tags": [
      "holes in leaves",
      "wilting",
      "insects visible"
    ],
    "cause": "Moth larvae boring into shoots and fruit",
    "prevention": [
      "Pheromone traps for monitoring",
      "Remove and destroy wilted shoot tips"
    ],
    "organic": [
      "Bt spray",
      "Neem seed kernel extract"
    ],
    "mechanical": [
      "Prune and destroy infested shoots weekly"
    ],
    "chemical": {
      "active": "Emamectin benzoate (as locally approved)",
      "warning": "Rotate chemical classes to manage resistance",
      "ppe": "Gloves, mask, eye protection",
      "phi": "Follow label, typically 3–5 days"
    }
  },
  "anthracnose": {
    "name": "Anthracnose (Fruit Rot)",
    "type": "Disease",
    "tags": [
      "brown spots",
      "mold or fungus"
    ],
    "cause": "Fungal disease favoured by warm, humid, wet conditions",
    "prevention": [
      "Avoid overhead watering",
      "Ensure good airflow between plants"
    ],
    "organic": [
      "Copper-based fungicide, preventive"
    ],
    "mechanical": [
      "Remove and destroy infected fruit"
    ],
    "chemical": {
      "active": "Mancozeb (as locally approved)",
      "warning": "Apply before heavy rain periods",
      "ppe": "Gloves, mask",
      "phi": "Follow label, typically 7 days"
    }
  },
  "whitefly": {
    "name": "Whitefly",
    "type": "Pest",
    "tags": [
      "insects visible",
      "yellow leaves",
      "mold or fungus"
    ],
    "cause": "Tiny white flying insects that suck sap and spread viruses; secrete honeydew leading to sooty mould",
    "prevention": [
      "Yellow sticky traps",
      "Avoid excess nitrogen"
    ],
    "organic": [
      "Neem oil spray every 5–7 days"
    ],
    "mechanical": [
      "Vacuum or hose off light infestations"
    ],
    "chemical": {
      "active": "Imidacloprid (as locally approved)",
      "warning": "Whitefly develops resistance quickly — rotate products",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "powderymildew": {
    "name": "Powdery Mildew",
    "type": "Disease",
    "tags": [
      "mold or fungus",
      "yellow leaves"
    ],
    "cause": "Fungal disease favoured by humid days and dry nights, poor air circulation",
    "prevention": [
      "Improve spacing and airflow",
      "Avoid overhead watering in evening"
    ],
    "organic": [
      "Spray diluted milk or sulfur-based fungicide"
    ],
    "mechanical": [
      "Remove and destroy heavily infected leaves"
    ],
    "chemical": {
      "active": "Sulfur or Hexaconazole (as locally approved)",
      "warning": "Do not apply sulfur in very hot weather — can scorch leaves",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "jassid": {
    "name": "Jassids (Leafhoppers)",
    "type": "Pest",
    "tags": [
      "yellow leaves",
      "insects visible"
    ],
    "cause": "Small hopping insects that suck sap, causing leaf curling and yellowing",
    "prevention": [
      "Yellow sticky traps",
      "Avoid water stress"
    ],
    "organic": [
      "Neem oil spray"
    ],
    "mechanical": [
      "—"
    ],
    "chemical": {
      "active": "Imidacloprid (as locally approved)",
      "warning": "Rotate chemical classes",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "yellowmosaic": {
    "name": "Yellow Mosaic Virus",
    "type": "Disease",
    "tags": [
      "yellow leaves"
    ],
    "cause": "Virus spread by whitefly, causing yellow mosaic patterning on leaves",
    "prevention": [
      "Control whitefly populations early",
      "Use resistant/tolerant varieties where available",
      "Remove infected plants promptly"
    ],
    "organic": [
      "Neem oil to reduce whitefly vector"
    ],
    "mechanical": [
      "Rogue out infected plants early in the season"
    ],
    "chemical": {
      "active": "No direct cure — manage the whitefly vector",
      "warning": "Focus on prevention and vector control",
      "ppe": "—",
      "phi": "—"
    }
  },
  "stemborer": {
    "name": "Stem Borer",
    "type": "Pest",
    "tags": [
      "wilting",
      "holes in leaves",
      "insects visible"
    ],
    "cause": "Moth larvae boring into stems causing \"dead heart\" in young plants",
    "prevention": [
      "Use pheromone traps",
      "Avoid staggered planting near infested fields"
    ],
    "organic": [
      "Release Trichogramma egg parasitoids",
      "Bt spray at early larval stage"
    ],
    "mechanical": [
      "Remove and destroy dead-heart tillers"
    ],
    "chemical": {
      "active": "Cartap hydrochloride (as locally approved)",
      "warning": "Apply at early larval stage for best effect",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "blast": {
    "name": "Rice Blast",
    "type": "Disease",
    "tags": [
      "brown spots",
      "mold or fungus"
    ],
    "cause": "Fungal disease favoured by high humidity and excess nitrogen",
    "prevention": [
      "Avoid excess nitrogen application",
      "Use resistant varieties",
      "Maintain field drainage"
    ],
    "organic": [
      "Preventive neem-based spray"
    ],
    "mechanical": [
      "Remove infected plant debris after harvest"
    ],
    "chemical": {
      "active": "Tricyclazole (as locally approved)",
      "warning": "Apply preventively at first sign of lesions",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "bph": {
    "name": "Brown Plant Hopper",
    "type": "Pest",
    "tags": [
      "wilting",
      "insects visible"
    ],
    "cause": "Sap-sucking insect causing \"hopper burn\" (patches of drying, brown plants)",
    "prevention": [
      "Avoid excess nitrogen",
      "Maintain alternate wetting-drying rather than constant flooding where feasible"
    ],
    "organic": [
      "Encourage spiders and natural predators, minimize broad-spectrum sprays"
    ],
    "mechanical": [
      "Drain field briefly to disrupt hopper breeding"
    ],
    "chemical": {
      "active": "Buprofezin (as locally approved)",
      "warning": "Avoid broad-spectrum insecticides that kill natural predators",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "fallarmyworm": {
    "name": "Fall Armyworm",
    "type": "Pest",
    "tags": [
      "holes in leaves",
      "insects visible"
    ],
    "cause": "Caterpillar feeding inside the whorl of young maize plants",
    "prevention": [
      "Monitor whorls regularly from early growth stage",
      "Intercropping can reduce spread"
    ],
    "organic": [
      "Apply Bt-based spray into the whorl",
      "Neem seed kernel extract"
    ],
    "mechanical": [
      "Hand-pick larvae from whorls in small plots"
    ],
    "chemical": {
      "active": "Emamectin benzoate (as locally approved)",
      "warning": "Apply directly into the whorl for best effect",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "rust": {
    "name": "Wheat Rust",
    "type": "Disease",
    "tags": [
      "brown spots",
      "yellow leaves"
    ],
    "cause": "Fungal disease spreading via wind-blown spores in humid, mild weather",
    "prevention": [
      "Use rust-resistant varieties",
      "Avoid excess nitrogen",
      "Timely sowing to avoid peak spore periods"
    ],
    "organic": [
      "Limited organic options — prevention is key"
    ],
    "mechanical": [
      "Remove volunteer wheat plants that harbor spores"
    ],
    "chemical": {
      "active": "Propiconazole (as locally approved)",
      "warning": "Apply at first sign for best control",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "shootfly": {
    "name": "Shoot Fly",
    "type": "Pest",
    "tags": [
      "wilting"
    ],
    "cause": "Fly larvae boring into young seedling stems causing \"dead heart\"",
    "prevention": [
      "Timely sowing at start of season reduces risk",
      "Higher seed rate to compensate for losses"
    ],
    "organic": [
      "Neem seed kernel extract spray at seedling stage"
    ],
    "mechanical": [
      "Remove and destroy dead-heart plants"
    ],
    "chemical": {
      "active": "Seed treatment with Thiamethoxam (as locally approved)",
      "warning": "Apply as seed treatment before sowing",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "downymildew": {
    "name": "Downy Mildew",
    "type": "Disease",
    "tags": [
      "mold or fungus",
      "yellow leaves"
    ],
    "cause": "Fungus-like pathogen favoured by high humidity and leaf wetness",
    "prevention": [
      "Use resistant varieties",
      "Avoid overcrowded planting"
    ],
    "organic": [
      "Preventive copper-based spray"
    ],
    "mechanical": [
      "Remove and destroy infected plants early"
    ],
    "chemical": {
      "active": "Metalaxyl (as locally approved)",
      "warning": "Apply preventively before humid spells",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "podborer": {
    "name": "Pod Borer",
    "type": "Pest",
    "tags": [
      "holes in leaves",
      "insects visible"
    ],
    "cause": "Moth larvae feeding on flowers and boring into developing pods",
    "prevention": [
      "Pheromone traps for monitoring",
      "Intercrop with sorghum as a trap border"
    ],
    "organic": [
      "Bt spray at flowering",
      "Neem seed kernel extract"
    ],
    "mechanical": [
      "Hand-pick larvae in small plots"
    ],
    "chemical": {
      "active": "Emamectin benzoate (as locally approved)",
      "warning": "Apply at early flowering for best effect",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "leafspot": {
    "name": "Leaf Spot",
    "type": "Disease",
    "tags": [
      "brown spots",
      "mold or fungus"
    ],
    "cause": "Fungal disease favoured by humid weather and leaf wetness",
    "prevention": [
      "Crop rotation",
      "Remove infected debris after harvest"
    ],
    "organic": [
      "Preventive copper-based spray"
    ],
    "mechanical": [
      "Remove severely affected leaves"
    ],
    "chemical": {
      "active": "Chlorothalonil (as locally approved)",
      "warning": "Apply preventively",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "sigatoka": {
    "name": "Sigatoka Leaf Spot",
    "type": "Disease",
    "tags": [
      "brown spots",
      "mold or fungus",
      "yellow leaves"
    ],
    "cause": "Fungal disease of banana leaves, worse in humid, high-rainfall conditions",
    "prevention": [
      "Remove and destroy infected leaves regularly",
      "Ensure good spacing for airflow"
    ],
    "organic": [
      "Preventive copper-based spray"
    ],
    "mechanical": [
      "Deleaf infected leaves regularly"
    ],
    "chemical": {
      "active": "Propiconazole (as locally approved)",
      "warning": "Rotate fungicide classes to avoid resistance",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "nematode": {
    "name": "Root-knot Nematode",
    "type": "Pest",
    "tags": [
      "wilting",
      "yellow leaves"
    ],
    "cause": "Microscopic soil worms causing root galls and reduced nutrient uptake",
    "prevention": [
      "Crop rotation with non-host crops",
      "Use nematode-free planting material"
    ],
    "organic": [
      "Add neem cake to soil",
      "Marigold intercropping suppresses nematodes"
    ],
    "mechanical": [
      "Soil solarization before planting"
    ],
    "chemical": {
      "active": "Carbofuran soil application (as locally approved)",
      "warning": "Restricted in many regions — check local regulations",
      "ppe": "Gloves, mask",
      "phi": "Follow label strictly"
    }
  },
  "fruitfly": {
    "name": "Fruit Fly",
    "type": "Pest",
    "tags": [
      "insects visible",
      "holes in leaves"
    ],
    "cause": "Flies lay eggs in ripening fruit; maggots develop inside causing rot",
    "prevention": [
      "Use fruit fly traps with methyl eugenol lure",
      "Collect and destroy fallen fruit promptly"
    ],
    "organic": [
      "Neem oil spray",
      "Bait traps with jaggery + insecticide in a container (not sprayed on fruit)"
    ],
    "mechanical": [
      "Bag individual fruit with paper/net bags"
    ],
    "chemical": {
      "active": "Spinosad bait application (as locally approved)",
      "warning": "Use bait stations rather than blanket spraying",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "hopper": {
    "name": "Mango Hopper",
    "type": "Pest",
    "tags": [
      "insects visible",
      "wilting"
    ],
    "cause": "Sap-sucking insect active during flowering, causing flower and fruit drop",
    "prevention": [
      "Avoid dense canopy — prune for airflow",
      "Monitor during flowering season"
    ],
    "organic": [
      "Neem oil spray during flowering"
    ],
    "mechanical": [
      "—"
    ],
    "chemical": {
      "active": "Imidacloprid (as locally approved)",
      "warning": "Avoid spraying during open flowering to protect pollinators",
      "ppe": "Gloves, mask",
      "phi": "Follow label"
    }
  },
  "ringspot": {
    "name": "Papaya Ringspot Virus",
    "type": "Disease",
    "tags": [
      "yellow leaves",
      "mold or fungus"
    ],
    "cause": "Virus spread by aphids, causing ring-shaped spots on fruit and leaf distortion",
    "prevention": [
      "Control aphid vectors",
      "Rogue out infected plants promptly",
      "Use tolerant varieties where available"
    ],
    "organic": [
      "Neem oil to reduce aphid vector"
    ],
    "mechanical": [
      "Remove and destroy infected plants immediately"
    ],
    "chemical": {
      "active": "No direct cure — manage the aphid vector",
      "warning": "Focus on prevention and vector control",
      "ppe": "—",
      "phi": "—"
    }
  },
  "mite": {
    "name": "Spider Mite",
    "type": "Pest",
    "tags": [
      "yellow leaves",
      "insects visible"
    ],
    "cause": "Tiny mites that feed on leaf undersides, thriving in hot, dry conditions",
    "prevention": [
      "Maintain adequate irrigation to reduce plant stress",
      "Avoid excess dust on foliage"
    ],
    "organic": [
      "Neem oil spray",
      "Spray undersides of leaves with water to disrupt mites"
    ],
    "mechanical": [
      "Remove heavily infested leaves"
    ],
    "chemical": {
      "active": "Abamectin (as locally approved)",
      "warning": "Rotate miticide classes to avoid resistance",
      "ppe": "Gloves, mask, eye protection",
      "phi": "Follow label"
    }
  }
};
