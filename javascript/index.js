 // debounce
const debounce=(fn,delay)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>fn(...args),delay)
    }
}
const searchApi=(query)=>{
    console.log("scmjdjc")
}     
const  debounceSearch=debounce(searchApi,400)
document.querySelector("#search").addEventListener("input",(e)=>{
    debounceSearch(e.target.value)
}); 


//throttling
const throttle=(fn,limit)=>{
    let lastcall=0;
    return (...args)=>{
       const now=Date.now();
        if(lastcall-now >=limit){
            lastcall=now;
            fn(...args)
        }
    }
}
const scrollFun=()=>{
    console.log(`${new Date().toLocaleDateString()}`)
};
const throttleFun=throttle(scrollFun,2000);
window.addEventListener("scroll",throttleFun);

