// debug this code

const one = document.getElementById('option5')
const two = document.getElementById('option6')
const three = document.getElementById('option8')
const four = document.getElementById('option9')
const five = document.getElementById('option10')
const x = document.getElementById('option11')
const inputv = document.getElementById('ertek')

function radio() {
    if (one.checked) {
        inputv.value = "1"
    }

    if (two.checked) {
        inputv.value = "2"
    }

    if (three.checked) {
        inputv.value = "3"
    }

    if (four.checked) {
        inputv.value = "4"
    }

    if (five.checked) {
        inputv.value = "5"
    }

    if (x.checked) {
        inputv.value = "-"
    }
}

function getJegyek() {
    console.log('getJegyek() called')
    try {
        console.log('try called')
        fetch('/jegyek')
            console.log('fetching')
            .then(response => {
                console.log('Response .then')
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`)
                }
                return response.json()
            })
            console.log("Next then")
            .then(jegyek => {
                console.log('Tables')
                const matek = document.getElementById('matek');
                const magyar = document.getElementById('magyar');
                const angol = document.getElementById('angol');
                const term = document.getElementById('term');
                const rajz = document.getElementById('rajz');
                const ének = document.getElementById('ének');
                const digi = document.getElementById('digi');
                const tables = document.getElementById('tables');
                const form = document.getElementById('form');
                const diakForm = document.getElementById('diakForm');
                console.log('Variables!')

                const diakid = sessionStorage.getItem('diakid')
                console.log(`Got diakid! ${diakid}`)

                jegyek.forEach(jegy => {
                    console.log('Scanning!')
                    if (jegy.diak === diakid && diakid !== "baloghtatailevente" && diakid !== "baloghtataisara") {
                        console.log('Passed diakid and tanar!')
                        tables.classList.remove('hide')
                        diakForm.classList.add('hide')
                        form.classList.add('hide')
                        if (jegy.targy === "matematika") {
                            const row = matek.insertRow();
                            const cellTema = row.insertCell(0);
                            const cellTipus = row.insertCell(1);
                            const cellTanar = row.insertCell(2);
                            const cellErtek = row.insertCell(3);

                            cellTema.textContent = jegy.tema;
                            cellTipus.textContent = jegy.tipus;
                            cellTanar.textContent = jegy.tanar;
                            cellErtek.textContent = jegy.ertek;
                        }

                        if (jegy.targy === "magyar") {
                            const row = magyar.insertRow();
                            const cellTema = row.insertCell(0);
                            const cellTipus = row.insertCell(1);
                            const cellTanar = row.insertCell(2);
                            const cellErtek = row.insertCell(3);

                            cellTema.textContent = jegy.tema;
                            cellTipus.textContent = jegy.tipus;
                            cellTanar.textContent = jegy.tanar;
                            cellErtek.textContent = jegy.ertek;
                        }

                        if (jegy.targy === "angol") {
                            const row = angol.insertRow();
                            const cellTema = row.insertCell(0);
                            const cellTipus = row.insertCell(1);
                            const cellTanar = row.insertCell(2);
                            const cellErtek = row.insertCell(3);

                            cellTema.textContent = jegy.tema;
                            cellTipus.textContent = jegy.tipus;
                            cellTanar.textContent = jegy.tanar;
                            cellErtek.textContent = jegy.ertek;
                        }

                        if (jegy.targy === "term") {
                            const row = term.insertRow();
                            const cellTema = row.insertCell(0);
                            const cellTipus = row.insertCell(1);
                            const cellTanar = row.insertCell(2);
                            const cellErtek = row.insertCell(3);

                            cellTema.textContent = jegy.tema;
                            cellTipus.textContent = jegy.tipus;
                            cellTanar.textContent = jegy.tanar;
                            cellErtek.textContent = jegy.ertek;
                        }

                        if (jegy.targy === "rajz") {
                            const row = rajz.insertRow();
                            const cellTema = row.insertCell(0);
                            const cellTipus = row.insertCell(1);
                            const cellTanar = row.insertCell(2);
                            const cellErtek = row.insertCell(3);

                            cellTema.textContent = jegy.tema;
                            cellTipus.textContent = jegy.tipus;
                            cellTanar.textContent = jegy.tanar;
                            cellErtek.textContent = jegy.ertek;
                        }

                        if (jegy.targy === "ének") {
                            const row = ének.insertRow();
                            const cellTema = row.insertCell(0);
                            const cellTipus = row.insertCell(1);
                            const cellTanar = row.insertCell(2);
                            const cellErtek = row.insertCell(3);

                            cellTema.textContent = jegy.tema;
                            cellTipus.textContent = jegy.tipus;
                            cellTanar.textContent = jegy.tanar;
                            cellErtek.textContent = jegy.ertek;
                        }

                        if (jegy.targy === "digi") {
                            const row = digi.insertRow();
                            const cellTema = row.insertCell(0);
                            const cellTipus = row.insertCell(1);
                            const cellTanar = row.insertCell(2);
                            const cellErtek = row.insertCell(3);

                            cellTema.textContent = jegy.tema;
                            cellTipus.textContent = jegy.tipus;
                            cellTanar.textContent = jegy.tanar;
                            cellErtek.textContent = jegy.ertek;
                        }
                    } else if (sessionStorage.getItem('diakid') === "baloghtatailevente" || sessionStorage.getItem('diakid') === "baloghtataisara") {
                        tables.classList.add('hide')
                        diakForm.classList.remove('hide')
                        form.classList.remove('hide')
                        document.getElementById('tanar').value = sessionStorage.getItem('diakid')
                    }
                });
            })
            .catch(error => console.error('Fetch Error:', error))

            fetch('/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`)
                }
                return response.json()
            })
            .then(users => {
                const select = document.getElementById('diak')

                users.forEach(user => {
                    var option = document.createElement('option')
                    option.text = `${user.nev} (${user.azonosito})`
                    option.value = user.azonosito
                    select.add(option)
                });
            })
            .catch(error => console.error('Fetch Error:', error))
            
            
    } catch (error) {
        console.log(`Try-catch error: ${error}`)
    }
}

function login() {
    let loginvalue = document.getElementById('diakid').value

    sessionStorage.setItem('diakid', loginvalue)
    console.log(loginvalue)
    getJegyek()
    //location.reload()
}

getJegyek()