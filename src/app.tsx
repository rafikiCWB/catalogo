/*
/!**
 * O conceito mais importante do React são componentes.
 * Componentes são funções que devolvem HTML, porem quando o HTML está
 * num arquivo JS nós chamamos de JSX e não HTML, porque no final das
 * contas o HTML é convertido para JS.
 * @constructor
 *!/
export function App() {
    // é isso que tem por baixo dos panos | create.reactElement
    return (
        <h1 className={"text-3xl font-bold underline"}>
            Hello world
        </h1>
    )
}*/
export function App() {
    return (
        <div>
            <div className="div">
                <img src="src/img/MAYA BAY - NEW COLLECTION-01.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-02.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-03.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-04.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-05.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-06.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-07.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-08.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-09.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-10.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-11.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-12.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-13.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-14.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-15.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-16.png" alt="" />
                <img src="src/img/MAYA BAY - NEW COLLECTION-17.png" alt="" />
            </div>
        </div>
    );
}
