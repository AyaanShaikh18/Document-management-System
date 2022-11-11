
import Logo from '../../media/logo.png'

import '../../styles/header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';





const index = ({userPhoto}) => {
    return (


        <div className='header'>
            <div className='header__logo'>
                <img src={Logo} alt='logo'></img>
                <span>DocMan</span>
            </div>
            <div className='header__searchContainer'>
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search in DocMan' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={userPhoto} alt="pic"></img>
            </div>
        </div>

    )
}

export default index
