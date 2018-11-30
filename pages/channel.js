export default class extends React.Component {

    /* 
        getInitialProps({ query }), para obtener el id del channel que buscaremos en el API.

    */

    static async getInitialProps({ query }) {
        let idChannel = query.id
        console.log(idChannel)

        /*
        1.- FORMA DE HACERLO
        let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel

        let reqAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
        let dataAudios = await reqAudios.json()
        let audioClips = dataAudios.body.audio_clips

        console.log(channel)
        console.log(audioClips)

        return { channel, audioClips }
        */

        /*
        2.- FORMA DE HACERLO
        */

        /* Una mejor forma de solicitar un fectch, respondiendo más rápido a la petición*/
        let [reqChannel, reqSeries, reqAudios] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${idChannel}`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
            fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        ])

        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel

        let dataAudios = await reqAudios.json()
        let audioClips = dataAudios.body.audio_clips

        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels

        return { channel, audioClips, series }

    }

    render() {
        const { channel, audioClips, series } = this.props
        return <div>
            <header>Podcasts</header>
            <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
            <h1>{channel.title}</h1>


            <h2>Últimas Series</h2>
            {series.map((serie) => (
                <div>{serie.title}</div>
            ))}

            <h2>Audio Clips</h2>
            {audioClips.map((clip) => (
                <div>{clip.title}</div>
            ))}

            <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
            .banner {
                width: 100%;
                padding-bottom: 25%;
                background-position: 50% 50%;
                background-size: cover;
                background-color: #aaa;
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