import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
// import avatarImg from "assets/avatar.svg";
import './introduction.scss';
import { useTranslation } from 'react-i18next';
import avatarImg from "assets/avatar.png";

const Introduction = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className='introduction-section my-5 my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={9}>
                    <h2 className='text-center text-md-start'>
                        {i18n.resolvedLanguage === "en" ? <>
                            LET ME <span className='text-pink-100'> INTRODUCE </span> MYSELF
                        </>
                            :
                            <>
                                <span className='text-pink-100'>GIỚI THIỆU</span> BẢN THÂN
                            </>
                        }
                    </h2>
                    <br />
                    <p>
                        {t("I love working in business and with people.")}
                        <br />
                        <br />{t("I graduated from")}
                        <i>
                            <b className='text-pink-100'> University of Economics Ho Chi Minh City. </b>
                        </i>
                        <br />
                        <br />
                        {t("I have accumulated practical experience in the field of online business, including")} &nbsp;
                        <i>
                            <b className='text-pink-100'>
                                {t("Sales Executive, Operating an E-commerce Platform, a Photography Studio and Project Manager.")}
                            </b>
                        </i>
                        <br />
                        <br />
                        {t(" I am passionate about business and always looking for")}
                        <i><b className='text-pink-100'>&nbsp;opportunities</b> </i>
                        {t("to")}
                        <i>
                            <b className='text-pink-100'>
                                {" "}
                                develop myself.
                            </b>
                        </i>

                    </p>
                </Col>
                <Col md={3} className='d-md-block d-none'>
                    <Tilt>
                    <img src={avatarImg} className="img-fluid" alt="avatar" />
                        {/* <img src={avatarImg} className="img-fluid" alt="avatar" /> */}
                    </Tilt>
                </Col>
            </Row>
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
        </section>
    )
}

export default Introduction;
