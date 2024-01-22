'use client';

import {
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import { Button } from '../ui/button';
import React, { ChangeEvent, useState } from 'react';
import { cn } from '@/lib/utils';

const Preferences = () => {
	const [calories, setCalories] = useState(0);
	const [protein, setProtein] = useState(0);
	const [fat, setFat] = useState(0);
	const [carbs, setCarbs] = useState(0);
	const [caloriesError, setCaloriesError] = useState(false);

	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen} variant='outline' className='w-full'>
				Preferences
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1 text-2xl pb-1'>
								Dietary preferences
							</ModalHeader>
							<ModalBody>
								<div
									className={cn({
										'flex justify-between items-center': true,
										'red-text': caloriesError,
									})}>
									<h1 className='text-lg'>Caloric Intake</h1>
									<Input
										className='w-32'
										label='Calories'
										onChange={(e) => setCalories(parseInt(e.target.value))}
										endContent={<div className='text-muted-foreground'>kcal</div>}
									/>
								</div>
								<div className='flex justify-between items-center'>
									<h1 className='text-lg'>Protein</h1>
									<Input
										className='w-32'
										label='Protein'
										onChange={(e) => setProtein(parseInt(e.target.value))}
										endContent={<div className='text-muted-foreground'>g</div>}
									/>
								</div>
								<div className='flex justify-between items-center'>
									<h1 className='text-lg'>Fat</h1>
									<Input
										className='w-32'
										label='Fat'
										onChange={(e) => setFat(parseInt(e.target.value))}
										endContent={<div className='text-muted-foreground'>g</div>}
									/>
								</div>
								<div className='flex justify-between items-center'>
									<h1 className='text-lg'>Carbohydrates</h1>
									<Input
										className='w-32'
										label='Carbs'
										onChange={(e) => setCarbs(parseInt(e.target.value))}
										endContent={<div className='text-muted-foreground'>g</div>}
									/>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button variant='destructive' onClick={onClose}>
									Close
								</Button>
								<Button color='primary' onClick={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default Preferences;
