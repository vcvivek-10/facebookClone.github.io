// sidebar
const menuItems = document.querySelectorAll(".menu-item");
// const menuItemsOne = document.querySelector("#notifications");
// const menuNoti = document.querySelector(".notifications-popup");

// messages 
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");


// theme 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector(".customize-theme");
const closeModal = document.querySelector(".close-btn");
const fontSize = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const colorChanger = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


// ======================= remove active class from all menu item ===========================  

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != 'notifications') {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});

// menuItemsOne.addEventListener("click",()=>{
//     menuNoti.classList.toggle("active");
// })


// ====================== messages =========================  

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    })
}


// search chat
messageSearch.addEventListener("keyup", searchMessage);


// highlight card when message menu item is clicked
messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector(".notification-count").style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000)
});



// ======================== theme customization =========================== 

// open modal 
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close modal 

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}
// close btn
closeModal.addEventListener("click", () => {
    themeModal.style.display = "none";
})

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);


//  ========================= font Size ===============================

// remove active class form spans or font size selectors
const removeSizeSeclector = () =>{
    fontSize.forEach(size =>{
        size.classList.remove("active")
    })
}

fontSize.forEach(size =>{
    size.addEventListener("click", () =>{

        removeSizeSeclector();
        size.classList.toggle("active");
        let fontSize ;

    if(size.classList.contains("font-size-1")){
        fontSize = "10px";
        root.style.setProperty('-- --sticky-top-left','5.4rem');
        root.style.setProperty('-- --sticky-top-right','5.4rem');
    }else if(size.classList.contains("font-size-2")){
        fontSize = "13px"
        root.style.setProperty('-- --sticky-top-left','5.4rem');
        root.style.setProperty('-- --sticky-top-right','-7rem');
    }else if(size.classList.contains("font-size-3")){
        fontSize = "16px"
        root.style.setProperty('-- --sticky-top-left','-2rem');
        root.style.setProperty('-- --sticky-top-right','-17rem');
    }else if(size.classList.contains("font-size-4")){
        fontSize = "19px"
        root.style.setProperty('-- --sticky-top-left','-5rem');
        root.style.setProperty('-- --sticky-top-right','-25rem');
    }else if(size.classList.contains("font-size-5")){
        fontSize = "22px"
        root.style.setProperty('-- --sticky-top-left','-10rem');
        root.style.setProperty('-- --sticky-top-right','-33rem');
    }

    // change font size of root html Element 
    document.querySelector('html').style.fontSize = fontSize;
    })

})


// ================== change primary colors =========================== 

// remove active class from colors 

const activeClassColor = () =>{
    colorChanger.forEach(colorPicker =>{
        colorPicker.classList.remove("active");
    })
}


colorChanger.forEach(color =>{
    
    color.addEventListener("click", () =>{

        let primaryHue;
        activeClassColor();
        color.classList.add('active');
        
        if(color.classList.contains("color-1")){
            primaryHue = 252;
        }else if(color.classList.contains("color-2")){
            primaryHue = 52;
        }else if(color.classList.contains("color-3")){
            primaryHue =352;
        }else if(color.classList.contains("color-4")){
            primaryHue =152;
        }else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        root.style.setProperty("--primary-color-hue",primaryHue);
    })
})


// =================================== background color =====================================

// them background color values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

Bg1.addEventListener("click",() =>{
    Bg1.classList.add("active");
    // remove active calss from others 
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");

    // remove customize changes from local storage 
    window.location.reload();
});

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg2.addEventListener("click",() =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add("active")

    // remove class from others 
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
})

Bg3.addEventListener("click",() =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add("active");

    // remove class form others
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
})