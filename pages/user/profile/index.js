import LayoutUser from "../../../feature/ClientShared/components/LayoutUser/LayoutUser"
import ProfilePart from "../../../feature/ClientShared/components/ProfilePart/ProfilePart"
import LayoutClient from "../../../layoutClient/LayoutClient"

const Profile = () => {

    return (
        <LayoutClient>
            <LayoutUser>
                <div>

                    <ProfilePart />
                </div>

            </LayoutUser>
        </LayoutClient>

    )
}
export default Profile