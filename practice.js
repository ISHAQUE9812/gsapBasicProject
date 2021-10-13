let  tl = gsap.timeline();

tl.from( 'nav h4' ,{
    y:20,
    opacity:0,
    duration: 1
})

tl.from('nav i',{
    stagger:0.5,
    opacity:0,
    duration:1,
    y:20
}, "-=.5")

tl.from(".anims",{
    stagger:0.5,
    opacity:0,
    duration:1,
    y:-20,
    ease: "expo.inOut"
},'-=.5')

tl.from('#imgBlock',{
    stagger:.5,
    opacity:0,
    width:0,
    duration:2,
    x:-20,
    ease: "expo.inOut"
},'-=.5 ')

tl.from('#one , #two , #three',{
    stagger:.5,
    opacity:0,
    width:0,
    duration:2,
    y:+20,
    ease: "expo.inOut"
},'-=2')




