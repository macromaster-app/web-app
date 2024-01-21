import React from 'react';

const PrivacyPolicy = () => {
	return (
		<div className='flex flex-col gap-8 max-w-[1280px] mx-auto py-24'>
			<h1 className='text-6xl font-bold'>Privacy Policy</h1>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>Information We Collect</h2>
				<p className='text-lg'>
					<strong>Personal Information:</strong> We may collect personal information that you
					voluntarily provide when using MacroMaster, such as your name, email address, and other
					contact details.
				</p>
				<p className='text-lg'>
					<strong>Usage Data:</strong> We may collect information about how you use the application,
					including IP addresses, device information, and browsing patterns.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>How We Use Your Information</h2>
				<p className='text-lg'>
					<strong>Service Provision:</strong> We use the collected information to provide, maintain,
					and improve MacroMaster.
				</p>
				<p className='text-lg'>
					<strong>Personalization:</strong> We may use your information to personalize your
					experience, including tailoring content and recommendations.
				</p>
				<p className='text-lg'>
					<strong>Communications:</strong> With your consent, we may send you emails or
					notifications about updates, promotions, and other relevant information.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>Data Security</h2>
				<p className='text-lg'>
					<strong>Security Measures:</strong> We implement industry-standard security measures to
					protect your personal information from unauthorized access, disclosure, alteration, and
					destruction.
				</p>
				<p className='text-lg'>
					<strong>Data Retention:</strong> We retain your personal information only for as long as
					necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer
					retention period is required or permitted by law.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>Information Sharing and Disclosure</h2>
				<p className='text-lg'>
					<strong>Third-Party Services:</strong> We may use third-party services to facilitate our
					application and may share your information with them for these purposes.
				</p>
				<p className='text-lg'>
					<strong>Legal Compliance:</strong> We may disclose your information when required by law
					or in response to valid requests by public authorities.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>Your Choices</h2>
				<p className='text-lg'>
					<strong>Opt-Out:</strong> You can opt-out of receiving promotional communications by
					following the instructions provided in the communication.
				</p>
				<p className='text-lg'>
					<strong>Access and Update:</strong> You may access and update your personal information by
					contacting us at contact@macro-master.app.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>Children&apos;s Privacy</h2>
				<p className='text-lg'>
					MacroMaster is not intended for children under the age of 13. We do not knowingly collect
					or solicit personal information from children. If you believe that we have collected
					personal information from a child, please contact us immediately.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>Changes to This Privacy Policy</h2>
				<p className='text-lg'>
					We may update our Privacy Policy from time to time. The date of the latest revision will
					be indicated at the top of this document.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='text-2xl font-bold mb-2'>Contact Us</h2>
				<p className='text-lg'>
					If you have any questions or concerns about our Privacy Policy, please contact us at
					contact@macro-master.app.
				</p>
			</div>
			<div className='flex flex-col gap-2'>
				<h2 className='text-2xl font-bold mb'>
					Thank you for using <span className='font-bold text-primary'>MacroMaster!</span>
				</h2>
				<p className='text-lg'>- MacroMaster Team</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
