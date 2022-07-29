import { getElementRect, getBrowserObject } from '../../utils/index.js'

/**
 *
 * Returns the parent element of the selected DOM-element.
 *
 * <example>
    :index.html
    <div class="parent">
        <p>Sibling One</p>
        <p>Sibling Two</p>
        <p>Sibling Three</p>
    </div>
    :parentElement.js
    it('should get class from parent element', async () => {
        const elem = await $$('p');
        const parent = await elem[2].parentElement()
        console.log(await parent.getAttribute('class')); // outputs: "parent"
    });
 * </example>
 *
 * @alias element.parentElement
 * @return {Element}
 * @type utility
 */
export default async function pinchIn (this: WebdriverIO.Element) {
    const browser = getBrowserObject(this)
    await this.scrollIntoView({ block: 'center', inline: 'center' })
    // await new Promise((resolve) => setTimeout(resolve, 500000))
    const rect = await getElementRect(this)
    const x = Math.floor(rect.x + (rect.width / 2))
    const y = Math.floor(rect.y + (rect.height / 2))
    const pinchWidth = Math.floor(rect.width)
    const pinchHeight = Math.floor(rect.height)

    await browser.pause(16000)
    return browser.actions([
        browser.action('pointer', { parameters: { pointerType: 'touch' } })
            .move({ x, y })
            .down({ pressure: 1 })
            // .pause(50)
            .move({ x: x - Math.floor(pinchWidth * .1), y: y - Math.floor(pinchHeight * .1), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .2), y: y - Math.floor(pinchHeight * .2), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .3), y: y - Math.floor(pinchHeight * .3), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .4), y: y - Math.floor(pinchHeight * .4), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .5), y: y - Math.floor(pinchHeight * .5), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .6), y: y - Math.floor(pinchHeight * .6), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .7), y: y - Math.floor(pinchHeight * .7), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .8), y: y - Math.floor(pinchHeight * .8), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth * .9), y: y - Math.floor(pinchHeight * .9), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .move({ x: x - Math.floor(pinchWidth *  1), y: y - Math.floor(pinchHeight *  1), duration: 1000, /* tangentialPressure: 1, pressure: 1 */ })
            .up(),
        browser.action('pointer', { parameters: { pointerType: 'touch' } })
            .move({ x, y })
            .down({ pressure: 1 })
            // .pause(50)
            .move({ x: x + Math.floor(pinchWidth * .1), y: y + Math.floor(pinchHeight * .1), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .2), y: y + Math.floor(pinchHeight * .2), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .3), y: y + Math.floor(pinchHeight * .3), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .4), y: y + Math.floor(pinchHeight * .4), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .5), y: y + Math.floor(pinchHeight * .5), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .6), y: y + Math.floor(pinchHeight * .6), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .7), y: y + Math.floor(pinchHeight * .7), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .8), y: y + Math.floor(pinchHeight * .8), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth * .9), y: y + Math.floor(pinchHeight * .9), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .move({ x: x + Math.floor(pinchWidth *  1), y: y + Math.floor(pinchHeight *  1), duration: 1000, tangentialPressure: 1, pressure: 1 })
            .up()
    ])
}
