let tl=gsap.timeline()
tl.from(".nav img ,.nav-middle h3 ,.nav-right h3,.nav-right button ",{
    y:-100,
    opacity:0,//initially
    duration:1,
    // delay:0.5,
    stagger:0.5
})
//this one starts after ending above animation due to timeline
tl.from(".center-text h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.5,
    
})
tl.from(".center-text span",{
    opacity:0,
    scale:0,
    duration:1
})

tl.from(".left-img",{
    opacity:0,
    scale:0,
    duration:1
})
tl.from(".right-img",{
    opacity:0,
    scale:0,
    duration:1
})
tl.from(".scroll",{
    opacity:0,
    scale:0,
    duration:1
})
tl.to(".scroll",{
    y:30,
    duration:1,
    yoyo:true,
    repeat:-1
})