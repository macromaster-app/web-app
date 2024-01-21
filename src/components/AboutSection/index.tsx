import React from 'react';

const AboutSection = () => {
	return (
		<div className='flex flex-col gap-8 max-w-[1280px] mx-auto py-24'>
			<div className='flex flex-col gap-2 mb-4'>
				<h1 className='font-bold text-6xl'>
					About <span className='text-primary'>MacroMaster</span>
				</h1>
				<p className='text-xl'>
					Welcome to MacroMaster, your ultimate companion in achieving your health and fitness
					goals!
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='font-semibold text-4xl'>What is MacroMaster?</h2>
				<p className='text-lg'>
					MacroMaster is a cutting-edge web application designed to empower you on your journey to a
					healthier lifestyle. We understand the importance of tracking not just your calories but
					also the essential macronutrients that fuel your body.
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='font-semibold text-4xl'>Key Features:</h2>
				<ul className='flex flex-col gap-1 ml-8 [&>*]:text-lg'>
					<li>
						<strong>Calorie Tracking:</strong> Easily log and monitor your daily calorie intake to
						stay on top of your nutrition goals.
					</li>
					<li>
						<strong>Macronutrient Breakdown:</strong> Gain insights into your diet by tracking the
						specific amounts of proteins, fats, and carbohydrates you consume.
					</li>
					<li>
						<strong>Comprehensive Database:</strong> Access an extensive database of foods to make
						tracking your meals a breeze.
					</li>
					<li>
						<strong>Personalized Recommendations:</strong> Receive tailored recommendations based on
						your dietary preferences and fitness objectives.
					</li>
				</ul>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='font-semibold text-4xl'>Why Choose MacroMaster?</h2>
				<ul className='flex flex-col gap-1 ml-8 [&>*]:text-lg'>
					<li>
						<strong>Precision in Nutrition:</strong> We believe that understanding the composition
						of your diet is key to achieving your fitness milestones. MacroMaster provides you with
						accurate and detailed information to support your journey.
					</li>
					<li>
						<strong>User-Friendly Interface:</strong>
						Our intuitive and user-friendly interface ensures that tracking your meals is simple and
						enjoyable.
					</li>
					<li>
						<strong>Community Support:</strong> Join a thriving community of health enthusiasts to
						share tips, recipes, and encouragement. Together, we can achieve more.
					</li>
				</ul>
			</div>
			<div className='flex flex-col gap-4'>
				<h2 className='font-semibold text-4xl'>Start Your Journey with MacroMaster!</h2>
				<p className='text-lg'>
					Whether you&apos;re aiming for weight loss, muscle gain, or simply maintaining a balanced
					lifestyle, MacroMaster is here to support you every step of the way. Take control of your
					nutrition and experience the difference with MacroMaster.
				</p>
			</div>
			<p className='text-3xl font-semibold mt-8'>
				Join us on the path to a <span className='text-primary'>healthier, happier</span> you!
			</p>
		</div>
	);
};

export default AboutSection;
