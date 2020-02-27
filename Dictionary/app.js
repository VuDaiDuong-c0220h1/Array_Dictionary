let vn = ["con mèo", "con chó", "con lợn", "con gà", "con chuột", "con chim"];
let eng = ["cat", "dog", "pig", "chicken", "mouse", "bird"];
function showMess() {
    let inputvn = document.getElementById("vietnam").value;
    if (vn.indexOf(inputvn) !== -1) {
        let a = eng[vn.indexOf(inputvn)];
        document.getElementById("english").value = a.toString();
    } else {
        document.getElementById("english").value = "Không tìm thấy.";
    }
}

function showMess01() {
    let inputeng = document.getElementById("english").value;
    if (eng.indexOf(inputeng) !== -1) {
        let a = vn[eng.indexOf(inputeng)];
        document.getElementById("vietnam").value = a.toString();
    } else {
        document.getElementById("vietnam").value = "Không tìm thấy.";
    }
}