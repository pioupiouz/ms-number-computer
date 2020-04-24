const MM = require('ms-manager');  
let config = require(`./config.json`) || {};  
const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://59600f70e9394101a8d5857429f3e746@o382925.ingest.sentry.io/5212518' });

MM.init(config, (err, serviceInfo) => {  
    if (err) {  
        return console.error(err);  
    }
    
    /**  
    * Our micro-service is now up. 
    * */
    console.log('#Micro-service UP#');  
    
    /**
    * You can now subscribe to specific message
    */
    MM.subscribe('add', (bdy, msg) => {  
        /**
        * TODO: Uncomment when operationnal
        **/
        // const computer = require('./computer');
        // try {
        //     const result = computer.add(bdy.a, bdy.b);
        //     msg.reply({ result });
        // } catch (err) {
        //     console.error(err);
        //     return msg.replyErr(err);
        // }
    });
});