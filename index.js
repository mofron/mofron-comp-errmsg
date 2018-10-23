/**
 * @file   mofron-comp-errmsg/index.js
 * @brief  error message component
 * @author simpart
 */
const mf = require('mofron');
const Message = require('mofron-comp-message');
mf.comp.ErrMsg = class extends Message {
    
    /**
     * initialize component
     * 
     * @param p1 (object) component option
     * @param p1 (string) message text
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
