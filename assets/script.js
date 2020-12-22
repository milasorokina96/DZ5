function padString(str, num, sym, flag) {
    let symR = sym;
    if (num > str.length){
        num = num - str.length;
        for(let i = 1; i < num; i++){
            symR += sym;
        }
        if (flag === true){
            str = str + symR;
        } else {
            str = symR + str;
        }
    } else {
        str;
    }
    return str;
}

let a1 = padString('Ivan', 8, '*', true);
console.log(a1);

let a2 = padString('Ivan', 9, '*', false);
console.log(a2);

let a3 = padString('Ivan', 4, '*', true);
console.log(a3);