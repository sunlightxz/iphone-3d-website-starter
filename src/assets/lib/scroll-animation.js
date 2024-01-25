import gsap from "gsap";

export const scrollAnimation =(position , target, onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position , {
        x : 6.0015427208,
        y :2.8914158961,
        z :3.6020302512,
        scrollTrigger :{
            trigger : '.about',
            start : "top bottom",
            end : "top top",
            scrub : 2 ,
            immediateRender :false 
        },
        onUpdate
    })

    tl.to(target , {
        x : 0.00,
        y :0.00,
        z :0.00,
        scrollTrigger :{
            trigger : '.about',
            start : "top bottom",
            end : "top top",
            scrub : 2 ,
            immediateRender :false 
        },
    
    })
    tl.to('hero' , {
        opacity:0 ,
        scrollTrigger :{
            trigger : '.about',
            start : "top bottom",
            end : "top top",
            scrub : 2 ,
            immediateRender :false 
        },
    
    })
}