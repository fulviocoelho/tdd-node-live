const { logger_factory } = require('./factories/logger');
const { age } = require('./usefull/calculate');
const data = require('./data/data.json');
const logger = logger_factory();

module.exports.main = (dt = data, lg = logger) => {
    try{
        let invalid_worker = [];

        for(const worker of dt.workers){
            const worker_age = age(worker.birthday)
    
            if(worker_age > 70){
                invalid_worker.push(worker.name)
            }
    
            lg.info(`Name: ${worker.name}`)
            lg.info(`Age: ${worker_age}`)
            lg.nl()
        }
    
        if(invalid_worker.length > 0){
            lg.alert(`There are ${invalid_worker.length} invalid workers!`)
        }
    }catch(e){
        lg.error(e)
    }
}