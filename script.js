const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator'); // مؤشر الحركة
let activeItem = document.querySelector('.list.active1'); // تعيين العنصر النشط افتراضيًا على Home
let lastClickedItem = activeItem; // حفظ آخر عنصر مضغوط

function updateIndicator(target) {
    if (target) {
        const index = [...list].indexOf(target);
        indicator.style.transform = `translateX(calc(70px * ${index}))`; // تحديث موقع المؤشر
    }
}

function addHoverEffect() {
    this.classList.add('active1'); // تفعيل التأثير عند التمرير
    updateIndicator(this); // تحديث المؤشر
}

function removeHoverEffect() {
    if (this !== activeItem) {
        this.classList.remove('active1'); // إزالة التأثير إذا لم يكن العنصر المضغوط
        updateIndicator(activeItem); // إعادة المؤشر إلى العنصر المضغوط
    }
}

function setActiveItem() {
    if (activeItem) {
        activeItem.classList.remove('active1'); // إزالة التأثير عن العنصر السابق
    }
    activeItem = this; // حفظ العنصر الجديد المضغوط
    lastClickedItem = this; // تحديث آخر عنصر مضغوط
    this.classList.add('active1');
    updateIndicator(this); // تحديث موقع المؤشر
}

// عند تمرير الماوس على عنصر جديد، لا يبقى التأثير على العنصر المضغوط السابق
document.addEventListener('mousemove', () => {
    const hoveredItem = [...list].find(item => item.matches(':hover'));
    if (!hoveredItem) {
        list.forEach(item => item.classList.remove('active1')); // إزالة التأثير من جميع العناصر
        if (lastClickedItem) {
            lastClickedItem.classList.add('active1'); // إعادة التفعيل لآخر عنصر تم الضغط عليه
            updateIndicator(lastClickedItem); // إعادة تحريك المؤشر
            activeItem = lastClickedItem;
        } else {
            activeItem = document.querySelector('.list'); // العودة إلى "Home" إذا لم يتم الضغط على أي عنصر
            activeItem.classList.add('active1');
            updateIndicator(activeItem);
        }
    }
});

list.forEach((item) => {
    item.addEventListener('mouseover', addHoverEffect);
    item.addEventListener('mouseleave', removeHoverEffect);
    item.addEventListener('click', setActiveItem);
});

// تحديث موقع المؤشر عند تحميل الصفحة
updateIndicator(activeItem);


/*search bar*/
document.getElementById("searchBtn").addEventListener("click", function() {
    let searchQuery = document.getElementById("search").value;
    if (searchQuery.trim() !== "") {
        alert("تم البحث عن: " + searchQuery); // يمكنك تغييرها لتوجيه المستخدم لنتائج البحث
        window.location.href = "C:\Users\Ce pc\Desktop\New folder\newsite.html" + encodeURIComponent(searchQuery);
    } else {
        alert("search");
    }
});


/*slaider*/
const slider = document.querySelector(".slider");
const indicatorse = document.querySelector(".indicatorse");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

let currentIndex = 0;
let autoSlideInterval;
let isTransitioning = false;

// إنشاء الدوائر للمؤشر
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("indicatore");
    if (i === 0) dot.classList.add("actives");
    dot.addEventListener("click", () => {
        goToSlide(i);
        resetAutoSlide();
    });
    indicatorse.appendChild(dot);
}

// تحديث المؤشر
function updateIndicatorse() {
    document.querySelectorAll(".indicatore").forEach((dot, i) => {
        dot.classList.toggle("actives", i === currentIndex);
    });
}

// الانتقال إلى شريحة معينة
function goToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = index;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${index * 100}vw)`;

    updateIndicatorse();
    setTimeout(() => isTransitioning = false, 500);
}

// التالي
function nextSlide() {
    if (currentIndex === totalSlides - 1) {
        goToSlide(0); // الرجوع مباشرة إلى الشريحة الأولى
    } else {
        goToSlide(currentIndex + 1);
    }
    resetAutoSlide();
}

// السابق
function prevSlide() {
    if (currentIndex === 0) {
        goToSlide(totalSlides - 1); // الرجوع مباشرة إلى الشريحة الأخيرة
    } else {
        goToSlide(currentIndex - 1);
    }
    resetAutoSlide();
}

// التنقل بلوحة المفاتيح
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
});

// النقر بالفأرة على الجوانب
document.querySelector(".right").addEventListener("click", nextSlide);
document.querySelector(".left").addEventListener("click", prevSlide);

// تشغيل التمرير التلقائي
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // تغيير الشرائح كل 5 ثوانٍ
}

// إعادة ضبط التمرير التلقائي عند التفاعل
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();
/* تشغيل السلايدر تلقائيًا عند بدء الصفحة

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav1 .nav .navigation ');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});











        if (window.innerWidth > 768) {
            const list = document.querySelectorAll('.list');
            const indicator = document.querySelector('.indicator'); 
            let activeItem = document.querySelector('.list.active'); 
            let lastClickedItem = activeItem; 
        
            function updateIndicator(target) {
                if (target) {
                    const index = [...list].indexOf(target);
                    indicator.style.transform = `translateX(calc(70px * ${index}))`; 
                }
            }
        
            function addHoverEffect() {
                this.classList.add('active');
                updateIndicator(this);
            }
        
            function removeHoverEffect() {
                if (this !== activeItem) {
                    this.classList.remove('active');
                    updateIndicator(activeItem);
                }
            }
        
            function setActiveItem() {
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                activeItem = this;
                lastClickedItem = this;
                this.classList.add('active');
                updateIndicator(this);
            }
        
            document.addEventListener('mousemove', () => {
                if (window.innerWidth <= 768) return; // إيقاف الكود إذا كانت الشاشة صغيرة
        
                const hoveredItem = [...list].find(item => item.matches(':hover'));
                if (!hoveredItem) {
                    list.forEach(item => item.classList.remove('active'));
                    if (lastClickedItem) {
                        lastClickedItem.classList.add('active');
                        updateIndicator(lastClickedItem);
                        activeItem = lastClickedItem;
                    } else {
                        activeItem = document.querySelector('.list');
                        activeItem.classList.add('active');
                        updateIndicator(activeItem);
                    }
                }
            });
        
            list.forEach((item) => {
                item.addEventListener('mouseover', addHoverEffect);
                item.addEventListener('mouseleave', removeHoverEffect);
                item.addEventListener('click', setActiveItem);
            });
        
            updateIndicator(activeItem);
        }
        */
        document.addEventListener("DOMContentLoaded", function () {
            const menuToggle = document.getElementById("mobile-menu");
            const menu = document.getElementById("menu");
        
            menuToggle.addEventListener("click", function () {
                menu.classList.toggle("active"); // تفعيل أو إلغاء القائمة
            });
        
            // إخفاء القائمة عند النقر في أي مكان خارجها
            document.addEventListener("click", function (event) {
                if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                    menu.classList.remove("active");
                }
            });
        });
        