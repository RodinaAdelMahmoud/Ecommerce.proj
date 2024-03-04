import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const handleSendVerification = () => {

    setStep(2);
  };

  const handleVerifyCode = () => {
    
    setStep(3);
  };

  const handleResetPassword = () => {

  };

  const renderStepOne = () => (
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-10 mt-5"> <h2 className='text-bolder h1'>Forgot Password</h2>
      <p>Please enter your email address:</p>
      <input className='form-control w-75 mb-3'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendVerification} className='btn bg-main text-light'>Send Verification Code</button></div>
    </div>
     
    </div>
   
    </>
  );

  const renderStepTwo = () => (
    <>
    <div className="container">
      <div className="row">  <div className="col-md-10 mt-5">
      <h2>Enter Verification Code</h2>
      <p>A verification code has been sent to your email. Please enter it below:</p>
      <input className='form-control w-75 mb-3'
        type="text"
        placeholder="Verification Code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleVerifyCode} className='btn bg-main text-light'>Verify Code</button>
      </div>
      </div>
    </div>
    
    </>
  );

  const renderStepThree = () => (
    <><div className="container">
      <div className="row">
        <div className="col-md-10 mt-5">
        <h2>Reset Password</h2>
      <p>Enter your new password:</p>
      <input className='form-control w-75 mb-3'
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword} className='btn bg-main text-light'>Reset Password</button>
        </div>

      </div>
    </div>
      
    </>
  );

  return (
    <div>
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
      {step === 3 && renderStepThree()}
    </div>
  );
}

export default ForgotPassword;
