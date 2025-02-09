import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

interface IProps {
    youtube: string;
    tiktok: string;
    facebook: string;
}
const SocialMedia = (props: IProps) => {
    const { youtube, tiktok, facebook } = props;

    return (
        <div>
            <div className="my-4 d-flex items-center gap-3">
                <a href={youtube} target='_blank' className="highlight" title="Youtube Dien An">
                    <SiYoutubeshorts size={30} />
                </a>
                <a href={tiktok} target='_blank' className="highlight" title="Tiktok Dien An">
                    <FaTiktok size={30} />
                </a>
                <a href={facebook} target='_blank' className="highlight" title="Facebook Dien An">
                    <FaFacebook size={30} />
                </a>
    
            </div>
            <div>
                <h6>Phone/Zalo: 0703555544</h6>
                <h6>Email: anhoangdien12@gmail.com</h6>
            </div>
        </div>
    )
}

export default SocialMedia;
