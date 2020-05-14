const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
  var div1 = document.getElementsByClassName("flex-container justify")[0];
var div2 = document.createElement("div");
div2.className="item";
var content3 = document.createElement("h4"); //为节点添加内容
content3.innerText="Genre : "+works[0].tips
div2.appendChild(content3)
div1.appendChild(div2);


var div3 = document.createElement("div");
div3.className="inner-box";

var content1 = document.createElement("h3"); //为节点添加内容
content1.innerText=works[0].author;
var content2 = document.createElement("h5"); //为节点添加内容
content2.innerText="lifetime:"+works[0].lifetime;
content1.style.display="inline"
content2.style.display="inline"
content2.style.marginLeft="1em"
div3.appendChild(content1);//组合节点
div3.appendChild(content2);
div2.appendChild(div3)

var div4 = document.createElement("div");
div4.className="inner-box";
var label = document.createElement("h3"); //为节点添加内容
label.innerText="Popular Photos";
div4.appendChild(label)
var p1=document.createElement("img")
p1.className="photo"
p1.src="./"+works[0].photos[0]
var p2=document.createElement("img")
p2.className="photo"
p2.src="./"+works[0].photos[1]
var p3=document.createElement("img")
p3.className="photo"
p3.src="./"+works[0].photos[2]
div4.appendChild(p1)
div4.appendChild(p2)
div4.appendChild(p3)
div2.appendChild(div4)

var button1 =document.createElement("button")
button1.innerText="Visit"
div2.appendChild(button1)



var div22 = document.createElement("div");
div22.className="item";
var content23 = document.createElement("h4"); //为节点添加内容
content23.innerText="Genre : "+works[1].tips
div22.appendChild(content23)
div1.appendChild(div22);


var div23 = document.createElement("div");
div23.className="inner-box";

var content21 = document.createElement("h3"); //为节点添加内容
content21.innerText=works[1].author;
var content22 = document.createElement("h5"); //为节点添加内容
content22.innerText="lifetime:"+works[1].lifetime;
content21.style.display="inline"
content22.style.display="inline"
content22.style.marginLeft="1em"
div23.appendChild(content21);//组合节点
div23.appendChild(content22);
div22.appendChild(div23)

var div24 = document.createElement("div");
div24.className="inner-box";
var label2 = document.createElement("h3"); //为节点添加内容
label2.innerText="Popular Photos";
div24.appendChild(label2)
var p21=document.createElement("img")
p21.className="photo"
p21.src="./"+works[1].photos[0]
var p22=document.createElement("img")
p22.className="photo"
p22.src="./"+works[1].photos[1]
div24.appendChild(p21)
div24.appendChild(p22)
div22.appendChild(div24)
var button21 =document.createElement("button")
button21.innerText="Visit"
div22.appendChild(button21)

var div32 = document.createElement("div");
div32.className="item";
var content33 = document.createElement("h4"); //为节点添加内容
content33.innerText="Genre : "+works[2].tips
div32.appendChild(content33)
div1.appendChild(div32);


var div33 = document.createElement("div");
div33.className="inner-box";

var content31 = document.createElement("h3"); //为节点添加内容
content31.innerText=works[2].author;
var content32 = document.createElement("h5"); //为节点添加内容
content32.innerText="lifetime:"+works[2].lifetime;
content31.style.display="inline"
content32.style.display="inline"
content32.style.marginLeft="1em"
div33.appendChild(content31);//组合节点
div33.appendChild(content32);
div32.appendChild(div33)

var div34 = document.createElement("div");
div34.className="inner-box";
var label3 = document.createElement("h3"); //为节点添加内容
label3.innerText="Popular Photos";
div34.appendChild(label3)
var p31=document.createElement("img")
p31.className="photo"
p31.src="./"+works[2].photos[0]
var p32=document.createElement("img")
p32.className="photo"
p32.src="./"+works[2].photos[1]
var p33=document.createElement("img")
p33.className="photo"
p33.src="./"+works[2].photos[2]
var p34=document.createElement("img")
p34.className="photo"
p34.src="./"+works[2].photos[3]
var p35=document.createElement("img")
p35.className="photo"
p35.src="./"+works[2].photos[4]
div34.appendChild(p31)
div34.appendChild(p32)
div34.appendChild(p33)
div34.appendChild(p34)
div34.appendChild(p35)
div32.appendChild(div34)

var button31 =document.createElement("button")
button31.innerText="Visit"
div32.appendChild(button31)

var div322 = document.createElement("div");
div322.className="item";
var content323 = document.createElement("h4"); //为节点添加内容
content323.innerText="Genre : "+works[3].tips
div322.appendChild(content323)
div1.appendChild(div322);


var div323 = document.createElement("div");
div323.className="inner-box";

var content321 = document.createElement("h3"); //为节点添加内容
content321.innerText=works[3].author;
var content322 = document.createElement("h5"); //为节点添加内容
content322.innerText="lifetime:"+works[3].lifetime;
content321.style.display="inline"
content322.style.display="inline"
content322.style.marginLeft="1em"
div323.appendChild(content321);//组合节点
div323.appendChild(content322);
div322.appendChild(div323)

var div324 = document.createElement("div");
div324.className="inner-box";
var label32 = document.createElement("h3"); //为节点添加内容
label32.innerText="Popular Photos";
div324.appendChild(label32)
var p321=document.createElement("img")
p321.className="photo"
p321.src="./"+works[3].photos[0]
var p322=document.createElement("img")
p322.className="photo"
p322.src="./"+works[3].photos[1]
div324.appendChild(p321)
div324.appendChild(p322)
div322.appendChild(div324)
var button321 =document.createElement("button")
button321.innerText="Visit"
div322.appendChild(button321)