let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let first = [];
first = a.map(function(value){
    return value +3;
});

let second = [];
second = b.map(function(value){
    return value;
});

let staticArmor = 10;


let higher = 0;
let five_higher = 0;
let ten_higher = 0;
let fifteen_higher = 0;
let crit = 0;
// let equal_crit = 0;
let lower = 0;
let equal = 0;
let twen = 0;
let hit = 0;
let miss = 0;



for(ia = 1; ia < 21; ia++){
    if(ia == 20){
        hit++
    }else if(ia == 1){
        miss++
    }
    else if(first[ia - 1] >= staticArmor && ia !== 20 ){
        hit++
    }else if(first[ia - 1] < staticArmor && ia !== 1) {
        miss++
    }
    
    for(ib = 1; ib < 21; ib++){
        if(ia !== 20 && ia !== 1 && ib !== 20 && ib !== 1){
            if(first[ia - 1] > second[ib - 1]){
                higher++
                if(first[ia - 1] - second[ib - 1] >= 5){
                    five_higher++
                    if(first[ia - 1] - second[ib - 1] >= 10){
                        ten_higher++
                        if(first[ia - 1] - second[ib - 1] >= 15){
                            fifteen_higher++
                            if(first[ia - 1] - second[ib - 1] >= 20){
                                crit++
                            }
                        }
                    }
                }
            }else if(first[ia - 1] < second[ib - 1]){
                lower++
            }else if(first[ia - 1] == second[ib - 1]){
                equal++
            }
        }else if(ia == 20){
            if(ia == ib){
                equal++
            }else {
                higher++
                crit++
            }      
        }else if(ia == 1){
            if(ia == ib){
                equal++
            }else {
                lower++
            }
        }else if(ib == 20){
            if(ib == ia){
                equal++
            }else {
                lower++
            }
        }else if(ib == 1){
            if(ib == ia){
                equal++
            }else {
                higher++
            } 
        }
    }
}   


higher = higher/4;
five_higher = five_higher/4;
ten_higher = ten_higher/4;
fifteen_higher = fifteen_higher/4;
crit = crit/4;
// equal_crit = equal_crit/4;
staticArmorChance = Math.round((hit/20)*100);
lower = lower/4;
equal = equal/4;


console.log(`Шанс выкинуть больше ${higher}%`);
console.log(`Шанс выкинуть меньше ${lower}%`);
console.log(`Шанс выкинуть одинаково ${equal}%`);
console.log(`Шанс выкинуть на пять больше ${five_higher}%`);
console.log(`Шанс выкинуть на десять больше ${ten_higher}%`);
console.log(`Шанс выкинуть на пятнацать больше ${fifteen_higher}%`);
console.log(`Шанс крита или на 20 больше ${crit}%`);
// console.log(`Шанс двойного крита ${equal_crit}%`);

console.log(`Шанс попадания против брони ${staticArmor} равен ${staticArmorChance}%`)


// let lessThanFive = higher - five_higher;

// console.log(lessThanFive);
// console.log(five_higher)
// console.log(ten_higher)
// console.log(fifteen_higher)
// console.log(crit)

// let totalDamage1 = (higher - five_higher) + five_higher + ten_higher + (fifteen_higher*2) + (crit*2);

// console.log(`Средний полученный урон без брони: ${totalDamage1}`)

// let totalDamage2 = (higher - five_higher)/2 + five_higher + ten_higher + fifteen_higher + (crit*2);

// console.log(`Средний полученный урон в легкой броне: ${totalDamage2}`)

// let totalDamage3 = (higher - five_higher)/2 + five_higher/2 + ten_higher + fifteen_higher + (crit*2);

// console.log(`Средний полученный урон в тяжелой: ${totalDamage3}`)

// let noArmorDamage = 0;


// NO ARMOR
let num = 1000000;
let Dam = 0;
let critGap = 2;


for(i = 0;i<num;i++){
    let randomDamage = Math.random()*11+1;
    let a = Math.round(Math.random()*19+1);
    let hitGap = Math.round((higher/100)*20);
    let fiveGap = Math.round((five_higher/100)*20);
    let tenGap = Math.round((ten_higher/100)*20);
    let fifteenGap = Math.round((fifteen_higher/100)*20);
    let critGap = Math.round(Math.random()*19+1);

    if (critGap == 20 ){
        Dam += randomDamage*2
        // console.log('CRIT! NO ARMOR')
        
        continue;
    }


    if(a < fifteenGap){
        Dam += randomDamage*2
    }else if(a < tenGap){
        Dam += randomDamage
    }else if(a < fiveGap){
        Dam += randomDamage
    }else if(a < hitGap){
        Dam += randomDamage
    }
}
Dam = Math.round(Dam)
let control = Dam;
console.log(control);
console.log('100')
Dam = 0;

// LIGHT ARMOR
for(i = 0;i<num;i++){
    let randomDamage = Math.random()*11+1;
    let a = Math.round(Math.random()*19+1);
    let hitGap = Math.round((higher/100)*20);
    let fiveGap = Math.round((five_higher/100)*20);
    let tenGap = Math.round((ten_higher/100)*20);
    let fifteenGap = Math.round((fifteen_higher/100)*20);
    let critGap = Math.round(Math.random()*19+1);

    if (critGap == 20 ){
        Dam += randomDamage*2
        // console.log('CRIT! LIGHT')
        continue;
    }

    if(a < fifteenGap){
        Dam += randomDamage
    }else if(a < tenGap){
        Dam += randomDamage
    }else if(a < fiveGap){
        Dam += randomDamage
    }else if(a < hitGap){
        Dam += randomDamage/2
    }
}
Dam = Math.round(Dam);
Dam = (100/control)*Dam;
Dam = Math.round(Dam);
console.log(Dam);
Dam = 0;

// HEAVY ARMOR
for(i = 0;i<num;i++){
    let randomDamage = Math.random()*11+1;
    let a = Math.round(Math.random()*19+1);
    let hitGap = Math.round((higher/100)*20);
    let fiveGap = Math.round((five_higher/100)*20);
    let tenGap = Math.round((ten_higher/100)*20);
    let fifteenGap = Math.round((fifteen_higher/100)*20);
    let critGap = Math.round(Math.random()*19+1);

    if (critGap == 20 ){
        Dam += randomDamage
        // console.log('CRIT! HEAVY')
        continue;
    }

    if(a < fifteenGap){
        Dam += randomDamage
    }else if(a < tenGap){
        Dam += randomDamage
    }else if(a < fiveGap){
        Dam += randomDamage/2
    }else if(a < hitGap){
        Dam += randomDamage/2
    }
}
Dam = Math.round(Dam)
Dam = (100/control)*Dam;
Dam = Math.round(Dam);
console.log(Dam);

