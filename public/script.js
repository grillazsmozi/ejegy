function getJegyek() {
    try {
        fetch('/jegyek')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok, status: ${response.status}`)
                }
                return response.json()
            })
            .then(jegyek => {
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
                    if (jegy.diak === diakid && diakid !== "tanar") {
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
                    } else if (sessionStorage.getItem('diakid') === "tanar") {
                        tables.classList.add('hide')
                        diakForm.classList.remove('hide')
                        form.classList.remove('hide')
                    }
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
    location.reload()
}

getJegyek()