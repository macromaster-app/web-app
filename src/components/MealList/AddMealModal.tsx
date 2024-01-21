'use client';

import {
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react';
import { Plus, Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import { buttonVariants } from '../ui/button';
const Button = dynamic(() => import('@nextui-org/react').then((mod) => mod.Button), {
	ssr: false,
});

const AddMealModal = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<div
				onClick={onOpen}
				className={
					buttonVariants({ variant: 'secondary' }) +
					` w-12 h-12 rounded-full flex items-center justify-center p-0`
				}>
				<Plus size={20} />
			</div>
			<Modal className='pb-4' size='2xl' isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1 text-2xl'>
								Search Meal/Ingredient
							</ModalHeader>
							<ModalBody>
								<Input startContent={<Search size={20} />} placeholder='Search' />
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddMealModal;
