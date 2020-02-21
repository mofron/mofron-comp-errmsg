/**
 * @file mofron-comp-errmsg/index.js
 * @brief error message component
 *        message component with default mainColor config
 * @license MIT
 */
const Message = require('mofron-comp-message');
module.exports = class extends Message {
    /**
     * initialize component
     * 
     * @param (mixed) mofron-comp-message parameter
     * @short text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name('ErrMsg');
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     *
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.color([255,50,50], [255,240,240], [255,50,50]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
   
    /**
     * error message text setter/getter
     * 
     * @param (mixed) string: error message string
     *                moforn-comp-text: error message text component
     * @return (mofron-comp-text) error message text component
     * @type parameter
     */
    text (prm) {
        try {
	    let ret = super.text(prm);
	    if (undefined !== prm) {
                this.text().mainColor(this.mainColor(),{ passive: true });
            }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
