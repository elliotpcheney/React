import React, {useState, useContext} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

import Globe from '../Common/Images/Globe.png'

export default function PaymentInputs() {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs();
    console.log('meta: ', meta);

    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [cvc, setCVC] = useState();
    const handleChangeCardNumber = (e) => {
        console.log('setCardNumber: ', e)
    }
    const handleChangeExpiryDate = (e) => {
        console.log('setExpire: ', e)
    }
    const handleChangeCVC =(e) => {
        console.log('setCVC: ', e)
    }
    return (
        <div className={css(styles.MainContainer)}> 
            <div className={css(styles.FormFieldContainer)}>
                <div className={css(styles.EnterPaymentHeadder)}>
                    <div className={css(styles.PaymentHeadderText)}>Enter Payment Information</div>
                </div>
                <input 
                    type="text"
                    placeholder="Card Holder Name"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)} 
                />
                <div className={css(styles.CardImageAndNumberContainer)}>
                    <svg {...getCardImageProps({ images })} />
                    <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} />
                </div>
                <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} />
                <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} />
                {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                <div className={css(styles.TermsText)}>By clicking Join below, you agree to our Terms and Conditoins and Privacy Policy</div>
                <input type="submit"/>
            </div>
            <div className={css(styles.ImagePriceContainer)}>
                <div className={css(styles.ImageContainer)}>
                    <img src={Globe} />
                </div>
                <div className={css(styles.DynamicTextAndPriceContainer)}>
                    <div className={css(styles.DynammicText)}>This Will Be Dynamic Text</div>
                    <div className={css(styles.DynammicPrice)}>This Will Be Dynamic Price</div>
                </div>
                <div className={css(styles.StaticTextContainer)}>
                    <h5>Our Guarantee:</h5>
                    <p>If you're not satisfied within 30 days, we'll gladly provide a refund.</p>
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        // marginLeft: '4em',
        // marginRight: '4em',
        border: '1px solid',
        borderRadius: '5px',
        backgroundColor: '#faeaa7',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Asap, sans-serif',
        fontSize: '20px',
    },
    EnterPaymentHeadder: {

    },
    PaymentHeadderText: {

    },
    FormFieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'
    },
    CardImageAndNumberContainer: {
        display: 'flex',
        // flexDirection: 'row',
        // width: '100%'
    },
    TermsText: {

    },
    ImagePriceContainer: {

    },
    ImageContainer: {

    },
    DynamicTextAndPriceContainer: {

    },
    DynammicText: {

    },
    DynammicPrice: {

    },
    StaticTextContainer: {

    },
})
