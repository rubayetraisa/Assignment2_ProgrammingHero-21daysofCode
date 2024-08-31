const menu = document.querySelector(".menu-list");
const nextSection = document.querySelector(".features"); 
let productHtml = ``;

function add() {
    const button = document.querySelector('.showButton');
    button.remove();
    productHtml = `
    <div class="newlyAdded" style="margin-bottom: 100px;">
        <div class="col-span-4 food-col">
                    <div>
                        <img src="images/menu1.jpg">
                    </div>
                    <div>
                        <div class="food-des">
                            <p style="font-weight:700; font-size:28px;">Gyro Burgur</p>
                            <p><span class="fa fa-star checked" style="color:#F48E28"></span>4.9</p>
                        </div>
                        <div class="food-des">
                            <button>Add to cart</button>
                            <p>$15.00</p>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 food-col">
                    <div>
                        <img src="images/menu1.jpg">
                    </div>
                    <div>
                        <div class="food-des">
                            <p style="font-weight:700; font-size:28px;">Gyro Burgur</p>
                            <p><span class="fa fa-star checked" style="color:#F48E28"></span>4.9</p>
                        </div>
                        <div class="food-des">
                            <button>Add to cart</button>
                            <p>$15.00</p>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 food-col style="margin:5px">
                    <div>
                        <img src="images/menu1.jpg">
                    </div>
                    <div>
                        <div class="food-des">
                            <p style="font-weight:700; font-size:28px;">Gyro Burgur</p>
                            <p><span class="fa fa-star checked" style="color:#F48E28"></span>4.9</p>
                        </div>
                        <div class="food-des">
                            <button>Add to cart</button>
                            <p>$15.00</p>
                        </div>
                    </div>
                </div>


                <div class="col-span-4 food-col">
                    <div>
                        <img src="images/menu1.jpg">
                    </div>
                    <div>
                        <div class="food-des">
                            <p style="font-weight:700; font-size:28px;">Gyro Burgur</p>
                            <p><span class="fa fa-star checked" style="color:#F48E28"></span>4.9</p>
                        </div>
                        <div class="food-des">
                            <button>Add to cart</button>
                            <p>$15.00</p>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 food-col">
                    <div>
                        <img src="images/menu1.jpg">
                    </div>
                    <div>
                        <div class="food-des">
                            <p style="font-weight:700; font-size:28px;">Gyro Burgur</p>
                            <p><span class="fa fa-star checked" style="color:#F48E28"></span>4.9</p>
                        </div>
                        <div class="food-des">
                            <button>Add to cart</button>
                            <p>$15.00</p>
                        </div>
                    </div>
                </div>


                <div class="col-span-4 food-col">
                    <div>
                        <img src="images/menu1.jpg">
                    </div>
                    <div>
                        <div class="food-des">
                            <p style="font-weight:700; font-size:28px;">Gyro Burgur</p>
                            <p><span class="fa fa-star checked" style="color:#F48E28"></span>4.9</p>
                        </div>
                        <div class="food-des">
                            <button>Add to cart</button>
                            <p>$15.00</p>
                        </div>
                    </div>
                </div>

                <div class="showButton col-span-12" style="margin-top:20px">
                    <button onclick="removeProduct()">Show Less Products <i class="fa-solid fa-circle-arrow-right"></i></button>
                </div>

    </div>
    `;
    
    
    menu.insertAdjacentHTML('beforeend', productHtml);
    nextSection.style.marginTop = "1000px";
}

function removeProduct(){
    const p=document.querySelector(".newlyAdded");
    p.remove();
    
    const buttonHtml = `
    <div class="showButton col-span-12">
        <button onclick="add()">Show More Products <i class="fa-solid fa-circle-arrow-right"></i></button>
    </div>
`;
menu.insertAdjacentHTML("beforeend", buttonHtml);
}



const slides=document.querySelectorAll(".slide");
let slideIndex=0;
let intervalId=null;

// initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){
    if(slides.length>0)
    {
        slides[slideIndex].classList.add("displaySlide");
        intervalId=setInterval(nextSlide,5000);
        
    }
}

function showSlide(index){
    if(index>=slides.length){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length-1;
    }

    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    }
    )
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}









function subscribe(event){
    const email=document.getElementById("email").value;
    const sub=document.getElementsByClassName("sub-des")[0];

    let H1 = document.getElementById("responseMessage");


    if (!H1) {
        H1 = document.createElement("h1");
        H1.id = "responseMessage";
        H1.style.color = "white";
        H1.style.fontSize = "20px";
        sub.appendChild(H1);
    }

    if (email.trim() === "") {
        H1.textContent = 'Please enter a valid email address';
    }
    else{
        H1.textContent="Subscription Successful!";
    }

    sub.append(H1);

}
