document.addEventListener("DOMContentLoaded", function() {
    const headerTag = document.querySelector("header");
    const headerText = document.querySelectorAll(".header_menu_text");
    const headerlogo = document.querySelector("#header_logo");

    document.addEventListener("scroll", function() {
        const pixels = window.scrollY;

        if (pixels >= headerTag.getBoundingClientRect().height + 1000) {
            headerTag.classList.add("scrolled");
            headerText.forEach(function(element) {
                element.style.color = "#777777";
            });
            if (headerlogo) {
                headerlogo.style.transform = "translateY(5%) scale(0.8)"; // 새 transform 값
            }
        } else {
            headerTag.classList.remove("scrolled");
            headerText.forEach(function(element) {
                element.style.color = "#ffffff";
            });
            if (headerlogo) {
                headerlogo.style.transform = "translateY(20%) scale(1)"; // CSS와 동일한 초기 transform 값
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 페이지가 로드된 후 5초 뒤에 스크롤
    setTimeout(function() {
        // 스크롤 애니메이션의 총 시간(duration) 및 시작 시간(startTime)
        const duration = 3000; // 3초
        const startTime = performance.now();

        // 시작 위치와 종료 위치를 설정
        const start = window.scrollY;
        const end = 1300; // 목표로 하는 스크롤 위치

        // 스크롤 애니메이션 함수
        function scrollAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const scrollProgress = Math.min(elapsedTime / duration, 1); // 진행률은 0~1 사이

            window.scrollTo(0, start + (end - start) * scrollProgress);

            if (scrollProgress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        // 애니메이션 시작
        requestAnimationFrame(scrollAnimation);
    }, 5000); // 3초 뒤에 스크롤 시작
});

function changeImage(event) {
    var x = event.clientX;
    var vw = x / window.innerWidth * 100; // 마우스 x 위치를 vw 단위로 변환

    var conB_text3 = document.getElementById('conBt3');
    var conB_text2 = document.getElementById('conBt2');
    var conB_text1 = document.getElementById('conBt1');
    var conB_image = document.getElementById('conB_image');
    if (vw >= 0 && vw <= 50) {
        conB_image.src = 'img/conb1.png';
        conB_text1.style.transform = 'translateX(0%)';
        conB_text1.style.background = 'linear-gradient(to bottom, #222C35 0%, rgba(57, 66, 74, 0.9) 75%, rgba(104, 107, 85, 0.5) 100%)';
        conB_text1.style.transition = '1s all';
        conB_text2.textContent = '관곡지';
        conB_text3.textContent = '관곡지(官谷池)는 경기도 시흥시 하중동에 있는 연못으로 조선 세조 때 강희맹(姜希孟)이 명나라 난징[남경(南京)]에서 가져온 연꽃을 심어 현재에 이르렀다. 이를 계기로 조선시대 시흥 지역이었던 안산군의 별호를 ‘연성(蓮城)’으로 부르게 되었다.';
    } else if (vw > 50 && vw <= 100) {
        conB_image.src = 'img/conb2.png';
        conB_text1.style.transform = 'translateX(100%)';
        conB_text1.style.background = 'linear-gradient(to bottom, #020024 0%, #45394A90 90%, #68556950 100%)';
        conB_text2.textContent = '연성문화제';
        conB_text3.textContent = '연성 문화제는 1466년(세조 12) 안산군의 별호로 부여받은 연성(蓮城)의 의미를 짚어 보는 문화제다. 즉, 조선 전기 강희맹이 1463년(세조 9) 8월 중국 명나라 수도 난징의 전당강에서 연꽃씨를 가져와 안산군 초산면 하중리 벼슬구지의 연못[지금의 시흥시 하중동 관곡지]에 재배한 역사성을 바탕으로 시흥시 승격 이전에 펼쳐졌던 금천 문화제의 전통을 이은 것이다.';
    }
}

function glow(enter) {
    var targetDiv = document.querySelector('.conC_cir');
    var vis = document.getElementById('cline');
    var vist = document.getElementById('ctext');

    if (enter) {
        targetDiv.classList.add('glow');
        vis.classList.add('appear');
        vist.classList.add('appear2');
    } else {
        targetDiv.classList.remove('glow');
        vis.classList.remove('appear');
        vist.classList.remove('appear2');
    }
}

const floTag = document.querySelector("#flo");
const lefTag = document.querySelector("#lef");
const lef2Tag = document.querySelector("#lef2");
const firstH1Tag = document.querySelector("#First-h1");
const secondH1Tag = document.querySelector("#Second-h1");

lefTag.addEventListener("click", function() {
    floTag.classList.remove("clicked");
    firstH1Tag.classList.remove("change1");
    secondH1Tag.classList.remove("change2");
    window.scrollTo({
        top: 1300,
        behavior: 'smooth'
    });
});

lef2Tag.addEventListener("click", function() {
    floTag.classList.add("clicked");
    firstH1Tag.classList.add("change1");
    secondH1Tag.classList.add("change2");
    window.scrollTo({
        top: 3000,
        behavior: 'smooth'
    });
});





const comB = document.getElementById('com_button');
const write = document.getElementById('comp');
const mark = document.getElementById('marking');

const fb1 = document.getElementById('frame_button1');
const fb2 = document.getElementById('frame_button2');
const fb3 = document.getElementById('frame_button3');

const sb1 = document.getElementById('st_button1');
const sb2 = document.getElementById('st_button2');
const sb3 = document.getElementById('st_button3');
const sb4 = document.getElementById('st_button4');
const sb5 = document.getElementById('st_button5');
const sb6 = document.getElementById('st_button6');
const sb7 = document.getElementById('st_button7');
const sb8 = document.getElementById('st_button8');
const sb9 = document.getElementById('st_button9');
const sb10 = document.getElementById('st_button10');
const sb11 = document.getElementById('st_button11');
const sb12 = document.getElementById('st_button12');


sb1.addEventListener('click', function(){
    mark.classList.add('add1');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb2.addEventListener('click', function(){
    mark.classList.remove('add1');
    mark.classList.add('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb3.addEventListener('click', function(){
    mark.classList.add('add3');
    mark.classList.remove('add2');
    mark.classList.remove('add1');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb4.addEventListener('click', function(){
    mark.classList.add('add4');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add1');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb5.addEventListener('click', function(){
    mark.classList.add('add5');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add1');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb6.addEventListener('click', function(){
    mark.classList.add('add6');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add1');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb7.addEventListener('click', function(){
    mark.classList.add('add7');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add1');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb8.addEventListener('click', function(){
    mark.classList.add('add8');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add1');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb9.addEventListener('click', function(){
    mark.classList.add('add9');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add1');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb10.addEventListener('click', function(){
    mark.classList.add('add10');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add1');
    mark.classList.remove('add11');
    mark.classList.remove('add12');
});

sb11.addEventListener('click', function(){
    mark.classList.add('add11');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add1');
    mark.classList.remove('add12');
});

sb12.addEventListener('click', function(){
    mark.classList.add('add12');
    mark.classList.remove('add2');
    mark.classList.remove('add3');
    mark.classList.remove('add4');
    mark.classList.remove('add5');
    mark.classList.remove('add6');
    mark.classList.remove('add7');
    mark.classList.remove('add8');
    mark.classList.remove('add9');
    mark.classList.remove('add10');
    mark.classList.remove('add11');
    mark.classList.remove('add1');
});


comB.addEventListener('click', function(){
    write.classList.add('inner');
});

fb1.addEventListener('click', function(){
    write.classList.add('fb1');
    write.classList.remove('fb2');
    write.classList.remove('fb3');
});

fb2.addEventListener('click', function(){
    write.classList.remove('fb1');
    write.classList.add('fb2');
    write.classList.remove('fb3');
});

fb3.addEventListener('click', function(){
    write.classList.remove('fb1');
    write.classList.remove('fb2');
    write.classList.add('fb3');
});