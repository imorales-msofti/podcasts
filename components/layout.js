import Link from 'next/link'

export default class Layout extends React.Component {
    render() {
        return <div>
            <header><Link href="/"><a>Podcasts</a></Link></header>

            <style>{`
             header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
            header a {
                color: #fff;
                text-decoration: none;
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

