function a() {
    var a = {
        b: 1
    };
    console.log(a.b + 3);
}
function b() {
    var a = {
        b: {
            c: 1
        },
        d: 2
    };
    console.log(a.b + 3, a.d + 4, a.b.c + 5, a.d.c + 6);
}