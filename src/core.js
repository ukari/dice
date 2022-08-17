
function makeDice(sides){
    return function() {
        return Math.floor(Math.random() * sides) + 1;
    };
}

export { makeDice };

function s4() {
    let d = makeDice(4);
    return d();
}

export { s4 };

function s6() {
    let d = makeDice(6);
    return d();
}

export { s6 };

function s8() {
    let d = makeDice(8);
    return d();
}

export { s8 };

function s10() {
    let d = makeDice(10);
    return d();
}

export { s10 };

function s12() {
    let d = makeDice(12);
    return d();
}

export { s12 };

function s20() {
    let d = makeDice(20);
    return d();
}

export { s20 };

function cast(dices) {
    return dices.map(dice => dice()).reduce((acc, cur) => acc + cur, 0);
}

export { cast };

let events = {
    blessing: "祝福",
    lucky: "幸运",
    armor: "护甲提升"
};

const Battle = Object.freeze({
    Win: Symbol("win"),
    Lose: Symbol("lose"),
    Injury: Symbol("injury"),
    Lucky: Symbol("lucky"),
    Bless: Symbol("bless")
});

export { Battle };

const monster1 = {
    counter: 6,
    injury: 7,
    lucky: 8,
    bless: 9,
    defeat: 10
};

export { monster1 };

function battle(mon, total) {
    if (total <= mon.counter) {
        return Battle.Lose;
    } else if (total <= mon.injury) {
        return Battle.Injury;
    } else if (total <= mon.lucky) {
        return Battle.Lucky;
    } else if (total <= mon.bless) {
        return Battle.Bless;
    } else {
        return Battle.Win;
    }
}

export { battle };
