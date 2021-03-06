$(function () {
    "use strict";

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $(".icon-bar > *").stop().animate({padding: "0em"}, 250, "linear");
        } else {
            $(".icon-bar > *").stop().animate({padding: "1.25rem"}, 250, "linear");
        }
    });

    $("a[href^=\"#\"]").click(function (event) {
        var id = $(this).attr("href"),
            offset = 120,
            target = $(id).offset().top - offset;

        $("html, body").animate({
            scrollTop: target
        }, 500);

        event.preventDefault();
    });

    // time line content
    var timelineData = [{
        "timeline_title": "1981",
        "timeline_content": "The babysitter's oldest son turned on the TV. Then, he turned on a box connected to it and opened an entirely new world.",
        "links": [{
            "timeline_link": "https://atariage.com/2600/",
            "timeline_link_text": "Atari 2600"
        }, {
            "timeline_link": "http://www.virtualatari.org/",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1981",
        "timeline_content": "The computer that taught me to spell and speak.",
        "links": [{
            "timeline_link": "http://www.99er.net/spkspell.html",
            "timeline_link_text": "Speak & Spell"
        }, {
            "timeline_link": "http://www.speaknspell.co.uk/speaknspell.html",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1982",
        "timeline_content": "Spent a quarter on a video game instead of a sticky hand. That game got a LOT more quarters.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Zoo_Keeper_%28video_game%29",
            "timeline_link_text": "Zoo Keeper"
        }]
    }, {
        "timeline_title": "1984",
        "timeline_content": "Wait, a game with two joysticks? I could definitely spend 6 months worth of allowance on that.",
        "links": [{
            "timeline_link": "http://www.arcade-museum.com/game_detail.php?game_id=8280",
            "timeline_link_text": "Karate Champ"
        }, {
            "timeline_link": "http://game-oldies.com/play-online/karate-champ-nintendo-nes#",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1985",
        "timeline_content": "The first game I played well enough to torture teenagers, one quarter and I could be there an hour or more.",
        "links": [{
            "timeline_link": "http://www.mariowiki.com/VS._Super_Mario_Bros.",
            "timeline_link_text": "VS. Super Mario Bros."
        }, {
            "timeline_link": "http://www.letsplaysnes.com/play-vs-super-mario-bros-home-edition-online-nes/",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1985",
        "timeline_content": "Christmas morning brought a brand new gaming system and with it an undying love for Nintendo.",
        "links": [{
            "timeline_link": "http://nintendo.wikia.com/wiki/Nintendo_Entertainment_System",
            "timeline_link_text": "NES"
        }, {
            "timeline_link": "http://www.nesemu.com/",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1986",
        "timeline_content": "The games just keep getting better and better. Too many to name, but two that spring to mind.",
        "links": [{
            "timeline_link": "http://metroid.wikia.com/wiki/Metroid",
            "timeline_link_text": "Metroid"
        }, {
            "timeline_link": "http://www.nesemu.com/game/metroid",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }, {
            "timeline_link": "http://zeldawiki.org/The_Legend_of_Zelda_%28Game%29",
            "timeline_link_text": "The Legend of Zelda"
        }, {
            "timeline_link": "http://www.nesemu.com/game/zelda",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1986",
        "timeline_content": "Mom brought home a computer! It was an Apple II clone and it changed my life.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Laser_128",
            "timeline_link_text": "Laser 128"
        }]
    }, {
        "timeline_title": "1987",
        "timeline_content": "The public library just got a whole lot better! They have books with games that you can play just by typing them into your computer, but there's always a typo you have to find and fix.",
        "links": [{
            "timeline_link": "http://www.atariarchives.org/morebasicgames/",
            "timeline_link_text": "BASIC Computer Games"
        }]
    }, {
        "timeline_title": "1991",
        "timeline_content": "Hadoken, Shoryuken and Sonic Boom became regular terms in my friends' collective vocabulary.",
        "links": [{
            "timeline_link": "http://streetfighter.wikia.com/wiki/Street_Fighter_II",
            "timeline_link_text": "Street Fighter II"
        }, {
            "timeline_link": "http://www.mofunzone.com/games/street_fighter_2_champion_edition.html",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1992",
        "timeline_content": "My first programming class, a room full of Macs with Pascal and a lab with an internet connection to LANL supercomputers.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Pascal_%28programming_language%29",
            "timeline_link_text": "Pascal"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/Vi",
            "timeline_link_text": "vi"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/Gopher_%28protocol%29",
            "timeline_link_text": "Gopher"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/Supercomputing_Challenge",
            "timeline_link_text": "Supercomputing Challenge"
        }]
    }, {
        "timeline_title": "1992",
        "timeline_content": "Found the best use yet for the internet; learning every fatality.",
        "links": [{
            "timeline_link": "http://mortalkombat.wikia.com/wiki/Mortal_Kombat_%281992_video_game%29",
            "timeline_link_text": "Mortal Kombat"
        }]
    }, {
        "timeline_title": "1993",
        "timeline_content": "More high school programming and I added a new language and some amazing technical computing to the skill set.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Fortran",
            "timeline_link_text": "Fortran"
        }, {
            "timeline_link": "http://www.wolfram.com/mathematica",
            "timeline_link_text": "Mathematica"
        }]
    }, {
        "timeline_title": "1993",
        "timeline_content": "Got hooked on some old school entertainment.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Twilight_Zone_%28pinball%29",
            "timeline_link_text": "Twilight Zone pinball"
        }]
    }, {
        "timeline_title": "1994",
        "timeline_content": "Got a job at a manufacturing plant, \"helped\" with some circuits. Discovered my brain works much better with digital.",
        "links": [{
            "timeline_link": "http://www.trademarkia.com/map/ati-74368238.htm",
            "timeline_link_text": "ATI"
        }]
    }, {
        "timeline_title": "1996",
        "timeline_content": "Started college at the University of New Mexico, was reminded my mind was made for bytes.",
        "links": [{
            "timeline_link": "http://www.cplusplus.com/",
            "timeline_link_text": "C++"
        }, {
            "timeline_link": "examples/cs151_first_assignment.C",
            "timeline_link_text": "Oldest code I can find"
        }]
    }, {
        "timeline_title": "1996",
        "timeline_content": "My old love is at it again, and this time in 3D.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Nintendo_64",
            "timeline_link_text": "Nintendo 64"
        }]
    }, {
        "timeline_title": "1997",
        "timeline_content": "Nothing like functional programming to make you realize you really don't know as much as you think you do.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Scheme_%28programming_language%29",
            "timeline_link_text": "Scheme"
        }]
    }, {
        "timeline_title": "1997",
        "timeline_content": "Without a doubt the best game based on a movie ever.",
        "links": [{
            "timeline_link": "http://goldeneye.wikia.com/wiki/Goldeneye_007_%28Nintendo_64%29",
            "timeline_link_text": "Goldeneye 007"
        }, {
            "timeline_link": "http://gameswebfree.com/free-play-online/993/goldeneye-64.html#.VHErnNYSSgg",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "1999",
        "timeline_content": "First computer I bought myself (with student loans).",
        links: [{
            "timeline_link": "http://computer-specifications.com/specifications/dell-dimensionxpst450-specs.html",
            "timeline_link_text": "Dell Dimension XPS T450"
        }]
    }, {
        "timeline_title": "1999",
        "timeline_content": "Clusters are hot, parallel code is amazing. Undergraduate research in the nicest office I ever had.",
        "links": [{
            "timeline_link": "http://www.open-mpi.org/",
            "timeline_link_text": "MPI"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/POSIX_Threads",
            "timeline_link_text": "Pthreads"
        }]
    }, {
        "timeline_title": "1999",
        "timeline_content": "One of my best work moments was when I convinced my boss to let me set up a game server, we still play this game.",
        "links": [{
            "timeline_link": "http://quake.wikia.com/wiki/Quake_3_Arena",
            "timeline_link_text": "Quake 3 Arena"
        }, {
            "timeline_link": "http://www.quakelive.com/#!home",
            "timeline_link_text": "Play now",
            "timeline_link_icon": "img/buttons2.svg"
        }]
    }, {
        "timeline_title": "2000",
        "timeline_content": "What could be better than one class with three new languages?",
        "links": [{
            "timeline_link": "https://www.java.com/en/",
            "timeline_link_text": "Java"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/ML_%28programming_language%29",
            "timeline_link_text": "ML"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/Prolog",
            "timeline_link_text": "Prolog"
        }]
    }, {
        "timeline_title": "2000",
        "timeline_content": "For a senior project I collaborated on my first real web app and found my favorite language.",
        "links": [{
            "timeline_link": "https://www.perl.org/",
            "timeline_link_text": "Perl"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/Concurrent_Versions_System",
            "timeline_link_text": "CVS"
        }]
    }, {
        "timeline_title": "2000",
        "timeline_content": "Nothing better than a new gig with an education built in. Grad student and system administrator with supercomputers everywhere!",
        "links": [{
            "timeline_link": "http://www.utsi.edu/",
            "timeline_link_text": "UTSI"
        }, {
            "timeline_link": "http://www.arnold.af.mil/",
            "timeline_link_text": "Arnold Air Force Base"
        }, {
            "timeline_link": "http://www.sgi.com/",
            "timeline_link_text": "SGI"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/Sun_Microsystems",
            "timeline_link_text": "Sun Microsystems"
        }, {
            "timeline_link": "http://www8.hp.com/us/en/home.html",
            "timeline_link_text": "HP"
        }]
    }, {
        "timeline_title": "2001",
        "timeline_content": "The only time I bought a machine at midnight after waiting in line.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/GameCube",
            "timeline_link_text": "GameCube"
        }]
    }, {
        "timeline_title": "2001",
        "timeline_content": "A very fun class and I can still show off the results.",
        "links": [{
            "timeline_link": "http://www.blender.org/",
            "timeline_link_text": "blender"
        }, {
            "timeline_link": "https://www.python.org/",
            "timeline_link_text": "python"
        }, {
            "timeline_video_link_mp4": "examples/complete.mp4",
            "timeline_video_link_ogg": "examples/complete.ogg",
            "timeline_link_text": "Final project"
        }]
    }, {
        "timeline_title": "2002",
        "timeline_content": "Best first-person shooter ever.",
        "links": [{
            "timeline_link": "http://liandri.beyondunreal.com/Unreal_Tournament_2003",
            "timeline_link_text": "Unreal Tournament 2003"
        }]
    }, {
        "timeline_title": "2003",
        "timeline_content": "Jumped at the opportunity to write Perl all the time.",
        "links": [{
            "timeline_link": "http://www3.hilton.com/en/index.html",
            "timeline_link_text": "Hilton"
        }]
    }, {
        "timeline_title": "2005",
        "timeline_content": "Had a great time playing the pinnacle of zombie survival.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Resident_Evil_4",
            "timeline_link_text": "Resident Evil 4"
        }]
    }, {
        "timeline_title": "2006",
        "timeline_content": "Sore arm from virtual sports and scared dogs running for cover.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Wii",
            "timeline_link_text": "Wii"
        }]
    }, {
        "timeline_title": "2007",
        "timeline_content": "Spent a lot of hours chasing golden guns.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Call_of_Duty_4:_Modern_Warfare",
            "timeline_link_text": "Call of Duty 4: Modern Warfare"
        }]
    }, {
        "timeline_title": "2008",
        "timeline_content": "Played this game from beginning to end five times in five different ways.",
        "links": [{
            "timeline_link": "https://en.wikipedia.org/wiki/Fallout_3",
            "timeline_link_text": "Fallout 3"
        }]
    }, {
        "timeline_title": "2010",
        "timeline_content": "Wrote apps on everything I could get my hands on.",
        "links": [{
            "timeline_link": "http://www.capstonecorp.com/",
            "timeline_link_text": "Capstone"
        }, {
            "timeline_link": "https://android.com/",
            "timeline_link_text": "Android"
        }, {
            "timeline_link": "https://www.apple.com/ios/",
            "timeline_link_text": "iOS"
        }, {
            "timeline_link": "https://play.google.com/store/apps/details?id=mil.army.us.MobileCatalog",
            "timeline_link_text": "One that saw the light of day, please fix the server"
        }]
    }, {
        "timeline_title": "2011",
        "timeline_content": "Had and idea and released my first personal app after a day's work.",
        "links": [{
            "timeline_link": "https://play.google.com/store/apps/details?id=mobi.ritf.RightIntheFace_Ad&feature=search_result",
            "timeline_link_text": "Right In The Face"
        }, {
            "timeline_link": "http://ritf.mobi/",
            "timeline_link_text": "Associated website"
        }]
    }, {
        "timeline_title": "2012",
        "timeline_content": "My wife needed a calendar math app, it turned into a fun long term project.",
        "links": [{
            "timeline_link": "https://play.google.com/store/apps/details?id=mobi.daytoday.DayToDay",
            "timeline_link_text": "DayToDay Android"
        }, {
            "timeline_link": "https://github.com/doyleyoung/AndroidDayToDay",
            "timeline_link_text": "Android source code"
        }, {
            "timeline_link": "https://itunes.apple.com/us/app/daytoday/id596623324?mt=8",
            "timeline_link_text": "DayToDay iOS"
        }, {
            "timeline_link": "https://github.com/doyleyoung/IosDayToDay",
            "timeline_link_text": "iOS source code"
        }, {
            "timeline_link": "http://daytoday.mobi/",
            "timeline_link_text": "Associated website"
        }]
    }, {
        "timeline_title": "2012",
        "timeline_content": "Caught the testing religion while writing web apps.",
        "links": [{
            "timeline_link": "http://www.dollartreeinfo.com/",
            "timeline_link_text": "Dollar Tree"
        }, {
            "timeline_link": "https://en.wikipedia.org/wiki/Test-driven_development",
            "timeline_link_text": "TDD"
        }, {
            "timeline_link": "http://junit.org/",
            "timeline_link_text": "JUnit"
        }, {
            "timeline_link": "http://www.seleniumhq.org/",
            "timeline_link_text": "Selenium"
        }, {
            "timeline_link": "https://jasmine.github.io/",
            "timeline_link_text": "Jasmine"
        }, {
            "timeline_link": "https://maven.apache.org/",
            "timeline_link_text": "Maven"
        }]
    }, {
        "timeline_title": "2013",
        "timeline_content": "Needed a proof of concept for a web service, yesterday. Got it done using one of the best web frameworks available.",
        "links": [{
            "timeline_link": "http://mojolicio.us/",
            "timeline_link_text": "mojolicious"
        }]
    }, {
        "timeline_title": "2013",
        "timeline_content": "After years of thinking I should, I finally started my own blog.",
        "links": [{
            "timeline_link": "https://ghost.org/",
            "timeline_link_text": "ghost"
        }, {
            "timeline_link": "https://www.doyleyoung.net/",
            "timeline_link_text": "My blog"
        }]
    }, {
        "timeline_title": "2014",
        "timeline_content": "Resurrected the Quake 3 server, this time on a machine the size of a pack of cards.",
        "links": [{
            "timeline_link": "http://beagleboard.org/BLACK",
            "timeline_link_text": "BeagleBone Black"
        }, {
            "timeline_link": "http://ioquake3.org/",
            "timeline_link_text": "ioquake3"
        }]
    },];

    // initialize: expand handlebars html and append to time line, setup long center time line line
    (function () {
        var rightFirst = function (right) {
            return function () {
                var result = "";
                if (right) {
                    right = !right;
                    result = '<div class="large-7 columns">' +
                    '<div class="circle circle-right right"></div>' +
                    '</div>' +
                    '<div class="large-5 columns path-text right">';
                } else {
                    right = !right;
                    result = '<div class="large-7 push-5 columns">' +
                    '<div class="circle circle-left"></div>' +
                    '</div>' +
                    '<div class="large-5 pull-7 columns path-text left">';
                }

                return result;
            };
        };

        Handlebars.registerHelper("leftThenRight", rightFirst(true));
        $(".timelineContent").append(Handlebars.templates.timeline(timelineData));

        var circles = $(".timelineContent .circle");
        var firstCircleTop = circles.first().offset().top;
        var lastCircleTop = circles.last().offset().top;
        $(".line").css({
            "top": firstCircleTop + "px",
            "height": lastCircleTop - firstCircleTop + "px"
        });
    }());

    $("a.final-video").click(function (event) {
        var embeddedVideo = $("div.embedded-video"),
            videoHeight = parseInt(embeddedVideo.css("height"), 10),
            lineHeight = parseInt($(".line").css("height"), 10);

        if (embeddedVideo.is(":visible")) {
            embeddedVideo.hide("slow");
            $(".line").css("height", lineHeight - videoHeight + "px");
        } else {
            embeddedVideo.show("slow");
            $(".line").css("height", lineHeight + videoHeight + "px");
        }
        event.preventDefault();
    });

    // Contra!
    /*jshint multistr: true */
    Mousetrap.bind('up up down down left right left right b a enter', function () {
        // from http://lea.verou.me/css3patterns/#
        var backgrounds = [{
            background: "linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\
        linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\
        linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\
        linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\
        linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\
        linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)",
            "background-color": "#131313",
            "background-size": "20px 20px"
        }, {
            background: "radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0,\
        radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0,\
        radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px,\
        radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px,\
        radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%),\
        radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%),\
        radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px,\
        radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px",
            "background-color": "#63773F",
            "background-size": "100px 100px"
        }, {
            "background-color": "#def",
            "background-image": "radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%),\
        radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%)",
            "background-size": "80px 80px",
            "background-position": "0 0, 40px 40px"
        }];

        var rand = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        $('body').css(rand);
        $('#home, #timeline-header, div.row.path-item, #made_with').css({background: "rgba(255,255,255,0.85)"});
    });
});
