/**
 * @file   mofron-comp-errmsg/index.js
 * @brief  error message component
 *         message component with default mainColor config
 * @author simpart
 */
const mf = require('mofron');
const Message = require('mofron-comp-message');
mf.comp.ErrMsg = class extends Message {
    
    /**
     * initialize component
     * 
     * @param (mixed) mofron-comp-message parameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('ErrMsg');
            this.prmOpt(po);
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
            this.color(
                [255,50,50],
                [255,240,240],
                [255,50,50]
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.ErrMsg;
/* end of file */
