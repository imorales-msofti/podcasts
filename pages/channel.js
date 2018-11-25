export default class extends React.Component {

    /* 
        getInitialProps({ query }), para obtener el id del channel que buscaremos en el API.

    */

    static async getInitialProps({ query }) {
        let idChannel = query.id
        console.log(idChannel)
        
        let req = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
        
        // Se escribe body: { channel }, por que el objeto dentro del json tiene un nombre así: channel:
        let { body: { channel } } = await req.json()

        console.log(channel)
        return { channel }
    }

    render() {
        const { channel } = this.props
        return <div>
            <header>Podcasts</header>
            <h1>{ channel.title }</h1>
            <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
            .channels {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            .channel {
                display: block;
                border-radius: 3px;
                margin-bottom: 0.5em;
                color: #333;
                text-decoration: none;
                text-align: center;
            }
            .channel img {
                width: 100%;
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0,.15);
                width: 100px;
            }
            h1 {
                padding: 15px;
                font-size: 0.9em;
                font-weight: 600;
                maring: 0;
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