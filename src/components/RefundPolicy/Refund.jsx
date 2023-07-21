import CircleIcon from '@mui/icons-material/Circle';
import { useEffect } from 'react';

const Refund = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <>
            <div className='w-[78%] mx-auto h-fit'>
                <p className="text-[24px] flex justify-center font-oxygen font-bold mt-10">
                    REFUND AND CANCELLATION POLICY
                </p>
                <div>
                    <p className="text-[24px] font-oxygen font-bold sm:mt-16 mt-10">
                        Regarding Payment
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        This is a premium application. You can use our services for free for a short period of
                        time to get familiarized with the nature of our services. However, you need to get paid
                        membership to continue our service. You can do the payment via any digital method
                        such as ATM/ Debit card / Credit Card / UPI etc… Kindly refer to payment plans [
                         <span className='text-[#FC3657] font-medium'> www.firstlook.pro/pricing</span> ] for further details. You can also contact us [
                        <span className='text-[#FC3657] font-medium'> support@firstlook.pro</span> ] in case any queries or complaints.
                    </p>
                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Refund Policy
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        The payments made by any Firstlook Member to Firstlook or its Parents company as a
                        Premium Membership Fee, Membership Renewal Fee, Add on Fee as treated a s non-
                        refundable.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        Payment once made for Firstlook services cannot be assigned to any other person, or
                        adjusted towards any other service or packages by Firstlook.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        A Firstlook Member shall not assign or transfer your membership to any other person
                        or entity, and such an act shall be treated as a violation of our terms and conditions, we
                        should terminate your account permanently without any refunds.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        A user done any premium activity in Firstlook app after made the payment, they are not
                        eligible for a refund at any circumstances. Detailed view of any profiles, Photo and video
                        views, Add favorites, Send proposal, Chat etc. are considered as premium activity.
                    </p>
                    <p className="text-[16px] mt-2 text-justify">
                        Is there any technical issues occur and a user can’t access the profile for a specific
                        period, we will rectify the issues as earlier possible. If it will be long more than 48hrs,
                        we will add the specific time to the user’s premium validity period. But we do not
                        entertain any kind of refunds.
                    </p>
                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Jurisdiction and Applicable Law
                    </p>
                    <p className="text-[16px] mt-6 text-justify">
                        All Firstlook services are deemed to have been entered into within the territorial
                        jurisdiction of Chennai, Tamil Nadu. All of our registered members / profile owners
                        unconditionally agree that all such disputes if any, shall be governed by the Laws of
                        India and submitting to the jurisdiction of appropriate court of law in Chennai, Tamil
                        Nadu, India.
                    </p>
                    <p className="text-[24px] font-oxygen font-bold mt-8">
                        Cancellation of profile
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
                    <p className="text-[16px] mt-6 mb-20 text-justify ml-8">
                        All the above mentioned scenarios are valid reason for your profile to get removed.
                    </p>
                </div>
            </div >
        </>
    )
}

export default Refund