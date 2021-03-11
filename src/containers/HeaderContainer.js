import Header from '../components/Header'
import {connect} from 'react-redux'
import {removeToCart} from '../services/actions/cart'

const mapStateToProps=state=>({
    data:state.manageCartData
})
const mapDispatchToProps=dispatch=>({
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
