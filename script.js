// const showele = document.querySelectorAll(".show")

let numhtml = document.querySelector(".ht")
let counthtml = 0

setInterval(()=>{
        if(numhtml.classList.contains("show")){
    if(counthtml == 90){
        clearInterval()
    }
    else{
        
        counthtml += 1
        numhtml.innerHTML = counthtml +"%"
    }}
    else{
        counthtml = 0;
    }
},20)

let numcss = document.querySelector(".ssc")
let countcss = 0

setInterval(()=>{
    if(numcss.classList.contains("show")){
    if(countcss == 85){
        clearInterval()
    }
    else{
        
        countcss += 1
        numcss.innerHTML = countcss +"%"
    }}
    else{
        countcss = 0;
    }
},20)



let numjs = document.querySelector(".javascript")
let countjs = 0

setInterval(()=>{
    if(numjs.classList.contains("show")){
    if(countjs == 80){
        clearInterval()
    }
    else{
        
        countjs += 1
        numjs.innerHTML = countjs +"%"
        
    }} else{
        countjs = 0;
    }
},19)

let numsql = document.querySelector(".sq")
let countsql = 0

setInterval(()=>{
    if(numsql.classList.contains("show")){
    if(countsql == 66){
        clearInterval()
    }
    else{
        
        countsql += 1
        numsql.innerHTML = countsql +"%"
    }} else{
        countsql = 0;
    }
},25)


const ob = new IntersectionObserver((en)=>{
    
    
    en.forEach((e)=>{
        // console.log(e)
        if(e.isIntersecting){
            e.target.classList.add("show")
        }else{
            e.target.classList.remove("show")
        }
})
})
const hiddenele = document.querySelectorAll(".hidden")
hiddenele.forEach((el)=> ob.observe(el))

