import React from 'react';
import { useTranslation } from 'react-i18next';
import '../CssFolder/Second.css'

const Second = () => {
    const { t } = useTranslation();
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    
                </div>
            <div className='col-md-6'>
                <div className='box222'>
                        <h1>LIVE CHANNEL</h1>
                        <br/>
                    
                        <h5>
                            백화점 상품에 대한 쇼핑 라이브 진행과<br/>
                            모든 사용자에 대한<br/>
                            크리에이티비티를 발휘할 수 있는<br/>
                            영상 플랫폼 서비스와 더불어<br/>
                            당신의 기념하고 싶은 날이나 홍보 등<br/>
                            광고 서비스를 이용하여<br />
                            옥외 광고 진행이 가능합니다.
                            
                            </h5>
                    </div>    
            </div>
          </div>
    </div>
        
    )
}

export default Second