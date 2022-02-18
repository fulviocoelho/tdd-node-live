exports.logger_factory = (fn = console.log) => {
    const ck = require('chalk')
    return {
        info: (...args) => fn(ck.blue('INFO::'), ...args),
        alert: (...args) => fn(ck.yellow('ALERT::'), ...args),
        error: (...args) => fn(ck.red('ERROR::'), ...args),
        nl: () => fn()
    }
}