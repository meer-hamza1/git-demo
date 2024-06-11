function createcard(title,cname, views , monthsold, duration, thumbnail){
    let viewstr
    if (views<1000000){
        viewstr = views/1000 + "k";
    }
    else if (views>1000000){
        viewstr = views/1000000 + "M";
    }
    else{
        viewstr = views/1000 + "k";
    }



    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text"><h1>${title}</h1>
    <p>${cname} . ${viewstr} views . ${monthsold} months ago</p></div>
</div>`

document.querySelector(".container").innerhtml = document.querySelector(".container").innerhtml + html
}

createcard("Dynamic Website Builder | Sigma Web Development Course - Tutorial #73" , "codewithHarry", 560000, 7,"31:22" , "https://i.ytimg.com/an_webp/KtL-SQ20Q0s/mqdefault_6s.webp?du=3000&sqp=CNH0kbMG&rs=AOn4CLBPPEQbc9zZMsjdruDjHNiDO4ysqA")