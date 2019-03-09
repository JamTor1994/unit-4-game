// var/objects for each charecter
var Goku = {
    Name: "Goku",
    Hp: 100,
    Atk: 30,
    CounterAtk: 25
}

var Vegeta = {
    Name: "Vegeta",
    Hp: 100,
    Atk: 20,
    CounterAtk: 20
}

var Krillin = {
    Name: "Krillin",
    Hp: 100,
    Atk: 10,
    CounterAtk: 5
}
var Nappa = {
    Name: "Nappa",
    Hp: 100,
    Atk: 15,
    CounterAtk: 15,
}
var currentCharacter = ""
var currentChallanger = ""
// on click actions and events
//charecter selection
$(".characterContainer").on("click", function () {


    if ($(this).attr("id") === "gokuContainer") {
        //appedning containers

        console.log($("#yourCharaceter").children().length)
        var len = $("#yourCharaceter").children().length
        if (len === 1) {
            $("#gokuContainer").appendTo("#Challanger")
            $("#gokuContainer").css({ red })
            currentChallanger = Goku
        } else if (len === 0) {
            $("#gokuContainer").appendTo("#yourCharaceter");
            $("#gokuHealth").text(Goku.Hp)
            //colorchange
            $("#gokuContainer").css({ backgroundColor: "blue" })
            currentCharacter = Goku
        }

    }
    else if ($(this).attr("id") === "vegetaContainer") {
        //appedning containers

        console.log($("#yourCharaceter").children().length)
        var len = $("#yourCharaceter").children().length
        if (len === 1) {
            $("#vegetaContainer").appendTo("#Challanger")
            currentChallanger = Vegeta
            $("#vegetaHealth").text(Vegeta.Hp)
            $("#vegetaContainer").css({ backgroundColor: "red" })
        } else if (len === 0) {
            $("#vegetaContainer").appendTo("#yourCharaceter");
            //colorchange
            $("#vegetaContainer").css({ backgroundColor: "blue" })
            currentCharacter = Vegeta
        }

    }
    else if ($(this).attr("id") === "krillinContainer") {
        //appedning containers

        console.log($("#yourCharaceter").children().length)
        var len = $("#yourCharaceter").children().length
        if (len === 1) {
            $("#krillinContainer").appendTo("#Challanger")
            currentChallanger = Krillin
            $("#krillinHealth").text(Krillin.Hp)
            $("#krillinContainer").css({ backgroundColor: "red" })
        } else if (len === 0) {
            $("#krillinContainer").appendTo("#yourCharaceter");
            //colorchange
            $("#krillinContainer").css({ backgroundColor: "blue" })
            currentCharacter = Krillin
        }

    }
    else if ($(this).attr("id") === "nappaContainer") {
        //appedning containers

        console.log($("#yourCharaceter").children().length)
        var len = $("#yourCharaceter").children().length
        if (len === 1) {
            $("#nappaContainer").appendTo("#Challanger")
            currentChallanger = Nappa
            $("#nappaContainer").text(Nappa.Hp)
            $("#nappaContainer").css({ backgroundColor: "red" })
        } else if (len === 0) {
            $("#nappaContainer").appendTo("#yourCharaceter");
            //colorchange
            $("#nappaContainer").css({ backgroundColor: "blue" })
            currentCharacter = Nappa
        }

    }

});
$("#attackBtn").on("click", function (event) {
    event.preventDefault()
    console.log(currentChallanger)
    console.log(currentCharacter)
    if (currentCharacter.Hp > 0) {
        currentChallanger.Hp = currentChallanger.Hp - currentCharacter.Atk
        currentCharacter.Hp = currentCharacter.Hp - currentChallanger.CounterAtk
        $(currentCharacter.name + "Health").text(currentCharacter.Hp)
        $(currentChallanger.name + "Health").text(currentChallanger.Hp)
        console.log(currentChallanger)
        console.log(currentCharacter)
        if (currentChallanger.Hp <= 0) {
            $("#vegetaContainer").appendTo("#defender")
            $("#vegetaContainer").css({ backgroundColor: "black" })
        }

    } else if (currentCharacter.Hp <= 0) {
        alert("You Lose")
    }
})