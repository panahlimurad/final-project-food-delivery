import CheckoutPart from "../../../feature/ClientShared/components/CheckoutPart/CheckoutPart"
import CheckoutYourOrder from "../../../feature/ClientShared/components/CheckoutYourOrder/CheckoutYourOrder"
import LayoutUser from "../../../feature/ClientShared/components/LayoutUser/LayoutUser"
import CheckouSuccess from "../../../feature/ClientShared/components/checkoutsuccess/CheckouSuccess"
import LayoutClient from "../../../layoutClient/LayoutClient"

const Checkout = () => {
    return (
        <LayoutClient>
            <LayoutUser>
                {/* user */}
                <div className="flex md:flex-nowrap flex-wrap-reverse">
                    <CheckoutPart />
                    <CheckoutYourOrder/>
                    {/* <CheckouSuccess/> */}
                </div>

            </LayoutUser>
        </LayoutClient>)
}
export default Checkout