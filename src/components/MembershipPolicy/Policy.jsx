import CircleIcon from '@mui/icons-material/Circle';
import { useEffect } from 'react';

const Policy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className='w-[78%] mx-auto h-fit'>
                <p className="text-[24px] flex justify-center font-oxygen font-bold mt-10">
                    MEMBERSHIP POLICY
                </p>
                <div>
                    <p className="text-[24px] font-oxygen font-bold sm:mt-16 mt-10">
                        Registration
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        Anyone can enlist in ‘FIRSTLOOK’ app if they are over 18 years old Indian citizen,
                        currently residing in India or abroad, either single, widowed, or divorcee.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        You must have a valid mobile number and an ID Proof (Issued by Govt. of India).
                        You should register in our app using this mobile number. We will be using OTP
                        system and will contact you directly (if required) for this process of account
                        verification. You must also provide an alternative number. We will only use this
                        secondary number to contact you in case the primary contact number is unavailable.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        Kindly provide only correct and accurate details about yourself. Use latest pictures
                        and at-least one selfie image. Kindly understand that the data you provide will be the
                        parameter on which people will be impressed and propose you. If you use someone
                        else’s photos, you will be responsible for the legal and other issues that may occur
                        later.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        The data that you provide on the app can be viewed by other members, including
                        photos. Kindly know that anyone can access your data, except address and contact
                        details, as long as they are a valid member of this application.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        We will be verifying the authenticity of your contact number and accuracy of data
                        provided by you using this contact number. The authenticity of the profile data will be
                        the sole responsibility of the owner of the profile. This application, our parent
                        company, owners, directors, investor’s, management and staff members hold no
                        responsibility over the authenticity of the data provided by a user.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        You can delete the profile and exit the application whenever you like. You can also
                        hide your profile for a short period of time and make it inactive without deleting the
                        profile. By doing this, you will be able to reactivate the same account later. You may
                        have to verify your mobile number once again to confirm the re-activation. The profile
                        details will be verified again if necessary.
                    </p>

                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Regarding verification
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        We will verify the mobile number via OTP method and direct call to them to confirm
                        the authenticity of the contact number if required. Also, we verify the govt authorized
                        id proof like Aadhaar card / Pan Card / Driving License / Passport, to verify the
                        identity and residential address. This will help to avoid fake profiles and duplicate
                        profiles. Before verify your id proof, you can’t do any major activities in our website /
                        app, includes chat, proposal. if you are not adding your id while registration, you
                        should add this after launch your profile, within a period of 14 days. Otherwise, we
                        will move your profile to waiting list and in future it will going to a permanent removal
                        of your account.
                    </p>
                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Data Privacy
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        We collect your personal information’s, interests and choices, hobbies, academic,
                        occupation, and family details, concepts and preferences about life partners,
                        photographs and video reels via this application during the period of registration and
                        between the regular uses. The entire data we collect from you is only used for data
                        analysis to finding a right match for you.
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        Also, we collect your current location status to run the nearby feature in our app. This
                        feature will help you to find the matches nearby your location.
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        We will not share any of your information with any other entity outside of Firstlook
                        website and mobile app, for advertising, marketing or other data analysis purposes.
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        The moment you terminate your account from this application, all information about
                        you will be removed automatically from our database. We do not keep any
                        information for future in any reason.
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        Use our application by honoring and abiding by our terms and conditions. We wish
                        you a happy search.
                    </p>
                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Regarding the removal of profile
                    </p>
                    <p className="text-[16px] mt-6 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we are unable to contact you on the number that you have provided, and
                            thereby the verification process comes to a halt.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we have not received a valid ID proof within the specified time and thereby
                            the verification process comes to a halt.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we find out that the data that you have given is erroneous and you refuse to
                            rectify the errors.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you have uploaded someone else’s photo and refuse to remove that.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you upload any nude or morally questionable photos / videos in your profile.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3 '>If you don’t login to your account for more than 30 days, a notification
                            message will be arranged. If we are unable to get a response, the profile will
                            be hidden from the search list. If the profile is inactive even after 90 days, it
                            will be removed automatically.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If we confirm that you have already married.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you follow / stalk anyone using the details received from our application,
                            despite their complaints.</span>
                    </p>
                    <p className="text-[16px] mt-3 text-justify ml-8">
                        <CircleIcon sx={{ width: "9px", height: "9px", color: "red" }} /> <span className='ml-3'>If you copy the photos or phone number from other profiles and share them
                            via any print / electronic / digital media or social platforms, and we receive
                            their complaints.</span>
                    </p>
                    <p className="text-[16px] mt-6 text-justify ml-8">
                        All the above-mentioned scenarios are valid reason for your profile to get
                        removed.
                    </p>
                    <p className="text-[16px] mt-4 text-justify ml-8">
                        If more than one profile of the same person is added, duplicate profiles will be
                        removed. If you continue to do so, the primary profile will also be removed
                        without warning.
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        Use our application by honoring and abiding by our Membership Policy. We wish you
                        a happy search.
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