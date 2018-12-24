var count = 1;

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
        h = h - 12;
        ampm = " PM";
    } else if (h == 12){
        h = 12;
        ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var num = count % quotes.length;
  count = count + 1;
  document.getElementById('quote').innerHTML = quotes[num];
  // var tweetQuote = quotes[randNum].split(' ').join('%20');
  // tweetQuote = tweetQuote.split('<br>').join('');
  // tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  // $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["\“莫听穿林打叶声，何妨吟啸且徐行。\”<br><br>—— 苏轼", "\“古人之观于天地、山川、草木、虫鱼、鸟兽，往往有得，以其求思之深而无不在也。夫夷以近，则游者众；险以远，则至者少。而世之奇伟、瑰怪，非常之观，常在于险远，而人之所罕至焉，故非有志者不能至也。有志矣，不随以止也，然力不足者，亦不能至也。有志与力，而又不随以怠，至于幽暗昏惑而无物以相之，亦不能至也。然力足以至焉，于人为可讥，而在己为有悔；尽吾志也而不能至者，可以无悔矣。\”<br><br> —— 王安石 《游褒禅山记》", "\"I admired the facility with which they [other talented students] picked up, as if at play, new ideas, juggling them as if familiar with them from the cradle - while for myself I felt clumsy. even oafish, wandering painfully up a arduous track, like a dumb ox faced with an amorphous mountain of things that I had to learn (so I was assured), things I felt incapable of understanding the essentials or following through to the end.\"<br><br>- Alexander Grothendieck", "\“上士闻道，勤而行之；中士闻道，若存若亡；下士闻道，大笑之。不笑不足以为道。故建言有之：明道若昧，进道若退，夷道若纇。上德若谷；大白若辱；广德若不足；建德若偷；质真若渝。大方无隅；大器晚成；大音希声；大象无形；道隐无名。夫唯道，善贷且成。\”<br><br> —— 老子 《道德经》", "\"A little learning is a dangerous thing; / Drink deep, or taste not the Pierian spring.\"<br><br>- Alexander Pope <em><small>An Essay on Criticism</small></em>", "\“寄蜉蝣于天地，渺沧海之一粟。<br>哀吾生之须臾，羡长江之无穷。<br>挟飞仙以遨游，抱明月而长终。<br>知不可乎骤得，托遗响于悲风。\”<br><br>—— 苏轼 《赤壁赋》", "\"We choose to go to the Moon! We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard; because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one we intend to win, and the others, too.\"<br><br>- John F. Kennedy", "\“既自以心为形役，奚惆怅而独悲？<br>悟已往之不谏，知来者之可追。<br>实迷途其未远，觉今是而昨非。<br>舟遥遥以轻飏，风飘飘而吹衣。<br>问征夫以前路，恨晨光之熹微。\”<br><br>—— 陶渊明 《归去来辞》", "\“龙能大能小，能升能隐；大则兴云吐雾，小则隐介藏形；升则飞腾于宇宙之间，隐则潜伏于波涛之内。方今春深，龙乘时变化，犹人得志而纵横四海。龙之为物，可比世之英雄。...夫英雄者，胸怀大志，腹有良谋，有包藏宇宙之机，吞吐天地之志者也。\”<br><br>—— 曹孟德 <em>煮酒论英雄</em>", "\"Unjust laws exist: Shall we be content to obey them or shall we endeavor to amend them, and obey them until we have succeeded, or shall we transgress them at once?\"<br><br>- Henry David Thoreau <em><small>Civil Disobedience</small></em>", "\“夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，曾不知老之将至；及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀，况修短随化，终期于尽。古人云，“死生亦大矣。”岂不痛哉。\”<br><br>—— 王羲之 《兰亭集序》",];

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}

function startDateTime() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
      h = h - 12;
      ampm = " PM";
  } else if (h == 12){
      h = 12;
      ampm = " AM";
  } else if (h < 12){
      ampm = " AM";
  } else {
      ampm = "PM";
  };
  
  if(h==0) {
    h=12;
  }
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear() + " " + h+":"+m+ampm;;
  var t = setTimeout(function(){startTime()},500);
}