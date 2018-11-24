export default class extends React.Component {
    render(){
        return <div>
            <h1>Hola Mundo</h1>
            <p>Bienenidos al Curso de Next.js</p>
            <p>Enviar</p>
            <style jsx>{`
            h1 {
                color: red;
            }
            :global(div p) {
                color: green;
            }
            `}</style>

            <style jsx global>{`
            body {
                background: yellow;
            }
            `}</style>

        </div>
    }
}