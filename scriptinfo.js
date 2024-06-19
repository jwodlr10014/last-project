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
        top: 2600,
        behavior: 'smooth'
    });
});

function changeContent(categoryName, description, imageUrl) {
    let bBimg = document.querySelector('.bBimg');
    let bimgArr = document.querySelectorAll('.bimg img');
    let btextTitle = document.querySelector('.btext h5');
    let btextDescription = document.querySelector('.btext p');

    bBimg.style.backgroundImage = `url(${imageUrl})`;
    btextTitle.textContent = categoryName;
    btextDescription.textContent = description;
    
    bimgArr.forEach((img, index) => {
        img.src = `/img/${categoryName}/${categoryName}_${index + 1}.jpg`;
    });
}

const images = [
    ["/img/공연/시흥윈드오케스트라/오케스트라_1.jpg", "/img/공연/시흥윈드오케스트라/오케스트라_2.jpg", "/img/공연/시흥윈드오케스트라/오케스트라_3.jpg", "/img/공연/시흥윈드오케스트라/오케스트라_4.jpg", "/img/공연/시흥윈드오케스트라/오케스트라_5.jpg", "/img/공연/시흥윈드오케스트라/오케스트라_6.jpg", "/img/공연/시흥윈드오케스트라/오케스트라_7.jpg", "/img/공연/시흥윈드오케스트라/오케스트라_8.jpg",],
    ["/img/공연/전통문화예술공연/전통예술_1.jpg", "/img/공연/전통문화예술공연/전통예술_2.jpg", "/img/공연/전통문화예술공연/전통예술_3.jpg", "/img/공연/전통문화예술공연/전통예술_4.jpg", "/img/공연/전통문화예술공연/전통예술_5.jpg", "/img/공연/전통문화예술공연/전통예술_6.jpg", "/img/공연/전통문화예술공연/전통예술_7.jpg", "/img/공연/전통문화예술공연/전통예술_8.jpg"],
    ["/img/공연/개막공연/개막공연_1.jpg", "/img/공연/개막공연/개막공연_2.jpg", "/img/공연/개막공연/개막공연_3.jpg", "/img/공연/개막공연/개막공연_4.jpg", "/img/공연/개막공연/개막공연_5.jpg", "/img/공연/개막공연/개막공연_6.jpg","/img/공연/개막공연/개막공연_7.jpg","/img/공연/개막공연/개막공연_8.jpg"],
];

let currentIndex = 0;

function changeContent(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    // 이미지 변경
    let imageCells = document.querySelectorAll('.conAimg td img');
    imageCells.forEach((image, index) => {
        image.src = images[currentIndex][index];
        image.style.opacity = 0; // 초기 opacity 설정
    });
    
    let interval = 200; // 이미지 나타나는 간격을 지정 (단위: ms)
    imageCells[0].style.opacity = 1; // 첫 이미지 투명도 1로 설정

    let i = 1;
    let opacityTimer = setInterval(function() {
        imageCells[i].style.opacity = 1;
        i++;
        if (i >= imageCells.length) {
            clearInterval(opacityTimer);
        }
    }, interval);

    // 제목과 설명 변경
    let titleElement = document.querySelector('.conAtext h4');
    let descriptionElement = document.querySelector('.conAtext p');
    
    switch(currentIndex) {
        case 0:
            titleElement.textContent = "시흥윈드오케스트라";
            descriptionElement.textContent = "시흥윈드오케스트라와 시흥월미농악에서 전통 클래식, 국악, 농악놀이 등 다양한 공연을 진행해요";
            break;
        case 1:
            titleElement.textContent = "전통문화예술공연";
            descriptionElement.textContent = "시흥전통문화 예술 동아리의 절도있는 도담 댄스, 전통있는 경기민요, 전문 댄서들의 열린무용단, 또박이 사물놀이 등의 공연을 진행해요";
            break;
        case 2:
            titleElement.textContent = "개막공연";
            descriptionElement.textContent = "시흥시립전통예술단과 한국예술종합학교가 함께 성악 앙상슬 하우알유 콜라보 공연을 진행해요.";
            break;
        default:
            titleElement.textContent = "개막공연";
            descriptionElement.textContent = "각종 공연과 행사가 개막되는 흥미진진한 순간을 만나보세요.";
            break;
    }
}

const startb = document.querySelector('#start_button');
const block = document.querySelector('#block');

startb.addEventListener('click',function(){
    block.style.zIndex = '5';
})

function swapImages(clickedIndex, newText) {
    const images = document.querySelectorAll('.carousel img');
    const thirdImage = images[2];
    const description = document.querySelector('#inte');
    
    // 이미지 src 교환
    const clickedImage = images[clickedIndex];
    const tempSrc = thirdImage.src;
    thirdImage.src = clickedImage.src;
    clickedImage.src = tempSrc;

    // 텍스트 변경
    description.textContent = newText;
}