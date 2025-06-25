// ? promise took callback function and also took (resolve,reject)

// Resolve

/*

let ice_cream = new Promise((res, rej) => {
    let got_ice_cream = true;
    if (got_ice_cream) res(got_ice_cream);
    else rej(got_ice_cream);
}); // here i created new promises

ice_cream
    .then(() => {
        console.log("Eat Ice Cream");
    }) // This Will Be Output
    .catch(() => {
        console.log("Call Mommy");
    });

*/

// Reject

/*

let ice_cream1 = new Promise((res, rej) => {
    let got_ice_cream = false;
    if (got_ice_cream) res(got_ice_cream);
    else rej(got_ice_cream);
}); // here i created new promises

ice_cream
    .then(() => {
        console.log("Eat Ice Cream");
    })
    .catch(() => {
        console.log("Call Mommy");
    }); // This Will Be Output

*/

// ! What If We Get Delay To Get Response

// Promise

let ice_cream2 = new Promise((res, rej) => {
    let got_ice_cream;
    setTimeout(() => {
    got_ice_cream = true;
        if (got_ice_cream) {
            res('eat ice cream');
        }
        else {
            rej('call mommy');
        }
    }, 3000);
}); // here i created new promises

ice_cream2
    .then(() => {
        console.log("Eat Ice Cream");
    }) // This Will Be Output
    .catch(() => {
        console.log("Call Mommy");
    });

// Reject

/*

let ice_cream3 = new Promise((res, rej) => {
    let got_ice_cream;
    setTimeout(() => {
    got_ice_cream = false;
        if (got_ice_cream) {
            res('eat ice cream');
        }
        else {
            rej('call mommy');
        }
    }, 3000);
}); // here i created new promises

ice_cream3
    .then(() => {
        console.log("Eat Ice Cream");
    })
    .catch(() => {
        console.log("Call Mommy");
    }); // This Will Be Output

*/