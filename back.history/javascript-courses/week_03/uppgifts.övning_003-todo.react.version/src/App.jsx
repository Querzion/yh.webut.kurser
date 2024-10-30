import React from 'react'

function App() {
  return (
    <section id="end-version" className="container">
        
        <div id="t2do-box" className="t2do-box">
            
            <div className="content">
            
                <form id="t2do-form" className="t2do-form">
                    <input type="text" id="t2do-input" className="t2do-input" placeholder="WRITE NEW TODO HERE" />
                    <button className="btn">Create TO:DO</button>
                </form>

                <ul id="t2dos-field" className="t2dos-field">
                    
                    <li className="t2do">
                        <div className="t2do-left">
                            <input id="t2do-checkmark-test5" className="t2do-checkmark hidden" type="checkbox" />
                            <label htmlFor="t2do-checkmark-test5">
                                <p className="t2do-text">memo:
                                    Extra:
                                      för dig som vill ha mer utmaning.
                                      Gör så att det är möjligt att ta bort en todo från listan och så att alla todos sparas även om man laddar om sidan.
                                      Gör detta genom att spara in dom i localstorage.
                                      Du bör då göra följande:
                                      Lägg till en knapp med en eventListener på varje todo för att kunna ta bort den.
                                      Skapa en array där du lägger till varje todo som ett objekt.
                                      Skapa en funktion som loopar igenom din lista för att lägga till dina todos i DOM:en för att försäkra dig om att listan alltid överensstämmer med det som syns.
                                      Varje gång du lägger till, klarmarkerar eller tar bort en todo så bör du uppdatera det som sparats i localstorage.
                                      När sidan laddas - hämta eventuell data från localstorage, lägg till dom i din array och skriv ut på sidan.
                                      Här behöver vi då tänka på vilken struktur vi ska ha på våra objekt i arrayen. En vanlig struktur på ett todo objekt kan vara:
                                      id - för att hitta den specifika todon i listan.
                                      title - Vilken text ska stå i todon?
                                      completed - är todon klar eller inte?
                                      Tips! När vi ska spara någonting i localstorage så måste det vara text. Detta betyder att vi behöver konvertera våra javaScript objekt till JSON.
                                </p>
                            </label>
                        </div>
                        <div className="t2do-right">
                            <button id="t2do-btn" className="t2do-btn"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>
                    
                    <li className="t2do">
                        <div className="t2do-left">
                            <input id="t2do-checkmark-test5" className="t2do-checkmark hidden" type="checkbox" />
                            <label htmlFor="t2do-checkmark-test5">
                                <p className="t2do-text t2do-checked">5. Fix the checkbox for the entries that are done. </p>
                            </label>
                        </div>
                        <div className="t2do-right">
                            <button id="t2do-btn" className="t2do-btn"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>

                    <li className="t2do">
                        <div className="t2do-left">
                            <input id="t2do-checkmark-test4" className="t2do-checkmark hidden" type="checkbox" />
                            <label htmlFor="t2do-checkmark-test4">
                                <p className="t2do-text t2do-checked">4. Fix the delete entry button. </p>
                            </label>
                        </div>
                        <div className="t2do-right">
                            <button id="t2do-btn" className="t2do-btn"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>

                    <li className="t2do">
                        <div className="t2do-left">
                            <input id="t2do-checkmark-test3" className="t2do-checkmark hidden" type="checkbox" />
                            <label htmlFor="t2do-checkmark-test3">
                                <p className="t2do-text">3. Read the file at start/after refresh, re-add the todo's. </p>
                            </label>
                        </div>
                        <div className="t2do-right">
                            <button id="t2do-btn" className="t2do-btn"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>

                    <li className="t2do">
                        <div className="t2do-left">
                            <input id="t2do-checkmark-test2" className="t2do-checkmark hidden" type="checkbox" />
                            <label htmlFor="t2do-checkmark-test2">
                                <p className="t2do-text">2. Fix the save todo list button, and use that to save to a premade file.</p>
                            </label>
                        </div>
                        <div className="t2do-right">
                            <button id="t2do-btn" className="t2do-btn"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>

                    <li className="t2do">
                        <div className="t2do-left">
                            <input id="t2do-checkmark-test1" className="t2do-checkmark hidden" type="checkbox" />
                            <label htmlFor="t2do-checkmark-test1">
                                <p className="t2do-text">1. Fetch the inputs and put them in a json file.</p>
                            </label>
                        </div>
                        <div className="t2do-right">
                            <button id="t2do-btn" className="t2do-btn"><i className="fa-solid fa-trash"></i></button>
                        </div>
                    </li>

                </ul>

                <button id="save-t2do-list-btn" className="btn save-t2do-list-btn hidden">Save TO:DO List</button>
            
            </div>
        
        </div>

    </section>
  )
}

export default App
