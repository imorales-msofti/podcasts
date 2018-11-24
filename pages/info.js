export default class extends React.Component {
    render() {
        return <div>
            <img src="/static/platzi-logo.png" />>
            <h1>Creado por Julio</h1>
            <p>Curso de Next.JS de Platzi</p>

            <style>{`

            div {
                text-align: center;
                margin-top:10%
            }

            h1 {
                color: white;
            }

            p {
                color: white;
            }

            img {
                max-width: 50%;
            }

            `}</style>
            <style jsx global>{`
                body {
                    background: #1c3643;
                }
            `}</style>
        </div>
    }
}