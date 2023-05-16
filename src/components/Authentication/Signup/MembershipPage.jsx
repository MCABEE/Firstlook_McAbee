import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Home/Navbar'
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

const MembershipPage = () => {
    const termsAndConditionsRef = useRef(null);
    const [showAcceptButton, setShowAcceptButton] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault()
            if (termsAndConditionsRef.current) {
                const isFullyScrolled = termsAndConditionsRef.current.scrollHeight - termsAndConditionsRef.current.scrollTop === termsAndConditionsRef.current.clientHeight;
                setShowAcceptButton(isFullyScrolled);
            }
        };

        if (termsAndConditionsRef.current) {
            termsAndConditionsRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (termsAndConditionsRef.current) {
                termsAndConditionsRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    return (
        <>
            <Navbar />
            <div className="flex h-screen justify-center items-center mt-36 mb-36">

                <div className="w-full max-w-md  bg-white rounded-xl shadow-2xl h-[115vh] sm:h-[117vh]">
                    <p className='font-oxygen font-bold text-2xl ml-10 mt-20'>
                        Membership Policy and <br />
                        Terms of Use
                    </p>
                    <p className='font-oxygen font-bold text-sm mt-4 ml-10'>
                        Please read carefully and accept before you <br /> proceed.
                    </p>
                    <div ref={termsAndConditionsRef} style={{ maxHeight: '800px' }} className='w-11/12 h-[30rem] p-4 overflow-y-auto bg-[#F2F2F2] rounded-lg ml-5 mt-10'>
                        <p className='font-oxygen font-bold mt-10'>
                            Membership Policy
                        </p>
                        <p className='font-oxygen font-bold mt-5'>
                            Registration
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            Anyone can enlist in ‘FIRSTLOOK’ app if they are over 18 years old Indian citizen,
                            currently residing in India or abroad, either single, widowed, or divorcee.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            You must have a valid mobile number and an ID Proof (Aadhar). You should register in
                            our app using this mobile number. We will be using OTP system and will contact you
                            directly for this process of account verification. You must also provide an alternative
                            number. We will only use this secondary number to contact you in case the primary
                            contact number is unavailable.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            Kindly provide only correct and accurate details about yourself. Use latest pictures and
                            at-least one selfie image. Kindly understand that the data you provide will be the
                            parameter on which people will be impressed and propose you. If you use someone
                            else’s photos, you will be responsible for the legal and other issues that may occur later.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            The data that you provide on the app can be viewed by other members, including
                            photos. Kindly know that anyone can access your data, except address and contact
                            details, as long as they are a valid member of this application.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            We will be verifying the validity of your number and accuracy of data provided by you
                            using this contact number. The authenticity of the profile data will be the sole
                            responsibility of the owner of the profile. This application, our parent company, owners,
                            directors, or management staff holds no responsibility over the authenticity of the data
                            provided by a user.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            You can delete the profile and exit the application whenever you like. You can also hide
                            your profile for a short period of time and make it inactive without deleting the profile.
                            By doing this, you will be able to reactivate the same account later. You may have to
                            verify your mobile number once again to confirm the re-activation. The profile details
                            will be verified again if necessary.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            There won’t be any password system. Login will be done via OTP sent to your registered
                            number. So, kindly keep the primary number in an active status. You cannot use the
                            account of ‘FIRSTLOOK’ without OTP verification, once you logout.
                        </p>
                        <p className='font-oxygen font-bold mt-5'>
                            Verification
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            We will verify the mobile number of each person via OTP to confirm the validity. We
                            will also verify the details via direct phone calls to check if the details given by you are
                            accurate. You must add Aadhar number during the registration process, for identity
                            verification. After adding Aadhar, the ID verification process will be completed and your

                            profile will be listed in our application. You must provide the ID within 7 days of
                            registration, or your profile will be automatically removed from our application.
                        </p>
                        <p className='font-oxygen font-bold mt-5'>
                            Security
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            We provide a general data security. However, we can resolve issues instantly such as
                            data loss, security issues and app feature error’s that occur due to technical issues. We
                            can resolve issues due to Hacking or cyber-attacks etc. with the help of existing legal
                            remedies only. In order to resolve technical issues and legal procedures, and to process
                            updates, we will require a specific time. So, kindly bear with us, during those times.
                        </p>
                        <p className='font-oxygen font-bold mt-5'>
                            Removal of profile
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If we are unable to contact you on the number that you have provided, and
                                thereby the verification process comes to a halt.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If we have not received a valid ID proof within the specified time and thereby the
                                verification process comes to a halt.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If we find out that the data that you have given is erroneous and you refuse to
                                rectify the errors.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If you have uploaded someone else’s photo and refuse to remove that.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If you upload any nude or morally questionable photos / videos in your profile.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If you don’t login to your account for more than 30 days, a verification call will be
                                arranged. If we are unable to get a response, the profile will be hidden from the
                                application. If the profile is inactive for 90 days, it will be removed automatically.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If we confirm that you have already married.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4 '>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If you follow / stalk anyone using the details received from our application,
                                despite their complaints.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            <CircleIcon sx={{ width: 0.02, height: 0.02 }} /> <span className='ml-1'>If you copy the photos or phone number from other profiles and share them via
                                any media or social platforms, and we receive their complaints.</span>
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            All the above mentioned scenarios are valid reason for your profile to get removed.
                        </p>
                        <p className=' mt-3 font-normal text-sm ml-4'>
                            If more than one profile of the same person is added, duplicate profiles will be
                            removed. If you continue to do so, the primary profile will also be removed without
                            warning.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            Use our application by honoring and abiding by our Membership Policy. We wish you a
                            happy search.
                        </p>
                        <p className=' mt-3 font-normal text-sm'>
                            With love and regards
                        </p>
                        <p className=' mt-3 text-sm font-bold font-oxygen'>
                            FIRSTLOOK
                        </p>
                    </div>
                    {showAcceptButton && (
                        <button className='bg-rose-500 p-3 rounded-xl mt-10 mb-10 ml-12 sm:ml-20 text-white px-20'>
                            <Link to='/register/verify'>
                                I Accept, Let’s Go
                            </Link>
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default MembershipPage