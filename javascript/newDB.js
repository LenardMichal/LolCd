/*
    disc means for disclaimer
    
    recharge mean cd for addtional cd used in champion
    
    static and statickN makes cd static 
    
    todo: 
    
    


*/
let versionGame = '8.18';
let db = [{
    "name": "Aatrox",
    "id": "Aatrox",
    "cost0": [0, 0, 0, 0, 0],
    "cost1": [0, 0, 0, 0, 0],
    "cost2": [0, 0, 0, 0, 0],
    "cost3": [0, 0, 0],
    "cooldown0": [16, 15, 14, 13, 12],
    "cooldown1": [18, 17, 16, 15, 14],
    "cooldown2": [3, 2.5, 2, 1.5, 1],
    "cooldown3": [160, 140, 120],




    "costType0": "Health",
    "costType1": "NoCost",
    "costType2": "Health",
    "costType3": "NoCost",
    "tags": ["Fighter", "Tank"],
    "recharge": [20, 18, 16, 14, 12],
    "disc": "Aatrox E uses charges with recharge: ",

}, {
    "name": "Ahri",
    "id": "Ahri",
    "cost0": [65, 70, 75, 80, 85],
    "cost1": [40, 40, 40, 40, 40],
    "cost2": [70, 70, 70, 70, 70],
    "cost3": [100, 100, 100],
    "cooldown0": [7, 7, 7, 7, 7],
    "cooldown1": [9, 8, 7, 6, 5],
    "cooldown2": [12, 12, 12, 12, 12],
    "cooldown3": [110, 95, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Assassin"],
    "disc": "Ahri can cast twice more for free in: ",
    "recharge": [10],
    "static": true

}, {
    "name": "Akali",
    "id": "Akali",
    "cost0": [100, 95, 90, 85, 80],
    "cost1": [0, 0, 0, 0, 0],
    "cost2": [30, 30, 30, 30, 30],
    "cost3": [0, 0, 0],
    "cooldown0": [1.5, 1.5, 1.5, 1.5, 1.5],
    "cooldown1": [17, 15.5, 14, 12.5, 11],
    "cooldown2": [16, 14.5, 13, 11.5, 10],
    "cooldown3": [120, 100, 80],




    "costType0": "Energy",
    "costType1": "Energy",
    "costType2": "Energy",
    "costType3": "Stack",
    "tags": ["Assassin"],
    
}, {
    "name": "Alistar",
    "id": "Alistar",
    "cost0": [65, 70, 75, 80, 85],
    "cost1": [65, 70, 75, 80, 85],
    "cost2": [50, 60, 70, 80, 90],
    "cost3": [100, 100, 100],
    "cooldown0": [17, 16, 15, 14, 13],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [12, 11.5, 11, 10.5, 10],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Support"]
}, {
    "name": "Amumu",
    "id": "Amumu",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [8, 8, 8, 8, 8],
    "cost2": [35, 35, 35, 35, 35],
    "cost3": [100, 150, 200],
    "cooldown0": [16, 14, 12, 10, 8],
    "cooldown1": [1, 1, 1, 1, 1],
    "cooldown2": [10, 9, 8, 7, 6],
    "cooldown3": [150, 130, 110],




    "costType0": "Mana",
    "costType1": "MpS",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Mage"]
}, {
    "name": "Anivia",
    "id": "Anivia",
    "cost0": [80, 90, 100, 110, 120],
    "cost1": [70, 70, 70, 70, 70],
    "cost2": [50, 60, 70, 80, 90],
    "cost3": [75, 75, 75],
    "cooldown0": [10, 9.5, 9, 8.5, 8],
    "cooldown1": [17, 17, 17, 17, 17],
    "cooldown2": [4, 4, 4, 4, 4],
    "cooldown3": [6, 6, 6],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"],
    "disc": "Anivia's passive CD: 240 sec"
}, {
    "name": "Annie",
    "id": "Annie",
    "cost0": [60, 65, 70, 75, 80],
    "cost1": [70, 80, 90, 100, 110],
    "cost2": [20, 20, 20, 20, 20],
    "cost3": [100, 100, 100],
    "cooldown0": [4, 4, 4, 4, 4],
    "cooldown1": [8, 8, 8, 8, 8],
    "cooldown2": [10, 10, 10, 10, 10],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Ashe",
    "id": "Ashe",
    "cost0": [50, 50, 50, 50, 50],
    "cost1": [50, 50, 50, 50, 50],
    "cost2": [0, 0, 0, 0, 0],
    "cost3": [100, 100, 100],
    "cooldown0": [0, 0, 0, 0, 0],
    "cooldown1": [15, 12.5, 10, 7.5, 5],
    "cooldown2": [5, 5, 5, 5, 5],
    "cooldown3": [100, 90, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "NoCost",
    "costType3": "Mana",
    "tags": ["Marksman", "Support"],
    "disc": "Hawkshot can store up to 2 charges with recharge: ",
    "recharge": [90, 80, 70, 60, 50]
}, {
    "name": "Aurelion Sol",
    "id": "AurelionSol",
    "cost0": [60, 70, 80, 90, 100],
    "cost1": [40, 40, 40, 40, 40],
    "cost2": [60, 60, 60, 60, 60],
    "cost3": [100, 100, 100],
    "cooldown0": [10, 10, 10, 10, 10],
    "cooldown1": [6, 5.5, 5, 4.5, 4],
    "cooldown2": [60, 55, 50, 45, 40],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "MpS",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Fighter"],
    "disc": "Aurelion's W uses in addition to inital mana, MpS: ",
    "static": true,
    "recharge": [22, 24, 26, 28, 30]
}, {
    "name": "Azir",
    "id": "Azir",
    "cost0": [70, 70, 70, 70, 70],
    "cost1": [40, 40, 40, 40, 40],
    "cost2": [60, 60, 60, 60, 60],
    "cost3": [100, 100, 100],
    "cooldown0": [15, 12.5, 10, 7.5, 5],
    "cooldown1": [1.5, 1.5, 1.5, 1.5, 1.5],
    "cooldown2": [19, 18, 17, 16, 15],
    "cooldown3": [140, 120, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Marksman"],
    "disc": "Azir's W uses also Sand Soldier charge that can store up to 2 with recharge: ",
    'recharge': [8, 7.5, 7, 6.5, 6]
}, {
    "name": "Bard",
    "id": "Bard",
    "cost0": [60, 60, 60, 60, 60],
    "cost1": [90, 90, 90, 90, 90],
    "cost2": [30, 30, 30, 30, 30],
    "cost3": [100, 100, 100],
    "cooldown0": [11, 10, 9, 8, 7],
    "cooldown1": [12, 12, 12, 12, 12],
    "cooldown2": [18, 17, 16, 15, 14],
    "cooldown3": [110, 95, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"],
    "disc": "Bard's passive can got up to 9 meep, with recharge CD based on Chimes he collected: ",
    "static": true,
    "recharge": [8, 7, 6, 5, 4]
}, {
    "name": "Blitzcrank",
    "id": "Blitzcrank",
    "cost0": [100, 100, 100, 100, 100],
    "cost1": [75, 75, 75, 75, 75],
    "cost2": [25, 25, 25, 25, 25],
    "cost3": [100, 100, 100],
    "cooldown0": [20, 19, 18, 17, 16],
    "cooldown1": [15, 15, 15, 15, 15],
    "cooldown2": [9, 8, 7, 6, 5],
    "cooldown3": [60, 40, 20],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"],
    "disc": "Blitz's passive CD: ",
    "static": true,
    "recharge": [90]
}, {
    "name": "Brand",
    "id": "Brand",
    "cost0": [50, 50, 50, 50, 50],
    "cost1": [60, 70, 80, 90, 100],
    "cost2": [70, 75, 80, 85, 90],
    "cost3": [100, 100, 100],
    "cooldown0": [8, 7.5, 7, 6.5, 6],
    "cooldown1": [10, 9.5, 9, 8.5, 8],
    "cooldown2": [10, 9, 8, 7, 6],
    "cooldown3": [105, 90, 75],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Braum",
    "id": "Braum",
    "cost0": [55, 60, 65, 70, 75],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [30, 35, 40, 45, 50],
    "cost3": [100, 100, 100],
    "cooldown0": [10, 9, 8, 7, 6],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [18, 16, 14, 12, 10],
    "cooldown3": [140, 120, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Tank"]
}, {
    "name": "Caitlyn",
    "id": "Caitlyn",
    "cost0": [50, 60, 70, 80, 90],
    "cost1": [20, 20, 20, 20, 20],
    "cost2": [75, 75, 75, 75, 75],
    "cost3": [100, 100, 100],
    "cooldown0": [10, 9, 8, 7, 6],
    "cooldown1": [0.5, 0.5, 0.5, 0.5, 0.5],
    "cooldown2": [16, 14.5, 13, 11.5, 10],
    "cooldown3": [90, 75, 60],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"],
    "disc": "Cait can store up to 5 traps witch recharge: ",
    "recharge": [30, 24, 19, 15, 12]
}, {
    "name": "Camille",
    "id": "Camille",
    "cost0": [25, 25, 25, 25, 25],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [50, 50, 50, 50, 50],
    "cost3": [100, 100, 100],
    "cooldown0": [9, 8.25, 7.5, 6.75, 6],
    "cooldown1": [15, 13.5, 12, 10.5, 9],
    "cooldown2": [16, 14.5, 13, 11.5, 10],
    "cooldown3": [140, 115, 90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"],
    "disc": "Camille's passive got CD: ",
    "recharge": [16, 13, 10]
}, {
    "name": "Cassiopeia",
    "id": "Cassiopeia",
    "cost0": [60, 65, 70, 75, 80],
    "cost1": [70, 70, 70, 70, 70],
    "cost2": [40, 50, 60, 70, 80],
    "cost3": [100, 100, 100],
    "cooldown0": [3.5, 3.5, 3.5, 3.5, 3.5],
    "cooldown1": [18, 17, 16, 15, 14],
    "cooldown2": [0.75, 0.75, 0.75, 0.75, 0.75],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Cho'Gath",
    "id": "Chogath",
    "cost0": [90, 90, 90, 90, 90],
    "cost1": [70, 80, 90, 100, 110],
    "cost2": [30, 30, 30, 30, 30],
    "cost3": [100, 100, 100],
    "cooldown0": [9, 9, 9, 9, 9],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [8, 7, 6, 5, 4],
    "cooldown3": [80, 80, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "NoCost",
    "costType3": "Mana",
    "tags": ["Tank", "Mage"]
}, {
    "name": "Corki",
    "id": "Corki",
    "cost0": [60, 70, 80, 90, 100],
    "cost1": [100, 100, 100, 100, 100],
    "cost2": [50, 50, 50, 50, 50],
    "cost3": [20, 20, 20],
    "cooldown0": [8, 8, 8, 8, 8],
    "cooldown1": [20, 19, 18, 17, 16],
    "cooldown2": [16, 16, 16, 16, 16],
    "cooldown3": [2, 2, 2],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"],
    "disc": "After 8 minutes Corki gets acces to Special Delivery witch CD :",
    "static": true,
    "recharge": [240]
}, {
    "name": "Darius",
    "id": "Darius",
    "cost0": [30, 35, 40, 45, 50],
    "cost1": [30],
    "cost2": [45],
    "cost3": [100, 100, 0],
    "cooldown0": [9, 8, 7, 6, 5],
    "cooldown1": [7, 6.5, 6, 5.5, 5],
    "cooldown2": [24, 21, 18, 15, 12],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Diana",
    "id": "Diana",
    "cost0": [55],
    "cost1": [40, 55, 70, 85, 100],
    "cost2": [70],
    "cost3": [50, 65, 80],
    "cooldown0": [8, 7.5, 7, 6.5, 6],
    "cooldown1": [10],
    "cooldown2": [26, 24, 22, 20, 18],
    "cooldown3": [25, 20, 15],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Mage"]
}, {
    "name": "Draven",
    "id": "Draven",
    "cost0": [45],
    "cost1": [40, 35, 30, 25, 20],
    "cost2": [70],
    "cost3": [100, 100, 100],
    "cooldown0": [12, 11, 10, 9, 8],
    "cooldown1": [12],
    "cooldown2": [18, 17, 16, 15, 14],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Dr. Mundo",
    "id": "DrMundo",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [4],
    "cooldown1": [4],
    "cooldown2": [6],
    "cooldown3": [110, 100, 90],




    "costType0": "Health",
    "costType1": "HpS",
    "costType2": "Health",
    "costType3": "Health",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Ekko",
    "id": "Ekko",
    "cost0": [50, 60, 70, 80, 90],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [40, 50, 60, 70, 80],
    "cost3": [100],
    "cooldown0": [9, 8.5, 8, 7.5, 7],
    "cooldown1": [22, 20, 18, 16, 14],
    "cooldown2": [9, 8.5, 8, 7.5, 7],
    "cooldown3": [110, 90, 70],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Elise",
    "id": "Elise",
    "cost0": [80, 85, 90, 95, 100],
    "cost1": [60, 70, 80, 90, 100],
    "cost2": [50],
    "cost3": [0, 0, 0, 0],
    "cooldown0": [6],
    "cooldown1": [12],
    "cooldown2": [12, 11.5, 11, 10.5, 10],
    "cooldown3": [4, 4, 4, 4],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "NoCost",
    "tags": ["Mage", "Fighter"]
}, {
    "name": "Evelynn",
    "id": "Evelynn",
    "cost0": [40, 45, 50, 55, 60],
    "cost1": [60, 70, 80, 90, 100],
    "cost2": [40, 45, 50, 55, 60],
    "cost3": [100],
    "cooldown0": [8],
    "cooldown1": [15, 14, 13, 12, 11],
    "cooldown2": [8],
    "cooldown3": [140, 110, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Assassin", "Mage"]
}, {
    "name": "Ezreal",
    "id": "Ezreal",
    "cost0": [28, 31, 34, 37, 40],
    "cost1": [50, 60, 70, 80, 90],
    "cost2": [90],
    "cost3": [100],
    "cooldown0": [5.5, 5.25, 5, 4.75, 4.5],
    "cooldown1": [9],
    "cooldown2": [19, 17.5, 16, 14.5, 13],
    "cooldown3": [120],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Mage"]
}, {
    "name": "Fiddlesticks",
    "id": "FiddleSticks",
    "cost0": [65],
    "cost1": [80, 90, 100, 110, 120],
    "cost2": [70, 75, 80, 85, 90],
    "cost3": [100],
    "cooldown0": [15, 14, 13, 12, 11],
    "cooldown1": [4, 3.75, 3.5, 3.25, 3],
    "cooldown2": [10],
    "cooldown3": [140, 110, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"]
}, {
    "name": "Fiora",
    "id": "Fiora",
    "cost0": [20, 25, 30, 35, 40],
    "cost1": [50],
    "cost2": [40, 45, 50, 55, 60],
    "cost3": [100],
    "cooldown0": [16, 14, 12, 10, 8],
    "cooldown1": [24, 22, 20, 18, 16],
    "cooldown2": [13, 11, 9, 7, 5],
    "cooldown3": [110, 90, 70],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Fizz",
    "id": "Fizz",
    "cost0": [50],
    "cost1": [30, 40, 50, 60, 70],
    "cost2": [90, 95, 100, 105, 110],
    "cost3": [100],
    "cooldown0": [8, 7.5, 7, 6.5, 6],
    "cooldown1": [7, 6.5, 6, 5.5, 5],
    "cooldown2": [16, 14.5, 13, 11.5, 10],
    "cooldown3": [100, 85, 70],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Galio",
    "id": "Galio",
    "cost0": [70, 85, 100, 115, 130],
    "cost1": [50],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [10, 9.5, 9, 8.5, 8],
    "cooldown1": [16, 15, 14, 13, 12],
    "cooldown2": [12, 11, 10, 9, 8],
    "cooldown3": [200, 180, 160],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Mage"]
}, {
    "name": "Gangplank",
    "id": "Gangplank",
    "cost0": [60, 55, 50, 45, 40],
    "cost1": [80, 90, 100, 110, 120],
    "cost2": [0],
    "cost3": [100],
    "cooldown0": [5],
    "cooldown1": [22, 20, 18, 16, 14],
    "cooldown2": [0],
    "cooldown3": [180, 160, 140],
    "disc": "Gangplank E uses charge on cast and can store up to 3 charges with recharge: ",
    "recharge": [18, 16, 14, 12, 10],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "NoCost",
    "costType3": "Mana",
    "tags": ["Fighter"]
}, {
    "name": "Garen",
    "id": "Garen",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [8],
    "cooldown1": [24, 23, 22, 21, 20],
    "cooldown2": [9],
    "cooldown3": [120, 100, 80],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Gnar",
    "id": "Gnar",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [20, 17.5, 15, 12.5, 10],
    "cooldown1": [15, 13, 11, 9, 7],
    "cooldown2": [22, 19.5, 17, 14.5, 12],
    "cooldown3": [120, 100, 80],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Gragas",
    "id": "Gragas",
    "cost0": [60, 65, 70, 75, 80],
    "cost1": [30],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [11, 10, 9, 8, 7],
    "cooldown1": [5],
    "cooldown2": [16, 15, 14, 13, 12],
    "cooldown3": [100, 90, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Mage"]
}, {
    "name": "Graves",
    "id": "Graves",
    "cost0": [60, 70, 80, 90, 100],
    "cost1": [70, 75, 80, 85, 90],
    "cost2": [40],
    "cost3": [100],
    "cooldown0": [13, 12, 11, 10, 9],
    "cooldown1": [26, 24, 22, 20, 18],
    "cooldown2": [18, 17, 16, 15, 14],
    "cooldown3": [100, 90, 60],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Hecarim",
    "id": "Hecarim",
    "cost0": [32, 34, 36, 38, 40],
    "cost1": [50, 60, 70, 80, 90],
    "cost2": [60],
    "cost3": [100],
    "cooldown0": [4],
    "cooldown1": [22, 21, 20, 19, 18],
    "cooldown2": [24, 22, 20, 18, 16],
    "cooldown3": [140, 120, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Heimerdinger",
    "id": "Heimerdinger",
    "cost0": [20],
    "cost1": [50, 60, 70, 80, 90],
    "cost2": [85],
    "cost3": [100],
    "cooldown0": [1],
    "cooldown1": [11, 10, 9, 8, 7],
    "cooldown2": [12],
    "cooldown3": [100, 85, 70],
    "disc": "Heimerdinger's Q uses charge and can store up to 3 at once with recharge: ",
    "recharge": [20],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"]
}, {
    "name": "Illaoi",
    "id": "Illaoi",
    "cost0": [40, 45, 50, 55, 60],
    "cost1": [30],
    "cost2": [35, 40, 45, 50, 55],
    "cost3": [100],
    "cooldown0": [10, 9, 8, 7, 6],
    "cooldown1": [4],
    "cooldown2": [20, 18, 16, 14, 12],
    "cooldown3": [120, 105, 90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Irelia",
    "id": "Irelia",
    "cost0": [20],
    "cost1": [70, 75, 80, 85, 90],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [12, 11, 10, 9, 8],
    "cooldown1": [16, 15, 14, 13, 12],
    "cooldown2": [14, 13, 12, 11, 10],
    "cooldown3": [140, 120, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Ivern",
    "id": "Ivern",
    "cost0": [60],
    "cost1": [30],
    "cost2": [70],
    "cost3": [100],
    "cooldown0": [14, 13, 12, 10, 9],
    "cooldown1": [0.5, 0.5, 0.5, 0.5, 0.5],
    "cooldown2": [12, 11, 10, 9, 8],
    "cooldown3": [160, 140, 120],
    "static1": true,
    "disc": "Ivern's W uses charge on cast and can store up to 3 charges with recharge: ",
    "recharge": [40, 36, 32, 28, 24],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"]
}, {
    "name": "Janna",
    "id": "Janna",
    "cost0": [60, 80, 100, 120, 140],
    "cost1": [50, 60, 70, 80, 90],
    "cost2": [70, 80, 90, 100, 110],
    "cost3": [100],
    "cooldown0": [12],
    "cooldown1": [8],
    "cooldown2": [18, 16, 14, 12, 10],
    "cooldown3": [150, 135, 120],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"]
}, {
    "name": "Jarvan IV",
    "id": "JarvanIV",
    "cost0": [45, 50, 55, 60, 65],
    "cost1": [30],
    "cost2": [55],
    "cost3": [100],
    "cooldown0": [10, 9, 8, 7, 6],
    "cooldown1": [12],
    "cooldown2": [11],
    "cooldown3": [120, 105, 90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Jax",
    "id": "Jax",
    "cost0": [65],
    "cost1": [30],
    "cost2": [50, 60, 70, 80, 90],
    "cost3": [100],
    "cooldown0": [10, 9, 8, 7, 6],
    "cooldown1": [7, 6, 5, 4, 3],
    "cooldown2": [16, 14, 12, 10, 8],
    "cooldown3": [80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Jayce",
    "id": "Jayce",
    "cost0": [40],
    "cost1": [40],
    "cost2": [40],
    "cost3": [0],
    "cooldown0": [16, 14, 12, 10, 8, 6],
    "cooldown1": [10],
    "cooldown2": [20, 18, 16, 14, 12, 10],
    "cooldown3": [6],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "NoCost",
    "tags": ["Fighter", "Marksman"]
}, {
    "name": "Jhin",
    "id": "Jhin",
    "cost0": [40, 45, 50, 55, 60],
    "cost1": [50, 60, 70, 80, 90],
    "cost2": [30, 35, 40, 45, 50],
    "cost3": [100],
    "cooldown0": [7, 6.5, 6, 5.5, 5],
    "cooldown1": [14],
    "cooldown2": [2],
    "cooldown3": [120, 105, 90],
    "disc": "Jhin's E uses charges on cast and can store up 2 to charges with recharge:",
    "recharge": [28, 27, 26, 25, 24],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Assassin"]
}, {
    "name": "Jinx",
    "id": "Jinx",
    "cost0": [20],
    "cost1": [50, 60, 70, 80, 90],
    "cost2": [70],
    "cost3": [100],
    "cooldown0": [0.9],
    "cooldown1": [8, 7, 6, 5, 4],
    "cooldown2": [24, 20.5, 17, 13.5, 10],
    "cooldown3": [90, 75, 60],
    "static0": true,




    "costType0": "MpR",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Kalista",
    "id": "Kalista",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [20],
    "cost2": [30, 30, 30, 30, 30],
    "cost3": [100, 100, 100],
    "cooldown0": [8],
    "cooldown1": [30],
    "cooldown2": [14, 12.5, 11, 9.5, 8],
    "cooldown3": [120, 90, 60],
    "disc": "Kalista's W uses charge on cast and can store up to 2 charges with recharge:",
    "recharge": [90, 80, 70, 60, 50],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Karma",
    "id": "Karma",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [0],
    "cooldown0": [7, 6.5, 6, 5.5, 5],
    "cooldown1": [12],
    "cooldown2": [10, 9.5, 9, 8.5, 8],
    "cooldown3": [45, 42, 39, 36],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "NoCost",
    "tags": ["Mage", "Support"]
}, {
    "name": "Karthus",
    "id": "Karthus",
    "cost0": [20, 26, 32, 38, 44],
    "cost1": [100],
    "cost2": [30, 42, 54, 66, 78],
    "cost3": [150, 175, 200],
    "cooldown0": [1],
    "cooldown1": [18],
    "cooldown2": [0.5],
    "cooldown3": [200, 180, 160],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "MpS",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Kassadin",
    "id": "Kassadin",
    "cost0": [70, 75, 80, 85, 90],
    "cost1": [0],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [50, 800],
    "cooldown0": [9],
    "cooldown1": [7, 7, 7, 7, 7],
    "cooldown2": [5],
    "cooldown3": [5, 3.5, 2],
    "disc": "Every usage of Kassadin's in 15 seconds double cost of next usage up to 4 times.",




    "costType0": "Mana",
    "costType1": "NoCost",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Assassin", "Mage"]
}, {
    "name": "Katarina",
    "id": "Katarina",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [11, 10, 9, 8, 7],
    "cooldown1": [15, 14, 13, 12, 11],
    "cooldown2": [14, 12.5, 11, 9.5, 8],
    "cooldown3": [90, 60, 45],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Assassin", "Mage"]
}, {
    "name": "Kayle",
    "id": "Kayle",
    "cost0": [70, 75, 80, 85, 90],
    "cost1": [60, 70, 80, 90, 100],
    "cost2": [45],
    "cost3": [0],
    "cooldown0": [8],
    "cooldown1": [15],
    "cooldown2": [18, 17, 16, 15, 14],
    "cooldown3": [100, 90, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "NoCost",
    "tags": ["Fighter", "Support"]
}, {
    "name": "Kennen",
    "id": "Kennen",
    "cost0": [60, 55, 50, 45, 40],
    "cost1": [40],
    "cost2": [100, 95, 90, 85, 80],
    "cost3": [0],
    "cooldown0": [8, 7, 6, 5, 4],
    "cooldown1": [14, 12, 10, 8, 6],
    "cooldown2": [10, 9, 8, 7, 6],
    "cooldown3": [120],




    "costType0": "Energy",
    "costType1": "Energy",
    "costType2": "Energy",
    "costType3": "NoCost",
    "tags": ["Mage", "Marksman"]
}, {
    "name": "Kha'Zix",
    "id": "Khazix",
    "cost0": [20],
    "cost1": [55, 60, 65, 70, 75],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [4],
    "cooldown1": [9],
    "cooldown2": [20, 18, 16, 14, 12],
    "cooldown3": [100, 85, 70],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Kindred",
    "id": "Kindred",
    "cost0": [35],
    "cost1": [40],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [9],
    "cooldown1": [18, 17, 16, 15, 14],
    "cooldown2": [16, 15, 14, 13, 12],
    "cooldown3": [180, 150, 120],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Kled",
    "id": "Kled",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [9, 8.5, 8, 7.5, 7],
    "cooldown1": [14, 12.5, 11, 9.5, 8],
    "cooldown2": [14, 13, 12, 11, 10],
    "cooldown3": [160, 140, 120],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Kog'Maw",
    "id": "KogMaw",
    "cost0": [40],
    "cost1": [40],
    "cost2": [80, 90, 100, 110, 120],
    "cost3": [40, 40, 400],
    "cooldown0": [8],
    "cooldown1": [17],
    "cooldown2": [12],
    "cooldown3": [2, 1.5, 1],
    "disc": "Kog'Maw's R cost stack up if used in next 8 sec.",




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Mage"]
}, {
    "name": "LeBlanc",
    "id": "Leblanc",
    "cost0": [50, 60, 70, 80, 90],
    "cost1": [60, 75, 90, 105, 120],
    "cost2": [70],
    "cost3": [0],
    "cooldown0": [6],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [14, 13.25, 12.5, 11.75, 11],
    "cooldown3": [60, 45, 30],
    "disc": "When LeBlanc falls below 40% of max health he activate passive with static cd:",
    "recharge": [60],
    "static": true,




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "NoCost",
    "tags": ["Assassin", "Mage"]
}, {
    "name": "Lee Sin",
    "id": "LeeSin",
    "cost0": [50],
    "cost1": [50],
    "cost2": [50],
    "cost3": [0],
    "cooldown0": [11, 10, 9, 8, 7],
    "cooldown1": [12],
    "cooldown2": [10],
    "cooldown3": [110, 85, 60],




    "costType0": "Energy",
    "costType1": "Energy",
    "costType2": "Energy",
    "costType3": "NoCost",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Leona",
    "id": "Leona",
    "cost0": [45, 50, 55, 60, 65],
    "cost1": [60],
    "cost2": [60],
    "cost3": [100],
    "cooldown0": [6],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [13, 12, 11, 10, 9],
    "cooldown3": [90, 75, 60],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Support"]
}, {
    "name": "Lissandra",
    "id": "Lissandra",
    "cost0": [75],
    "cost1": [50],
    "cost2": [80, 85, 90, 95, 100],
    "cost3": [100],
    "cooldown0": [6, 5.25, 4.5, 3.75, 3],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [24, 21, 18, 15, 12],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Lucian",
    "id": "Lucian",
    "cost0": [50, 60, 70, 80, 90],
    "cost1": [50],
    "cost2": [40, 30, 20, 10, 0],
    "cost3": [100],
    "cooldown0": [9, 8, 7, 6, 5],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [22, 20, 18, 16, 14],
    "cooldown3": [110, 100, 90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Lulu",
    "id": "Lulu",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [65],
    "cost2": [60, 70, 80, 90, 100],
    "cost3": [100],
    "cooldown0": [7],
    "cooldown1": [16, 15, 14, 13, 12],
    "cooldown2": [10],
    "cooldown3": [110, 95, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"]
}, {
    "name": "Lux",
    "id": "Lux",
    "cost0": [00, 45, 50, 55, 60],
    "cost1": [60],
    "cost2": [70, 80, 90, 100, 110],
    "cost3": [100],
    "cooldown0": [10],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [10, 9.5, 9, 8.5, 8],
    "cooldown3": [80, 65, 50],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"]
}, {
    "name": "Malphite",
    "id": "Malphite",
    "cost0": [70, 75, 80, 85, 90],
    "cost1": [25],
    "cost2": [50, 55, 60, 65, 70],
    "cost3": [100],
    "cooldown0": [8],
    "cooldown1": [12],
    "cooldown2": [7],
    "cooldown3": [130, 115, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Malzahar",
    "id": "Malzahar",
    "cost0": [80],
    "cost1": [40, 45, 50, 55, 60],
    "cost2": [60, 70, 80, 90, 100],
    "cost3": [100],
    "cooldown0": [6],
    "cooldown1": [8],
    "cooldown2": [15, 13, 11, 9, 7],
    "cooldown3": [140, 110, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Assassin"]
}, {
    "name": "Maokai",
    "id": "Maokai",
    "cost0": [50],
    "cost1": [60, 65, 70, 75, 80],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [100],
    "cooldown0": [8, 7.25, 6.5, 5.75, 5],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [11],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Mage"]
}, {
    "name": "Master Yi",
    "id": "MasterYi",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [50],
    "cost2": [0],
    "cost3": [100],
    "cooldown0": [18, 17, 16, 15, 14],
    "cooldown1": [28],
    "cooldown2": [18, 17, 16, 15, 14],
    "cooldown3": [85],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "NoCost",
    "costType3": "Mana",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Miss Fortune",
    "id": "MissFortune",
    "cost0": [43, 46, 49, 52, 55],
    "cost1": [30],
    "cost2": [80],
    "cost3": [100],
    "cooldown0": [7, 6, 5, 4, 3],
    "cooldown1": [12],
    "cooldown2": [14, 13, 12, 11, 10],
    "cooldown3": [120, 110, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Wukong",
    "id": "MonkeyKing",
    "cost0": [40],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [45, 50, 55, 60, 65],
    "cost3": [100],
    "cooldown0": [9, 8, 7, 6, 5],
    "cooldown1": [18, 16, 14, 12, 10],
    "cooldown2": [8],
    "cooldown3": [120, 105, 90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Mordekaiser",
    "id": "Mordekaiser",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [10, 8.5, 7, 5.5, 4],
    "cooldown1": [12, 11, 10, 9, 8],
    "cooldown2": [6, 5.75, 5.5, 5.25, 5],
    "cooldown3": [120, 105, 90],




    "costType0": "Health",
    "costType1": "Health",
    "costType2": "Health",
    "costType3": "NoCost",
    "tags": ["Fighter"]
}, {
    "name": "Morgana",
    "id": "Morgana",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [70, 85, 100, 115, 130],
    "cost2": [80],
    "cost3": [100],
    "cooldown0": [11],
    "cooldown1": [12],
    "cooldown2": [23, 21, 19, 17, 15],
    "cooldown3": [120, 110, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"]
}, {
    "name": "Nami",
    "id": "Nami",
    "cost0": [60],
    "cost1": [70, 85, 100, 115, 130],
    "cost2": [55, 60, 65, 70, 75],
    "cost3": [100],
    "cooldown0": [12, 11, 10, 9, 8],
    "cooldown1": [10],
    "cooldown2": [11],
    "cooldown3": [120, 110, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"]
}, {
    "name": "Nasus",
    "id": "Nasus",
    "cost0": [20],
    "cost1": [80],
    "cost2": [70, 85, 100, 115, 130],
    "cost3": [100],
    "cooldown0": [8, 7, 6, 5, 4],
    "cooldown1": [15, 14, 13, 12, 11],
    "cooldown2": [12],
    "cooldown3": [120],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Nautilus",
    "id": "Nautilus",
    "cost0": [60],
    "cost1": [80],
    "cost2": [50, 60, 70, 80, 90],
    "cost3": [100],
    "cooldown0": [14, 13, 12, 11, 10],
    "cooldown1": [12],
    "cooldown2": [7, 6.5, 6, 5.5, 5],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Nidalee",
    "id": "Nidalee",
    "cost0": [50, 60, 70, 80, 90],
    "cost1": [40, 45, 50, 55, 60],
    "cost2": [60, 75, 90, 105, 120],
    "cost3": [0],
    "cooldown0": [6],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [12],
    "cooldown3": [3],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "NoCost",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Nocturne",
    "id": "Nocturne",
    "cost0": [60, 65, 70, 75, 80],
    "cost1": [50],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [100],
    "cooldown0": [10],
    "cooldown1": [20, 18, 16, 14, 12],
    "cooldown2": [15, 14, 13, 12, 11],
    "cooldown3": [150, 125, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Nunu & Willump",
    "id": "Nunu",
    "cost0": [60],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [50, 55, 60, 65, 70],
    "cost3": [100],
    "cooldown0": [12, 11, 10, 9, 8],
    "cooldown1": [14],
    "cooldown2": [14],
    "cooldown3": [110, 100, 90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Fighter"]
}, {
    "name": "Olaf",
    "id": "Olaf",
    "cost0": [60],
    "cost1": [30],
    "cost2": [0],
    "cost3": [0, 0, 0],
    "cooldown0": [7],
    "cooldown1": [16],
    "cooldown2": [11, 10, 9, 8, 7],
    "cooldown3": [100, 90, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Health",
    "costType3": "NoCost",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Orianna",
    "id": "Orianna",
    "cost0": [30, 35, 40, 45, 50],
    "cost1": [70, 80, 90, 100, 110],
    "cost2": [60],
    "cost3": [100],
    "cooldown0": [6, 5.25, 4.5, 3.75, 3],
    "cooldown1": [7],
    "cooldown2": [9, 9, 9, 9, 9],
    "cooldown3": [110, 95, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"]
}, {
    "name": "Pantheon",
    "id": "Pantheon",
    "cost0": [45],
    "cost1": [55],
    "cost2": [45, 50, 55, 60, 65],
    "cost3": [100],
    "cooldown0": [4],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [10, 9, 8, 7, 6],
    "cooldown3": [150, 135, 120],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Poppy",
    "id": "Poppy",
    "cost0": [35, 40, 45, 50, 55],
    "cost1": [50],
    "cost2": [70],
    "cost3": [100],
    "cooldown0": [8, 7, 6, 5, 4],
    "cooldown1": [24, 22, 20, 18, 16],
    "cooldown2": [14, 13, 12, 11, 10],
    "cooldown3": [140, 120, 100],
    "disc": "Poppy's passive got cd based on lvl:",
    "recharge": [16, 12, 8],
    "static": true,




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Quinn",
    "id": "Quinn",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [0],
    "cost2": [50, 50, 50, 50, 50],
    "cost3": [100, 50, 0],
    "cooldown0": [11, 10.5, 10, 9.5, 9],
    "cooldown1": [50, 45, 40, 35, 30],
    "cooldown2": [12, 11, 10, 9, 8],
    "cooldown3": [0],




    "costType0": "Mana",
    "costType1": "NoCost",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Fighter"]
}, {
    "name": "Rammus",
    "id": "Rammus",
    "cost0": [60, 65, 70, 75, 80],
    "cost1": [40],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [16, 13.5, 11, 8.5, 6],
    "cooldown1": [6],
    "cooldown2": [12],
    "cooldown3": [100, 80, 60],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Rek'Sai",
    "id": "RekSai",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [4],
    "cooldown1": [4],
    "cooldown2": [12],
    "cooldown3": [100, 80, 60],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter"]
}, {
    "name": "Renekton",
    "id": "Renekton",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [8],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [18, 17, 16, 15, 14],
    "cooldown3": [120],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Rengar",
    "id": "Rengar",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [6, 5.5, 5, 4.5, 4],
    "cooldown1": [16, 14.5, 13, 11.5, 10],
    "cooldown2": [10],
    "cooldown3": [110, 90, 70],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Riven",
    "id": "Riven",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [13],
    "cooldown1": [11, 10, 9, 8, 7],
    "cooldown2": [10, 9, 8, 7, 6],
    "cooldown3": [120, 90, 60],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Rumble",
    "id": "Rumble",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [10, 9, 8, 7, 6],
    "cooldown1": [6],
    "cooldown2": [0.5, 0.5, 0.5, 0.5, 0.5],
    "cooldown3": [110, 100, 90],
    "disc": "Rumble's E uses charge and can store up to 2 with recharge:",
    "recharge": [6],




    "costType0": "Heat",
    "costType1": "Heat",
    "costType2": "Heat",
    "costType3": "NoCost",
    "tags": ["Fighter", "Mage"]
}, {
    "name": "Ryze",
    "id": "Ryze",
    "cost0": [40],
    "cost1": [50, 60, 70, 80, 90],
    "cost2": [60, 70, 80, 90, 100],
    "cost3": [100],
    "cooldown0": [6],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [3.25, 3, 2.75, 2.5, 2.25],
    "cooldown3": [180],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Fighter"]
}, {
    "name": "Sejuani",
    "id": "Sejuani",
    "cost0": [70, 75, 80, 85, 90],
    "cost1": [65],
    "cost2": [20],
    "cost3": [100],
    "cooldown0": [17, 15.5, 14, 12.5, 11],
    "cooldown1": [9, 8, 7, 6, 5],
    "cooldown2": [1.5],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Shaco",
    "id": "Shaco",
    "cost0": [60],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [50, 55, 60, 65, 70],
    "cost3": [100],
    "cooldown0": [16, 15.5, 15, 14.5, 14],
    "cooldown1": [16],
    "cooldown2": [8],
    "cooldown3": [100, 90, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Assassin"]
}, {
    "name": "Shen",
    "id": "Shen",
    "cost0": [140, 130, 120, 110, 100],
    "cost1": [40],
    "cost2": [150],
    "cost3": [0, 0, 0],
    "cooldown0": [8, 7.25, 6.5, 5.75, 5],
    "cooldown1": [18, 16.5, 15, 13.5, 11],
    "cooldown2": [18, 16, 14, 12, 10],
    "cooldown3": [200, 180, 160],




    "costType0": "Energy",
    "costType1": "Energy",
    "costType2": "Energy",
    "costType3": "NoCost",
    "tags": ["Tank", "Melee"]
}, {
    "name": "Shyvana",
    "id": "Shyvana",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [9, 8, 7, 6, 5],
    "cooldown1": [12],
    "cooldown2": [12, 11, 10, 9, 8],
    "cooldown3": [0],
    "disc": "Shyvana's R can be only cast on 100 Fury, and uses 5 fury per second.",




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Singed",
    "id": "Singed",
    "cost0": [13],
    "cost1": [60, 70, 80, 90, 100],
    "cost2": [80, 95, 110, 125, 140],
    "cost3": [100],
    "cooldown0": [1],
    "cooldown1": [17, 16, 15, 14, 13],
    "cooldown2": [10],
    "cooldown3": [120, 110, 100],
    "static0": true,




    "costType0": "MpS",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Sion",
    "id": "Sion",
    "cost0": [45],
    "cost1": [65, 70, 75, 80, 85],
    "cost2": [35, 40, 45, 50, 55],
    "cost3": [100],
    "cooldown0": [10, 9, 8, 7, 6],
    "cooldown1": [11],
    "cooldown2": [12, 11, 10, 9, 8],
    "cooldown3": [140, 100, 60],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Sivir",
    "id": "Sivir",
    "cost0": [70, 80, 90, 100, 110],
    "cost1": [60],
    "cost2": [0, 0, 0, 0, 0],
    "cost3": [100],
    "cooldown0": [7],
    "cooldown1": [12, 10.5, 9, 7.5, 6],
    "cooldown2": [22, 19, 16, 13, 10],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "NoCost",
    "costType3": "Mana",
    "tags": ["Marksman"]
}, {
    "name": "Skarner",
    "id": "Skarner",
    "cost0": [10, 11, 12, 13, 14],
    "cost1": [60],
    "cost2": [55],
    "cost3": [100],
    "cooldown0": [3.5, 3.25, 3, 2.75, 2.5],
    "cooldown1": [13, 12.5, 12, 11.5, 11],
    "cooldown2": [14, 13.5, 13, 12.5, 12],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Sona",
    "id": "Sona",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [80, 85, 90, 95, 100],
    "cost2": [65],
    "cost3": [100],
    "cooldown0": [8, 7.2, 6 , 4.8],
    "cooldown1": [10, 9, 7.5, 6],
    "cooldown2": [12, 10.8, 9, 7.2],
    "cooldown3": [140, 120, 100],
    "disc": "Sona's QWE CD's are based on her R current rank.",
    "recharge": '',




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"]
}, {
    "name": "Soraka",
    "id": "Soraka",
    "cost0": [40, 45, 50, 55, 60],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [70],
    "cost3": [100],
    "cooldown0": [5],
    "cooldown1": [8, 6.5, 5, 3.5, 2],
    "cooldown2": [24, 22, 20, 18, 16],
    "cooldown3": [160, 145, 130],
    "disc": "Soraka's W uses 10% of max health addtionaly to mana.",
    "recharge": '',




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"]
}, {
    "name": "Swain",
    "id": "Swain",
    "cost0": [65, 70, 75, 80, 85],
    "cost1": [70, 85, 100, 115, 130],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [0],
    "cooldown0": [7.5, 6.25, 5, 3.75, 2.5],
    "cooldown1": [22, 21, 20, 19, 18],
    "cooldown2": [13, 12, 11, 10, 9],
    "cooldown3": [120],
    "disc": "Swain's R needs at least 1 Soul Fragment to cast",
    "recharge": '',




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "MpS",
    "tags": ["Mage", "Fighter"]
}, {
    "name": "Syndra",
    "id": "Syndra",
    "cost0": [40, 50, 60, 70, 80],
    "cost1": [60, 70, 80, 90, 100],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [4],
    "cooldown1": [12, 11, 10, 9, 8],
    "cooldown2": [16, 15, 14, 13, 12],
    "cooldown3": [120, 100, 80],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"]
}, {
    "name": "Tahm Kench",
    "id": "TahmKench",
    "cost0": [50],
    "cost1": [60],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [5],
    "cooldown1": [28, 25, 22, 19, 16],
    "cooldown2": [6],
    "cooldown3": [120, 110, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Tank"]
}, {
    "name": "Taliyah",
    "id": "Taliyah",
    "cost0": [60, 70, 80, 90, 100],
    "cost1": [70, 80, 90, 100, 110],
    "cost2": [90, 95, 100, 105, 110],
    "cost3": [100, 100, 100],
    "cooldown0": [11, 9, 7, 5, 3],
    "cooldown1": [16, 15, 14, 13, 12],
    "cooldown2": [16, 14, 12, 10, 8],
    "cooldown3": [180, 150, 120],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"]
}, {
    "name": "Talon",
    "id": "Talon",
    "cost0": [30],
    "cost1": [55, 60, 65, 70, 75],
    "cost2": [0],
    "cost3": [100],
    "cooldown0": [8, 7.5, 7, 6.5, 6],
    "cooldown1": [9],
    "cooldown2": [2],
    "cooldown3": [100, 80, 60],
    "disc": "Talon's E apply CD on terrain:",
    "recharge": [160, 135, 110, 85, 60],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "NoCost",
    "costType3": "Mana",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Taric",
    "id": "Taric",
    "cost0": [60, 80, 100, 120, 140],
    "cost1": [60],
    "cost2": [60],
    "cost3": [100],
    "cooldown0": [3],
    "cooldown1": [15],
    "cooldown2": [17, 16, 15, 14, 13],
    "cooldown3": [160, 130, 100],
    "disc": "Taric's Q consume up to 5 charges and recharge:",
    "recharge": [15], 



    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Fighter"]
}, {
    "name": "Teemo",
    "id": "Teemo",
    "cost0": [70, 75, 80, 85, 90],
    "cost1": [40],
    "cost2": [0],
    "cost3": [75],
    "cooldown0": [8],
    "cooldown1": [17],
    "cooldown2": [0],
    "cooldown3": [0.25],
    "disc": "Teemo's R uses charge on cast and can store 3 charges with recharge:",
    "recharge": [30, 25, 20],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Passive",
    "costType3": "Mana",
    "tags": ["Marksman", "Assassin"]
}, {
    "name": "Thresh",
    "id": "Thresh",
    "cost0": [80],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [100],
    "cooldown0": [20, 18, 16, 14, 12],
    "cooldown1": [22, 19.5, 17, 14.5, 12],
    "cooldown2": [9],
    "cooldown3": [140, 120, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Fighter"]
}, {
    "name": "Tristana",
    "id": "Tristana",
    "cost0": [0],
    "cost1": [60],
    "cost2": [50, 55, 60, 65, 70],
    "cost3": [100],
    "cooldown0": [20, 19, 18, 17, 16],
    "cooldown1": [22, 20, 18, 16, 14],
    "cooldown2": [16, 15.5, 15, 14.5, 14],
    "cooldown3": [120, 110, 100],




    "costType0": "NoCost",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Assassin"]
}, {
    "name": "Trundle",
    "id": "Trundle",
    "cost0": [30],
    "cost1": [60],
    "cost2": [75],
    "cost3": [100],
    "cooldown0": [4],
    "cooldown1": [15],
    "cooldown2": [24, 22, 20, 18, 16],
    "cooldown3": [110, 90, 70],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Tryndamere",
    "id": "Tryndamere",
    "cost0": [0],
    "cost1": [0],
    "cost2": [0],
    "cost3": [0],
    "cooldown0": [12],
    "cooldown1": [14],
    "cooldown2": [13, 12, 11, 10, 9],
    "cooldown3": [110, 100, 90],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Twisted Fate",
    "id": "TwistedFate",
    "cost0": [60, 70, 80, 90, 100],
    "cost1": [40, 55, 70, 85, 100],
    "cost2": [0, 0, 0, 0, 0],
    "cost3": [150, 125, 100],
    "cooldown0": [6],
    "cooldown1": [6],
    "cooldown2": [0],
    "cooldown3": [180, 150, 120],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "passive",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Twitch",
    "id": "Twitch",
    "cost0": [40],
    "cost1": [70],
    "cost2": [50, 60, 70, 80, 90],
    "cost3": [100],
    "cooldown0": [16],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [12, 11, 10, 9, 8],
    "cooldown3": [90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Assassin"]
}, {
    "name": "Udyr",
    "id": "Udyr",
    "cost0": [45, 41, 37, 32, 28],
    "cost1": [45, 41, 37, 32, 28],
    "cost2": [45, 41, 37, 32, 28],
    "cost3": [45, 41, 37, 32, 28],
    "cooldown0": [6],
    "cooldown1": [6],
    "cooldown2": [6],
    "cooldown3": [6],
    "disc": "Udyr's CDs are based on his lvl and deacreases 1 sec per lvl.",
    "recharge": '',



    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Urgot",
    "id": "Urgot",
    "cost0": [50],
    "cost1": [45, 50, 55, 60, 65],
    "cost2": [50],
    "cost3": [100],
    "cooldown0": [12, 11, 10, 9, 8],
    "cooldown1": [13, 12, 11, 10, 9],
    "cooldown2": [16, 15, 14, 13, 12],
    "cooldown3": [120, 95, 70],
    "static": true,
    "disc": "Urgot's passive got static, based on lvl, per-leg cooldown:",
    "recharge": [30, 20, 10, 5, 2.5],



    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Fighter"]
}, {
    "name": "Varus",
    "id": "Varus",
    "cost0": [70, 75, 80, 85, 90],
    "cost1": [0],
    "cost2": [80],
    "cost3": [100],
    "cooldown0": [20, 18, 16, 14, 12],
    "cooldown1": [40],
    "cooldown2": [18, 16, 14, 12, 10],
    "cooldown3": [110, 90, 70],




    "costType0": "Mana",
    "costType1": "passive",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Mage"]
}, {
    "name": "Vayne",
    "id": "Vayne",
    "cost0": [30],
    "cost1": [0],
    "cost2": [90],
    "cost3": [80],
    "cooldown0": [4, 3.5, 3, 2.5, 2],
    "cooldown1": [0],
    "cooldown2": [20, 18, 16, 14, 12],
    "cooldown3": [100, 85, 70],




    "costType0": "Mana",
    "costType1": "Passive",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Marksman", "Assassin"]
}, {
    "name": "Veigar",
    "id": "Veigar",
    "cost0": [40, 45, 50, 55, 60],
    "cost1": [60, 65, 70, 75, 80],
    "cost2": [70, 75, 80, 85, 90],
    "cost3": [100, 100, 100],
    "cooldown0": [7, 6.5, 6, 5.5, 5],
    "cooldown1": [8, 7.2, 6.48, 5.25, 4.25],
    "cooldown2": [18, 17, 16, 15, 14],
    "cooldown3": [120, 100, 80],
    "disc": "Veigar's W is based on passive stacks and is approximated for 300 stacks.xx", 
    "recharge": '',



    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Vel'Koz",
    "id": "Velkoz",
    "cost0": [40, 45, 50, 55, 60],
    "cost1": [50, 55, 60, 65, 70],
    "cost2": [50, 55, 60, 65, 70],
    "cost3": [100],
    "cooldown0": [7],
    "cooldown1": [1.5],
    "cooldown2": [16, 15, 14, 13, 12],
    "cooldown3": [120, 100, 80],
    "static1": true,
    "disc": "Vel'Koz's W uses charge and can store up to 2 charges with recharge:",
    "recharge": [19, 18, 17, 16, 15],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Vi",
    "id": "Vi",
    "cost0": [50, 60, 70, 80, 90],
    "cost1": [0, 0, 0, 0, 0],
    "cost2": [26, 32, 38, 44, 50],
    "cost3": [100, 125, 150],
    "cooldown0": [12, 11, 10, 9, 8],
    "cooldown1": [0, 0, 0, 0, 0],
    "cooldown2": [1, 1, 1, 1, 1],
    "cooldown3": [150, 115, 80],
    "disc": "Vi's E uses charge on cast and can store 2 charges with recharge:",
    "recharge": [14, 12.5, 11, 9.5, 8],


    "costType0": "Mana",
    "costType1": "Passive",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Viktor",
    "id": "Viktor",
    "cost0": [45, 50, 55, 60, 65],
    "cost1": [65],
    "cost2": [70, 80, 90, 100, 110],
    "cost3": [100],
    "cooldown0": [8, 7, 6, 5, 4],
    "cooldown1": [17, 16, 15, 14, 13],
    "cooldown2": [13, 12, 11, 10, 9],
    "cooldown3": [120, 110, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Vladimir",
    "id": "Vladimir",
    "cost0": [0, 0, 0, 0, 0],
    "cost1": [0, 0, 0, 0, 0],
    "cost2": [0, 0, 0, 0, 0],
    "cost3": [0, 0, 0],
    "cooldown0": [9, 8, 7, 6, 5],
    "cooldown1": [28, 25, 22, 19, 16],
    "cooldown2": [13, 11, 9, 7, 5],
    "cooldown3": [150, 135, 120],




    "costType0": "NoCost",
    "costType1": "Health",
    "costType2": "Health",
    "costType3": "NoCost",
    "tags": ["Mage", "Tank"]
}, {
    "name": "Volibear",
    "id": "Volibear",
    "cost0": [40],
    "cost1": [35],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [100],
    "cooldown0": [12, 11, 10, 9, 8],
    "cooldown1": [18],
    "cooldown2": [11],
    "cooldown3": [100, 90, 80],
    "disc": "Volibear's passive trigger below 30% of max health and got static 120 sec CD.",
    "recharge": "",



    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Warwick",
    "id": "Warwick",
    "cost0": [50, 60, 70, 80, 90],
    "cost1": [70],
    "cost2": [40],
    "cost3": [100],
    "cooldown0": [6],
    "cooldown1": [120, 105, 90, 75, 60],
    "cooldown2": [15, 14, 13, 12, 11],
    "cooldown3": [110, 90, 70],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "NoCost",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Xerath",
    "id": "Xerath",
    "cost0": [80, 90, 100, 110, 120],
    "cost1": [70, 80, 90, 100, 110],
    "cost2": [60, 65, 70, 75, 80],
    "cost3": [100, 100, 100],
    "cooldown0": [9, 8, 7, 6, 5],
    "cooldown1": [14, 13, 12, 11, 10],
    "cooldown2": [13, 12.5, 12, 11.5, 11],
    "cooldown3": [130, 115, 100],
    "disc": "Xearth's passive grants him 30-195 mana (based on level), doubled on champions with static cooldown 12 sec.",
    "recharge": "",




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Assassin"]
}, {
    "name": "Xin Zhao",
    "id": "XinZhao",
    "cost0": [30, 30, 30, 30, 30],
    "cost1": [45, 45, 45, 45, 45],
    "cost2": [50, 50, 50, 50, 50],
    "cost3": [100, 100, 100],
    "cooldown0": [9, 8, 7, 6, 5],
    "cooldown1": [12, 11, 10, 9, 8],
    "cooldown2": [12, 12, 12, 12, 12],
    "cooldown3": [120, 110, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Assassin"]
}, {
    "name": "Yasuo",
    "id": "Yasuo",
    "cost0": [0, 0, 0, 0, 0],
    "cost1": [0, 0, 0, 0, 0],
    "cost2": [0, 0, 0, 0, 0],
    "cost3": [0, 0, 0],
    "cooldown0": [4, 4, 4, 4, 4],
    "cooldown1": [26, 24, 22, 20, 18],
    "cooldown2": [0.5, 0.4, 0.3, .2, .1],
    "cooldown3": [80, 55, 30],




    "costType0": "NoCost",
    "costType1": "NoCost",
    "costType2": "NoCost",
    "costType3": "NoCost",
    "static0": true,
    "static2": true,
    "static": true,
    "tags": ["Fighter", "Assassin"],
    "disc": "Yasuo's Q has cooldown affected by Attack speed witch drops up to minium with 1.45 AS. His E got cooldown per enemy champion: ",
    "recharge": [10, 9, 8, 7, 6]

}, {
    "name": "Yorick",
    "id": "Yorick",
    "cost0": [25, 25, 25, 25, 25],
    "cost1": [70, 70, 70, 70, 70],
    "cost2": [50, 55, 60, 65, 70],
    "cost3": [100, 100, 100],
    "cooldown0": [7, 6.25, 5.5, 4.75, 4],
    "cooldown1": [20, 18, 16, 14, 12],
    "cooldown2": [12, 11, 10, 9, 8],
    "cooldown3": [160, 130, 100],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Fighter", "Tank"]
}, {
    "name": "Zac",
    "id": "Zac",
    "cost0": [0, 0, 0, 0, 0],
    "cost1": [0, 0, 0, 0, 0],
    "cost2": [0, 0, 0, 0, 0],
    "cost3": [0, 0, 0],
    "cooldown0": [13, 12, 11, 10, 9],
    "cooldown1": [5, 5, 5, 5, 5],
    "cooldown2": [24, 21, 18, 15, 12],
    "cooldown3": [130, 115, 100],
    "disc": "Zac's passive got 300 sec static cooldown.",
    "recharge": "",



    "costType0": "Health",
    "costType1": "Health",
    "costType2": "Health",
    "costType3": "NoCost",
    "tags": ["Tank", "Fighter"]
}, {
    "name": "Zed",
    "id": "Zed",
    "cost0": [75, 70, 65, 60, 55],
    "cost1": [40, 35, 30, 25, 20],
    "cost2": [50, 50, 50, 50, 50],
    "cost3": [0, 0, 0],
    "cooldown0": [6, 6, 6, 6, 6],
    "cooldown1": [22, 20, 18, 16, 14],
    "cooldown2": [5, 4.5, 4, 3.5, 3],
    "cooldown3": [120, 90, 60],
    "disc": "Zed's passive got 10 sec on-target static cooldown.",
    "recharge": '',




    "costType0": "Energy",
    "costType1": "Energy",
    "costType2": "Energy",
    "costType3": "NoCost",
    "tags": ["Assassin", "Fighter"]
}, {
    "name": "Ziggs",
    "id": "Ziggs",
    "cost0": [50, 55, 60, 65, 70],
    "cost1": [65, 65, 65, 65, 65],
    "cost2": [70, 80, 90, 100, 110],
    "cost3": [100, 100, 100],
    "cooldown0": [6, 5.5, 5, 4.5, 4],
    "cooldown1": [26, 21, 18, 15, 12],
    "cooldown2": [16, 16, 16, 16, 16],
    "cooldown3": [120, 105, 90],




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage"]
}, {
    "name": "Zilean",
    "id": "Zilean",
    "cost0": [60, 65, 70, 75, 80],
    "cost1": [35, 35, 35, 35, 35],
    "cost2": [50, 50, 50, 50, 50],
    "cost3": [125, 150, 175],
    "cooldown0": [10, 9.5, 9, 8.5, 8],
    "cooldown1": [14, 12, 10, 8, 6],
    "cooldown2": [15, 15, 15, 15, 15],
    "cooldown3": [120, 90, 60],
    "disc": "Zilean can reduce his Q and E CD by 10 sec with his W",
    "recharge": "",




    "costType0": "Mana",
    "costType1": "Mana",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Support", "Mage"]
}, {
    "name": "Zyra",
    "id": "Zyra",
    "cost0": [60, 60, 60, 60, 60],
    "cost1": [0, 0, 0, 0, 0],
    "cost2": [70, 75, 80, 85, 90],
    "cost3": [100, 120, 140],
    "cooldown0": [7, 6.5, 6, 5.5, 5],
    "cooldown1": [0, 0, 0, 0, 0],
    "cooldown2": [12, 12, 12, 12, 12],
    "cooldown3": [130, 120, 110],




    "costType0": "Mana",
    "costType1": "stack",
    "costType2": "Mana",
    "costType3": "Mana",
    "tags": ["Mage", "Support"],
    "disc": "Zyra plants a seed from passive every:",
    "recharge": [13, 12, 11, 10, 9],
    static: true
}, ]