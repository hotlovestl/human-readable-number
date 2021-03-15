module.exports = function toReadable (number) {
    let hundreds = Math.floor(number / 100);
    let dozens = Math.floor((number - hundreds * 100 ) / 10);
    let numbers = Math.floor( number - hundreds * 100 - dozens *10);

    let ArrNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',  'seventeen', 'eighteen', 'nineteen'];
    let ArrDozens = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ','eighty ', 'ninety '];
    let ArrHundreds = ArrNumbers[hundreds] + ' hundred ';

    if (number == 0){
        return 'zero';
    }else if (dozens == 1 && number.toString().length > 2){
        dozens = 0;
        numbers = number - hundreds * 100
        return (ArrHundreds + ArrNumbers[numbers]);
    }else if (dozens == 1 && number.toString().length <= 2){
        return  ArrNumbers[numbers + 10];
    }
    else{
        if ( hundreds >= 1){
            ArrHundreds = ArrHundreds;
        }else{
            ArrHundreds = ''; 
        }
        let HunDozNum = (ArrHundreds + ArrDozens[dozens]  + ArrNumbers[numbers]).split(' ')
        let res = [];
        for( let i =0; i < HunDozNum.length; i++){
        if(HunDozNum[i].length > 0)
        res.push(HunDozNum[i])
        }
        return res.join(' ').trim();
        }
}
