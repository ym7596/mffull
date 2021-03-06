import React,{useEffect,useState} from 'react';
import { useTranslation } from 'react-i18next';
import '../CssFolder/Second.css'
import thisimg from '../assets/11.jpg';
const Second = () => {
    const [position,setPosition] = useState(0);
    function onScroll(){
        
    }
    const { t } = useTranslation();
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-xs-3 col-12'>              
                    <div className='textbox'>
                            
                        <h1  id='hh1'>BNPLO</h1>
                
                       {t("S1")}<br/>
                       {t("S1_1")}<br/>
                       {t("S1_2")}<br/>
                       {t("S1_3")}<br/>
                       {t("S1_4")}<br/>
                       {t("S1_5")}<br/>
                            {/* 먼저 구매하고 나중에 결제하자!<br/>
                            회원제 온라인 쇼핑몰 뿐만 아니라<br/>
                            사람들과 함께 사이버 백화점에서<br/>
                            쇼핑을 할 수 있으며,<br/>
                            VR을 통해 직접 구매할 상품을<br/>
                            착용 및 사용 후 구매할 수 있습니다.<br/> */}

                    </div>
                    
                    
                </div>
                <div className='col-md-6 col-xs-3 col-12'> 
                    <div className='imgbox'>
                        <img src={thisimg} className='img-fluid mx-auto d-block' alt='...'></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Second
