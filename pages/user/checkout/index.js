import CheckoutPart from "../../../feature/ClientShared/components/CheckoutPart/CheckoutPart"
import CheckoutYourOrder from "../../../feature/ClientShared/components/CheckoutYourOrder/CheckoutYourOrder"
import LayoutUser from "../../../feature/ClientShared/components/LayoutUser/LayoutUser"
import LayoutClient from "../../../layoutClient/LayoutClient"

const Checkout = () => {
    return (
        <LayoutClient>
            <LayoutUser>
                {/* user */}
                <div className="flex">
                    <CheckoutPart />
                    <CheckoutYourOrder/>
                </div>

            </LayoutUser>
        </LayoutClient>)
}
export default Checkout