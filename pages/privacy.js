import Link from 'next/link';
import { useState } from 'react'
import {RiArrowDropDownLine} from "react-icons/ri";


function Privacy() {
  const [showDropdown, setShowDropdown]  = useState(false)
  const mobileToggle = () => {
      setShowDropdown(prev => !prev)
  }
  return (
    <div id='top-div'>
          <div className='my-4 bg-zinc-200 rounded relative scroll-smooth pt-0 lg:pt-12' >
                   <h1 className='underline font-medium pt-2 md:pt-0 text-center text-2xl'>
                      Privacy
                    </h1>
                <div className='flex flex-col mt-12 md:mt-0 lg:flex-row mx-1 justify-between items-center lg:mx-24'>
                   
                    <div className='w-80 '>
                        <div className='my-4'>
                            <label htmlFor="categories">Select Category</label>
                        </div>
                       
                        <button 
                            onClick={mobileToggle}
                            className='flex items-center w-full border-2 border-gray-400 justify-between mb-4 p-2 rounded-md'>
                             Privacy Policies  <RiArrowDropDownLine />
                         </button>
                        <div className= {showDropdown ?"absolute bg-slate-500 rounded-md z-10" : "hidden"} >
                            <ul>
                                 <li className='p-2 hover:text-white'><Link href="#info">WHAT INFORMATION DO WE COLLECT ? </Link></li>
                                 <li className='p-2 hover:text-white'><Link href="#info-process">HOW DO WE PROCESS YOUR INFORMATION? </Link></li>
                                 <li className='p-2 hover:text-white'><Link href="#infoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? </Link></li>
                                <li className='p-2 hover:text-white'>
                                    <Link href="#technology-used">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Link>
                                </li>
                                <li className='p-2 hover:text-white'>
                                    <Link href="#social-login">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link>
                                </li>
                                <li className='p-2 hover:text-white'>
                                    <Link href="#info-duration">HOW LONG DO WE KEEP YOUR INFORMATION?</Link>
                                </li>
                                <li className='p-2 hover:text-white'><Link href="#how-infokept">HOW DO WE KEEP YOUR INFORMATION SAFE? </Link></li>
                                <li className='p-2 hover:text-white'>
                                    <Link href="#privacy-rights">WHAT ARE YOUR PRIVACY RIGHTS?</Link>
                                </li>
                                <li className='p-2 hover:text-white'><Link href="#controls">CONTROLS FOR DO-NOT-TRACK FEATURES </Link></li>
                                <li className='p-2 hover:text-white'><Link href="#california-rights">DO CALIFORNIARESIDENTS HAVE SPECIFIC PRIVACY RIGHTS </Link></li>
                                <li className='p-2 hover:text-white'><Link href="#updates">DO WE MAKE UPDATES TO THIS NOTICE? </Link></li>
                                <li className='p-2 hover:text-white'><Link href="#notice-contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </Link></li>
                                <li className='p-2 hover:text-white'><Link href="#review">HOW CAN YOU REVIEW UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? </Link></li>

                            </ul>
                        </div>
                    </div> 
                    <div  className='w-80 mb-4 lg:mb-0'>
                        <div className='my-4'>
                            <label htmlFor="search">Search</label>
                        </div>
                        <div className='flex items-center border-b border-gray-400'>
                            <input
                             className=' bg-zinc-200 mr-4 w-full pb-2'
                              type="text"
                               placeholder='Search by typing keywords...' />
                            &#128269;
                        </div>
                    </div>

                </div>

            </div>


   
    <div className='leading-8 relative'>
      <div id='top-div'>
        <h2 className='text-3xl font-bold text-center my-6'>PRIVACY NOTICE</h2>
        <p>
        
            Last updated April 12, 2022
            This privacy notice for <span className="underline  decoration-1"> Afeez LLC </span> ("Company" "we" "us" or "our"), 
            describes how and why we
            might collect, store, use, and/or share ("process") your information when you use our service
            ("Services"), such as when you:
            Visit our website at <Link href="https://www.softwaredevbytes.com">https:/faze20.github.io/codesnippets</Link> ,
             or any website of ours that link
            to this privacy notice
            Engage with us in other related ways, including any sales, marketing, or events
            <h4 className='text-base font-semibold my-2'> Questions or concerns?</h4>
            Reading this privacy notice will help you understand your privacy
            rights and choices. If you do not agree with our policies and practices, please do not use our
            Services. If you still have any questions or concerns, please contact us at
            <span className="underline  decoration-1"> email@faze20.github.io/codesnippets/.</span>
            </p>
            <h2 className='text-3xl font-bold text-center my-6'>SUMMARY OF KEY POINTS</h2>
            
            <p>
            This summary provides key points from our privacy notice, but you can find out more
            details about any of these topics by clicking the link following each key point or by using
            our table of contents below to find the section you are looking for. You can also
            <Link href="#table"> click here </Link>
             to go directly to our table of contents.
             <h4 className='text-base font-semibold my-2'>
             What personal information do we process?
             </h4>
             When you visit, use, or navigate our Services, we
            may process personal information depending on how you interact with
             <span className="underline  decoration-1"> Afeez LLC </span>
              and the Services,
            the choices you make, and the products and features you use.<Link href="#table"> Click here </Link> to learn more.
            <h4 className='text-base font-semibold my-2'>Do we process any sensitive personal information? </h4>
             We do not process sensitive personal
            information.
            <h4 className='text-base font-semibold my-2'>Do you receive any information from third parties?</h4>
             We do not receive any information from
            third parties.
            <h4 className='text-base font-semibold my-2'>How do you process my information?</h4>
             We process your information to provide, improve, and
            administer our Services, communicate with you, for security and fraud prevention, and to comply
            with law. We may also process your information for other purposes with your consent. We
            process your information only when we have a valid legal reason to do so. <Link href="#table">Click here </Link>
             to learn
            more.
            <h4 className='text-base font-semibold my-2'> In what situations and with which parties do we share personal information?</h4>
            We may
            share information in specific situations and with specífic third parties. <Link href="#table">Click here</Link> to lean more.
            <h4 className='text-base font-semibold my-2'>How do we keep your information safe?</h4>
             We have organizational and technical processes and
            procedures in place to protect your personal information. However, no electronic transmission
            over the internet or information storage technology can be guaranteed to be 100% secure, so
            we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect, access, steal, or modify your
            information.<Link href="#table">Click here</Link> to leam more.
            <h4 className='text-base font-semibold my-2'>What are your rights?</h4>
             Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal information. <Link href="#table">Click here</Link> to
            lean more
            <h4 className='text-base font-semibold my-2'>How do I exercise my rights?</h4>
             The easiest way to exercise your rights is by filling out our data
            subject request form available here: <Link href="https://www.softwaredevbytes.com">https:/faze20.github.io/codesnippets</Link>, 
            or by
            contacting us. We will consider and act upon any request in accordance with applicable data
            protection laws.
            Want to learn more about what Afeezllc does with any information we collect? <Link href="#table2">Click here</Link> to
            review the notice in full.
            <h2 id='table' className='text-3xl font-bold mt-6'> TABLE OF CONTENTS</h2>
            <ul>
              <li>1. WHAT INFORMATION DO WE COLLECT</li>
              <li>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li> 3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li> 4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              <li> 5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
              <li>6. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li> 7. HOW D0 WE KEEP YOUR INFORMATION SAFE?</li>
              <li>8. WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>9. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>10. DO CALIFORNIARESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
              <li>11. DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li> 13. HOW CAN YOU REVIEW UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ul>
            <h2 id='info' className='text-3xl font-bold mt-6'>1. WHAT INFORMATION DO WE COLLECT?</h2>
            
            <h4 className='text-base font-semibold my-2'>Personal information you disclose to us</h4>
            
            <span className="underline  decoration-1">In Short:</span> We collect personal information that you provide to us
            We collect personal information that you voluntarily provide to us when you register on the
            Services, express an interest in obtaining information about us or our products and Services,
            when you participate in activities on the Services, or otherwise when you contact us.
            Personal Information Provided by You. The personal information that we collect depends on
            the context of your interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect may include the following
            <ul>
              <li>  names</li>
              <li>email addresses</li>
              <li>passwords</li>
              <li> Usernames</li>
              <li> phone numbers</li>
            </ul>
          
            
            
           
           
            <span className="underline  decoration-1"> Sensitive Information.</span> 
             <p> We do not process sensitive information.</p>
           
            <span className="underline  decoration-1"> Payment Data.</span> 
            <p>
             We may collect data necessary to process your payment if you make
            purchases, such as your payment instrument number (such as a credit card number), and the
            security code associated with your payment instrument. All payment data is stored by Paypal.
            You may find their privacy notice link(s) here: <br />
            <Link href="https:/www.paypal.com/us/webapps/mpp/ua/privacy-full">
                  www.paypal.com/us/webapps/mpp/ua/privacy-full
            </Link>

            </p>
            <span className="underline  decoration-1"> Social Media Login Data.</span> 
            <p>
             We may provide you with the option to register with us using your
            existing social media account details, like your Facebook, Twitter, or other social media account
            If you choose to register in this way, we will collect the information described in the section
            called "HOW DO WE HANDLE YOUR SOCIAL LOGINS " below

            All personal information that you provide to us must be true, complete, and accurate, and you
            must notity us of any changes to such personal information.

            </p>
            <h4 className='text-base font-semibold my-2'> Information automatically collected</h4>
            <span className="underline  decoration-1">In Short:</span>
             Some information such as your Internet Protocol (IP) address and or browser and
            device characteristics s collected automatically when you visit our services.
            we automatically collect certain inormation when you visit, use, or navigate the services. Ihis
            information does not reveal your specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address, browser and device
            characteristics, operating system, language preferences, referring URLS, device name, country.
            location, information about how and when you use our Services, and other technical information.
            This information is primarily needed to maintain the security and operation of our Services, and
            for our internal analytics and reporting purposes.
            Like many businesses, we also collect information through cookies and similar technologies
            <span className="underline  decoration-1">The information we collect includes</span>
            
            <span className="underline  decoration-1">Device Data.</span>
            <p>
             We collect device data such as infomation about your computer, phone,
            tablet, or other device you use to aCcess the Services. Depending on the device used, this
            device data may include information such as your IP address (or proxy server), device
            and application identification numbers, location, browser type, hardware model, Internet
            service provider and/or mobile carrier, operating system, and system configuration
            information.

            </p>
            <span className="underline  decoration-1">Location Data.</span>
            <p>
               we collect location data such as intomation about your device's location,
            which can be either precise or imprecise. HoW much information we collect depends on
            the type and settings of the device you use to access the services. For example, we may
            use GPS and other technologies to collect geolocation data that tells us your current
            location (based on your IP address). You can opt out of allowing us to collect this
            information either by refusing access to the information or by disabling your Location
            seting on your device. However, if you choose to opt out, you may not be able to use
            certain aspects of the Services.
              </p>
            <h4 id='info-process' className='text-base font-semibold my-2'>2. HOW DO WE PROCESS YOUR INFORMATION?</h4>

            
            <span className="underline  decoration-1">In Short: </span>
            We process your information to provide,
             improve, and administer our SerVices,
            communicate with you, for security and fraud prevention, and to comply with laW We may also
            process your information for other purposes with your consent.
            We process your personal information for a variety of reasons, depending on how you
            interact with our Services, including:
            To facilitate account creation and authentication and otherwise manage user
            accounts. We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
            To deliver and facilitate delivery of services to the user. We may process your
            information to provide you with the requested service.
            To respond to user inquiries/ofer support to users. We may process your infomation
            to respond to your inquiries and solve any potential issues you might have with the
            requested service.
            To request feedback. We may process your information when necessary to request
            feedback and to contact you about your use of our Services.
            To post testimonials. We post testimonials on our Services that may contain personal
            information
            To protect our Services. We may process your infomation as part of our efforts to keep
            our Services safe and secure, including fraud monitoring and prevention
            To identify usage trends. We may process information about how you use our Services
            to better understand how they are being used so we can improve them
            To comply with our legal obligations. We may process your information to comply with
            our legal obligations, respond to legal requests, and exercise, establish, or defend our
            legal rights.
            <h4 id='infoshare' className='text-base font-semibold my-2'>3.WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h4>
            
            
            <span className="underline  decoration-1">In Short:</span> We may share information in specific situations described in this section and/or with
            the following third parties.
            We may need to share your personal information in the following situations:
            Business Transfers. We may share or transfer vour information in connection with ,or during negotiations of,
            any merger, sale of company assests, finacing, or acquisition of all or a portion of our business to 
            another company.
            <h4 id='technology-used' className='text-base font-semibold my-2'>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4>
            
            <span className="underline  decoration-1">In Short:</span> We may use cookies and other tracking technologies to collect and store your
            information.
            We may use cookies and similar tracking technologies (ike web beacons and pixels) to access
            or store information. Specific information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice
            <h4 id='social-login' className='text-base font-semibold my-2'>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h4>
            
            <span className="underline  decoration-1">In Short:</span>
             lf you choose to register or log in to our services using a social media account, we
            may have access to certain information about you
            Our Services offer you the ability to register and log in using your third-party social media
            account details (like your Facebook or Twitter logins). Where you choose to do this, we wilI
            receive certain profile information about you from your social media provider. The profile
            information we receive may vary depending on the social media provider concened, but will
            often include your name, email address, friends list, and profile picture, as well as other
            information you choose to make public on such a social media platform.
            We will use the information we receive only for the purposes that are described in this privacy
            notice or that are otherwise made clear to you on the relevant Services. Please note that we do
            notice or that are otherwise made clear to you on the relevant Services. Please note that we do
            not control, and are not responsible for, other uses of your personal information by your third-
            party social media provider. We recommend that you review their privacy notice to understand
            how they collect, use and share your personal information, and how you can set your privacy
            preferences on their sites and apps.
            <h4 id='info-duration' className='text-base font-semibold my-2'>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h4>
            
            <span className="underline  decoration-1">In Short:</span>
             We keep your information for as long as necessary to fulfill the purposes outlined in
            this privacy notice uniless otherwise required by law
            We will only keep your personal information for as long as it is necessary for the purposes set
            out in this privacy notice, unless a longer retention period is required or permitted by law (such
            as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping
            your personal information for longer than the period of time in which users have an account with
            Us
            When we have no ongoing legitimate business need to process your personal information, we
            will either delete or anonymize such information, or, if this is not possible (for example, because
            your personal information has been stored in backup archives), then we will securely store your
            personal information and isolate it from any further processing until deletion is possible.
            <h4 id='how-infokept' className='text-base font-semibold my-2'>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h4>
            
            <span className="underline  decoration-1">In Short:</span>
             We aim to protect your personal information through a system of organizational and
            technical security measures.
            We have implemented appropriate and reasonable technical and organizational security
            measures designed to protect the security of any personal information we process. However,
            despite our safeguards and efforts to secure your information, no electronic transmission over
            the Internet or information storage technology can be guaranteed to be 100% secure, so we
            cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties wi
            not be able to defeat our security and improperly collect, access, steal, or modify your
            information. Although we will do our best to protect your personal information, transmission of
            personal information to and from our Services is at your own risk. You should only access the
            Services within a secure environment
            <h4 id='privacy-rights' className='text-base font-semibold my-2'>8. WHAT ARE YOUR PRIVACY RIGHTS?</h4>
            
            <span className="underline  decoration-1">In Short:</span> You may review, change, or terminate your account at any time
            If you are located in the EEA or UK and you believe we are unlawfully processing your personal
            information, you also have the right to complain to your local data protection supervisory
            authority. You can find their contact details here: 
            <Link href="https://ec.europa.eu/justice/data"> 
            https://ec.europa.eu/justice/data/ protection/bodies/authorities/index en.htm
            </Link>
           
            If you are located in Switzerland, the contact details for the data protection authorities are
            available here:<Link href=" https:www.edoeb.adminch/edoeb/en/home"> https://www.edoeb.adminch/edoeb/en/home.html </Link>

            Withdrawing.your consent: lf we are relying on your consent to process your personal
            information, which may be express and/or implied consent depending on the applicable law, you
            have the right to withdraw your consent at any time. You can withdraw your consent at any time
            by contacting us by using the contact details provided in the section "HOW CAN YOU
            CONTACT US ABOUT THIS NOTICE?" below.
            However, please note that this will not affect the lawfulness of the processing before its
            withdrawal, nor when applicable law allows, will it affect the processing of your personal
            information conducted in reliance on lawful processing grounds other than consent
            Opting out of marketing and promotional communications: You can unsubscribe from Our
            marketing and promotional communications at any time by clicking on the unsubscribe link in the
            emails that we send, or by contacting us using the details provided in the section "HOW CAN
            YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the
            marketing Iists. However, we may still communicate wIith you- For example, to send you
            service-related messages that are necessary for the administration and use of your account, to
            respond to Service requests, or for other non-marketing purposes.
            Account Information
            if you would at any time like to review or change the information in your account or terminate
            your account, you can
            Log in to your account settings and update your user account
            Contact us using the contact information provided.
            Upon your request to terminate your account, we will deactivate or delete your account and
            information from our active databases. However, we may retain some information in our files to
            prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms
            and/or comply with applicable legal requirements.
            Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If
            you prefer, you can usually choose to set your browser to remove cookies and to reject cookies.
            If you choose to remove cookies or reject cookies, this could affect certain features or services
            of our Senvices. To opt out of interest-based advertising by advertisers on our Services visit
            http:/www.aboutads.info/choices/
            If you have questions or comments about your privacy rights, you may email us at
            <span className="underline  decoration-1"> afeez@faze20.github.io/codesnippets</span>
            
            <h4 id='controls' className='text-base font-semibold my-2'>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h4>
            
            Most web browsers and some mobile operating systems and mobile applications include a Do-
            Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and collected. At this stage no uniform
            technology standard for recognizing and implementing DNT signals has been finalized. As such,
            we do not currently respond to DNT browser signals or any other mechanism that automatically
            communicates your choice not to be tracked online. If a standard for online tracking is adopted
            that we must follow in the future, we will inform you about that practice in a revised version of
            this privacy notice.
            <h4 id='california-rights' className='text-base font-semibold my-2'>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
            RIGHTS?</h4>
            
            <p>
               <span className="underline  decoration-1">In Short:</span>  Yes, if you are a resident of california,
            you are granted specífic rights regarding
            Access to your personal information.
            California Civil Code Section 1798.83, also known as the "shine The Light" law, permits our
            users who are California residents to request and obtain from us, once a year and free of
            charge, information about categories of personal information (if any) we disclosed to third parties
            for direct marketing purposes and the names and addresses of all third parties with which we
            shared personal information in the immediately preceding calendar year. If you are a California
            resident and would like to make such a request, please submit your request in writing to us
            using the contact information provided below.
            If you are under 18 years or age, reside in California, and have a registered account with
            Services, you have the right to request removal of unwanted data that you publicly post on the
            Services. To request removal of such data, please contact us using the contact information
            provided below and include the email address associated with your account and a statement
            that you reside in California. We will make sure the data is not publicly displayed on the
            Services, but please be aware that the data may not be completely or comprehensively removed
            from all our systems (e.g., backups, etc.).
              </p>

            <span className="underline  decoration-1">CCPA Privacy Notice</span>
            <p>
            The California Code of Regulations defines a "resident" as
            (1) every individual who is in the State of California for other than a temporary or transitory
            purpose and
            (2) every individual who is domiciled in the State of California who is outside the State of
            California for a temporary or transitory purpose
            All other individuals are defined as "non-residents.
            f this definition of "resident" applies to you, we must adhere to certain rights and obligations
            regarding your personal information.
            What categories of personal information do we collect?
            We have collected the following categories of personal information in the past twelve (12)
            months

            </p>
        </p>
        <div id='table2' className="border-2 border-gray-400 text-sm  lg:text-base my-8">
          <div>
            <ul>
              <li className='flex justify-between  border-b border-gray-400 '>
                <div className='basis-3/12 md:basis-2/12 py-4'>Category</div>
                <div className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Examples</div>
                <div className='basis-2/12 md:basis-1/12 py-4'>Collected</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>A.Identifiers</div>
              <div className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>
              Contact details, such as real name, alias, postal
                address, telephone or mobile contact number, unique
                 personal identfier, online identifier,
                 Intermet Protocol address, email address, and
                    account name
              </div>
              <div  className='basis-2/12 md:basis-1/12 py-4'>No</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>B. Personal intormation caregories listed in the California
                 Customer Records statute
                 </div>
                <div className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>
                   Name, contact information, education,
                  
                  employment, employment history, and financial information
                          </div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>Yes</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>C. Protected classification
                       characteristics under Calitornia or federal law</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Gender and date ot birth</div>
                <div  className='basis-2/12 md:basis-1/12 py-4'> No</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>D.Commercial information</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Transaction infomation, purchase history.
                  Tinancial details, and payment information</div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>E. Biometric information</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Fingerprints and voiceprints
                 </div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>F.Internet or other similar network activity</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>
                Browsing history, search history, online
                behavior, interest data, and interactions with our
                and other websites, applications, systems, and
                advertisements
               </div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li >
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>G. Geolocation data</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Device location</div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>H.Audio , electronic,  visual, thermal, olfactory 
                  or similar information
                </div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'> Images and audio, Video or call recordings
                created in connection with our business
                activities
                </div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>No</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>I.Audio ,electronic, visual, thermal
                  olfactory ,olfactory, or similar information
                </div>
                
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Images and audio, Video or call recordings
                created in connection with our business
                activities
                </div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
              <div className='basis-3/12 md:basis-2/12 py-4'>J.Professional or employment related information</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Business contact details in order to provide you
                our services at a business level or job title, work
                  history, and professional qualifications if you apply Tor a job with us
                </div>
               
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>K.Education inrormation</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4'>Student records and directory intomation</div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li>
              <li className='flex justify-between   border-b border-gray-400'>
                <div className='basis-3/12 md:basis-2/12 py-4'>L. Inferences drawn from other personal infomation</div>
                <div  className='basis-7/12 md:basis-9/12 border-x-2 border-gray-400 py-4' > listed above to create a
                profile or Summary about, for example, ann
                individual's preferences and characteristics
                </div>
                <div  className='basis-2/12 md:basis-1/12 py-4'>NO</div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p>
              We may also collect other personal information outside of these categories instances where you
              interact with us in person, online, or by phone or mail in the context of
              Receiving help through our customer support channels
              Participation in customer surveys or contests, and
              Facilitation in the delivery of our Services and to respond to your inquiries.
              How do we use and share your personal information?
              More information about our data collection and sharing practices can be found in this privacy
              notice
              You may contact us by email at <span className="underline  decoration-1">afeez@faze20.github.io/codesnippets</span>, by visiting
              https:/ifaze20.github io/codesnippets/contact, or by referring to the contact details at the bottom
              of this document.
              if you are using an authorized agent to exercise your right to opt out we may deny a request if
              the authorzed agent does not submit prior that they have been validly autnorized to act on your
              behalf.
              <h4 className='text-base font-semibold my-2'>Will your information be shared with anyone else? </h4>
              <p>
              We may disclose your personal information with our service providers pursuant to a written
              contract between us and each service provider. Each service provider is a for-profit entity that
              processes the information on our behalf.
              We may use your personal information for our own business purposes, such as for undertaking
              internal research for technological development and demonstration. This is not considered to be
              "selling" of your personal information.
              <span className="underline  decoration-1"> Afeezllc </span>
              has not disclosed or sold any personal information to third parties for a business or
              commercial purpose in the preceding twelve (12) months.  <span className="underline  decoration-1"> Afeezllc </span>
               will not sell personal
              information in the future belonging to website visitors, users, and other consumers

              </p>
              Your rights with respect to your personal data
              Right to request deletion of the data- Request to delete
              You can ask for the deletion of your personal information. If you ask us to delete your personal
              information, we will respect your request and delete your personal information, subject to certain
              exceptions provided by law, such as (but not limited to) the exercise by another consumer of his
              or her right to free speech, our compliance requirements resulting from a legal obligation, or any
              processing that may be required to protect against illegal activities.
              Right to be informed = Request to know
              Depending on the circumstances, you have a right to know
              whether we collect and use your personal information
              the categories of personal information that we collect
              the purposes for which the collected personal information is used,
              whether we sell your personal information to third parties
              the categories of personal information that we sold or disclosed for a business purpose
              the categories of third parties to whom the personal information was sold or disclosed for
              a business purpose and
              the business or commercial purpose for collecting or selling personal information.
              In accordance with applicable law, we are not obligated to provide or delete consumer
              information that is de-identified in response to a consumer request or to re-identify individual
              data to verifty a consumer request.
              Right to Non-Discrimination for the Exercise of a consumer's Privacy Rights
              We will not discriminate against you if you exercise your privacy rights.

              <h4 className='text-base font-semibold my-2'>Verification process</h4>

              Upon receiving your request, we will need to verify your identity to determine you are the same
              person about whom we have the information in our system. These verification efforts require us
              to ask you to provide information so that we can match it With information you have previously
              provided us. For instance, depending on the type of request you submit, we may ask you to
              provide certain information so that we can match the information you provide with the
              information we already have on file, or we may contact you through a communication method
              (eg.phone or email) that you have previously provided to us. We may also use other
              verification methods as the circumstances dictate.
              we will only use personal information provided in your request to verify your identity or authority
              to make the request. To the extent possible, we will avoid requesting additional information from
              you for the purposes of verification. However, if we cannot verify your identity from the
              information already maintained by us, we may request that you provide additional infomation for
              the purposes of verifying your identity and for security or fraud-prevention purposes. We will
              delete such additionally provided information as soon as we finish veriying you.

              <h4 className='text-base font-semibold my-2'>Other privacy rights</h4>

              You may object to the processing of your personal information.
              You may request correction of your personal data if it is incorrect or no longer relevant, or
              ask to restrict the processing of the information.
              You can designate an authorized agent to make a request under the CCPA on your
              behalf. We may deny a request from an authorized agent that does not submit proof that
              they have been validly authorized to act on your behalf in accordance with the CCPA.
              You may request to opt out from future selling of your pesonal information to third parties.
              Upon receiving an opt-out request, we will act upon the request as soon as feasibly
              possible, but no later than fifteen (15) days from the date of the request submission.
              To exercise these rights, you can contact us by email at  <span className="underline  decoration-1">afeez@faze20.github.io/codesnippets</span>,
              by visiting <Link href="https://www.softwaredevbytes.com/contact">https:/ifaze20.github.io/codesnippets/contact</Link> , 
              or by referring to the contact details at
              the botom of this document. lf you have a complaint about how we handle your data, we would
              like to hear from you.

              <h4 id='updates' className='text-base font-semibold my-2'>11. DO WE MAKE UPDATES TO THIS NOTICE?</h4>
              
              <span className="underline  decoration-1">In Short:</span>  Yes, we will update this notice as necesssary to stay compliant with
               relevant laws.
              We may update this privacy notice from time to time. The updated version will be indicated by an
              updated "Revised" date and the updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you either by prominently
              posting a notice of such changes or by directly sending you a notification. we encourage you to
              review this privacy notice frequently to be informed of how we are protecting your information.

              <h4 id='notice-contact' className='text-base font-semibold my-2'>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h4>

              If you have questions or comments about this notice, you may email us at
              <span className="underline  decoration-1">afeez@faze20.github.io/codesnippets</span> or by post to:
              <ul>
              <li>  Afeezllc</li>
              <li> 15241 Holly drive</li>
              <li>fontana</li>
              <li> Fontana, CA 92335</li>
              <li> United States</li>
            </ul>
             
             
              
              
             
              <h4 id='review' className='text-base font-semibold my-2'> 13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
              COLLECT FROM YOU?</h4>
             
              Based on the applicable laws of your country, you may have the right to request access to the
              personal information we collect from you, change that information, or delete it in some
              Circumstances. To request to review, update, or delete your personal information, please visit
              <Link href="https:/www.softwaredevbytes.com/contact"> https:/ifaze20github io/codesnippets/contact</Link>
              
          </p>
        </div>
        <div className='sticky bottom-1 right-0 left-0 text-right p-4 '>
          <span className='w-16  border bg-green-700 rounded-md p-2  mb-1 text-white'>
            <Link 
            href="#top-div">
              Back to Top &uarr;
            </Link>

          </span>

         
        </div>

       </div>
     
    </div>
    </div>
  )
}

export default Privacy


