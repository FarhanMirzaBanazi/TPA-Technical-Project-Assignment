
// mengitung berat masa index

function hitung() {
    let tb = document.getElementById('tinggi').value;
    let bb = document.getElementById('berat').value;

    let rumus = bb / (tb / 100) ** 2;
    let hitungBmi = (rumus.toFixed(2));

    let hasil = document.getElementById("statusBerat")
    hasil.innerHTML = perbandingan()

    function perbandingan() {
        if (hitungBmi < 18.5) {
            return " which means You are Underweight"
            // console.log("lack of weight")
        }
        else if (hitungBmi >= 18.5 && hitungBmi < 24.9) {
            return " which means You are Normal"
            // console.log("Normal")
        }
        else if (hitungBmi >= 25 && hitungBmi < 29.9) {
            return " which means You are Overweight"
            // console.log("Overweight")
        }
        else {
            return " which means You are Obesity"
            // console.log("Obesity")
        }
    }

    document.getElementById("status").innerHTML = "Your BMI is " + hitungBmi;
}

