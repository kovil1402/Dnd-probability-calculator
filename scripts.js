window.addEventListener('load', function () {
    let buttonContainer = document.querySelector('.button-container')
    let el = document.createElement('button');
    el.className = 'calc-button mui-btn mui-btn--danger mui-btn--raised';
    el.setAttribute('style', 'margin:5px;font-size:20px;text-transform: initial;height:45px;')
    el.innerHTML = 'Посчитать вероятность';
    buttonContainer.appendChild(el);

    el = document.createElement('button');
    el.className = 'D20-button mui-btn mui-btn--danger mui-btn--raised';
    el.setAttribute('style', 'margin:5px;font-size:20px;text-transform: initial;height:45px;')
    el.innerHTML = 'Бросить 1D20';
    buttonContainer.appendChild(el);

    el = document.createElement('button');
    el.className = 'spells-button mui-btn mui-btn--danger mui-btn--raised';
    el.setAttribute('style', 'margin:5px;font-size:20px;text-transform: initial;height:45px;')
    el.innerHTML = 'Случайное заклинание';
    document.querySelector('.spells').appendChild(el);


    let calcButton = document.querySelector('.calc-button')
    calcButton.addEventListener('click', () => {
        let firstValue = document.querySelector('#player').value;
        let secondValue = document.querySelector('#npc').value;

        if (firstValue == '') { firstValue = 0 };
        if (secondValue == '') { secondValue = 0 };

        firstValue = parseInt(firstValue);
        secondValue = parseInt(secondValue);

        console.log(firstValue + ' Первое значение')
        console.log(secondValue + ' Второе значение')

        // PROBABLITY CALCULATIONS!!

        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        let first = [];
        first = a.map(function (value) {
            return value + firstValue;
        });

        let second = [];
        second = a.map(function (value) {
            return value + secondValue;
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
        let hit = 0;
        let miss = 0;



        for (ia = 1; ia < 21; ia++) {
            if (ia == 20) {
                hit++
            } else if (ia == 1) {
                miss++
            }
            else if (first[ia - 1] >= staticArmor && ia !== 20) {
                hit++
            } else if (first[ia - 1] < staticArmor && ia !== 1) {
                miss++
            }

            for (ib = 1; ib < 21; ib++) {
                if (ia !== 20 && ia !== 1 && ib !== 20 && ib !== 1) {
                    if (first[ia - 1] > second[ib - 1]) {
                        higher++
                        if (first[ia - 1] - second[ib - 1] >= 5) {
                            five_higher++
                            if (first[ia - 1] - second[ib - 1] >= 10) {
                                ten_higher++
                                if (first[ia - 1] - second[ib - 1] >= 15) {
                                    fifteen_higher++
                                    if (first[ia - 1] - second[ib - 1] >= 20) {
                                        crit++
                                    }
                                }
                            }
                        }
                    } else if (first[ia - 1] < second[ib - 1]) {
                        lower++
                    } else if (first[ia - 1] == second[ib - 1]) {
                        equal++
                    }
                } else if (ia == 20) {
                    if (ia == ib) {
                        equal++
                    } else {
                        higher++
                        crit++
                    }
                } else if (ia == 1) {
                    if (ia == ib) {
                        equal++
                    } else {
                        lower++
                    }
                } else if (ib == 20) {
                    if (ib == ia) {
                        equal++
                    } else {
                        lower++
                    }
                } else if (ib == 1) {
                    if (ib == ia) {
                        equal++
                    } else {
                        higher++
                    }
                }
            }
        }


        higher = higher / 4;
        five_higher = five_higher / 4;
        ten_higher = ten_higher / 4;
        fifteen_higher = fifteen_higher / 4;
        crit = crit / 4;
        // equal_crit = equal_crit/4;
        staticArmorChance = Math.round((hit / 20) * 100);
        lower = lower / 4;
        equal = equal / 4;


        console.log(`Шанс выкинуть больше ${higher}%`);
        console.log(`Шанс выкинуть меньше ${lower}%`);
        console.log(`Шанс выкинуть одинаково ${equal}%`);
        console.log(`Шанс выкинуть на пять больше ${five_higher}%`);
        console.log(`Шанс выкинуть на десять больше ${ten_higher}%`);
        console.log(`Шанс выкинуть на пятнацать больше ${fifteen_higher}%`);
        // console.log(`Шанс крита или на 20 больше ${crit}%`);
        // console.log(`Шанс двойного крита ${equal_crit}%`);
        // console.log(`Шанс попадания против брони ${staticArmor} равен ${staticArmorChance}%`)

        document.querySelector('.output').innerHTML = `Шанс выкинуть больше ${higher}% <br>
         Шанс выкинуть меньше ${lower}%<br>
         Шанс выкинуть одинаково ${equal}%<br>
         Шанс выкинуть на пять больше ${five_higher}%<br>
         Шанс выкинуть на десять больше ${ten_higher}%<br>
         Шанс выкинуть на пятнацать больше ${fifteen_higher}%`;

        document.querySelector('.output').setAttribute('style', 'opacity:1;')

        // // NO ARMOR
        // let num = 1000000;
        // let Dam = 0;
        // let critGap = 2;


        // for (i = 0; i < num; i++) {
        //     let randomDamage = Math.random() * 11 + 1;
        //     let a = Math.round(Math.random() * 19 + 1);
        //     let hitGap = Math.round((higher / 100) * 20);
        //     let fiveGap = Math.round((five_higher / 100) * 20);
        //     let tenGap = Math.round((ten_higher / 100) * 20);
        //     let fifteenGap = Math.round((fifteen_higher / 100) * 20);
        //     let critGap = Math.round(Math.random() * 19 + 1);

        //     if (critGap == 20) {
        //         Dam += randomDamage * 2

        //         continue;
        //     }


        //     if (a < fifteenGap) {
        //         Dam += randomDamage * 2
        //     } else if (a < tenGap) {
        //         Dam += randomDamage
        //     } else if (a < fiveGap) {
        //         Dam += randomDamage
        //     } else if (a < hitGap) {
        //         Dam += randomDamage
        //     }
        // }
        // Dam = Math.round(Dam)
        // let control = Dam;
        // console.log(control);
        // console.log('100')
        // Dam = 0;

        // // LIGHT ARMOR
        // for (i = 0; i < num; i++) {
        //     let randomDamage = Math.random() * 11 + 1;
        //     let a = Math.round(Math.random() * 19 + 1);
        //     let hitGap = Math.round((higher / 100) * 20);
        //     let fiveGap = Math.round((five_higher / 100) * 20);
        //     let tenGap = Math.round((ten_higher / 100) * 20);
        //     let fifteenGap = Math.round((fifteen_higher / 100) * 20);
        //     let critGap = Math.round(Math.random() * 19 + 1);

        //     if (critGap == 20) {
        //         Dam += randomDamage * 2
        //         continue;
        //     }

        //     if (a < fifteenGap) {
        //         Dam += randomDamage
        //     } else if (a < tenGap) {
        //         Dam += randomDamage
        //     } else if (a < fiveGap) {
        //         Dam += randomDamage
        //     } else if (a < hitGap) {
        //         Dam += randomDamage / 2
        //     }
        // }
        // Dam = Math.round(Dam);
        // Dam = (100 / control) * Dam;
        // Dam = Math.round(Dam);
        // console.log(Dam);
        // Dam = 0;

        // // HEAVY ARMOR
        // for (i = 0; i < num; i++) {
        //     let randomDamage = Math.random() * 11 + 1;
        //     let a = Math.round(Math.random() * 19 + 1);
        //     let hitGap = Math.round((higher / 100) * 20);
        //     let fiveGap = Math.round((five_higher / 100) * 20);
        //     let tenGap = Math.round((ten_higher / 100) * 20);
        //     let fifteenGap = Math.round((fifteen_higher / 100) * 20);
        //     let critGap = Math.round(Math.random() * 19 + 1);

        //     if (critGap == 20) {
        //         Dam += randomDamage
        //         continue;
        //     }

        //     if (a < fifteenGap) {
        //         Dam += randomDamage
        //     } else if (a < tenGap) {
        //         Dam += randomDamage
        //     } else if (a < fiveGap) {
        //         Dam += randomDamage / 2
        //     } else if (a < hitGap) {
        //         Dam += randomDamage / 2
        //     }
        // }
        // Dam = Math.round(Dam)
        // Dam = (100 / control) * Dam;
        // Dam = Math.round(Dam);
        // console.log(Dam);


    })
    let dButton = document.querySelector('.D20-button');
    dButton.addEventListener('click', () => {
        let result = Math.round((Math.random() * 19) + 1);
        document.querySelector('.d-output').innerHTML = `${result}`;
        document.querySelector('.d-output').setAttribute('style', 'opacity:1;');

    })
    let spellsButton = document.querySelector('.spells-button');
    spellsButton.addEventListener('click', () => {
        let description = document.querySelector('.description');
        let index = document.querySelector('.name');


        spellsButton.onclick = () => {

            spellsButton.setAttribute('disabled', 'disabled');
            spellsButton.innerHTML = 'Подождите...';
            const requestURL = `https://www.dnd5eapi.co/api/spells`

            const xhr = new XMLHttpRequest()

            xhr.open('GET', requestURL)

            xhr.responseType = 'json'
            xhr.onload = () => {
                // let el = document.createElement('div');
                // const num = xhr.response.damage.damage_at_slot_level[3];
                // el.innerHTML = `${num}`;
                // document.body.appendChild(el)
                let count = xhr.response.count;
                count = Math.round(Math.random() * (count - 1));

                let result = xhr.response.results[count].name;
                console.log(result);

                index.innerHTML = `${result}`;
                spellUrl = xhr.response.results[count].url;
                console.log(spellUrl)
                defaultUrl = `https://www.dnd5eapi.co`;

                xhr.open('GET', defaultUrl + spellUrl);
                xhr.responseType = 'json'
                xhr.onload = () => {
                    console.log(xhr.response.desc);
                    description.innerHTML = `${xhr.response.desc}`;
                    spellsButton.removeAttribute('disabled');
                    spellsButton.innerHTML = 'Случайное заклинание';
                }
                xhr.send()

            }

            xhr.send()
        }

    })
});



