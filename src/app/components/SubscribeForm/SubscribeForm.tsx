import './SubscribeForm.css';

export default function SubscribeForm() {
    return (
        <main className='job_alert_reg'>
            <div className='job_alert_reg_body'>
                <div className="subscribe">
                    <p>SUBSCRIBE</p>
                    <input placeholder="Your e-mail" className="subscribe-input" name="email" type="email" />
                    <br />
                    <div className="submit-btn">SUBMIT</div>
                </div>
            </div>
        </main>
    );
}