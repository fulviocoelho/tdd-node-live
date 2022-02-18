exports.age = (date) => {
    date = date.split('/')

    const date_ob = new Date();
    const year = date_ob.getFullYear();
    const month = parseInt(("0" + (date_ob.getMonth() + 1)).slice(-2));
    const idade = parseInt(year) - parseInt(date[2]);

    if(month < parseInt(date[0])){
        return idade - 1
    }

    return idade
}