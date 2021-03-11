import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../services/actions/cart'

const mapStateToProps=state=>({
        data:state.manageCartData
})

/*
const mapStateToProps = (state) => {
    return {
        data: state.manageCartData
    }
};
*/


const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

/*
const mapDispatchToProps = (dispatch) => {
    return {
        addToCartHandler: data => dispatch(contactAction.addToCart(data)),
        deleteContact: index =>dispatch(contactAction.deleteContact(index))
    }
};
*/
export default connect(mapStateToProps,mapDispatchToProps)(Home)