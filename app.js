


function textChanger (number){
    let element =  document.querySelector(".right-text");
    let image = document.getElementById("right-image");
    let firstText = document.querySelector(".first-text");
    let secondText = document.querySelector(".second-text");
    let thirdText = document.querySelector(".third-text");
    firstText.classList.remove("text-color-change");
    secondText.classList.remove("text-color-change");
    thirdText.classList.remove("text-color-change");

    switch (number) {
        case 1:
            firstText.classList.add("text-color-change"); 
            element.innerHTML = "At Dare21, we believe in delivering nothing less than the highest quality. This commitment has guided us to develop a comprehensive in-house approach. <br><br>By managing all aspects of business development services under one roof, we avoid the pitfalls of subcontracting, delays, and miscommunications.";
            image.setAttribute("src","https://assets-global.website-files.com/65903a02237aa7cdad473d3b/659725a730bc54288091a700_Value2-p-500.webp")
            break;
        case 2:
            secondText.classList.add("text-color-change"); 
            element.innerHTML = "Dare21's mission extends beyond borders. Embracing challenging projects globally has enriched our experience and broadened our scope. <br><br>Our data-driven strategies and diverse international team enable us to achieve a significant global footprint.";
            image.setAttribute("src","https://assets-global.website-files.com/65903a02237aa7cdad473d3b/659725750cd4d3b13a7074c9_Value1-p-500.webp")
            break;
        case 3:
            thirdText.classList.add("text-color-change"); 
            element.innerHTML = "Innovation lies at the core of Dare21. We're dedicated to staying ahead, rapidly adapting to new technologies and trends. Our team constantly experiments and learns, ensuring we're always equipped with the latest insights and techniques. <br><br>This approach keeps us at the cutting edge, ready to offer you solutions that give you a distinct edge in a dynamic market.";
            image.setAttribute("src","https://assets-global.website-files.com/65903a02237aa7cdad473d3b/659725edadcc8297a6e527cb_Value3-p-500.webp")
            break;    
    };
   
     
}