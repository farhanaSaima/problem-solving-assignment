//problem 1:ana to vori
function anaToVori(ana) {
    const anaRate = ana;
    const anaToVori = ana / 16;
    console.log("vori = ", anaToVori);
}
anaToVori(16)

//problem 2:pandaCost
function pandaCost(foodCost) {
    const foodRate = foodCost;
    const vat = 1;
    const delivary = 9
    const total = foodRate + vat + delivary;
    console.log("pandaCost =", total);

}
pandaCost(200)

//problem 3:picnicBudget
function picnicBudget(totalPerson) {
    for (let i = 0; i < totalPerson; i++) {
        if (i <= 100) {
            console.log("frst 100 per head 5000")
        }
        else if (i <= 101) {
            console.log("second 99 per head 4000")
        }
        else if (i < 201) {
            console.log("others 2 head 3000")
        }

    }
}
picnicBudget(1000);


// problem 4: odd friend

const friendname = ["saima", "abir", "shifat", "fiham"]
function oddFriend(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length % 2 == 0) {
            console.log(array[i], "is not odd")
        }
        else if (array[i].length % 2 != 0) {
            console.log(array[i], "is  odd")
        }
    }
}
oddFriend(friendname)