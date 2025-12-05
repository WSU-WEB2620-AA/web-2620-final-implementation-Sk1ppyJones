// custom js for members page
import $ from "jquery"
/* Template for member entry
    {
    header: ,
    pfp: ,
    name: ,
    role: ,
    bio: ,
    socials: []
    },
*/

const member_list = [
  {
    //Jay
    header: "./images/member_card_img/alloutjay_banner.jpg",
    pfp: "./images/member_card_img/alloutjay_pfp.jpg",
    name: "AlloutJay",
    role: "SupremeLeader",
    bio: "Hey there! I'm AllOutJay, but you can call me Jay. I am a Minecraft Content Creator who primarily makes Minecraft Survival Lets Play content.",
    socials: [
      "https://www.youtube.com/@AllOutJay",
      "https://www.x.com/AllOutJay",
      "https://instagram.com/alloutjay",
      "https://twitch.tv/alloutjay",
    ],
    page: "./members_pages/alloutjay.html",
  },
  {
    //Skunk
    header: "./images/member_card_img/skunk_banner.jpg",
    pfp: "./images/member_card_img/skunk_pfp.jpg",
    name: "BlondSkunk",
    role: "Master Architect",
    bio: "Welcome to the Blondskunk YouTube channel! On this channel, I make videos mostly around the topic of building in Minecraft.",
    socials: [
      "https://www.youtube.com/c/blondskunk",
      "https://www.instagram.com/blondskunk/",
      "https://www.twitch.tv/blondskunk",
    ],
    page: "./members_pages/blondskunk.html",
  },
  {
    //Ash
    header: "./images/member_card_img/ash_banner.jpg",
    pfp: "./images/member_card_img/ash_pfp.jpg",
    name: "Ash's Den",
    role: "AfterLife Member",
    bio: "I aim to tell immersive and fun stories in this wonderful game called Minecraft",
    socials: [
      "https://www.youtube.com/channel/UCTd1a_UZrBjf88GXdPnNtKg",
      "https://www.instagram.com/ashsden/",
      "https://www.twitch.tv/ashsden",
    ],
    page: "./members_pages/ashsden.html",
  },
  {
    //Fungusaurus Rex
    header: "./images/member_card_img/rex_banner.jpg",
    pfp: "./images/member_card_img/rex_pfp.jpg",
    name: "Fungusaurus Rex",
    role: "AfterLife Member",
    bio: "Ready for some awesome Minecraft Builds and adventures? If so then you have come to the right place.",
    socials: ["https://www.youtube.com/@fungusaurus_rex", "https://instagram.com/fungusaurus_rex"],
    page: "./members_pages/fungusaurusrex.html",
  },
  {
    //JustinL
    header: "./images/member_card_img/justin_banner.jpg",
    pfp: "./images/member_card_img/justin_pfp.jpg",
    name: "JustinL",
    role: "AfterLife Member",
    bio: "Welcome! I'm JustinL and I do gaming commentaries. Play a ton of Minecraft! and other games on rare occasions.",
    socials: [
      "https://www.youtube.com/@JustinLYT",
      "https://www.twitter.com/JustinRL94",
      "https://twitch.tv/justinl94",
    ],
    page: "./members_pages/justinl.html",
  },
  {
    //KB
    header: "./images/member_card_img/kb_banner.jpg",
    pfp: "./images/member_card_img/kb_pfp.jpg",
    name: "KB's Sandbox",
    role: "AfterLife Member",
    bio: "Welcome to KB's Sandbox, where I play Minecraft in all it's variations!",
    socials: [
      "https://www.youtube.com/@kbssandbox",
      "https://www.instagram.com/kbssandbox",
      "https://www.twitch.tv/kbssandbox",
    ],
    page: "./members_pages/thisiskb.html",
  },
  {
    //KingZee
    header: "./images/member_card_img/zee_banner.jpg",
    pfp: "./images/member_card_img/zee_pfp.jpg",
    name: "KingZee",
    role: "AfterLife Member",
    bio: "Minecrafter, YouTuber, and most importantly Dad to 4 little humans! :D",
    socials: [
      "https://www.youtube.com/@KingZee",
      "https://twitter.afterlifesmp.com",
      "https://instagram.afterlifesmp.com",
      "https://www.twitch.tv/kingzee",
    ],
    page: "./members_pages/kingzee.html",
  },
  {
    //MineyLo
    header: "./images/member_card_img/miney_banner.jpg",
    pfp: "./images/member_card_img/miney_pfp.jpg",
    name: "MineyLo",
    role: "AfterLife Member",
    bio: "I'm an iPad Minecraft pro, watch me be a Java noob",
    socials: ["https://www.youtube.com/@mineyLO", "https://twitch.tv/mineylo"],
    page: "./members_pages/mineylo.html",
  },
  {
    //PuffingFish HQ
    header: "./images/member_card_img/puff/puff_banner.jpg",
    pfp: "./images/member_card_img/puff/puff_pfp.jpg",
    name: "PuffingFish HQ",
    role: "Master Redstoner",
    bio: "Minecraft player who likes to challenge the typical! Always trying to do stuff in a unique way, hope you enjoy!",
    socials: ["https://www.youtube.com/@PuffingFish"],
    page: "./members_pages/puffingfishhq.html",
  },
  {
    //SquareMario
    header: "./images/member_card_img/mario_banner.jpg",
    pfp: "./images/member_card_img/mario_pfp.jpg",
    name: "SquareMario",
    role: "Lead Community Social Chair Executive Director",
    bio: "Hey there :) I'm a gaming YouTuber that uploads a variety of Minecraft content, but mostly survival and building.",
    socials: [
      "https://www.youtube.com/@SquareMario",
      "https://www.twitter.com/SquareMario",
      "https://instagram.com/squaremario_minecraft",
      "https://twitch.tv/squaremario",
    ],
    page: "./members_pages/squaremario.html",
  },
  {
    //TinkFro
    header: "./images/member_card_img/tinkfro_banner.jpg",
    pfp: "./images/member_card_img/tinkfro_pfp.jpg",
    name: "tinkfro",
    role: "AfterLife Member",
    bio: "I publish great videos about this wonderful game we have all come to love",
    socials: ["https://www.youtube.com/@tinkfro"],
    page: "./members_pages/tinkfro.html",
  },
  {
    //Uni
    header: "./images/member_card_img/Uni_banner.jpg",
    pfp: "./images/member_card_img/uni_pfp.jpg",
    name: "Uni",
    role: "AfterLife Member",
    bio: "Timelapses, Let's Plays, Streams, and Rube Goldberg Machines! That and much on here on Uni's Minecraft Channel",
    socials: ["https://www.youtube.com/@Uni_"],
    page: "./members_pages/unicraftinguy.html",
  },
  {
    //ztVypr
    header: "./images/member_card_img/vypr_banner.jpg",
    pfp: "./images/member_card_img/vypr_pfp.jpg",
    name: "ztVypr",
    role: "AfterLife Member",
    bio: "Working hard to survive in Hardcore Minecraft (and having fun along the way)!",
    socials: ["https://www.youtube.com/@ztVypr", "https://instagram.com/ztvypr"],
    page: "./members_pages/ztvypr.html",
  },
  {
    //KnightFox
    header: "./images/member_card_img/knightfox_banner.jpg",
    pfp: "./images/member_card_img/knightfox_pfp.jpg",
    name: "KnightFox",
    role: "AfterLife Member",
    bio: "Welcome to the KnightFox Channel! You'll find Minecraft Survival content with a bunch of building and creativity!",
    socials: ["https://www.youtube.com/@KnightFox_", "https://x.com/KnightFox_", "https://www.twitch.tv/knightfox_"],
    page: "./members_pages/knightfox.html",
  },
  {
    //Hughbone
    header: "./images/member_card_img/hughbone_banner.jpg",
    pfp: "./images/member_card_img/hughbone_pfp.jpg",
    name: "Hughbone",
    role: "AfterLife Member",
    bio: "video",
    socials: ["https://www.youtube.com/@hughbone", "https://x.com/HughBone3", "https://www.twitch.tv/hughbone_"],
    page: "./members_pages/hughbone.html",
  },
  {
    //Kashmuney
    header: "./images/member_card_img/Kashmuney_banner.jpg",
    pfp: "./images/member_card_img/Kashmuney_pfp.jpg",
    name: "Kashmuney",
    role: "AfterLife Member",
    bio: "Hi everyone! My name is KashMuney but feel free to call me Kash! I am a Minecraft (Java Edition) YouTuber who posts building tips, build tutorials, and survival videos on the AfterLife SMP. Come hang out!",
    socials: ["https://www.youtube.com/@Kash_Muney", "https://www.twitch.tv/kashmuney3"],
    page: "./members_pages/kashmuney.html",
  },
  {
    //Kriomon
    header: "./images/member_card_img/Kriomon_banner.jpg",
    pfp: "./images/member_card_img/Kriomon_pfp.jpg",
    name: "Kriomon",
    role: "AfterLife Member",
    bio: "Yo, my name is Kriomon or Krio for short. I’m a Minecraft builder who enjoys making content on all ends of the game. Consider subscribing if you enjoy my videos and streams!",
    socials: ["https://www.youtube.com/@kriobuilds/featured"],
    page: "./members_pages/kriomon.html",
  },
  {
    //Queeni3_
    header: "./images/member_card_img/queenie_banner.jpg",
    pfp: "./images/member_card_img/queenie_pfp.jpg",
    name: "Queeni3_",
    role: "AfterLife Member",
    bio: "Hi :) I'm Queeni and I make silly Minecraft videos to make you smile",
    socials: ["https://www.youtube.com/@Queeni3_/featured"],
    page: "./members_pages/queenie.html",
  },
]

$(document).ready(function () {
  for (let i = 0; i < member_list.length; i++) {
    // Create The Main Card Content
    var col_div = document.createElement("div")
    $(col_div).addClass("col mb-3")

    var card_div = document.createElement("div")
    $(card_div).addClass("card h-100")

    var head_div = document.createElement("div")
    var head_img = '<img src= "' + member_list[i].header + '" alt="Cover" class="card-img-top">'

    var info_div = document.createElement("div")
    $(info_div).addClass("card-body text-center")
    var info_con =
      "<img src= " +
      member_list[i].pfp +
      ' style="width:100px;margin-top:-65px" alt="User" class="img-fluid img-thumbnail rounded-circle border-0"> <h5 class="card-title"></h5> ' +
      member_list[i].name +
      ' </h5> <p class="text-secondary mb-1"> ' +
      member_list[i].role +
      ' </p> <p class="text-muted font-size-sm"> ' +
      member_list[i].bio +
      ' </p> <button type="button" class="btn btn-outline-primary border-3 px-4"><a href="' +
      member_list[i].page +
      '" class="nav-link px-3 active">More Info</a></button>'

    head_div.innerHTML = head_img
    info_div.innerHTML = info_con

    card_div.append(head_div)
    card_div.append(info_div)

    // Create The Footer
    var footer_div = document.createElement("div")
    $(footer_div).addClass("container card-footer text-center m-auto d-flex flex-row justify-content-center")

    for (var j = 0; j < member_list[i].socials.length; j++) {
      if (member_list[i].socials[j].includes("youtube")) {
        var social_div = document.createElement("div")
        $(social_div).addClass("mx-1")
        var current_social =
          '<a class="bio-youtube p-1" href= ' +
          member_list[i].socials[j] +
          ' target="_blank"><svg class="bi" width="24" height="24"> <use xlink:href="#youtube" /> </svg></a>'

        social_div.innerHTML = current_social
        footer_div.append(social_div)
      } else if (member_list[i].socials[j].includes(".x.")) {
        var social_div = document.createElement("div")
        $(social_div).addClass("mx-1")
        var current_social =
          '<a class="p-1" href= ' +
          member_list[i].socials[j] +
          ' target="_blank"><svg class="bi" width="24" height="24"> <use xlink:href="#twitter" /> </svg></a>'

        social_div.innerHTML = current_social
        footer_div.append(social_div)
      } else if (member_list[i].socials[j].includes("instagram")) {
        var social_div = document.createElement("div")
        $(social_div).addClass("mx-1")
        var current_social =
          '<a class="bio-instagram p-1" href= ' +
          member_list[i].socials[j] +
          ' target="_blank"><svg class="bi" width="24" height="24"> <use xlink:href="#instagram" /> </svg></a>'

        social_div.innerHTML = current_social
        footer_div.append(social_div)
      } else if (member_list[i].socials[j].includes("twitch")) {
        var social_div = document.createElement("div")
        $(social_div).addClass("mx-1")
        var current_social =
          '<a class="bio-twitch p-1" href= ' +
          member_list[i].socials[j] +
          ' target="_blank"><svg class="bi" width="24" height="24"> <use xlink:href="#twitch" /> </svg></a>'

        social_div.innerHTML = current_social
        footer_div.append(social_div)
      }
    }

    card_div.append(footer_div)

    // Append Elements
    col_div.append(card_div)

    $("#member-cards").append(col_div)
  }
})
