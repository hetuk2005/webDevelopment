// Code 1

/*

function appends(s) {
    let script = document.createElement('script');

    script.src = s;

    document.head.append(script);

    // hello(); // Depended On Script To Get Completely Load.

    setTimeout(() => {
        hello(); // Depended On Script To Get Completely Load.
    }, 3000);

    //console.log(document);
}
appends('../myScript.js');

*/

// Code 2

/*

function appends(s) {
    return new Promise((res, rej) => {
        let script = document.createElement('script');

        script.src = s;

        document.head.append(script);

        script.onload = function () {
            res('Script Loaded Done');
        };

        script.onerror = function () {
            rej('Not Loaded');
        };
    });
}
//console.log(appends('../myScript.js'))

// * Basically  .then and .catch give used to handel
appends('./myScript,js')
    .then((res) => {
        console.log(res);
        hello();
    })
    .catch ((rej) => {
        console.log(err, '-> This IS Error');
});

*/

// Code 3

function appends(s) {
    return new Promise((res, rej) => {
        let script = document.createElement('script');

        script.src = s;

        document.head.append(script);

        script.onload = function () {
            res('Script Loaded Done');
        };

        script.onerror = function () {
            rej('Not Loaded');
        };
    });
}

async function handel() {
    try {
        let res = await appends('../myScript.js');
        console.log(res);
        hello();
    } catch(err) {
        console.log(err);
    }
}
handel(); // Here We Are Using Just For Understanding The Concept