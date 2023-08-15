function generateSVG() {

    const { SVG, registerWindow } = require('@svgdotjs/svg.js')
    const { createSVGWindow } = require('svgdom')
    const window = createSVGWindow()
    const document = window.document
    registerWindow(window, document)

    const canvas = SVG(document.documentElement).size(300, 300)
    canvas.rect(100, 100).move(50,50).fill('yellow').linkTo('http://svgdotjs.github.io/')
    canvas.rect(100, 100).move(200,200).fill('red').linkTo('http://svgdotjs.github.io/')
    return canvas.svg();
}

module.exports = generateSVG;