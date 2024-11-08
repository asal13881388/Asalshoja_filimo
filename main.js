import("../css/main.css")
import"../../node_modules/swiper/swiper-bundle.min.css"
import Swiper from "../../node_modules/swiper/swiper-bundle.min"



async function Menu(){
    let menu=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    menu=res.menu.map((elem)=>{
        return ` <li key=${elem.id}><a href=${elem.href}>${elem.name}</a></li>`
       
    })
    document.querySelector(".right ul").insertAdjacentHTML("afterbegin",menu.join(" "))

    let imgh=""
    let dataimgh=  await fetch("http://localhost:3000/imgh")
    let resimgh= await dataimgh.json()
    imgh=resimgh.map((elem)=>{
        return `<img src=${elem.name} alt="">`
       
    })
    document.querySelector(".right ul").insertAdjacentHTML("afterbegin",imgh.join(" "))


    let login=""
    let datalogin= await fetch("http://localhost:3000/login")
    let reslogin= await datalogin.json()
    login=reslogin.map((elem)=>{
        return ` <button>${elem.name} </button>
`
       
    })
    document.querySelector(".login").insertAdjacentHTML("afterbegin",login.join(" "))

    let pay=""
    let datapay=  await fetch("http://localhost:3000/pay")
    let respay= await datapay.json()
    pay=respay.map((elem)=>{
        return ` <button>${elem.name} </button>
`
       
    })
    document.querySelector(".pay").insertAdjacentHTML("afterbegin",pay.join(" "))
}


  async function slider(){
    let slider=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    slider=res.swiper.map((elem)=>{
        return `<div class="swiper-slide"><img src=${elem.img} alt=""></div>`;
       
    })
    document.querySelector("#slider").insertAdjacentHTML("afterbegin",slider.join(" "))
}


function initslider(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
 async function alldata(){
    await Menu();
    await slider();
    initslider()
}
alldata()

async function sliderh2(){
    let sliderh2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    sliderh2=res.sliderh2.map((elem)=>{
        return ` <h2>${elem.name} </h2>
`
       
    })
    document.querySelector("div.sliderh2").insertAdjacentHTML("afterbegin",sliderh2.join(" "))

}
sliderh2()

async function sliderh1(){
    let sliderh1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    sliderh1=res.sliderh1.map((elem)=>{
        return ` <h1>${elem.name} </h1>
`
       
    })
    document.querySelector("div.sliderh1").insertAdjacentHTML("afterbegin",sliderh1.join(" "))

}
sliderh1()

async function ul(){
    let ul=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    ul=res.ul.map((elem)=>{
        return ` <li key=${elem.id}>${elem.name}</li>`
       
    })
    document.querySelector(".ul").insertAdjacentHTML("afterbegin",ul.join(" "))
}
ul()

async function sp(){
    let sp=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    sp=res.sp.map((elem)=>{
        return `<button>${elem.name}</button>`
       
    })
    document.querySelector("div.sp").insertAdjacentHTML("afterbegin",sp.join(" "))
}
sp()

async function p(){
    let p=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    p=res.p.map((elem)=>{
        return `<p>${elem.name}</p>`

       
    })
    document.querySelector("div.p").insertAdjacentHTML("afterbegin",p.join(" "))
}
p()

async function img(){
    let img=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    img=res.img.map((elem)=>{
        return ` <div class="img"><img src=${elem.im} alt="" ></div>`
    })
    document.querySelector("img").insertAdjacentHTML("afterbegin",img.join(" "))
}
img()

async function h1(){
    let h1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    h1=res.h1.map((elem)=>{
        return `<h1>  ${elem.name}  </h1>`
    })
    document.querySelector("div.text").insertAdjacentHTML("afterbegin",h1.join(" "))
}
h1()

async function p1(){
    let p1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    p1=res.p1.map((elem)=>{
        return `<p>${elem.name}</p>`
    })
    document.querySelector("div.p1").insertAdjacentHTML("afterbegin",p1.join(" "))
}
p1()

async function span(){
    let span=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    span=res.span.map((elem)=>{
        return `<li>${elem.name}</li> <span>${elem.span}</span>`
    })
    document.querySelector(".ull").insertAdjacentHTML("afterbegin",span.join(" "))
}
span()

async function btn(){
    let btn=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    btn=res.btn.map((elem)=>{
        return `<button> ${elem.name}</button>`
    })
    document.querySelector(".btn").insertAdjacentHTML("afterbegin",btn.join(" "))
}
btn()

async function h(){
    let h=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    h=res.h.map((elem)=>{
        return `<h1> ${elem.name}</h1>`
    })
    document.querySelector("div.text2").insertAdjacentHTML("afterbegin",h.join(" "))
}
h()


async function ull2(){
    let span=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    ull2=res.ull2.map((elem)=>{
        return `<li>${elem.name}</li> <span>${elem.span}</span>`
    })
    document.querySelector(".ull2").insertAdjacentHTML("afterbegin",ull2.join(" "))
}
ull2()

async function btn2(){
    let btn2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    btn2=res.btn2.map((elem)=>{
        return `<button> ${elem.name}</button>`
    })
    document.querySelector(".btn2").insertAdjacentHTML("afterbegin",btn2.join(" "))
}
btn2()

async function img2(){
    let img2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    img2=res.img2.map((elem)=>{
        return ` <div class="img"><img src=${elem.im} alt="" ></div>`
    })
    document.querySelector("div.img2").insertAdjacentHTML("afterbegin",img2.join(" "))
}
img2()

async function p2(){
    let p2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    p2=res.p2.map((elem)=>{
        return `<p>${elem.name}</p>`
    })
    document.querySelector("div.p2").insertAdjacentHTML("afterbegin",p2.join(" "))
}
p2()

async function all(){
    let all=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    all=res.all.map((elem)=>{
        return `<div class="data1"><img src=${elem.img} alt=""> <p>${elem.name}</p></div>`
    })
    document.querySelector("div.free").insertAdjacentHTML("afterbegin",all.join(" "))
}
all()

async function hall(){
    let hall=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    hall=res.hall.map((elem)=>{
        return `<h1>${elem.name}</h1>`
    })
    document.querySelector("div.hall").insertAdjacentHTML("afterbegin",hall.join(" "))
}
hall()

async function wimg(){
    let wimg=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    wimg=res.wimg.map((elem)=>{
        return `<div class="wimg"><img src=${elem.img} alt=""></div>`
    })
    document.querySelector("div.wimg").insertAdjacentHTML("afterbegin",wimg.join(" "))
}
wimg()


async function bw(){
    let bw=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    bw=res.bw.map((elem)=>{
        return `<button>${elem.name}</button>`
    })
    document.querySelector("div.wp").insertAdjacentHTML("afterbegin",bw.join(" "))
}
bw()

async function pw(){
    let pw=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    pw=res.pw.map((elem)=>{
        return `<p class="pw">${elem.name}</p>`
    })
    document.querySelector("div.wp").insertAdjacentHTML("afterbegin",pw.join(" "))
}
pw()

async function hw(){
    let hw=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    hw=res.hw.map((elem)=>{
        return `<h3>${elem.name}</h3>`
    })
    document.querySelector("div.wp").insertAdjacentHTML("afterbegin",hw.join(" "))
}
hw()


let accardeon1= document.querySelectorAll(".acar1")

accardeon1.forEach((accar)=>{
    accar.addEventListener("click",function(){
        [...accar.children].forEach((elem)=>{
            if (elem.localName === "p"){
                elem.classList.toggle("active")
            } 
        })
    })
})

let accardeon2= document.querySelectorAll(".acar2")

accardeon2.forEach((accar)=>{
    accar.addEventListener("click",function(){
        [...accar.children].forEach((elem)=>{
            if (elem.localName === "p"){
                elem.classList.toggle("active")
            }
        })
    })
})

let accardeon3 = document.querySelectorAll(".acar3")

accardeon3.forEach((accar)=>{
    accar.addEventListener("click",function(){
        [...accar.children].forEach((elem)=>{
            if (elem.localName === "p"){
                elem.classList.toggle("active")
            }
        })
    })
})

let accardeon4 = document.querySelectorAll(".acar4")

accardeon4.forEach((accar)=>{
    accar.addEventListener("click",function(){
        [...accar.children].forEach((elem)=>{
            if (elem.localName === "p"){
                elem.classList.toggle("active")
            }
        })
    })
})

async function img3(){
    let img3=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    img3=res.img3.map((elem)=>{
        return `        <img src=${elem.name} alt="" class="all3img">`
    })
    document.querySelector("div.all3").insertAdjacentHTML("afterbegin",img3.join(" "))
}
img3()

async function h3all(){
    let h3all=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    h3all=res.h3all.map((elem)=>{
        return `<h3>${elem.name}</h3>`
    })
    document.querySelector("div.ap").insertAdjacentHTML("afterbegin",h3all.join(" "))
}
h3all()

async function ulli3(){
    let ulli3=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    ulli3=res.ulli3.map((elem)=>{
        return `<li>${elem.name}</li>`
    })
    document.querySelector("div.ulall>ul").insertAdjacentHTML("afterbegin",ulli3.join(" "))
}
ulli3()

async function alldimg(){
    let alldimg=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldimg=res.alldimg.map((elem)=>{
        return `<div class="imm"><img src=${elem.name} alt=""></div>`
    })
    document.querySelector("div.alld1").insertAdjacentHTML("afterbegin",alldimg.join(" "))
}
alldimg()

async function alldbut(){
    let alldbut=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldbut=res.alldbut.map((elem)=>{
        return `<button>${elem.name} </button>`
    })
    document.querySelector("div.allp").insertAdjacentHTML("afterbegin",alldbut.join(" "))
}
alldbut()

async function alldp2(){
    let alldp2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldp2=res.alldp2.map((elem)=>{
        return `<div class="p"><p>${elem.name}</p></div>`
    })
    document.querySelector("div.allp").insertAdjacentHTML("afterbegin",alldp2.join(" "))
}
alldp2()

async function alldp1(){
    let alldp1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldp1=res.alldp1.map((elem)=>{
        return `<p>${elem.name}</p>`
    })
    document.querySelector("div.allp").insertAdjacentHTML("afterbegin",alldp1.join(" "))
}
alldp1()

async function alldh3(){
    let alldh3=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldh3=res.alldh3.map((elem)=>{
        return `<h3>${elem.name}</h3>`
    })
    document.querySelector("div.allp").insertAdjacentHTML("afterbegin",alldh3.join(" "))
}
alldh3()

async function alldimg2(){
    let alldimg2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldimg2=res.alldimg2.map((elem)=>{
        return `<div class="imm2"><img src=${elem.name} alt=""></div>`
    })
    document.querySelector("div.alld2").insertAdjacentHTML("afterbegin",alldimg2.join(" "))
}
alldimg2()

async function alldbut2(){
    let alldbut2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldbut2=res.alldbut2.map((elem)=>{
        return `<button>${elem.name} </button>`
    })
    document.querySelector("div.allp2").insertAdjacentHTML("afterbegin",alldbut2.join(" "))
}
alldbut2()

async function alldp22(){
    let alldp22=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldp22=res.alldp22.map((elem)=>{
        return `<div class="p2"><p>${elem.name}</p></div>`
    })
    document.querySelector("div.allp2").insertAdjacentHTML("afterbegin",alldp22.join(" "))
}
alldp22()

async function alldh32(){
    let alldh32=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldh32=res.alldh32.map((elem)=>{
        return `<h3>${elem.name}</h3>`
    })
    document.querySelector("div.allp2").insertAdjacentHTML("afterbegin",alldh32.join(" "))
}
alldh32()

async function alldp12(){
    let alldp12=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    alldp12=res.alldp12.map((elem)=>{
        return `<p>${elem.name}</p>`
    })
    document.querySelector("div.allp2").insertAdjacentHTML("afterbegin",alldp12.join(" "))
}
alldp12()

async function spana(){
    let spana=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    spana=res.spana.map((elem)=>{
        return `<span class="pi">${elem.name}</span>`
    })
    document.querySelector("div.accardeon").insertAdjacentHTML("afterbegin",spana.join(" "))
}
spana()

async function h1a(){
    let h1a=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    h1a=res.h1a.map((elem)=>{
        return `<h1>${elem.name}</h1>`
    })
    document.querySelector("div.accardeon").insertAdjacentHTML("afterbegin",h1a.join(" "))
}
h1a()

async function acar1(){
    let acar1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    acar1=res.acar1.map((elem)=>{
        return `<h2>${elem.name}</h2> <p id="p">${elem.href}</p>`
    })
    document.querySelector("div.acar1").insertAdjacentHTML("afterbegin",acar1.join(" "))
}
acar1()

async function acar2(){
    let acar2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    acar2=res.acar2.map((elem)=>{
        return `<h2>${elem.name}</h2> <p id="p">${elem.href}</p>`
    })
    document.querySelector("div.acar2").insertAdjacentHTML("afterbegin",acar2.join(" "))
}
acar2()

async function acar3(){
    let acar3=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    acar3=res.acar3.map((elem)=>{
        return `<h2>${elem.name}</h2> <p id="p">${elem.href}</p>`
    })
    document.querySelector("div.acar3").insertAdjacentHTML("afterbegin",acar3.join(" "))
}
acar3()

async function acar4(){
    let acar4=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    acar4=res.acar4.map((elem)=>{
        return `<h2>${elem.name}</h2> <p id="p">${elem.href}</p>`
    })
    document.querySelector("div.acar4").insertAdjacentHTML("afterbegin",acar4.join(" "))
}
acar4()

async function ask1(){
    let ask1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    ask1=res.ask1.map((elem)=>{
        return `<P class="p1">${elem.name}</P>`
    })
    document.querySelector("p.p1").insertAdjacentHTML("afterbegin",ask1.join(" "))
}
ask1()
async function ask2(){
    let ask2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    ask2=res.ask2.map((elem)=>{
        return `<P class="p2">${elem.name}</P>`
    })
    document.querySelector("p.p2").insertAdjacentHTML("afterbegin",ask2.join(" "))
}
ask2()
async function ask3(){
    let ask3=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    ask3=res.ask3.map((elem)=>{
        return `<P class="p3">${elem.name}</P>`
    })
    document.querySelector("p.p3").insertAdjacentHTML("afterbegin",ask3.join(" "))
}
ask3()

async function name1(){
    let name1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    name1=res.name1.map((elem)=>{
        return `  <div class="name1"><p>${elem.name}</p></div>`
    })
    document.querySelector("div.name1").insertAdjacentHTML("afterbegin",name1.join(" "))
}
name1()
async function name2(){
    let name2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    name2=res.name2.map((elem)=>{
        return `  <div class="name2"><p>${elem.name}</p></div>`
    })
    document.querySelector("div.name2").insertAdjacentHTML("afterbegin",name2.join(" "))
}
name2()
async function name3(){
    let name3=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    name3=res.name3.map((elem)=>{
        return `  <div class="name3"><p>${elem.name}</p></div>`
    })
    document.querySelector("div.name3").insertAdjacentHTML("afterbegin",name3.join(" "))
}
name3()

async function imgf(){
    let imgf=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    imgf=res.imgf.map((elem)=>{
        return `<img src=${elem.name} alt="">`
    })
    document.querySelector("div.footer").insertAdjacentHTML("afterbegin",imgf.join(" "))
}
imgf()


async function ulf(){
    let ulf=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    ulf=res.ulf.map((elem)=>{
        return `<li> ${elem.name}</li>`
    })
    document.querySelector("div.uli>ul").insertAdjacentHTML("afterbegin",ulf.join(" "))
}
ulf()

async function butf(){
    let butf=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    butf=res.butf.map((elem)=>{
        return `  <div class="butf"><button>${elem.name}</button> </div>`
    })
    document.querySelector("div.butf").insertAdjacentHTML("afterbegin",butf.join(" "))
}
butf()

async function hbb(){
    let hbb=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    hbb=res.hbb.map((elem)=>{
        return `  <div class="hb"><button>${elem.name}</button> </div>`
    })
    document.querySelector("div.hb").insertAdjacentHTML("afterbegin",hbb.join(" "))
}
hbb()

async function hbh(){
    let hbh=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    hbh=res.hbh.map((elem)=>{
        return `  <div class="hb"><h3>${elem.name}</h3></div>`
    })
    document.querySelector("div.hb").insertAdjacentHTML("afterbegin",hbh.join(" "))
}
hbh()

async function imgff(){
    let imgff=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    imgff=res.imgff.map((elem)=>{
        return `  <div class="imgff">
          <img src=${elem.name} alt=""</div>`
    })
    document.querySelector("div.imgff").insertAdjacentHTML("afterbegin",imgff.join(" "))
}
imgff()

async function imgb(){
    let imgb=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    imgb=res.imgb.map((elem)=>{
        return `<img src= ${elem.name} alt="" class="imgb">`
    })
    document.querySelector("div.bottom").insertAdjacentHTML("afterbegin",imgb.join(" "))
}
imgb()

async function pb(){
    let pb=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    pb=res.pb.map((elem)=>{
        return `<p class="pb">${elem.name}</p>`
    })
    document.querySelector("div.bottomp").insertAdjacentHTML("afterbegin",pb.join(" "))
}
pb()

async function pbp(){
    let pbp=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    pbp=res.pbp.map((elem)=>{
        return `<p>${elem.name}</p>`
    })
    document.querySelector("div.bottomp").insertAdjacentHTML("afterbegin",pbp.join(" "))
}
pbp()

async function hbp(){
    let hbp=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    hbp=res.hbp.map((elem)=>{
        return `<h3> ${elem.name}</h3>`
    })
    document.querySelector("div.bottomp").insertAdjacentHTML("afterbegin",hbp.join(" "))
}
hbp()

async function bottompp(){
    let bottompp=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    bottompp=res.bottompp.map((elem)=>{
        return `<div class="bottompp"><p>${elem.name}</p></div>`
    })
    document.querySelector("div.bottompp").insertAdjacentHTML("afterbegin",bottompp.join(" "))
}
bottompp()

async function imgp(){
    let imgp=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    imgp=res.imgp.map((elem)=>{
        return `<img src= ${elem.name} alt="" class="imgp">`
    })
    document.querySelector("div.bottomp").insertAdjacentHTML("afterbegin",imgp.join(" "))
}
imgp()

async function joker1(){
    let joker1=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    joker1=res.joker1.map((elem)=>{
        return `<div class="joker1"><img src=${elem.name} alt=""></div>`
    })
    document.querySelector("div.joker").insertAdjacentHTML("afterbegin",joker1.join(" "))
}
joker1()

async function joker2(){
    let joker2=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    joker2=res.joker2.map((elem)=>{
        return `<div class="joker2"><img src=${elem.name} alt=""></div>`
    })
    document.querySelector("div.joker").insertAdjacentHTML("afterbegin",joker2.join(" "))
}
joker2()

async function joker3(){
    let joker3=""
    let data=  await fetch("https://asal13881388.github.io/jsonserver/db.json")
    let res= await data.json()
    joker3=res.joker3.map((elem)=>{
        return `<div class="joker3"><img src=${elem.name} alt=""></div>`
    })
    document.querySelector("div.joker").insertAdjacentHTML("afterbegin",joker3.join(" "))
}
joker3()






















