import fetch from 'isomorphic-fetch'

export default class extends React.Component {

    // getInitialProps() es una función que solo se puede ejecutar en Next.js 
    
    static async getInitialProps(){
        
        // Llamo al API de audioboom y obtengo la los caneles recomendados 
        let req = await fetch
        ('https://api.audioboom.com/channels/recommended')

        //  obtengo todo lo que contiene "body": [] y lo asigno a una variable llamada channels
        let { body: channels } = await req.json()

        // Regreso los todos los channels
        console.log(channels)
        return { channels }
    }

    render(){
        const { channels } = this.props
        return <div>
            <header>Podcasts</header>

            {
                channels.map((channel) => (
                    <div>{ channel.title } </div>

                ))
            }
            
            <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
           
            `}</style>

            <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui
                background: white;
            }
            `}</style>

        </div>
    }
}