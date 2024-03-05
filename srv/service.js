const cds = require('@sap/cds');
const { select } = require('@sap/cds/libx/_runtime/hana/execute');
module.exports = cds.service.impl(async function () {
    let {
        table
    } = this.entities;
    debugger
   this.before('READ',table,async (req,next)=>{
    debugger

   })
})