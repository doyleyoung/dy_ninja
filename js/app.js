$(document).ready(function () {
  $('a[href^="#"]').click(function (event) {
    var id = $(this).attr("href"),
        offset = 120,
        target = $(id).offset().top - offset;

    $('html, body').animate({
      scrollTop: target
    }, 500);

    event.preventDefault();
  });
});

jQuery(window).scroll(function () {
    var body = $("body");
    if (body.scrollTop() >= 100) {
        // $(".icon-bar > *").addClass("scroll-padding");
        $(".icon-bar > *").animate({padding: "0em"}, 1000, "linear");
    } else {
        //$(".icon-bar > *").removeClass("scroll-padding");
        $(".icon-bar > *").animate({padding: "1.25rem"}, 1000, "linear");
    }
});

$(function () {
  var timelineData = [{"timeline_title":"1981",
      "timeline_content":"The babysitter's oldest son turned on the TV. Then, he turned on a box connected to it and opened an entirely new world.",
      "links":[{"timeline_link":"https://atariage.com/2600/","timeline_link_text":"Atari 2600"}]},
    {"timeline_title":"1982",
      "timeline_content":"Spent a first quarter on a video game instead of a sticky hand. That game got a LOT more quarters.",
      "links":[{"timeline_link":"https://en.wikipedia.org/wiki/Zoo_Keeper_%28video_game%29","timeline_link_text":"Zoo Keeper"}]},
    {"timeline_title":"1984",
      "timeline_content":"Wait, a game with two joysticks? I could definitely spend 6 months worth of allowance on that.",
      "links":[{"timeline_link":"http://www.arcade-museum.com/game_detail.php?game_id=8280","timeline_link_text":"Karate Champ"},{"timeline_link":"http://game-oldies.com/play-online/karate-champ-nintendo-nes#","timeline_link_text":"Play now","timeline_link_icon":"img/buttons2.svg"}]},
    {"timeline_title":"1985",
      "timeline_content":"The first game I played well enough to torture teenagers, one quarter and I could be there an hour or more.",
      "links":[{"timeline_link":"http://www.mariowiki.com/VS._Super_Mario_Bros.","timeline_link_text":"VS. Super Mario Bros."},{"timeline_link":"http://www.letsplaysnes.com/play-vs-super-mario-bros-home-edition-online-nes/","timeline_link_text":"Play now","timeline_link_icon":"img/buttons2.svg"}]},
    {"timeline_title":"1985",
      "timeline_content":"Christmas morning brought a brand new gaming system and with it an undying love for Nintendo.",
      "links":[{"timeline_link":"http://nintendo.wikia.com/wiki/Nintendo_Entertainment_System","timeline_link_text":"NES"}]},
    {"timeline_title":"1986",
      "timeline_content":"The games just keep getting better and better. Too many to name, but two that spring to mind.",
      "links":[{"timeline_link":"http://metroid.wikia.com/wiki/Metroid","timeline_link_text":"Metroid"},{"timeline_link":"http://nintendo8.com/game/395/metroid/","timeline_link_text":"Play now","timeline_link_icon":"img/buttons2.svg"},{"timeline_link":"http://zeldawiki.org/The_Legend_of_Zelda_%28Game%29","timeline_link_text":"The Legend of Zelda"},{"timeline_link":"http://nintendo8.com/game/810/legend_of_zelda/","timeline_link_text":"Play now","timeline_link_icon":"img/buttons2.svg"}]},
    {"timeline_title":"1986",
      "timeline_content":"Mom brought home a computer! It was an Apple II clone and it changed my life.",
      "links":[{"timeline_link":"https://en.wikipedia.org/wiki/Laser_128","timeline_link_text":"Laser 128"}]},
    {"timeline_title":"1987",
      "timeline_content":"The public library just got a whole lot better! They have books with games that you can play just by typing them into your computer, but there's always a typo you have to find and fix.",
      "links":[{"timeline_link":"http://www.atariarchives.org/morebasicgames/","timeline_link_text":"BASIC Computer Games"}]},
    {"timeline_title":"1991",
      "timeline_content":"Hadoken, Shoryuken and Sonic Boom became regular terms in my friends' collective vocabulary.",
      "links":[{"timeline_link":"http://streetfighter.wikia.com/wiki/Street_Fighter_II","timeline_link_text":"Street Fighter II"},{"timeline_link":"http://www.mofunzone.com/games/street_fighter_2_champion_edition.html","timeline_link_text":"Play now","timeline_link_icon":"img/buttons2.svg"}]},
    {"timeline_title":"1992",
      "timeline_content":"My first programming class, a room full of Macs with Pascal and a lab with an internet connection to LANL supercomputers.",
      "links":[{"timeline_link":"https://en.wikipedia.org/wiki/Pascal_%28programming_language%29","timeline_link_text":"Pascal"},{"timeline_link":"https://en.wikipedia.org/wiki/Vi","timeline_link_text":"vi"},{"timeline_link":"https://en.wikipedia.org/wiki/Gopher_%28protocol%29","timeline_link_text":"Gopher"},{"timeline_link":"https://en.wikipedia.org/wiki/Supercomputing_Challenge","timeline_link_text":"Supercomputing Challenge"}]},
    {"timeline_title":"1992",
      "timeline_content":"Found the best use yet for the internet; learning every fatality.",
      "links":[{"timeline_link":"http://mortalkombat.wikia.com/wiki/Mortal_Kombat_%281992_video_game%29","timeline_link_text":"Mortal Kombat"}]},
    {"timeline_title":"1993",
      "timeline_content":"Added a new language and some amazing technical computing to the skill set",
      "links":[{"timeline_link":"https://en.wikipedia.org/wiki/Fortran","timeline_link_text":"Fortran"},{"timeline_link":"http://www.wolfram.com/mathematica","timeline_link_text":"Mathematica"}]},
    {"timeline_title":"1993",
      "timeline_content":"Got hooked on some old school entertainment",
      "links":[{"timeline_link":"https://en.wikipedia.org/wiki/Twilight_Zone_%28pinball%29","timeline_link_text":"Twilight Zone pinball"}]},
    {"timeline_title":"1994",
      "timeline_content":"Got a job at a manufacturing plant, \"helped\" with some circuits. Discovered my brain works much better with digital.",
      "links":[{"timeline_link":"http://www.trademarkia.com/map/ati-74368238.htm","timeline_link_text":"ATI"}]},
    {"timeline_title":"1996",
      "timeline_content":"Entered the University of New Mexico",
      "links":[{"timeline_link":"http://www.cplusplus.com/","timeline_link_text":"C++"}]},
    {"timeline_title":"1996",
      "timeline_content":"My old love is at it again",
      "links":[{"timeline_link":"https://en.wikipedia.org/wiki/Nintendo_64","timeline_link_text":"Nintendo 64"}]},
    {"timeline_title":"1997",
      "timeline_content":"My first taste of functional programming",
      "links":[{"timeline_link":"https://en.wikipedia.org/wiki/Scheme_%28programming_language%29","timeline_link_text":"Scheme"}]}
  ];

  function rightIsFirst(right) {
    return function() {
      var result = "";
      if(right) {
        right = !right;
        result = '<div class="large-7 columns">'
        + '<div class="circle circle-right right"></div>'
        + '</div>'
        + '<div class="large-5 columns path-text right">';
      } else {
        right = !right;
        result = '<div class="large-7 push-5 columns">'
        + '<div class="circle circle-left"></div>'
        + '</div>'
        + '<div class="large-5 pull-7 columns path-text left">';
      }

      return result;
    }
  }

  // Register a helper
  Handlebars.registerHelper('leftThenRight', rightIsFirst(true));

  //Get the HTML from the template in the script tag
  var source = $("#timeline-template").html();

  //Compile the template
  //var template = Handlebars.compile(source);
  //var html = template(timelineData);
  var html = Handlebars.templates.timeline(timelineData);
  $(".timelineContent").append(html);

});
