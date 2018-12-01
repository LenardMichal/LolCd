let listChamp = document.getElementById('select');
let cdCheck = document.getElementById('cd');
let cdValue = 0;
let searchField = document.getElementById('search');
let form = document.getElementById('cd');
let view = document.getElementById('view');

let plusButton = document.getElementById('plusButton');
let minusButton = document.getElementById('minusButton');
let clearButton = document.getElementById('clearButton');

let mail = document.getElementById('mail');
let radioButtons = document.getElementsByClassName('radio');



function createCookiePrompt(){
  if(!localStorage.windowClicked){
    let el = document.createElement('div');
    let button = document.createElement('button');
    let phrase = document.createElement('p');
    phrase.textContent = "This site uses cookies, localstorage and gather information through Google. If u don't accept that, please leave page."
    button.textContent = 'OK';

    el.appendChild(phrase);
    el.appendChild(button);
    button.addEventListener('click',()=>{
      localStorage.setItem('windowClicked', true);
      });
    button.addEventListener('click', ()=>{
      view.removeChild(el);
      });
    button.classList.add('buttonPrompt');
    view.appendChild(el);
    el.classList.add('prompt');
 }
};






let listMaker = function () {
    for (let i = 0; i < db.length; i++) {
        let champ = db[i].name;
        let el = document.createElement('option');
        el.textContent = champ;
        el.value = i;
        listChamp.appendChild(el);

    }
}

function listClear(id) {
    while (id.firstChild) {
        id.removeChild(id.firstChild)
    }
}


let viewMaker = function () {



    let arrCost = document.getElementsByClassName('box');

    let wrapper = document.createElement('div');
    if (view.childElementCount == 0) {
        view.appendChild(wrapper);
    } else {
        view.insertBefore(wrapper, view.firstChild);
    }

    wrapper.classList.add('wrapper');

    let name = document.createElement('p');
    name.textContent = boxMaker().name + ' - ' + document.getElementsByClassName('checked')[0].textContent.trim();
    wrapper.appendChild(name);
    name.classList.add('championName');

    for (let i = 0; i < 4; i++) {
        let ab = document.createElement('div');
        wrapper.appendChild(ab);
        ab.classList.add('ability');

        for (let j = 4 * i; j < 4 * i + 4; j++) {
            let el = document.createElement('div');
            el.innerHTML = arrCost[j].textContent;
            ab.appendChild(el);
            el.classList.add('vision');





            if (j == 0 || j == 1) {
                    energyPick(el, boxMaker().costType0.toLowerCase());            
            }
            if ( j == 4 || j == 5) {
                    energyPick(el, boxMaker().costType1.toLowerCase());            
            }
            if (  j == 8 || j == 9 ) {
                    energyPick(el, boxMaker().costType2.toLowerCase());            
            }
            if (j == 12 || j == 13) {
                    energyPick(el, boxMaker().costType3.toLowerCase());            
            }
        }
    }


    if (boxMaker().disc != false) {


        let disc = document.createElement('div');
        disc.innerHTML = boxMaker().disc
        if (boxMaker().recharge != false) {
            disc.innerHTML += boxMaker().recharge.join('/');

        }

        wrapper.appendChild(disc);
        disc.classList.add('disc1')
    }








}

let boxMaker = function () {
    let id = listChamp.value


    if (id != 9999) {
        let qMinCost = document.getElementById('QminCost');
        let qMaxCost = document.getElementById('QmaxCost');
        let wMinCost = document.getElementById('WminCost');
        let wMaxCost = document.getElementById('WmaxCost');
        let eMinCost = document.getElementById('EminCost');
        let eMaxCost = document.getElementById('EmaxCost');
        let rMinCost = document.getElementById('RminCost');
        let rMaxCost = document.getElementById('RmaxCost');
        let disc = document.getElementById('disc');

        let cost0 = db[id].cost0;
        let cost1 = db[id].cost1;
        let cost2 = db[id].cost2;
        let cost3 = db[id].cost3;
        plusButton.removeAttribute('disabled');
        minusButton.removeAttribute('disabled');
        clearButton.removeAttribute('disabled');
        let type0 = db[id].costType0.toLowerCase();
        let type1 = db[id].costType1.toLowerCase();
        let type2 = db[id].costType2.toLowerCase();
        let type3 = db[id].costType3.toLowerCase();
        //Styling mana things;
       

     

        energyPick(qMinCost, type0);
        energyPick(qMaxCost, type0);
        energyPick(wMinCost, type1);
        energyPick(wMaxCost, type1);
        energyPick(eMinCost, type2);
        energyPick(eMaxCost, type2);
        energyPick(rMinCost, type3);
        energyPick(rMaxCost, type3);


        // Conditonal check to server non mana text for non mana champs
        if (cost0[0] != 0) {
            qMinCost.textContent = cost0[0];

            qMaxCost.textContent = cost0[cost0.length - 1];
        } else {
            qMinCost.innerHTML = '&#8709';
            qMaxCost.innerHTML = '&#8709';

        }
        if (!cost1[0] == 0) {
            wMinCost.textContent = cost1[0];

            wMaxCost.textContent = cost1[cost1.length - 1];
        } else {
            wMinCost.innerHTML = '&#8709';
            wMaxCost.innerHTML = '&#8709';

        }
        if (!cost2[0] == 0) {
            eMinCost.textContent = cost2[0];

            eMaxCost.textContent = cost2[cost2.length - 1];
        } else {
            eMinCost.innerHTML = '&#8709';
            eMaxCost.innerHTML = '&#8709';

        }
        if (!cost3[0] == 0) {
            rMinCost.textContent = cost3[0];

            rMaxCost.textContent = cost3[cost3.length - 1];
        } else {
            rMinCost.innerHTML = '&#8709';
            rMaxCost.innerHTML = '&#8709';

        }

        //This part calc cd value 

        function valueRedu(val) {
            return (val - (cdValue * val) / 100);
        };

        let cooldown0 = db[id].cooldown0;
        let cooldown1 = db[id].cooldown1;
        let cooldown2 = db[id].cooldown2;
        let cooldown3 = db[id].cooldown3;


        if (db[id].static0 != true) {
            document.getElementById('QminCD').textContent = valueRedu(cooldown0[0]);

            document.getElementById('QmaxCD').textContent = valueRedu(cooldown0[cooldown0.length - 1]);
        } else {
            document.getElementById('QminCD').textContent = cooldown0[0];
            document.getElementById('QmaxCD').textContent = cooldown0[cooldown0.length - 1];


        }
        if (db[id].static1 != true) {
            document.getElementById('WminCD').textContent = valueRedu(cooldown1[0]);

            document.getElementById('WmaxCD').textContent = valueRedu(cooldown1[cooldown1.length - 1]);
        } else {
            document.getElementById('WminCD').textContent = cooldown1[0];
            document.getElementById('WmaxCD').textContent = cooldown1[cooldown1.length - 1];


        }

        if (db[id].static2 != true) {
            document.getElementById('EminCD').textContent = valueRedu(cooldown2[0]);

            document.getElementById('EmaxCD').textContent = valueRedu(cooldown2[cooldown2.length - 1]);
        } else {
            document.getElementById('EminCD').textContent = cooldown2[0];
            document.getElementById('EmaxCD').textContent = cooldown2[cooldown2.length - 1];


        }


        if (db[id].static3 != true) {
            document.getElementById('RminCD').textContent = valueRedu(cooldown3[0]);

            document.getElementById('RmaxCD').textContent = valueRedu(cooldown3[cooldown3.length - 1]);
        } else {
            document.getElementById('RminCD').textContent = cooldown3[0];
            document.getElementById('RmaxCD').textContent = cooldown3[cooldown3.length - 1];


        }
        if (db[id].disc) {
            disc.textContent = db[id].disc;

        } else {
            disc.textContent = ''
        }

        if (db[id].recharge) {
            let recharge = '';


            if (db[id].recharge) {
                for (let i = 0; i < db[id].recharge.length; i++) {
                    if (db[id].static != true) {
                        recharge += valueRedu(db[id].recharge[i]);
                        if (i < db[id].recharge.length - 1) recharge += '/';

                    } else {
                        recharge += db[id].recharge[i];
                        if (i < db[id].recharge.length - 1) recharge += '/';
                    }

                }
                disc.textContent = db[id].disc + recharge;



            }
        }



        return db[id]


    }
}
function energyPick(currObject, type){
    currObject.classList.remove('mana');
    currObject.classList.remove('energy');
    currObject.classList.remove('health');
    currObject.classList.remove('otherRsc');
    currObject.classList.remove('noCost');
    currObject.classList.remove('heat');
    
    if(type === 'energy'){
        currObject.classList.add('energy');
    }
    if(type === 'health' || type === 'hps'){
        currObject.classList.add('health')
    }
    if(type === 'mana' || type === 'mps' || type === 'mpr'){
        currObject.classList.add('mana');
    } 
    if(type === 'stack'){
        currObject.classList.add('otherRsc');
    }
    if(type === 'nocost' || type === 'passive'){
        currObject.classList.add('noCost');
    }
    if(type === 'heat'){
        currObject.classList.add('heat');
    }

}

//Filter Engine that iterates on db per keyup on search bar
let filterEngine = function (event) {
    if (event.keyCode === 13) {
        viewMaker();
    }

    if (searchField.value == '') {


        listClear(listChamp)
        listMaker()


    } else {
        let regx = new RegExp('^' + searchField.value, 'i');

        listClear(listChamp)



        for (let i = 0; i < db.length; i++) {
            if (db[i].name.match(regx)) {

                let champ = db[i].name;
                let el = document.createElement('option');
                el.textContent = champ;
                el.value = i;
                listChamp.appendChild(el);

                boxMaker();

            }



        }
        if (listChamp.length == 0) {
            let holder = searchField.value.substring(0, searchField.length - 1);

            document.getElementById('search').value = holder;
            listMaker();

        }
    }
}



let cdMaker = function () {
    cdValue = Number(cdCheck.cd.value);



    boxMaker();
}


function backgroundColor() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].parentElement.classList.contains('checked')) {
            radioButtons[i].parentElement.classList.remove('checked');
        }
        if (radioButtons[i].checked) {

            radioButtons[i].parentElement.classList.toggle('checked');
        }

    }
}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', backgroundColor);
};

// --------------------------------------------------------------------------


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/serviceworker.js');
}

listMaker()


searchField.addEventListener('keyup', filterEngine);

plusButton.addEventListener('click', viewMaker);

clearButton.addEventListener('click', () => {

    while (view.firstChild) {
        view.removeChild(view.firstChild)
    }
});

minusButton.addEventListener('click', () => {

    if (view.childNodes.length > 0) {

        view.removeChild(view.firstChild);

    }

});
let legend = document.getElementById('legend');
function getLegend(){
    legend.innerHTML = 
    "<span class='mana'>Mana </span> <span class='energy'>Energy </span><span class='health'>Health </span><span class='noCost'>No&nbspCost </span><span class='otherRsc'>Stacks</span><span class='heat'>Heat</span>";
    legend.removeEventListener('click', getLegend);
    legend.addEventListener('click', hideLegend);
}
function hideLegend(){
    legend.innerHTML = 'Legend'
    legend.removeEventListener('click', hideLegend);
    legend.addEventListener('click', getLegend);
}
legend.addEventListener('click',()=>{
    getLegend()
    

    
})

function showMail(){
    mail.textContent = 'lenard' + '.' + 'michal' + '@' + 'yahoo' + '.' + 'com'
    mail.removeEventListener('click', showMail);
    mail.addEventListener('click', hideMail);
}
function hideMail(){
    mail.innerHTML = '<img alt="mail" src="../assets/envelope.svg">';
    mail.removeEventListener('click', hideMail);
    mail.addEventListener('click', showMail);
}

mail.addEventListener('click',showMail);

listChamp.addEventListener('change', boxMaker);
listChamp.addEventListener('click', boxMaker);


cdCheck.addEventListener('change', cdMaker);
console.log(versionGame);
createCookiePrompt()
cdMaker();



