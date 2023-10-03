
// https://docs.google.com/spreadsheets/d/1DxNYOqL5_GBEHLDIVNmYLdqnZqpYOkvUFSBY5fkTOGA/edit#gid=488019369
var questionsPool = [
  {
    "q": "Advait",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-nsXz9dH/0/086d2cad/M/Advait-Redkar-M.jpg"
  },
  {
    "q": "Alex G",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-F2jSsMF/0/751ef0ad/M/alex-Guerrero-cropped-M.jpg"
  },
  {
    "q": "Alex T",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Xb9r6pZ/0/e186d8a1/M/Alex%20Toth%20Headshot-cropped-M.jpg"
  },
  {
    "q": "Alyssa",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Lf3qQhD/0/cb81f87b/M/Alyssa%20S-M.jpg"
  },
  {
    "q": "Andrea",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-VhxmN42/0/62c666be/S/andrea-S.jpg"
  },
  {
    "q": "Andy",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-GJCSQq6/1/1251000c/M/Andy-C-M.jpg"
  },
  {
    "q": "Angie",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-BKWVKkR/1/3ab6e1de/M/angie-M.jpg"
  },
  {
    "q": "Anna",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-tVGFbF7/1/51c2efd2/S/Anna-S.jpg"
  },
  {
    "q": "Anthony",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-5vQfgfW/1/3a7a0cb9/M/anthony-M.jpg"
  },
  {
    "q": "Barry",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-8dtTS9M/1/fb4264b0/M/barry-M.jpg"
  },
  {
    "q": "Bhagat",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-jZnp4hz/0/51800325/M/Bhagatk-M.jpg"
  },
  {
    "q": "Bharani",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Nx9MgRv/0/75dbf654/M/Bharani.Machineni-cropped-M.jpg"
  },
  {
    "q": "Brandi",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-7SpckTt/0/4d4c81c7/M/Brandi%20K-M.jpg"
  },
  {
    "q": "Brandon S",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-FTsS6WB/0/266bcab8/M/brandons.jpg-M.jpg"
  },
  {
    "q": "Brendan B",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-KmdzFRX/0/7f7d547e/M/Brendan%20Burkett-M.jpg"
  },
  {
    "q": "Brian",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-mrFXP3q/0/6371ced4/M/samson.2022.03.cropped-M.jpg"
  },
  {
    "q": "Carl",
    "a": "https://photos.smugmug.com/Portraits/Oct-2019-Originals/n-MQSHRf/Originals-1/i-6xtZSFM/0/22ec41a4/5K/carl-5K.jpg"
  },
  {
    "q": "Caroline",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-4jG2zWM/0/d7c5bfef/M/Caroline%20F-M.jpg"
  },
  {
    "q": "Charlie",
    "a": "https://photos.smugmug.com/Portraits/Oct-2019-Originals/n-MQSHRf/Originals-1/i-cf7ZSkw/0/6f9eb51a/XL/charlie-XL.jpg"
  },
  {
    "q": "Chris A",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-SJQVNgh/1/d47bfe17/M/Chris-A-M.jpg"
  },
  {
    "q": "Chris B",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-LVdB4ww/1/e1dd7e90/M/Chris-B1-M.jpg"
  },
  {
    "q": "Chris D",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-dG2mdhJ/0/395ae8aa/M/Chris%20D-M.jpg"
  },
  {
    "q": "Chris J",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-zvWzrhR/0/f79fdcff/M/Chris%20Jackson-cropped-M.jpg"
  },
  {
    "q": "Clay",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-JrkNhjH/0/c30f6342/M/clay-miller-cropped-M.jpg"
  },
  {
    "q": "David Mc",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-WcTSX7K/0/17f2b036/M/David%20M%20%282%29-M.jpg"
  },
  {
    "q": "David P",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-bXVbwMT/0/35538084/M/DavidPrinceCropped-M.jpg"
  },
  {
    "q": "Denise",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/Archived/n-J5L7Dr/i-Cf6w3f5/0/e1b3d013/XL/i-Cf6w3f5-XL.jpg"
  },
  {
    "q": "Elena",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-zFs7LfM/0/582be212/M/Elena-M.jpg"
  },
  {
    "q": "Erin",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-35rvfmZ/0/6c570995/M/erin-r-20220830-cropped-M.jpg"
  },
  {
    "q": "Greg",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-vxNHSDG/0/76ab0b3a/M/Greg-Lowery-M.jpg"
  },
  {
    "q": "Harshana",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Wh66hcf/0/25d3ad90/M/HarshanaP-M.jpg"
  },
  {
    "q": "Jamie",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-j4xVBB3/0/b6e3045f/M/Jamie.2022-M.jpg"
  },
  {
    "q": "Jasmeet",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-CZx5c5f/0/d87001a2/M/jasmeet-cropped-M.jpg"
  },
  {
    "q": "Jennifer",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-TGqd55h/0/a65618cc/M/jennifer-darst.cropped-M.jpg"
  },
  {
    "q": "Jessica",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-5cnR59X/0/68fca0af/M/Jessica-M.jpg"
  },
  {
    "q": "Jim",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-qhBKqZM/0/8e51969f/M/Jim%20-M.jpg"
  },
  {
    "q": "Kelly",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-sf6KHDr/0/d94eb266/M/kellyd.2022.10.05.cropped-M.jpg"
  },
  {
    "q": "Kelsey",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-H8LZ5GW/0/d88c822f/M/kelsey%20w-cropped-M.jpg"
  },
  {
    "q": "Laura",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-5zMtT77/0/51f4f006/M/laura%20b-M.png"
  },
  {
    "q": "Leslie",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-KT9ZC9S/0/d7101ba2/M/Leslie-M.jpg"
  },
  {
    "q": "Lomax",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-ws7MwFm/1/648d7a2c/S/lomax-S.jpg"
  },
  {
    "q": "Lynn",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-rGspDKn/1/369b3bee/S/LynnB-S.jpg"
  },
  {
    "q": "Madeleine",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-2KSc7cb/0/1642d5d2/M/MadelineGreen-cropped-M.jpg"
  },
  {
    "q": "Mark",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-jmqHJGW/0/63dfa686/M/Mark%20Cotterman%20Photo-cropped-M.jpg"
  },
  {
    "q": "Markku",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-sRCknFb/1/b53cbd75/S/MarkkuK-300x300-S.jpg"
  },
  {
    "q": "Matt B",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-6QcPKBZ/0/13e123fd/M/Matt-M.jpg"
  },
  {
    "q": "Matt D",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-6VGr7jk/0/10035112/M/Matt%20D-M.jpg"
  },
  {
    "q": "Michael K",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-NSdb54W/0/b28142da/M/MichaelK.2023-cropped-M.jpg"
  },
  {
    "q": "Michael R",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-QkpXc4Q/0/ce46104e/M/mike-roberts-2023-crppped-M.jpg"
  },
  {
    "q": "Miranda",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-tKxkqrS/0/df57f62b/M/Miranda-Cocca-M.jpg"
  },
  {
    "q": "Nadide",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-QzGsqfR/0/1b9103d7/M/Nadide2-M.jpg"
  },
  {
    "q": "Olga",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-HNsSQ9Q/1/e337e87a/M/OlgaK-M.jpg"
  },
  {
    "q": "Patrick",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-L84kMWK/0/b906eecb/M/Patrick%20Schirmer-cropped-M.jpg"
  },
  {
    "q": "Phil Lachman",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-xw8nf7z/0/2e2377f8/M/Phil2-M.jpg"
  },
  {
    "q": "Phil Lipschutz",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-thx2nrM/0/d786d1ed/M/Phil%20LipschutzCropped-M.jpg"
  },
  {
    "q": "Ryan P",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-SfqWN86/0/bd59fa3d/M/Ryan%20P-M.jpg"
  },
  {
    "q": "Ryann H",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-5DND2Dp/0/3f820c0c/M/Ryann.Hippen-cropped-M.jpg"
  },
  {
    "q": "Sandeep",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Cxc4Vgh/1/a8c00982/S/SandeepB-300x300-S.jpg"
  },
  {
    "q": "Sarah",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-7RcRzwX/1/fc6ef640/S/SarahW-300x300-S.jpg"
  },
  {
    "q": "Scott",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-2n85Vv4/0/fb14c514/M/Scott-M.jpg"
  },
  {
    "q": "Sean",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-7DCFfDH/1/bad834dd/M/sean%20whelan-M.jpg"
  },
  {
    "q": "Shannon",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-p2X6DZx/1/fcb93181/M/shannon-M.jpg"
  },
  {
    "q": "Sharathbabu",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-xScFt5J/0/f1aef995/M/Sharath-M.jpg"
  },
  {
    "q": "Sheree",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-TxKgTH2/0/ed8a1293/M/Sheree%20N-M.jpg"
  },
  {
    "q": "Special K",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-JrzZB2v/1/6d15f240/M/ken-M.jpg"
  },
  {
    "q": "Talant",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Cf9gdTf/0/beaca8b5/S/Talant%20Kubanychev-S.png"
  },
  {
    "q": "Tim A",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-xP5hnb9/1/f0566bd6/S/Tim%20Atkinson-S.jpg"
  },
  {
    "q": "Tim K",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Lf9gG8N/1/f895ddb7/M/timk-M.jpg"
  },
  {
    "q": "Tony G",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/Archived/n-J5L7Dr/i-fHSb9xS/0/b7261137/XL/i-fHSb9xS-XL.jpg"
  },
  {
    "q": "Tony M",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Qd2L7nN/0/7e2a787d/M/tony%20m-M.png"
  },
  {
    "q": "Viktoria",
    "a": "https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-rcb52bH/2/6bc1e72c/M/ViktoriaK.2020-M.jpg"
  }
];
var questionTemplate = "<div class='qNa'><input type='text' name='q' value='{q}' dir='auto' /><input type='text' name='a' value='{a}' dir='auto' /> <i class='delete' title='delete'>X</i></div>";

function getCard() {
    var card = {};

    var squares = [];
    card.positions = [];
    for (var i = 0; i < 25; i++) {
        var num = getRandomPos();
        num = randomIntFromInterval(0, questionsPool.length - 1);
        while (card[num] !== undefined) {
            num = getRandomPos();
            num = randomIntFromInterval(0, questionsPool.length - 1);
        }
        card[num] = questionsPool[num]
        card.positions.push(i);
        var square = {};
        square.img = questionsPool[num].a;
        square.fname = questionsPool[num].q;
        square.sortOrder = randomIntFromInterval(0, 9999);
        squares.push(square);
    }
    card.positions = card.positions.sort().join();
    return squares;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomPos() {
    return Math.round(Math.random() * 100 % (questionsPool.length - 1))
}

function getCards(numOfCards) {
    var cards = {};
    var card = getCard();
    cards[0] = card;
    // for (var i = 0; i < numOfCards; i++) {
    //     var card = getCard();
    //     while (cards[card.positions]) {
    //         card = getCard();
    //     }
    //     cards[card.positions] = card;
    // }
    return cards;
}

function fact(num) {
    if (num === 0) return 1;
    return num * fact(num - 1);
}

function nOverK(n, k) {
    return fact(n) / (fact(k) * fact(n - k));
}

function renderCards(cards) {
    var html = "";
    for (var key in cards) {
        if (cards.hasOwnProperty(key)) {
            //  console.log("cards[key]",cards[key])
            html += "<div class='card'>" + renderCard(cards[key]) + "</div>"
        }
    }
    return html;
}

function renderCard(card) {
    var html = "";
    for (var key in card) {
        if (key !== "positions" && card.hasOwnProperty(key)) {
            if (card[key].img.indexOf("http") === 0) {
                html += "<div class='cardItem image-container' style='background-image: url(" + card[key].img + ")'><span>" + card[key].fname + "</span></div>";
                // html += "<span class='cardItem' dir='auto' style='background-repeat:no-repeat;background-position: center center;background-size:contain;background-image:url(" + card[key].img + ");'>&nbsp;</span>";
            }
            else {
                html += "<span class='cardItem' dir='auto' >" + card[key].img + "</span>";
            }

        }
    }
    return html;
}

function initQuestionsPool() {
    var questionsHtml = ""; // $("#questions");
    var savedQuestions = localStorage.getItem("questionsPool");
    if (savedQuestions) {
        //questionsPool = JSON.parse(savedQuestions);
    }
    for (var i = 0, len = questionsPool.length; i < len; i++) {
        questionsHtml += questionTemplate.replace("{q}", questionsPool[i].q).replace("{a}", questionsPool[i].a);
    }
    $("#questions").empty().html(questionsHtml);
}

function setQuestionsPoolByForm() {
    var qNa = $(".qNa");
    questionsPool = $.map(qNa, function (elem, i) {
        var q = $(elem).find("[name='q']").val();
        var a = $(elem).find("[name='a']").val();
        if (!q && !a) {
            return null; //remove from list if both are empty
        }
        else {
            q = q ? q : a;//make values the same if only one was added
            a = a ? a : q;
        }
        return {
            q: q,
            a: a,
        }
    });
    localStorage.setItem("questionsPool", JSON.stringify(questionsPool));
    initQuestionsPool();//will remove empty rows of questions and fill missing q/a
}
function generateBingoCards() {
    var numOfRequestedCards = 1;
    $("#cards").empty();
    setQuestionsPoolByForm();
    if (nOverK(questionsPool.length, 6) < numOfRequestedCards) {
        $(".logger").text("you need more questions for generating " + numOfRequestedCards + "cards")
    } else {
        var cards = getCards(numOfRequestedCards);
        $("#cards").html(renderCards(cards));
        $("#print").removeClass("hidden");
    }
}
initQuestionsPool();
generateBingoCards();
///events
$("#generate").on("click", generateBingoCards);
$("#questions").on("click", ".delete", function (e) {
    $(this).closest(".qNa").remove();
});
$("#addQuestion").on("click", function (e) {
    $("#questions").append(questionTemplate.replace("{q}", "").replace("{a}", ""));
});
