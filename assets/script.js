
const productCategories=["Network Camera","Network Speed Dome Camera","Network Video Recorder (NVR)","Analog HD Camera","Digital Video Recorder (DVR)","illumax","Guard+","CarKam","Speed Dome(PTZ)","Intrusion Alarm Systems","Access Control & Biometric Systems","Security Screening & Entrance Automation","Building Management System (BMS)","Public Address & Voice Alarm Systems","IT Networking & Data Infrastructure","Interactive Displays & AV Solutions","EzyHome","Video Door Phones","Time & Attendance","Mobile Surveillance","Storage","Switches","Memory","Body Worn Solutions","AI Edge Box","Accessories"];
const cats=productCategories;
const icons=["📷","🖥️","📹","💾","🎥","🏠","🔔","🕒","🗄️","🔌","🧰","🚗"];
const sols=[["Banking","ATM, branch and cash-van surveillance."],["Campus","Safer schools and universities."],["Hospitality / Health Care","Tailored coverage for hotels and hospitals."],["Industrial","Warehouses and manufacturing floors."],["Law Enforcement","Support for city and state police."],["Oil & Gas","Remote, large-area monitoring."],["Real Estate","Construction sites to finished buildings."],["Retail","Reduce theft and cashier fraud."],["Safe City","Public-area surveillance."],["Smart Traffic","Traffic monitoring and enforcement."],["Transport","Mobile surveillance for vehicles."]];
const trend=[
 {name:"EGC-DA21L3C-LQ2",description:"2MP Dual Light Dome Camera - 30Mtr.",isNew:true,image:"assets/ngc.png",url:"https://cpplusworld.com/cp-unc-da21l3c-lq2"},
 {name:"EGC-W32",description:"CarKam 3MP",isNew:true,image:"assets/cdc.png",url:"https://cpplusworld.com/cp-w32"},
 {name:"EGC-1601F1V-I",description:"16Ch. 5MP Digital Video Recorder",isNew:true,image:"assets/nvr.png",url:"https://cpplusworld.com/cp-uvr-1601f1v-i-"},
 {name:"EGC-3201K2V-I3",description:"32Ch. 5MP Digital Video Recorder",image:"assets/CP-UVR-3201K2V-I3.png",url:"https://cpplusworld.com/cp-uvr-3201k2v-i3-"},
 {name:"EGC-GPU8G2P-96",description:"8 Ports Gigabit Unmanaged PoE Switch with 2 Gigabit Uplink Ports",image:"assets/CP-DNW-GPU8G2P-96.png",url:"https://cpplusworld.com/cp-dnw-gpu8g2p-96"},
 {name:"EGC-GPU4G2P-48",description:"4 Ports Gigabit Unmanaged PoE Switch with 2 Gigabit Uplink Ports",image:"assets/CP-DNW-GPU4G2P-48.png",url:"https://cpplusworld.com/cp-dnw-gpu4g2p-48-"},
 {name:"EGC-TA21L3C-LQ2",description:"2MP Dual Light Bullet Camera - 30Mtr.",image:"assets/bsc.png",url:"https://cpplusworld.com/cp-unc-ta21l3c-lq2"},
 {name:"EGC-TA21L3C-Q2",description:"2MP Network IR Bullet Camera - 30Mtr.",image:"assets/inc.png",url:"https://cpplusworld.com/cp-unc-ta21l3c-q2"},
 {name:"EGC-H14L100B-V3",description:"14” Vandal-Proof IR Housing",image:"assets/CP-UA.png",url:"https://cpplusworld.com/cp-ua-h14l100b-v3"},
 {name:"EGC-H14B-V3",description:"14” Vandal Proof Camera Housing",image:"assets/CP-UA-H1.png",url:"https://cpplusworld.com/cp-ua-h14b-v3"}
];
const news=[["11/05/2026","A new campaign. A smarter way to look at security."],["05/29/2026","Leadership in intelligent surveillance at industry expos"],["05/29/2026","Surveillance beyond infrastructure for remote homes"],["04/09/2026","New R&D center strengthens global innovation"],["04/09/2026","Dual honours for smart, made-in-India security"],["03/05/2026","Managing Director receives industry achievement award"]];
const productPhotos=[
 "photo-1558008258-3256797b43f3","photo-1518770660439-4636190af475","photo-1557597774-9d273605dfa9",
 "photo-1581092918056-0c4c3acd3789","photo-1519608487953-e999c86e7455","photo-1563013544-824ae1b704d3"
];
const categoryProductPhotos={
 "CarKam":["assets/cdc.png","assets/cdc.png","assets/cdc.png","assets/cdc.png"],
 "EzyHome":["photo-1563013544-824ae1b704d3","photo-1558008258-3256797b43f3","photo-1557597774-9d273605dfa9","photo-1518770660439-4636190af475"],
 "Video Door Phones":["photo-1558008258-3256797b43f3","photo-1563013544-824ae1b704d3","photo-1557597774-9d273605dfa9","photo-1518770660439-4636190af475"],
 "Time & Attendance":["photo-1581092918056-0c4c3acd3789","photo-1518770660439-4636190af475","photo-1563013544-824ae1b704d3","photo-1558008258-3256797b43f3"],
 "Mobile Surveillance":["photo-1549317661-bd32c8ce0db2","photo-1449965408869-eaa3f722e40d","photo-1603386329225-868f9b1ee6a9","photo-1558008258-3256797b43f3"],
 "Storage":["photo-1558494949-ef010cbdcc31","photo-1544197150-b99a580bb7a8","photo-1597872200969-2b65d56bd16b","photo-1518770660439-4636190af475"],
 "Switches":["assets/CP-DNW-GPU8G2P-96.png","assets/CP-DNW-GPU4G2P-48.png","assets/CP-DNW-GPU8G2P-96.png","assets/CP-DNW-GPU4G2P-48.png"],
 "Memory":["photo-1518770660439-4636190af475","photo-1597872200969-2b65d56bd16b","photo-1581092918056-0c4c3acd3789","photo-1558494949-ef010cbdcc31"],
 "Body Worn Solutions":["photo-1557597774-9d273605dfa9","photo-1581092918056-0c4c3acd3789","photo-1518770660439-4636190af475","photo-1558008258-3256797b43f3"],
 "AI Edge Box":["photo-1518770660439-4636190af475","photo-1581092918056-0c4c3acd3789","photo-1558494949-ef010cbdcc31","photo-1597872200969-2b65d56bd16b"],
 "Accessories":["photo-1518770660439-4636190af475","photo-1558008258-3256797b43f3","photo-1581092918056-0c4c3acd3789","photo-1563013544-824ae1b704d3"],
 "Network Camera":["assets/ngc.png","assets/bsc.png","assets/inc.png","assets/ngc.png"],
 "Network Speed Dome Camera":["assets/network-speed-dome-camera.png","assets/network-speed-dome-camera.png","assets/network-speed-dome-camera.png","assets/network-speed-dome-camera.png"],
 "Network Video Recorder (NVR)":["assets/nvr.png","assets/CP-UVR-3201K2V-I3.png","assets/nvr.png","assets/CP-UVR-3201K2V-I3.png"],
 "Analog HD Camera":["assets/bsc.png","assets/inc.png","assets/ngc.png","assets/bsc.png"],
 "Digital Video Recorder (DVR)":["assets/nvr.png","assets/CP-UVR-3201K2V-I3.png","assets/nvr.png","assets/CP-UVR-3201K2V-I3.png"],
 "illumax":["assets/ngc.png","assets/bsc.png","assets/inc.png","assets/ngc.png"],
 "Guard+":["assets/ngc.png","assets/bsc.png","assets/inc.png","assets/ngc.png"]
};
const newsPhotos=[
 "photo-1558008258-3256797b43f3","photo-1486406146926-c627a92ad1ab","photo-1519608487953-e999c86e7455",
 "photo-1581092918056-0c4c3acd3789","photo-1518770660439-4636190af475","photo-1544620347-c4fd4a3d5957"
];
const photoUrl=(id,w=700)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const productImageUrl=(source,w=700)=>source.startsWith("http")||source.startsWith("assets/")?source:photoUrl(source,w);
const $=id=>document.getElementById(id);
$("megaMenu").innerHTML=`<a href="#products" data-product-all>All Products</a>${cats.map((c,i)=>`<a href="#products" data-category="${i}">${c}</a>`).join("")}`;
$("solMenu").innerHTML=sols.map(s=>`<a href="#solutions">${s[0]}</a>`).join("");
$("fProd").innerHTML=cats.slice(0,8).map(c=>`<li><a href="#products">${c}</a></li>`).join("");
$("fSol").innerHTML=sols.slice(0,8).map(s=>`<li><a href="#solutions">${s[0]}</a></li>`).join("");
$("trendGrid").innerHTML=trend.map(t=>`<article class="card trend-card">${t.isNew?'<span class="trend-ribbon">New</span>':''}<div class="ph"><a href="${t.url}" target="_blank" rel="noopener noreferrer" aria-label="View ${t.name}"><img src="${t.image}" alt="${t.name}" loading="eager" decoding="async"></a></div><div class="b"><h3><a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.name}</a></h3><p>${t.description}</p></div></article>`).join("");
const trendTrack=$("trendGrid"),trendCards=[...trendTrack.children];
let trendIndex=0;
function trendVisibleCount(){return innerWidth<=380?1:innerWidth<=560?2:innerWidth<=760?3:innerWidth<=1100?4:5}
function updateTrendCarousel(){
 const maxIndex=Math.max(0,trendCards.length-trendVisibleCount());
 trendIndex=Math.min(trendIndex,maxIndex);
 const step=trendCards[0]?.getBoundingClientRect().width+(parseFloat(getComputedStyle(trendTrack).gap)||0);
 trendTrack.style.transform=`translateX(-${trendIndex*step}px)`;
 $("trendPrev").disabled=trendIndex===0;
 $("trendNext").disabled=trendIndex>=maxIndex;
}
$("trendPrev").onclick=()=>{trendIndex=Math.max(0,trendIndex-1);updateTrendCarousel()};
$("trendNext").onclick=()=>{trendIndex=Math.min(trendCards.length-trendVisibleCount(),trendIndex+1);updateTrendCarousel()};
addEventListener("resize",updateTrendCarousel);
updateTrendCarousel();
$("solGrid").innerHTML=sols.map((s,i)=>`<article class="card sol"><div class="ic" aria-hidden="true">${["🏦","🎓","🏥","🏭","🛡️","🛢️","🏢","🛍️","🌆","🚦","🚌"][i]}</div><div class="sol-copy"><h3>${s[0]}</h3><p>${s[1]}</p><a class="link" href="#contact">Explore ›</a></div></article>`).join("");
$("newsGrid").innerHTML=news.map((n,i)=>{
 const pageUrl=encodeURIComponent(location.href.split("#")[0]);
 const title=encodeURIComponent(n[1]);
 return `<article class="card news-card"><div class="ph"><img src="${photoUrl(newsPhotos[i%newsPhotos.length])}" alt="${n[1]}" loading="lazy"><div class="news-overlay"><time>${n[0]}</time><h3>${n[1]}</h3><div class="news-share" aria-label="Share this story">
 <a href="https://www.facebook.com/sharer/sharer.php?u=${pageUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z"/></svg></a>
 <a href="https://twitter.com/intent/tweet?text=${title}&amp;url=${pageUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20z"/></svg></a>
 <a href="https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3A2.2 2.2 0 115.2 7.4 2.2 2.2 0 015.2 3zM3.3 9h3.8v12H3.3zm6.2 0h3.6v1.6h.1A4 4 0 0116.8 8c4 0 4.7 2.6 4.7 6V21h-3.8v-6.2c0-1.5 0-3.5-2.1-3.5s-2.5 1.6-2.5 3.4V21H9.5z"/></svg></a>
 </div></div></div><div class="b"><time>${n[0]}</time><h3>${n[1]}</h3><button class="news-details" type="button" aria-expanded="false">Show details</button></div></article>`;
}).join("");
const newsTrack=$("newsGrid"),newsCards=[...newsTrack.children];
newsTrack.addEventListener("click",e=>{
 const card=e.target.closest(".news-card");
 if(!card||e.target.closest(".news-share a"))return;
 card.classList.toggle("is-active");
 const button=card.querySelector(".news-details");
 button.setAttribute("aria-expanded",card.classList.contains("is-active"));
 button.textContent=card.classList.contains("is-active")?"Hide details":"Show details";
});
let newsIndex=0;
function newsVisibleCount(){return innerWidth<=560?1:innerWidth<=900?2:3}
function updateNewsCarousel(){
 const maxIndex=Math.max(0,newsCards.length-newsVisibleCount());
 newsIndex=Math.min(newsIndex,maxIndex);
 const step=newsCards[0]?.getBoundingClientRect().width+(parseFloat(getComputedStyle(newsTrack).gap)||0);
 newsTrack.style.transform=`translateX(-${newsIndex*step}px)`;
 $("newsPrev").disabled=newsIndex===0;
 $("newsNext").disabled=newsIndex>=maxIndex;
}
$("newsPrev").onclick=()=>{newsIndex=Math.max(0,newsIndex-1);updateNewsCarousel()};
$("newsNext").onclick=()=>{newsIndex=Math.min(newsCards.length-newsVisibleCount(),newsIndex+1);updateNewsCarousel()};
addEventListener("resize",updateNewsCarousel);
updateNewsCarousel();
/* product categories */
const productCategoryDescriptions={
 "CarKam":"Compact and reliable CarKam range offering crystal-clear footage for enhanced on-road safety.",
 "Speed Dome(PTZ)":"Flexible pan, tilt and zoom surveillance for wide-area monitoring and long-range perimeter coverage.",
 "Intrusion Alarm Systems":"Smart motion detectors, door and window contacts, glass-break sensors, and central alarm panels for 24/7 perimeter and indoor protection.",
 "Access Control & Biometric Systems":"Comprehensive entry management supporting biometrics, face detection, RFID, NFC, PIN, QR codes, and mobile credentials.",
 "Security Screening & Entrance Automation":"Integrated security screening and pedestrian entrance automation for commercial and institutional spaces.",
 "Building Management System (BMS)":"Intelligent building automation and energy monitoring for HVAC, lighting, plant operations, and centralized facility control.",
 "Public Address & Voice Alarm Systems":"Zone-based audio, routine paging, background music, and emergency voice evacuation for buildings and campuses.",
 "IT Networking & Data Infrastructure":"Structured cabling, switching, routing, and enterprise Wi-Fi for connected security and building systems.",
 "Interactive Displays & AV Solutions":"4K interactive flat-panel displays for classrooms, boardrooms, command centers, and digital signage.",
 "EzyHome":"Smart, convenient security solutions for your home.",
 "Video Door Phones":"See and speak with visitors before opening the door.",
 "Time & Attendance":"Smart systems for accurate time and attendance management.",
 "Mobile Surveillance":"Reliable surveillance solutions for vehicles and mobile environments.",
 "Storage":"Dependable storage solutions for surveillance footage.",
 "Switches":"Reliable network connectivity for security cameras and systems.",
 "Memory":"Memory solutions for reliable recording and data storage.",
 "Body Worn Solutions":"Portable video solutions for field teams and security professionals.",
 "AI Edge Box":"Edge computing solutions for intelligent video analytics.",
 "Accessories":"Essential accessories for complete security installations.",
 "Network Camera":"Network cameras for clear, connected video surveillance.",
 "Network Speed Dome Camera":"Speed dome cameras with high-performance PTZ positioning, zoom and 360-degree surveillance coverage.",
 "Network Video Recorder (NVR)":"Network video recorders for centralized IP camera recording and playback.",
 "Analog HD Camera":"High-definition analog cameras for dependable surveillance coverage.",
 "Digital Video Recorder (DVR)":"Digital video recorders for recording and managing analog HD camera footage.",
 "illumax":"Illumax cameras deliver clear color imaging in low-light environments.",
 "Guard+":"Guard+ surveillance cameras provide reliable protection for homes and businesses."
};
const cpProductPage=slug=>`https://cpplusworld.com/${slug}`;
const cpProductImage=file=>`https://cpplusworld.com/prodassets/product/small/${file}`;
const dahuaProducts="https://www.dahuasecurity.com/products";
const dahuaProductImage=file=>`https://materialfile.dahuasecurity.com/${file}`;
const expandedProductCatalog={
 "Network Camera":{
  image:cpProductImage("5c2e7611-df72-4ad4-b48d-dab5fa1d1592.png"),
  items:[
   ["CP-UNC-EE61L2C-VMD-Q","6MP network infrared fisheye camera.",cpProductImage("72d292f9-43b5-42ff-9ab9-b5fbec90e740.png"),cpProductPage("cp-unc-ee61l2c-vmd-q")],
   ["CP-UNC-BE51E-VMD-Q","5MP network box camera.",cpProductImage("46e20822-7b09-4991-88fc-34ff084e561e.jpg"),cpProductPage("cp-unc-be51e-vmd-q")],
   ["CP-UNC-DA41L3C-D-Q2","4MP network IR dome camera with 30 m illumination.",cpProductImage("5c2e7611-df72-4ad4-b48d-dab5fa1d1592.png"),cpProductPage("cp-unc-da41l3c-d-q2")],
   ["CP-UNC-TA41L3C-D-Q2","4MP network IR bullet camera with 30 m illumination.",cpProductImage("96bd65e3-5e7b-4cd5-856b-b98ad815a366.png"),cpProductPage("cp-unc-ta41l3c-d-q2")],
   ["CP-UNC-TA41L6C-D-Q2","4MP network IR bullet camera with 60 m illumination.",cpProductImage("e5385132-09f0-4d5d-947b-be0166dd47c8.png"),cpProductPage("cp-unc-ta41l6c-d-q2")]
  ]
 },
 "Network Speed Dome Camera":{
  image:"assets/hikvision-ds-2de2a404iw-de3.jpg",
  items:[
   ["Hikvision DS-2DE2A404IW-DE3","4MP network PTZ camera with 4x optical zoom.", "assets/hikvision-ds-2de2a404iw-de3.jpg","https://www.hikvision.com/us-en/products/network-products/ip-ptz-cameras/value-series/ds-2de2a404iw-de3/"],
   ["Hikvision DS-2DE4425IW-DE(T5)","Network PTZ model; verify region-specific availability and configuration with Hikvision.", "assets/network-speed-dome-camera.png","https://www.hikvision.com/us-en/products/network-products/ip-ptz-cameras/value-series/"],
   ["CP Plus CP-UNP-E3241L18-DAQ","Network speed dome PTZ camera.", "assets/cp-plus-cp-unp-e3241l18-daq.jpg",cpProductPage("cp-unp-e3241l18-daq")],
   ["Dahua SD49425XB-HNR","4MP WizSense PTZ network camera.", "assets/dahua-ptz-cameras.png","https://www.dahuasecurity.com/products/PTZ-Cameras/WizSense-Series/SD4/4MP/SD49425XB-HNR"]
  ]
 },
 "Network Video Recorder (NVR)":{
  image:cpProductImage("2a317d13-8aa0-44d4-b356-70174f5bc257.jpg"),
  items:[
   ["CP-UNR-104F1","4-channel network video recorder.",cpProductImage("2a317d13-8aa0-44d4-b356-70174f5bc257.jpg"),cpProductPage("cp-unr-104f1")],
   ["CP-UNR-4K4082-V4","8-channel 4K network video recorder.",cpProductImage("36065d7d-6aa3-477a-bbde-05215712d6ab.png"),cpProductPage("cp-unr-4k4082-v4")],
   ["TP-Link VIGI NVR1016H","16-channel network video recorder.", "assets/tp-link-vigi-nvr1016h.jpg","https://www.vigi.com/in/business-networking/vigi-network-video-recorder/vigi-nvr1016h/"],
   ["CP-UNR-4K4322-V4","32-channel 4K network video recorder.",cpProductImage("dd6484c0-5c7a-49be-8c93-8103d785baf8.jpg"),cpProductPage("cp-unr-4k4322-v4")],
   ["CP-UNR-4K2081-V4","8-channel 4K network video recorder.",cpProductImage("8c8f04cc-bdf6-4fd0-968c-db3999939778.png"),cpProductPage("cp-unr-4k2081-v4")]
  ]
 },
 "Analog HD Camera":{
  image:cpProductImage("28001cff-ce24-4b8f-958e-3bfcbec7b174.png"),
  items:[
   ["CP-URC-TC24PL3","2.4MP analog HD IR bullet camera with 30 m illumination.",cpProductImage("28001cff-ce24-4b8f-958e-3bfcbec7b174.png"),cpProductPage("cp-urc-tc24pl3")],
   ["CP-URC-TC24PL3C-L-V2","2.4MP analog HD dual-light bullet camera with 30 m illumination.",cpProductImage("e1d9b0ba-3280-4d47-ad67-b07188222ebf.jpg"),cpProductPage("cp-urc-tc24pl3c-l-v2")],
   ["CP-URC-DC24PL3C-L-V2","2.4MP analog HD dual-light dome camera with 30 m illumination.",cpProductImage("1a92ecf8-0add-47a9-b60d-c81f1db19ab3.jpg"),cpProductPage("cp-urc-dc24pl3c-l-v2")],
   ["CP-URC-DC51PL3C","5MP analog HD IR dome camera with 30 m illumination.",cpProductImage("48a98b45-d534-4790-9468-3dea0085960c.png"),cpProductPage("cp-urc-dc51pl3c")],
   ["CP-URC-TC51PL3C","5MP analog HD IR bullet camera with 30 m illumination.",cpProductImage("61bee9b0-29d5-43c9-9225-23d1f2180634.png"),cpProductPage("cp-urc-tc51pl3c")]
  ]
 },
 "Digital Video Recorder (DVR)":{
  image:cpProductImage("5af69ef4-7e58-42ab-ba09-fbabaf740f26.png"),
  items:[
   ["CP-UVR-0401F1V-I","4-channel 5MP digital video recorder.",cpProductImage("5af69ef4-7e58-42ab-ba09-fbabaf740f26.png"),cpProductPage("cp-uvr-0401f1v-i-")],
   ["CP-UVR-0801F1V-I","8-channel 5MP digital video recorder.",cpProductImage("c7112ee1-444a-4fbe-bcc2-478b661cea4f.png"),cpProductPage("cp-uvr-0801f1v-i")],
   ["CP-UVR-1601F1V-I","16-channel 5MP digital video recorder.",cpProductImage("38bd52ca-7a64-4380-bf3a-70beda8041e7.png"),cpProductPage("cp-uvr-1601f1v-i-")],
   ["CP-UVR-3201K2V-I3","32-channel 5MP digital video recorder.","assets/CP-UVR-3201K2V-I3.png",cpProductPage("cp-uvr-3201k2v-i3-")]
  ]
 },
 "illumax":{
  image:cpProductImage("16e21201-959f-47f2-9d8b-f33f0cb0f824.png"),
  items:[
   ["CP-UNC-TA21L3C-LQ2","2MP dual-light bullet camera with 30 m illumination.",cpProductImage("531ea535-0047-47c2-a5a9-c55b9930aa6d.png"),cpProductPage("cp-unc-ta21l3c-lq2")],
   ["CP-UNC-DA41L3C-D-LQ2","4MP dual-light dome camera with 30 m illumination.",cpProductImage("16e21201-959f-47f2-9d8b-f33f0cb0f824.png"),cpProductPage("cp-unc-da41l3c-d-lq2")],
   ["CP-UNC-TA41L3C-D-LQ2","4MP dual-light bullet camera with 30 m illumination.",cpProductImage("8939d3a2-ed3c-4424-9fde-1310d9c27ea8.png"),cpProductPage("cp-unc-ta41l3c-d-lq2")],
   ["CP-UMC-DA24L4-L","2.4MP dual-light dome camera with 40 m illumination.",cpProductImage("47d1c40b-1751-41f2-bff8-5af420ee8bd2.png"),cpProductPage("cp-umc-da24l4-l")]
  ]
 },
 "Guard+":{
  image:cpProductImage("25190bea-aa1a-4ca4-8bd7-482e88d8a376.png"),
  items:[
   ["CP-GPC-DA24PL2C-SE-V2","2.4MP full-color Guard+ dome camera with 20 m illumination.",cpProductImage("25190bea-aa1a-4ca4-8bd7-482e88d8a376.png"),cpProductPage("cp-gpc-da24pl2c-se-v2-")],
   ["CP-GPC-TA24PL2C-SE-V2","2.4MP full-color Guard+ bullet camera with 20 m illumination.",cpProductImage("79d6b710-695f-4db7-b6fd-3e0155d80042.png"),cpProductPage("cp-gpc-ta24pl2c-se-v2")],
   ["CP-GPC-TA50PL2C-SE","5MP full-color Guard+ bullet camera with 20 m illumination.",cpProductImage("833c175e-5656-4e86-b3f0-945afa6dc2b3.jpg"),cpProductPage("cp-gpc-ta50pl2c-se")]
  ]
 },
 "CarKam":{
  image:cpProductImage("ee3c91b8-4ab4-4b81-a64a-9970ccd7c4a7.png"),
  items:[
   ["CP-W32","3MP CarKam vehicle camera.",cpProductImage("ee3c91b8-4ab4-4b81-a64a-9970ccd7c4a7.png"),cpProductPage("cp-w32")],
   ["CP-KF86C","GPS vehicle camera kit with cabin and rear cameras and hardwire kit.",cpProductImage("247e77df-816e-4e7c-9447-75c3b5aa98a0.png"),cpProductPage("cp-kf86c")],
   ["CP-KH27B","2MP 4G vehicle camera kit with rear camera and hardwire kit.",cpProductImage("33a8af00-5a13-4b8c-a482-b3261a6cd549.png"),cpProductPage("cp-kh27b")]
  ]
 },
 "Speed Dome(PTZ)":{
  image:"assets/network-speed-dome-camera.png",
  items:[
   ["CP-UNP-F4551L30-DPQ","5MP WDR network PTZ camera with 45x optical zoom and 300 m IR.",cpProductImage("c1ca22e4-e091-4556-b41a-478df6776a24.png"),cpProductPage("cp-unp-f4551l30-dpq")],
   ["CP-UNP-E3221L18-DAQ","2MP WDR network PTZ camera with 32x optical zoom and 180 m IR.",cpProductImage("404c86e9-4fd7-41bd-8859-a33e728ceccc.jpg"),cpProductPage("cp-unp-e3221l18-daq")],
   ["CP-UNP-H4521L50-DPQ","2MP WDR network PTZ camera with 45x optical zoom and 500 m IR.",cpProductImage("2f651410-9dfd-467c-bbc0-9455bd5f2f44.png"),cpProductPage("cp-unp-h4521l50-dpq")],
   ["CP-UNP-E3241L18-DAQ","Network speed dome PTZ camera; see the manufacturer listing for full specifications.","assets/cp-plus-cp-unp-e3241l18-daq.jpg",cpProductPage("cp-unp-e3241l18-daq")]
  ]
 },
 "Intrusion Alarm Systems":{
  image:dahuaProductImage("new_uploads/image/20250519/wireless2.png"),
  items:[
   ["Wireless Alarm Hub","Wireless system hub for connected intrusion sensors and alarm notifications.",dahuaProductImage("new_uploads/image/20250519/wireless2.png"),"https://www.dahuasecurity.com/products/alarms/wireless-alarm"],
   ["Wired Intrusion Alarm Panel","Wired alarm system panel for zoned detectors and supervised inputs.",dahuaProductImage("new_uploads/image/20250519/Wired-Alarm.png"),"https://www.dahuasecurity.com/products/alarms/wired-alarm"],
   ["Emergency Alarm Station","Emergency call point for rapid alerting in public and commercial spaces.",dahuaProductImage("uploads/image/20220922/Emergency-Phone-Tower.png"),"https://www.dahuasecurity.com/products/alarms/emergency-alarm"],
   ["Addressable Fire Alarm System","Addressable detection and alarm components for building life-safety systems.",dahuaProductImage("uploads/image/20230529/1555190917244.png"),"https://www.dahuasecurity.com/products/fire-alarm/addressable-fire-alarm-system"]
  ]
 },
 "Access Control & Biometric Systems":{
  image:dahuaProductImage("uploads/image/20240826/con3801.png"),
  items:[
   ["Fingerprint Access Terminal","Biometric fingerprint reader for standalone or networked door access.",cpProductImage("be8fb6db-be44-45d9-830d-3ed6ac5eea49.png"),"https://www.dahuasecurity.com/products/access-control-&-time-attendance/access-control"],
   ["Facial Recognition Terminal","Touchless face-recognition terminal for controlled entry.",dahuaProductImage("uploads/image/20240826/con3801.png"),"https://www.dahuasecurity.com/products/access-control-&-time-attendance/access-control"],
   ["RFID & Proximity Reader","Credential reader for card-based door access and attendance.",dahuaProductImage("new_uploads/image/20250918/Time-Attendance.png"),"https://www.dahuasecurity.com/products/access-control-&-time-attendance/access-control"],
   ["PIN & Card Keypad Reader","Keypad and card-reader configuration for single- or dual-factor entry.",cpProductImage("8c6eefa4-6bfe-4415-9497-f74dd39cd9fa.png"),"https://www.dahuasecurity.com/products/access-control-&-time-attendance/access-control"]
  ]
 },
 "Security Screening & Entrance Automation":{
  image:dahuaProductImage("uploads/image/20200805/Turnstiles2.png"),
  items:[
   ["X-Ray Baggage Screening","Baggage screening system for security checkpoints; confirm tunnel size and threat-detection options with the supplier.","photo-1558008258-3256797b43f3","https://www.nuctech.com/"],
   ["Tripod Turnstile Gate","Compact pedestrian entry lane for controlled access points.",dahuaProductImage("uploads/image/20200805/Turnstiles2.png"),"https://www.dahuasecurity.com/products/access-control-&-time-attendance/turnstiles"],
   ["Flap Barrier Gate","High-throughput lane barrier for office and institutional lobbies.",dahuaProductImage("new_uploads/image/20250918/Time-Attendance.png"),"https://www.dahuasecurity.com/products/access-control-&-time-attendance/turnstiles"],
   ["Swing Barrier Gate","Accessible automated entrance lane integrated with access-control readers.","photo-1581092918056-0c4c3acd3789","https://www.dahuasecurity.com/products/access-control-&-time-attendance/turnstiles"]
  ]
 },
 "Building Management System (BMS)":{
  image:"photo-1518770660439-4636190af475",
  items:[
   ["Direct Digital Controller (DDC)","Programmable field controller for HVAC, lighting, and plant automation.", "photo-1518770660439-4636190af475","https://www.se.com/ww/en/work/products/building-automation-and-control/"],
   ["Temperature & Humidity Sensors","Duct, pipe, outdoor, and wall-mounted sensing configurations for climate monitoring.","photo-1581092918056-0c4c3acd3789","https://www.se.com/ww/en/work/products/building-automation-and-control/"],
   ["Differential Pressure Sensors","Pressure sensing and switching for filters, ducts, and hydronic systems.","photo-1558494949-ef010cbdcc31","https://www.se.com/ww/en/work/products/building-automation-and-control/"],
   ["Motorized Control Valves & PICVs","Two-way, three-way, and pressure-independent valve options for AHUs and FCUs.","photo-1558008258-3256797b43f3","https://www.se.com/ww/en/work/products/building-automation-and-control/"]
  ]
 },
 "Public Address & Voice Alarm Systems":{
  image:"photo-1524178232363-1fb2b075b655",
  items:[
   ["IP Amplifier & Zone Controller","Network audio amplification and zone control for multi-floor paging.","photo-1524178232363-1fb2b075b655","https://www.boschbuildingtechnologies.com/lifesafetysystems/en/"],
   ["Ceiling & Wall Speakers","Speaker options for routine paging and background music in indoor spaces.","photo-1558008258-3256797b43f3","https://www.boschbuildingtechnologies.com/lifesafetysystems/en/"],
   ["Horn & Outdoor Speakers","Weather-resistant audio for perimeter announcements and warnings.","photo-1544620347-c4fd4a3d5957","https://www.boschbuildingtechnologies.com/lifesafetysystems/en/"],
   ["Voice Alarm Controller","Emergency announcement and evacuation messaging for life-safety systems.","photo-1581092918056-0c4c3acd3789","https://www.boschbuildingtechnologies.com/lifesafetysystems/en/"]
  ]
 },
 "IT Networking & Data Infrastructure":{
  image:"photo-1558494949-ef010cbdcc31",
  items:[
   ["CP-DNW-GPU8G2P-96","8-port Gigabit unmanaged PoE switch with 2 Gigabit uplink ports.","assets/CP-DNW-GPU8G2P-96.png",cpProductPage("cp-dnw-gpu8g2p-96")],
   ["CP-DNW-GPU4G2P-48","4-port Gigabit unmanaged PoE switch with 2 Gigabit uplink ports.","assets/CP-DNW-GPU4G2P-48.png",cpProductPage("cp-dnw-gpu4g2p-48-")],
   ["Managed PoE Switch","Managed switching for VLAN, device power, and network segmentation.",dahuaProductImage("uploads/image/20250918/Switches.png"),"https://transmission.dahuasecurity.com/en/product-list/Business/Switches"],
   ["Enterprise Router & Wi-Fi Access Point","Routing and wireless access options for connected buildings.",dahuaProductImage("uploads/image/20250918/Access-Points.png"),"https://transmission.dahuasecurity.com/en/product-list/Home/Routers"]
  ]
 },
 "Interactive Displays & AV Solutions":{
  image:"photo-1524178232363-1fb2b075b655",
  items:[
   ["ViewBoard IFP5541-1","55-inch EDLA-certified interactive display with motion sensor and 8-microphone array.","https://www.viewsonic.com/vsAssetFile/global/img/slides/_interactive_flat_panel/IFP5541-1/scaled/25-VWB-IFP5541-1-Product%20Photo_F01_pc_m.png","https://www.viewsonic.com/global/products/viewboard/ViewBoard%20IFP5541-1"],
   ["ViewBoard IFP6541-1","65-inch EDLA-certified interactive display with motion sensor and 8-microphone array.","https://www.viewsonic.com/vsAssetFile/global/img/slides/_interactive_flat_panel/IFP6541-1/scaled/25-VWB-IFP6541-1-Product%20Photo_F01_pc_m.png","https://www.viewsonic.com/global/products/viewboard/ViewBoard%20IFP6541-1"],
   ["ViewBoard IFP7541-1","75-inch EDLA-certified interactive display with motion sensor and 8-microphone array.","https://www.viewsonic.com/vsAssetFile/global/img/slides/_interactive_flat_panel/IFP7541-1/scaled/25-VWB-IFP7541-1-Product%20Photo_F01_pc_m.png","https://www.viewsonic.com/global/products/viewboard/ViewBoard%20IFP7541-1"],
   ["ViewBoard IFP8635-1","86-inch EDLA-certified interactive display with energy-saving motion sensor.","https://www.viewsonic.com/vsAssetFile/global/img/slides/_interactive_flat_panel/IFP8635-1/scaled/25-VWB-IFP8635-1-Product%20Photo_F01_pc_m.png","https://www.viewsonic.com/global/products/viewboard/ViewBoard%20IFP8635-1"]
  ]
 },
 "EzyHome":{
  image:cpProductImage("83eb874e-6c54-4736-a821-5078d56eebb0.png"),
  items:[
   ["CP-Z45Q","4MP Wi-Fi full-color pan-and-tilt camera.",cpProductImage("83eb874e-6c54-4736-a821-5078d56eebb0.png"),cpProductPage("cp-z45q")],
   ["CP-Z43Q","4MP Wi-Fi full-color pan-and-tilt camera.",cpProductImage("505700e3-bab5-4cfa-beb8-7c2534814062.jpg"),cpProductPage("cp-z43q")],
   ["CP-E48Q","4MP Wi-Fi pan-and-tilt camera.",cpProductImage("436a720f-e163-476b-b2b9-e2cb80ca95f1.jpg"),cpProductPage("cp-e48q")],
   ["EZ-S35T","3MP 4G pan-and-tilt camera.",cpProductImage("1f2142f3-1125-4933-9249-1f1bef953f07.png"),cpProductPage("ez-s35t")]
  ]
 },
 "Video Door Phones":{
  image:cpProductImage("c81167e7-6786-42dc-a75b-4207446b99e9.jpg"),
  items:[
   ["CP-UVK-711M","IP villa door station and indoor monitor kit.",cpProductImage("c81167e7-6786-42dc-a75b-4207446b99e9.jpg"),cpProductPage("cp-uvk-711m")],
   ["CP-UVK-701MTA","Video intercom kit with memory.",cpProductImage("673f0b00-321c-43a8-8f60-bd99722c1cda.jpg"),cpProductPage("cp-uvk-701mta")],
   ["CP-UVK-701A","Video intercom kit.",cpProductImage("1423800c-dc64-49a3-9409-5d6df2c4f942.jpg"),cpProductPage("cp-uvk-701a")]
  ]
 },
 "Time & Attendance":{
  image:cpProductImage("d59b9525-fd7a-4a74-bceb-fa984af5aca1.png"),
  items:[
   ["CP-VTA-M1143","Face- and fingerprint-based time-attendance terminal.",cpProductImage("d59b9525-fd7a-4a74-bceb-fa984af5aca1.png"),cpProductPage("cp-vta-m1143")],
   ["CP-VTA-F1043","Fingerprint-based time-attendance terminal.",cpProductImage("be8fb6db-be44-45d9-830d-3ed6ac5eea49.png"),cpProductPage("cp-vta-f1043")],
   ["CP-VTA-T2324-U","Fingerprint time-attendance terminal.",cpProductImage("8c6eefa4-6bfe-4415-9497-f74dd39cd9fa.png"),cpProductPage("cp-vta-t2324-u")]
  ]
 },
 "Mobile Surveillance":{
  image:cpProductImage("ee8de7c0-0ef4-4feb-80f3-642e7406c40d.png"),
  items:[
   ["CP-UNR-408T2J-BI","8-channel PoE mobile network video recorder.",cpProductImage("ee8de7c0-0ef4-4feb-80f3-642e7406c40d.png"),cpProductPage("cp-unr-408t2j-bi")],
   ["CP-UNR-408T2-AI","8-channel PoE H.265 AI mobile network video recorder.",cpProductImage("8e4073dc-8ec2-4851-ae73-058175b4eaeb.jpg"),cpProductPage("cp-unr-408t2-ai")],
   ["CP-UNR-404T1-AI","4-channel PoE H.265 AI mobile network video recorder.",cpProductImage("21924b57-5bd3-4290-8f12-487bca9ceb32.jpg"),cpProductPage("cp-unr-404t1-ai")],
   ["CP-KF86C","GPS vehicle camera kit with cabin and rear cameras.",cpProductImage("247e77df-816e-4e7c-9447-75c3b5aa98a0.png"),cpProductPage("cp-kf86c")]
  ]
 },
 "Storage":{
  image:cpProductImage("f539496e-8f01-4060-a307-2f4ff241f465.png"),
  items:[
   ["CP-UNS-7216DR-V3","Surveillance management centre.",cpProductImage("f539496e-8f01-4060-a307-2f4ff241f465.png"),cpProductPage("cp-uns-7216dr-v3")],
   ["CP-UVS-6487R-V3","48-HDD embedded video storage.",cpProductImage("5b322a91-74d7-4e8c-9f05-cce286cea9a1.jpg"),cpProductPage("cp-uvs-6487r-v3")],
   ["CP-UVS-G48R-V2","Embedded video storage system.",cpProductImage("1d269227-8461-4f36-89f1-1e0e59b1eb16.png"),cpProductPage("cp-uvs-g48r-v2")],
   ["CP-UVS-6487R-V2","48-HDD embedded video storage.",cpProductImage("8ea5664e-0ff2-4bac-b641-8f4c7511c939.jpg"),cpProductPage("cp-uvs-6487r-v2")]
  ]
 },
 "Switches":{
  image:"assets/CP-DNW-GPU8G2P-96.png",
  items:[
   ["CP-DNW-GPU8G2P-96","8-port Gigabit unmanaged PoE switch with 2 Gigabit uplink ports.","assets/CP-DNW-GPU8G2P-96.png",cpProductPage("cp-dnw-gpu8g2p-96")],
   ["CP-DNW-GPU4G2P-48","4-port Gigabit unmanaged PoE switch with 2 Gigabit uplink ports.","assets/CP-DNW-GPU4G2P-48.png",cpProductPage("cp-dnw-gpu4g2p-48-")],
   ["Dahua Business Switches","Managed and unmanaged switch options for surveillance and business networks.",dahuaProductImage("uploads/image/20250918/Switches.png"),"https://transmission.dahuasecurity.com/en/product-list/Business/Switches"],
   ["Dahua SOHO Switches","Compact switching options for small offices and home networks.",dahuaProductImage("uploads/image/20250918/SOHO-Switches.png"),"https://transmission.dahuasecurity.com/en/product-list/Home/SOHOSwitches"]
  ]
 },
 "Memory":{
  image:cpProductImage("ece80710-8726-45a4-8de9-6ad1c2eb0861.jpg"),
  items:[
   ["CP-UM64C","64GB microSD card from the CP-UM64C/UM128C/UM256C product family.",cpProductImage("ece80710-8726-45a4-8de9-6ad1c2eb0861.jpg"),cpProductPage("cp-um64c-um128c-um256c")],
   ["CP-UM128C","128GB microSD card from the CP-UM64C/UM128C/UM256C product family.",cpProductImage("ece80710-8726-45a4-8de9-6ad1c2eb0861.jpg"),cpProductPage("cp-um64c-um128c-um256c")],
   ["CP-UM256C","256GB microSD card from the CP-UM64C/UM128C/UM256C product family.",cpProductImage("ece80710-8726-45a4-8de9-6ad1c2eb0861.jpg"),cpProductPage("cp-um64c-um128c-um256c")],
   ["CP-NM512","512GB microSD card from the CP-NM64/NM128/NM256/NM512 product family.",cpProductImage("cp-nm32-nm64-nm128.jpg"),cpProductPage("cp-nm64-nm128-nm256-nm512")]
  ]
 },
 "Body Worn Solutions":{
  image:cpProductImage("db649499-559f-41a2-9046-0232e3a25387.png"),
  items:[
   ["CP-EBK-1073-K","2K body-worn camera kit.",cpProductImage("db649499-559f-41a2-9046-0232e3a25387.png"),cpProductPage("cp-ebk-1073-k")],
   ["CP-EDS-Y08-V3","10-port body-camera docking station with screen.",cpProductImage("623ae60f-b544-4451-9177-4cd8129c7778.png"),cpProductPage("cp-eds-y08-v3-")],
   ["CP-DDS-N10","10-port body-camera docking station.",cpProductImage("ac82e8f9-eba8-44af-8f7b-e29694ceb032.jpg"),cpProductPage("cp-dds-n10")]
  ]
 },
 "AI Edge Box":{
  image:dahuaProductImage("new_uploads/image/20250918/Software.png"),
  items:[
   ["AI Edge Video Analytics","Edge-based video analytics configuration for local event processing.",dahuaProductImage("new_uploads/image/20250918/Software.png"),dahuaProducts],
   ["Multi-Camera AI Edge System","Edge processing configuration for multiple video streams; capacity is project-dependent.",dahuaProductImage("new_uploads_formal/image/20260311/Network_Cameras_2.png"),dahuaProducts],
   ["AI Edge Storage & Analytics","Local video storage and analytics configuration for distributed sites.",dahuaProductImage("new_uploads/image/20250918/Business_Series.png"),dahuaProducts],
   ["AI Edge Network Appliance","Compact edge deployment configuration for remote or bandwidth-limited sites.",dahuaProductImage("uploads/image/20250918/Switches.png"),dahuaProducts]
  ]
 },
 "Accessories":{
  image:cpProductImage("98e6f173-930a-455c-8742-af3f9c2c68b9.png"),
  items:[
   ["CP-YPS-PA36B-12DN","12V, 3A three-pin power adapter.",cpProductImage("98e6f173-930a-455c-8742-af3f9c2c68b9.png"),cpProductPage("cp-yps-pa36b-12dn-")],
   ["CP-YPS-PA24B-12DT","12V, 2A two-pin power adapter.",cpProductImage("274d3d37-bc24-4f0a-b79b-907dfe703058.png"),cpProductPage("cp-yps-pa24b-12dt")],
   ["CP-CPS-PD08-12D","8-channel power supply.",cpProductImage("f4f85653-1a67-4083-b444-a3802884b250.png"),cpProductPage("cp-cps-pd08-12d")],
   ["CP-UML-AF550-V2","6MP, 1/2.7-inch, 5-50 mm varifocal lens.",cpProductImage("cec833f7-504c-44d7-984f-de1ee0e22025.png"),cpProductPage("cp-uml-af550-v2")],
   ["CP-UML-AD2712","4MP CS-mount lens.",cpProductImage("0a61cd94-d0c1-4ce3-a04c-83cc93507f95.jpg"),cpProductPage("CP-UML-AD2712")]
  ]
 }
};
function showCat(i){
 [...$("tabs").children].forEach((button,j)=>{
  button.classList.toggle("on",j===i);
  button.setAttribute("aria-pressed",j===i);
 });
 const category=productCategories[i];
 const expanded=expandedProductCatalog[category];
 const photos=categoryProductPhotos[category]||productPhotos.slice(0,4);
 const description=productCategoryDescriptions[category];
 const featurePhoto=expanded?.image||photos[0];
 $("productFeature").innerHTML=`<img src="${productImageUrl(featurePhoto,900)}" alt="${category}" loading="eager" decoding="async"><div class="product-feature-copy"><h3>${category}</h3><p>${description}</p></div>`;
 const items=expanded?.items.map(([name,detail,image,source])=>({
  name:name.replace(/^CP Plus CP-/,"EGC-").replace(/^CP-/,"EGC-"),
  detail:detail.replace(/\bCP-/g,"EGC-"),
  image,
  source
 }))||[1,2,3,4].map((n,j)=>({name:category==="CarKam"?(j===0?"Dash cam":`CarKam Model ${n}`):`${category} – Model ${n}`,detail:category==="CarKam"&&j===0?"Dash Camera":description,image:photos[j%photos.length]}));
 $("prodGrid").innerHTML=items.map(item=>`<article class="product-item"><img src="${productImageUrl(item.image)}" alt="${item.name}" loading="lazy" decoding="async"><div><h4>${item.source?`<a href="${item.source}" target="_blank" rel="noopener noreferrer">`:""}${item.name}${item.source?"</a>":""}</h4><p>${item.detail}</p></div></article>`).join("");
}
$("tabs").innerHTML=productCategories.map((category,i)=>`<button type="button" data-i="${i}" aria-pressed="false">${category}</button>`).join("");
$("tabs").onclick=e=>{
 const button=e.target.closest("button[data-i]");
 if(button)showCat(Number(button.dataset.i));
};
showCat(0);
$("products").querySelector(".show-all").addEventListener("click",()=>showCat(0));
/* carousel */
let cur=0,timer;const n=3;
$("dots").innerHTML=[...Array(n)].map((_,i)=>`<i data-i="${i}"></i>`).join("");
function go(i){cur=(i+n)%n;$("slides").style.transform=`translateX(-${cur*100}%)`;[...$("dots").children].forEach((d,j)=>d.classList.toggle("on",j===cur))}
function auto(){clearInterval(timer);timer=setInterval(()=>go(cur+1),5000)}
$("prev").onclick=()=>{go(cur-1);auto()};$("next").onclick=()=>{go(cur+1);auto()};
$("dots").onclick=e=>{if(e.target.dataset.i){go(+e.target.dataset.i);auto()}};
go(0);auto();
const revealEls=[...document.querySelectorAll("#contact .contact-item,.nl-signup,.follow,footer .footer-company,footer .fcols>div")];
revealEls.forEach((el,i)=>{el.classList.add("reveal");el.style.transitionDelay=`${(i%4)*100}ms`});
document.documentElement.classList.add("reveal-ready");
if("IntersectionObserver" in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}
 }),{threshold:.12});
 revealEls.forEach(el=>revealObserver.observe(el));
}else revealEls.forEach(el=>el.classList.add("is-visible"));
/* misc */
const nav=$("nav");
const dropdownItems=[...nav.querySelectorAll("li")].filter(item=>item.querySelector(":scope > .drop"));
dropdownItems.forEach((item,index)=>{
 const link=item.querySelector(":scope > a");
 const menu=item.querySelector(":scope > .drop");
 if(!menu.id)menu.id=`nav-submenu-${index}`;
 link.setAttribute("aria-controls",menu.id);
 link.setAttribute("aria-expanded","false");
});
function closeMobileNav(){
 nav.classList.remove("open");
 $("burger").setAttribute("aria-expanded","false");
 dropdownItems.forEach(item=>{
  item.classList.remove("submenu-open");
  item.querySelector(":scope > a").setAttribute("aria-expanded","false");
 });
}
$("burger").onclick=()=>{
 const open=nav.classList.toggle("open");
 $("burger").setAttribute("aria-expanded",open);
 if(!open)closeMobileNav();
};
nav.addEventListener("click",event=>{
 const link=event.target.closest("a");
 if(!link)return;
 const item=link.closest("li");
 if(innerWidth>1100){
  if(link.closest("#megaMenu")){
   if(link.dataset.category!==undefined)showCat(Number(link.dataset.category));
   else if(link.hasAttribute("data-product-all"))showCat(0);
  }else if(link.parentElement===item&&link.getAttribute("href")==="#products"&&item?.querySelector(":scope > .drop")){
   showCat(0);
  }
  return;
 }
 if(link.parentElement===item&&item?.parentElement===nav.querySelector("ul")&&item.querySelector(":scope > .drop")){
  const wasOpen=item.classList.contains("submenu-open");
  if(link.getAttribute("href")==="#products")showCat(0);
  if(wasOpen&&link.getAttribute("href")==="#products"){
   closeMobileNav();
   return;
  }
  event.preventDefault();
  dropdownItems.filter(other=>other!==item).forEach(other=>{
   other.classList.remove("submenu-open");
   other.querySelector(":scope > a").setAttribute("aria-expanded","false");
  });
  item.classList.toggle("submenu-open",!wasOpen);
  link.setAttribute("aria-expanded",!wasOpen);
  return;
 }
 const categoryLink=link.closest("#megaMenu")&&link.dataset.category!==undefined;
 if(categoryLink)showCat(Number(link.dataset.category));
 if(link.hasAttribute("data-product-all"))showCat(0);
 closeMobileNav();
});
const themeToggle=$("themeToggle");
themeToggle.onclick=()=>{
 const dark=document.documentElement.dataset.theme!=="dark";
 document.documentElement.dataset.theme=dark?"dark":"light";
 $("themeIcon").textContent=dark?"☀️":"🌙";
 $("themeLabel").textContent=dark?"Light mode":"Dark mode";
 themeToggle.setAttribute("aria-label",`Switch to ${dark?"light":"dark"} mode`);
 themeToggle.setAttribute("aria-pressed",dark);
};
$("nlForm").onsubmit=e=>{e.preventDefault();$("nlMsg").textContent="Thanks! "+$("nlEmail").value+" is subscribed (demo).";$("nlForm").reset()};
$("gotit").onclick=()=>{$("cookie").style.display="none"};
const tb=$("top");addEventListener("scroll",()=>{tb.style.display=scrollY>400?"block":"none"});
tb.onclick=()=>scrollTo({top:0,behavior:"smooth"});
