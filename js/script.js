$(document).ready(function () {

    /* 슬라이드 메뉴 실행문 */
    $('#toggle').on('click', function (e) {
        e.preventDefault();

        const nav = $("#header_gnb ul").toggleClass("on");

        $(this).toggleClass('on')
        $("#header_gnb").toggleClass('on');
    });

    /* 메인 스크롤 */
    $('.scroll a').click(function (e) {
        $.scrollTo(this.hash || 0, 800);
        e.preventDefault();
    });

    /* 스크롤시 스킬 */
    const saDefaultMargin = 100;
    let saTriggerMargin = 0;
    let saTriggerHeight = 0;
    const saElementList = document.querySelectorAll('.progress-level');

    const saFunc = function () {
        for (const element of saElementList) {
            if (!element.classList.contains('show')) {
                if (element.dataset.saMargin) {
                    saTriggerMargin = parseInt(element.dataset.saMargin);
                } else {
                    saTriggerMargin = saDefaultMargin;
                }

                if (element.dataset.saTrigger) {
                    saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
                } else {
                    saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
                }

                if (window.innerHeight > saTriggerHeight) {
                    element.classList.add('show');
                }
            }
        }
    }
    window.addEventListener('load', saFunc);
    window.addEventListener('scroll', saFunc);

    /* 텍스트 타이핑 */
    const content = "Code야, \n 나에 대해 알려줘";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 230);

    /* 스크롤 top */
    $('#top a').click(function (e) {
        $.scrollTo(this.hash || 0, 800);
        e.preventDefault();
    });
})

/* 프로젝트 */
$(document).ready(function () {
        new Swiper(".swiper-container", {
            initialSlide: 0,
            /* 첫 슬라이드 */
            spaceBetween: 100,
            speed: 600,
            loop: 1,
            /* 루프 */
            effect: "coverflow",
            coverflow: {
                rotate: 0,
                stretch: 600,
                depth: 300,
                modifier: 1,
                slideShadows: !1
            },
            slidesPerView: 1,
            slideToClickedSlide: !0,
            pagination: ".swiper-pagination",
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        })
    }),

    /* 하트 클릭 */
    $(document).ready(function () {
        var c = $(".like-block__like-icon"),
            l = "like-block__like-icon--is-visible";
        c.click(function () {
            $(this).toggleClass(l)
        })
    }),

    $(document).ready(function () {
        var s = $(".card__body"),
            o = "card__body--faded",
            t = "menu__item--is-visible";
        $(this).s.toggleClass(o),
            $(this).siblings().each(function (e) {
                var i = this;
                setTimeout(function () {
                    $(i).toggleClass(t)
                }, 75 * e)
            });
    });