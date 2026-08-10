const abilities = [
  {
    "ability": "TheHand",
    "display": "The Hand",
    "rarity": "Common",
    "tier": "RNG Pool",
    "rollRarity": "Common",
    "image": "images/thehand.svg"
  },
  {
    "ability": "Aerosmith",
    "display": "Aerosmith",
    "rarity": "Common",
    "tier": "RNG Pool",
    "rollRarity": "Common",
    "image": "images/aerosmith.svg"
  },
  {
    "ability": "TuskActOne",
    "display": "Tusk Act 1",
    "rarity": "Common",
    "tier": "RNG Pool",
    "rollRarity": "Mythic",
    "image": "images/tuskactone.svg"
  },
  {
    "ability": "HierophantGreen",
    "display": "Hierophant Green",
    "rarity": "Common",
    "tier": "RNG Pool",
    "rollRarity": "Common",
    "image": "images/hierophantgreen.svg"
  },
  {
    "ability": "StickyFingers",
    "display": "Sticky Fingers",
    "rarity": "Common",
    "tier": "RNG Pool",
    "rollRarity": "Common",
    "image": "images/stickyfingers.svg"
  },
  {
    "ability": "MagiciansRed",
    "display": "Magician's Red",
    "rarity": "Common",
    "tier": "RNG Pool",
    "rollRarity": "Mythic",
    "image": "images/magiciansred.svg"
  },
  {
    "ability": "DiverDown",
    "display": "Diver Down",
    "rarity": "Common",
    "tier": "RNG Pool",
    "rollRarity": "Common",
    "image": "images/diverdown.svg"
  },
  {
    "ability": "DivergentFist",
    "display": "Divergent Fist",
    "rarity": "Common",
    "tier": "C",
    "rollRarity": null,
    "image": "images/divergentfist.svg"
  },
  {
    "ability": "Kaioken",
    "display": "Kaioken",
    "rarity": "Common",
    "tier": "C",
    "rollRarity": null,
    "image": "images/kaioken.svg"
  },
  {
    "ability": "CrazyDiamond",
    "display": "Crazy Diamond",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Rare",
    "image": "images/crazydiamond.svg"
  },
  {
    "ability": "StoneFree",
    "display": "Stone Free",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Rare",
    "image": "images/stonefree.svg"
  },
  {
    "ability": "KillerQueen",
    "display": "Killer Queen",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Rare",
    "image": "images/killerqueen.svg"
  },
  {
    "ability": "GoldenExperience",
    "display": "Golden Experience",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Elite",
    "image": "images/goldenexperience.svg"
  },
  {
    "ability": "CatchTheRainbow",
    "display": "Catch The Rainbow",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Elite",
    "image": "images/catchtherainbow.svg"
  },
  {
    "ability": "PurpleHaze",
    "display": "Purple Haze",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Rare",
    "image": "images/purplehaze.svg"
  },
  {
    "ability": "TuskActTwo",
    "display": "Tusk Act 2",
    "rarity": "Rare",
    "tier": "C",
    "rollRarity": null,
    "image": "images/tuskacttwo.svg"
  },
  {
    "ability": "TuskActThree",
    "display": "Tusk Act 3",
    "rarity": "Rare",
    "tier": "C",
    "rollRarity": null,
    "image": "images/tuskactthree.svg"
  },
  {
    "ability": "CurseManipulation",
    "display": "Curse Manipulation",
    "rarity": "Rare",
    "tier": "C",
    "rollRarity": null,
    "image": "images/cursemanipulation.svg"
  },
  {
    "ability": "BallBreaker",
    "display": "Ball Breaker",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Rare",
    "image": "images/ballbreaker.svg"
  },
  {
    "ability": "Whitesnake",
    "display": "Whitesnake",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Elite",
    "image": "images/whitesnake.svg"
  },
  {
    "ability": "EchoesAct3",
    "display": "Echoes Act 3",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Elite",
    "image": "images/echoesact3.svg"
  },
  {
    "ability": "Mandom",
    "display": "Mandom",
    "rarity": "Rare",
    "tier": "RNG Pool",
    "rollRarity": "Elite",
    "image": "images/mandom.svg"
  },
  {
    "ability": "StarPlatinum",
    "display": "Star Platinum",
    "rarity": "Elite",
    "tier": "B",
    "rollRarity": null,
    "image": "images/starplatinum.svg"
  },
  {
    "ability": "StarPlatinumSO",
    "display": "Star Platinum SO",
    "rarity": "Elite",
    "tier": "B",
    "rollRarity": null,
    "image": "images/starplatinumso.svg"
  },
  {
    "ability": "D4C",
    "display": "D4C",
    "rarity": "Elite",
    "tier": "B",
    "rollRarity": null,
    "image": "images/d4c.svg"
  },
  {
    "ability": "CMoon",
    "display": "C-Moon",
    "rarity": "Elite",
    "tier": "B",
    "rollRarity": null,
    "image": "images/cmoon.svg"
  },
  {
    "ability": "World",
    "display": "The World",
    "rarity": "Elite",
    "tier": "A",
    "rollRarity": null,
    "image": "images/world.svg"
  },
  {
    "ability": "WeatherReport",
    "display": "Weather Report",
    "rarity": "Elite",
    "tier": "RNG Pool",
    "rollRarity": "Elite",
    "image": "images/weatherreport.svg"
  },
  {
    "ability": "KingCrimson",
    "display": "King Crimson",
    "rarity": "Elite",
    "tier": "A",
    "rollRarity": null,
    "image": "images/kingcrimson.svg"
  },
  {
    "ability": "Cream",
    "display": "Cream",
    "rarity": "Elite",
    "tier": "RNG Pool",
    "rollRarity": "Rare",
    "image": "images/cream.svg"
  },
  {
    "ability": "GokuBlue",
    "display": "Super Saiyan Blue",
    "rarity": "Elite",
    "tier": "A",
    "rollRarity": null,
    "image": "images/gokublue.svg"
  },
  {
    "ability": "Vampire",
    "display": "Vampire",
    "rarity": "Elite",
    "tier": "B",
    "rollRarity": null,
    "image": "images/vampire.svg"
  },
  {
    "ability": "Rinnegan",
    "display": "Rinnegan",
    "rarity": "Elite",
    "tier": "B",
    "rollRarity": null,
    "image": "images/rinnegan.svg"
  },
  {
    "ability": "Angel",
    "display": "Angel",
    "rarity": "Mythic",
    "tier": "A",
    "rollRarity": null,
    "image": "images/angel.svg"
  },
  {
    "ability": "WonderOfU",
    "display": "Wonder of U",
    "rarity": "Mythic",
    "tier": "RNG Pool",
    "rollRarity": "Mythic",
    "image": "images/wonderofu.svg"
  },
  {
    "ability": "GoldenExperienceRequiem",
    "display": "GER",
    "rarity": "Mythic",
    "tier": "A",
    "rollRarity": null,
    "image": "images/goldenexperiencerequiem.svg"
  },
  {
    "ability": "MadeInHeaven",
    "display": "Made In Heaven",
    "rarity": "Mythic",
    "tier": "S",
    "rollRarity": null,
    "image": "images/madeinheaven.svg"
  },
  {
    "ability": "TuskActFour",
    "display": "Tusk Act 4",
    "rarity": "Mythic",
    "tier": "S",
    "rollRarity": null,
    "image": "images/tuskactfour.svg"
  },
  {
    "ability": "TWOH",
    "display": "TWOH",
    "rarity": "Mythic",
    "tier": "S",
    "rollRarity": null,
    "image": "images/twoh.svg"
  },
  {
    "ability": "MUI",
    "display": "MUI",
    "rarity": "Mythic",
    "tier": "S",
    "rollRarity": null,
    "image": "images/mui.svg"
  },
  {
    "ability": "TenShadows",
    "display": "Ten Shadows",
    "rarity": "Mythic",
    "tier": "S",
    "rollRarity": null,
    "image": "images/tenshadows.svg"
  },
  {
    "ability": "ShadowSaiyan",
    "display": "Shadow Saiyan",
    "rarity": "Mythic",
    "tier": "S",
    "rollRarity": null,
    "image": "images/shadowsaiyan.svg"
  },
  {
    "ability": "Limitless",
    "display": "Limitless",
    "rarity": "Special",
    "tier": "X",
    "rollRarity": null,
    "image": "images/limitless.svg"
  },
  {
    "ability": "GodOfDestruction",
    "display": "God of Destruction",
    "rarity": "Special",
    "tier": "X",
    "rollRarity": null,
    "image": "images/godofdestruction.svg"
  },
  {
    "ability": "AdamSmasher",
    "display": "Adam Smasher",
    "rarity": "Special",
    "tier": "X",
    "rollRarity": null,
    "image": "images/adamsmasher.svg"
  }
];
const tierOrder = ["X","S","A","B","C","RNG Pool"];
const tierBoard = document.querySelector("#tierBoard");
const modal = document.querySelector("#abilityModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalTier = document.querySelector("#modalTier");
const modalRarity = document.querySelector("#modalRarity");
const modalText = document.querySelector("#modalText");
const modalId = document.querySelector("#modalId");
const closeModal = document.querySelector("#closeModal");

function makeCard(item,index){
    const card=document.createElement("button");
    card.type="button";
    card.className=`ability-card tier-${item.tier.replace(" ","-").toLowerCase()}`;
    card.innerHTML=`<span class="rank">${String(index+1).padStart(2,"0")}</span><img src="${item.image}" alt="${item.display}" loading="lazy"><span class="name">${item.display}</span><span class="mini">${item.tier==="RNG Pool" ? item.rollRarity : item.rarity}</span>`;
    card.addEventListener("click",()=>openModal(item));
    return card;
}

function openModal(item){
    modalImage.src=item.image;
    modalImage.alt=item.display;
    modalTitle.textContent=item.display;
    modalTier.textContent=item.tier==="RNG Pool" ? "RNG Pool" : `${item.tier} Tier`;
    modalTier.className=`tier-badge tier-${item.tier.replace(" ","-").toLowerCase()}`;
    modalRarity.textContent=item.tier==="RNG Pool" ? `${item.rollRarity} Roll Rarity` : `${item.rarity} Rarity`;
    modalRarity.className=`rarity-badge rarity-${(item.rollRarity||item.rarity).toLowerCase()}`;
    modalText.textContent=item.tier==="RNG Pool" ? "This is obtainable via. Roll Button" : `This ability is currently placed in ${item.tier} Tier.`;
    modalId.textContent=item.ability;
    modal.showModal();
}

for(const tier of tierOrder){
    const section=document.createElement("section");
    section.className=`tier-row tier-${tier.replace(" ","-").toLowerCase()}`;

    const label=document.createElement("div");
    label.className="tier-label";
    label.innerHTML=`<span>${tier==="RNG Pool" ? "RNG" : tier}</span><small>${tier==="RNG Pool" ? "POOL" : "TIER"}</small>`;

    const cards=document.createElement("div");
    cards.className="cards";

    const group=abilities.filter(x=>x.tier===tier);
    group.forEach((item,index)=>cards.appendChild(makeCard(item,index)));

    section.append(label,cards);
    tierBoard.appendChild(section);
}

closeModal.addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{if(e.target===modal) modal.close();});
