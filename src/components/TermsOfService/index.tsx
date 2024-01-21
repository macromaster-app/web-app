import Link from 'next/link';
import React from 'react';

const TermsOfService = () => {
	return (
		<div className='flex flex-col gap-8 max-w-[1280px] mx-auto py-24'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-6xl font-bold'>Terms of Service</h1>
				<p className='text-xl'>Last Updated: 15.01.2024</p>
				<p className='text-lg mt-4'>
					Welcome to MacroMaster! These Terms of Service &quot;Terms&quot; govern your use of the
					MacroMaster web application &quot;the App&quot; provided by MacroMaster. By accessing or
					using the App, you agree to comply with and be bound by these Terms.
				</p>
				<div>
					<h2 className='text-xl font-semibold mb-2'>1. Acceptance of Terms</h2>
					<p className='text-lg'>
						By using the App, you agree to these Terms and any future modifications. If you do not
						agree, please refrain from using the App.
					</p>
				</div>
				<div>
					<h2 className='text-xl font-semibold mb-2'>2. Use of the App</h2>
					<div className='ml-8'>
						<p className='text-lg'>2.1. You must be at least 18 years old to use the App.</p>
						<p className='text-lg'>2.2. You agree to use the App for lawful purposes only.</p>
						<p className='text-lg'>
							2.3. MacroMaster is not responsible for any health-related decisions based on
							information provided by the App. Consult with a healthcare professional for
							personalized advice.
						</p>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-semibold mb-2'>3. Account Registration</h2>
					<div className='ml-8'>
						<p className='text-lg'>
							3.1. You must provide accurate and complete registration information.
						</p>
						<p className='text-lg'>
							3.2. Keep your login credentials secure. You are responsible for any activity on your
							account.
						</p>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-semibold mb-2'>4. Privacy</h2>
					<div>
						<p className='text-lg'>
							We respect your privacy. Please refer to our{' '}
							<Link
								href='/privacy'
								className='hover:text-primary transition-all transform underline'>
								Privacy Policy
							</Link>{' '}
							for details on how we collect, use, and disclose your personal information.
						</p>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-semibold mb-2'>5. Content</h2>
					<div className='ml-8'>
						<p className='text-lg'>
							5.1. Users are solely responsible for the content they submit.
						</p>
						<p className='text-lg'>
							5.2. MacroMaster reserves the right to remove content that violates these Terms.
						</p>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-semibold mb-2'>6. Intellectual Property</h2>
					<div className='ml-8'>
						<p className='text-lg'>
							6.1. The App and its content are protected by intellectual property laws. You may not
							use, reproduce, or distribute any part of the App without our explicit permission.
						</p>
					</div>
				</div>

				<div>
					<h2 className='text-xl font-semibold mb-2'>7. Termination</h2>
					<div>
						<p className='text-lg'>
							MacroMaster reserves the right to terminate or suspend your account at any time for
							any reason without notice.
						</p>
					</div>
				</div>

				<div>
					<h2 className='text-xl font-semibold mb-2'>8. Modifications</h2>
					<div>
						<p className='text-lg'>
							MacroMaster may update or modify these Terms. Continued use of the App after
							modifications constitutes acceptance of the updated Terms.
						</p>
					</div>
				</div>

				<div>
					<h2 className='text-xl font-semibold mb-2'>9. Disclaimer</h2>
					<div>
						<p className='text-lg'>
							The App is provided &quot;as is&quot; without warranties. MacroMaster is not liable
							for any damages resulting from the use of the App.
						</p>
					</div>
				</div>

				<div>
					<h2 className='text-xl font-semibold mb-2'>10. Governing Law</h2>
					<div>
						<p className='text-lg'>
							These Terms are governed by and construed in accordance with the laws of [Your
							Jurisdiction].
						</p>
					</div>
				</div>

				<p className='text-lg'>
					If you have any questions or concerns regarding these Terms, please contact us at [Your
					Contact Information].
				</p>

				<p className='text-4xl font-semibold mt-8'>
					Thank you for choosing <span className='text-primary'>MacroMaster!</span>
				</p>
			</div>
		</div>
	);
};

export default TermsOfService;
