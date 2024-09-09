
import DeviceInfo from "react-native-device-info";

const Server =  'https://tor.appdevelopers.mobi/api/' // online

const Constant = {
    URL : {
        baseUrl : Server,
        login : 'login',
        register : 'register',
    },
    device_id : DeviceInfo.getDeviceId(),
    isMobile : DeviceInfo.isTablet() ? 0 : 1
}

export default Constant;