import CircleIcon from '@mui/icons-material/Circle';
import { useEffect } from 'react';

const Policy = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <>
            <div className='w-[78%] mx-auto h-fit'>
                <p className="text-[24px] flex justify-center font-oxygen font-bold mt-16">
                    MEMBERSHIP POLICY
                </p>
                <div>
                    <p className="text-[24px] font-oxygen font-bold mt-20">
                        Registration
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        Anyone can enlist in ‘FIRSTLOOK’ app if they are over 18 years old Indian citizen,
                        currently residing in India or abroad, either single, widowed, or divorcee.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        You must have a valid mobile number and an ID Proof (Aadhar). You should register in
                        our app using this mobile number. We will be using OTP system and will contact you
                        directly for this process of account verification. You must also provide an alternative
                        number. We will only use this secondary number to contact you in case the primary
                        contact number is unavailable.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        Kindly provide only correct and accurate details about yourself. Use latest pictures and
                        at-least one selfie image. Kindly understand that the data you provide will be the
                        parameter on which people will be impressed and propose you. If you use someone
                        else’s photos, you will be responsible for the legal and other issues that may occur later.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        The data that you provide on the app can be viewed by other members, including
                        photos. Kindly know that anyone can access your data, except address and contact
                        details, as long as they are a valid member of this application.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        We will be verifying the validity of your number and accuracy of data provided by you
                        using this contact number. The authenticity of the profile data will be the sole
                        responsibility of the owner of the profile. This application, our parent company, owners,
                        directors, or management staff holds no responsibility over the authenticity of the data
                        provided by a user.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        You can delete the profile and exit the application whenever you like. You can also hide
                        your profile for a short period of time and make it inactive without deleting the profile.
                        By doing this, you will be able to reactivate the same account later. You may have to
                        verify your mobile number once again to confirm the re-activation. The profile details
                        will be verified again if necessary.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        There won’t be any password system. Login will be done via OTP sent to your registered
                        number. So, kindly keep the primary number in an active status. You cannot use the
                        account of ‘FIRSTLOOK’ without OTP verification, once you logout.
                    </p>

                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Verification
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        We will verify the mobile number of each person via OTP to confirm the validity. We
                        will also verify the details via direct phone calls to check if the details given by you are
                        accurate. You must add Aadhar number during the registration process, for identity
                        verification. After adding Aadhar, the ID verification process will be completed and your
                        profile will be listed in our application. You must provide the ID within 7 days of
                        registration, or your profile will be automatically removed from our application.
                    </p>
                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Security
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        We provide a general data security. However, we can resolve issues instantly such as
                        data loss, security issues and app feature error’s that occur due to technical issues. We
                        can resolve issues due to Hacking or cyber-attacks etc. with the help of existing legal
                        remedies only. In order to resolve technical issues and legal procedures, and to process
                        updates, we will require a specific time. So, kindly bear with us, during those times.
                    </p>
                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Removal of profile
                    </p>
                    <p className="text-[16px] mt-6 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we are unable to contact you on the number that you have provided, and
                            thereby the verification process comes to a halt.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we have not received a valid ID proof within the specified time and thereby the
                            verification process comes to a halt.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we find out that the data that you have given is erroneous and you refuse to rectify
                            the errors.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you have uploaded someone else’s photo and refuse to remove that.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you upload any nude or morally questionable photos / videos in your profile.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3 '>If you don’t login to your account for more than 30 days, a verification call will be
                            arranged. If we are unable to get a response, the profile will be hidden from the
                            application. If the profile is inactive for 90 days, it will be removed automatically.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we confirm that you have already married.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you follow / stalk anyone using the details received from our application, despite
                            their complaints.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you copy the photos or phone number from other profiles and share them via any
                            media or social platforms, and we receive their complaints.</span>
                    </p>
                    <p className="text-[16px] mt-6 text-justify ml-8">
                        All the above mentioned scenarios are valid reason for your profile to get removed.
                    </p>
                    <p className="text-[16px] mt-4 text-justify ml-8">
                        If more than one profile of the same person is added, duplicate profiles will be
                        removed. If you continue to do so, the primary profile will also be removed without
                        warning.
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        Use our application by honoring and abiding by our Membership Policy. We wish you a
                        happy search.
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        With love and regards
                    </p>
                    <p className="text-[18px] text-[#FC3657] mt-2 mb-20 font-bold uppercase text-justify">
                        FIRSTLOOK
                    </p>
                </div>
            </div>
        </>
    )
}

export default Policy