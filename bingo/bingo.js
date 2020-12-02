var questionsPool = [
    { 'q': 'Adam K', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-kdQPqWJ/1/dcc02ecc/M/AdamK.2020-M.jpg' },
    { 'q': 'Alex', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-jx4VPz6/0/414d815e/S/Alex_Headshot2-S.jpg' },
    { 'q': 'Andrea', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-VhxmN42/0/62c666be/S/andrea-S.jpg' },
    { 'q': 'Andrew S', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-k2XCNtW/1/873ac222/S/Andrew-S-300x300-S.jpg' },
    { 'q': 'Andy C', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-GJCSQq6/1/1251000c/M/Andy-C-M.jpg' },
    { 'q': 'Andy E', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-9Gpq6Mj/0/e3eac3b8/M/AndyE-M.jpg' },
    { 'q': 'Angie', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-BKWVKkR/1/3ab6e1de/M/angie-M.jpg' },
    { 'q': 'Anna', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-tVGFbF7/1/51c2efd2/S/Anna-S.jpg' },
    { 'q': 'Barry', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-8dtTS9M/1/fb4264b0/M/barry-M.jpg' },
    { 'q': 'Bhagat', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-jZnp4hz/0/51800325/M/Bhagatk-M.jpg' },
    { 'q': 'Brandi', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-NK54bMx/0/cea7b7f8/S/BrandiKv2-S.jpg' },
    { 'q': 'Brandon', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-FTsS6WB/0/266bcab8/M/brandons.jpg-M.jpg' },
    { 'q': 'Brent', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-KPgS5CW/0/20d90e25/M/brent-M.jpg' },
    { 'q': 'Brian S', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-7m9Bt7J/1/d4e55e76/M/BrianS.2020-M.jpg' },
    { 'q': 'Carl', 'a': 'https://photos.smugmug.com/Portraits/Oct-2019-Originals/n-MQSHRf/Originals-1/i-6xtZSFM/0/22ec41a4/5K/carl-5K.jpg' },
    { 'q': 'Caroline', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-D9Fg9PQ/1/7daf3c19/M/Caroline-M.jpg' },
    { 'q': 'Chandra', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-N5j3HFQ/1/4dbb5499/M/Chandra-2-M.jpg' },
    { 'q': 'Charlie', 'a': 'https://photos.smugmug.com/Portraits/Oct-2019-Originals/n-MQSHRf/Originals-1/i-cf7ZSkw/0/6f9eb51a/XL/charlie-XL.jpg' },
    { 'q': 'Chris A', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-SJQVNgh/1/d47bfe17/M/Chris-A-M.jpg' },
    { 'q': 'Chris B', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-LVdB4ww/1/e1dd7e90/M/Chris-B1-M.jpg' },
    { 'q': 'Chris D', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-LZ82C4D/1/f57b689d/S/Chris%20Dolan-S.jpg' },
    { 'q': 'Christian', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-nWkTMmq/1/ea78186a/S/Christian_C-300x300-S.jpg' },
    { 'q': 'Courteney', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-XgtH3V5/1/cbde8205/M/courteneyo-M.jpg' },
    { 'q': 'David H', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-72pPLt4/1/7491a796/M/davidh-M.jpg' },
    { 'q': 'David M', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-4KZskJL/1/41da0c30/S/David%20M-300x300-S.jpg' },
    { 'q': 'Denise', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/Archived/n-J5L7Dr/i-Cf6w3f5/0/e1b3d013/XL/i-Cf6w3f5-XL.jpg' },
    { 'q': 'Elena', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-hJs5hTW/2/a61d6b3d/M/ElenaT.2020-M.jpg' },
    { 'q': 'Erich', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-JpnKPDJ/1/0aca5bb2/S/Erich%20B-300x300-S.jpg' },
    { 'q': 'Erin R', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-cbsfFS8/0/4fe4f748/M/ErinRoberts.2020-M.jpg' },
    { 'q': 'Gage', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-7PqzSWp/1/cf80e305/M/Gage%20cropped-M.jpg' },
    { 'q': 'Glenna', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-9vNXjVC/1/09789f18/M/Glenna-M.jpg' },
    { 'q': 'Jamie', 'a': 'https://photos.smugmug.com/Portraits/Oct-2019-Originals/n-MQSHRf/Originals-1/i-S4SSKsN/0/1a46d19a/X4/jamie-X4.jpg' },
    { 'q': 'Jessica', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-6zQNjQC/0/c499d7c6/L/Jessica%20N%20headshot2-L.png' },
    { 'q': 'Jim A', 'a': 'https://photos.smugmug.com/Portraits/Oct-2019-Originals/n-MQSHRf/Originals-1/i-SM767ms/0/b5c1155f/XL/Jim-A-XL.jpg' },
    { 'q': 'Jim K', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-ZxC4z3P/1/c970fc13/S/Jim%20K-300x300-S.jpg' },
    { 'q': 'John C', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Xb4wfKq/1/119307fd/M/John-C2-M.jpg' },
    { 'q': 'Josh', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-fWmcKZz/1/5775f890/S/Josh%20Nieman-S.jpg' },
    { 'q': 'Kelly W', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-v7Q2tSb/1/7f2abe0f/M/KellyW-M.jpg' },
    { 'q': 'Ken B', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-JrzZB2v/1/6d15f240/M/ken-M.jpg' },
    { 'q': 'Kim P', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/Archived/n-J5L7Dr/i-MKBD97n/0/a748cfb9/XL/i-MKBD97n-XL.jpg' },
    { 'q': 'Lenay', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-mM3gBJd/1/e143e55c/S/lenay-300x300-S.jpg' },
    { 'q': 'Leslie', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-GLRKp9V/0/f125e547/M/LeslieP%202019v2-M.jpg' },
    { 'q': 'Lomax', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-ws7MwFm/1/648d7a2c/S/lomax-S.jpg' },
    { 'q': 'Lynn B', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-rGspDKn/1/369b3bee/S/LynnB-S.jpg' },
    { 'q': 'Markku', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-sRCknFb/1/b53cbd75/S/MarkkuK-300x300-S.jpg' },
    { 'q': 'Matt B', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-zPJFmzz/2/a3352a49/M/Matt-B-M.jpg' },
    { 'q': 'Michaela', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-bgFbJ6F/1/694c6073/S/Michaela2-300x300-S.jpg' },
    { 'q': 'Mike R', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-2LJ9x2D/0/422bd1c4/M/Mike-r-M.jpg' },
    { 'q': 'Nadide', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-QzGsqfR/0/1b9103d7/M/Nadide2-M.jpg' },
    { 'q': 'Nishita', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-5r2MhJP/1/96944003/S/Nishita%20cropped-S.jpg' },
    { 'q': 'Olga', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-HNsSQ9Q/1/e337e87a/M/OlgaK-M.jpg' },
    { 'q': 'Phil', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-xw8nf7z/0/2e2377f8/M/Phil2-M.jpg' },
    { 'q': 'Q', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-HSJzdMN/0/a6ce8aa8/M/q2-M.jpg' },
    { 'q': 'Ryan', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-T6t6gLL/1/0460d63e/S/RyanP-S.jpg' },
    { 'q': 'Sandeep', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Cxc4Vgh/1/a8c00982/S/SandeepB-300x300-S.jpg' },
    { 'q': 'Sarah', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-7RcRzwX/1/fc6ef640/S/SarahW-300x300-S.jpg' },
    { 'q': 'Scott', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-fp7MmGq/1/3013162e/M/scott.l-M.jpg' },
    { 'q': 'Sean', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-xwqGXvN/1/c6d609a0/M/sean-M.jpg' },
    { 'q': 'Shane', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-kX93WQ3/1/5156280a/S/ShaneP300x300-S.jpg' },
    { 'q': 'Shannon', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/March-Ingage-Day/i-p2X6DZx/1/fcb93181/M/shannon-M.jpg' },
    { 'q': 'Sharath', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-qRT23wn/1/753d11a9/S/Sharath-300x300-S.jpg' },
    { 'q': 'Sheree', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-9SD94Zc/1/e8b16058/M/shereen-M.jpg' },
    { 'q': 'Tim A', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-xP5hnb9/1/f0566bd6/S/Tim%20Atkinson-S.jpg' },
    { 'q': 'Tim K', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-Lf9gG8N/1/f895ddb7/M/timk-M.jpg' },
    { 'q': 'Tony G', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/Archived/n-J5L7Dr/i-fHSb9xS/0/b7261137/XL/i-fHSb9xS-XL.jpg' },
    { 'q': 'Viktoria', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-rcb52bH/2/6bc1e72c/M/ViktoriaK.2020-M.jpg' },
    { 'q': 'Ying', 'a': 'https://photos.smugmug.com/Portraits/Employee-Photos/n-vf4gPC/Active/i-2btVWdR/1/2d018abc/M/Ying-M.jpg' },

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
        questionsPool = JSON.parse(savedQuestions);
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
            q = q ? q : "First L";//make values the same if only one was added
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