/*
  index.js : Pagina inicial /
*/

// Importamos fetch para acelerar la carga de paginas en producción
import 'isomorphic-fetch'

// Importamos el Componente Layout
import Layout from '../components/Layout'

// Importamos el Componente ChannelGrid
import ChannelGrid from '../components/ChannelGrid'

// Importamos el archivo _error, el cual gestiona los errores http generados
import Error from './_error'

export default class extends React.Component {

  static async getInitialProps({ res }) {
    try {
      /* Hacemos una llamada tipo get, a la api de audioboom para obtener los canales recomendados. */
      let req = await fetch('https://api.audioboom.com/channels/recommended')

      /* Obtenemos el json del request y el objeto body del json se lo agisnamos ana variable llamada channels */
      let { body: channels } = await req.json()

      /* Retornamos los canales en channels con un statusCode http con valor 200, OK. */
      return { channels, statusCode: 200 }
    } catch(e) {
      /* Se le asigna a res.statusCode = 503 por error de conexión */
      res.statusCode = 503
      /* channels: regresa null, y un statusCode de 503 */
      return { channels: null, statusCode: 503 }
    }
  }

  render() {
    /* Obtenemos el props de index.js, channels y statusCode */
    const { channels, statusCode } = this.props

    /* Si statusCode es distinto de 200 entonces mandar llamar el error */
    if( statusCode !== 200 ) {
      return <Error statusCode={ statusCode } />
    }


    /* Si no genera error, entonces retornar el componente <Layout> dentro del <ChannelGrid channels={ channels } />, 
    donde se le envia la lista de channels a su props de este componente */

    return <Layout title="Podcasts">
      <ChannelGrid channels={ channels } />
    </Layout>
  }
  
}
