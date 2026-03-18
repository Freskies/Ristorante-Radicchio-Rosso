'use client';

import { useState, useEffect, useRef } from 'react';
import { menuData } from './menu-data';

interface MenuModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const MenuIcon = ({ type, active }: { type: string; active: boolean }) => {
	const color = active ? 'bg-accent' : 'bg-zinc-400';

	const iconMap: Record<string, string> = {
		'meat': 'CARNE.svg',
		'fish': 'PESCE.svg',
		'pizza': 'PIZZA.svg',
		'dessert': 'DOLCI.svg',
		'children': 'BAMBINI.svg',
		'drinks': 'BEVANDE.svg',
	};

	const fileName = iconMap[type];

	if (!fileName) return null;

	return (
		<div
			className={`w-[2em] h-[2em] shrink-0 ${color}`}
			aria-hidden="true"
			style={{
				maskImage: `url(/menu_tabs/${fileName})`,
				maskRepeat: 'no-repeat',
				maskPosition: 'center',
				maskSize: 'contain',
				WebkitMaskImage: `url(/menu_tabs/${fileName})`,
				WebkitMaskRepeat: 'no-repeat',
				WebkitMaskPosition: 'center',
				WebkitMaskSize: 'contain',
			}}
		/>
	);
};

export default function MenuModal ({ isOpen, onClose }: MenuModalProps) {
	const [activeTab, setActiveTab] = useState(menuData[0].id);
	const modalRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	// Reset scroll when active tab changes
	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.scrollTop = 0;
		}
	}, [activeTab]);

	// Lock scroll and handle focus when modal is open
	useEffect(() => {
		const body = document.querySelector('body');
		if (body === null) return () => {};

		if (isOpen) {
			body.style.overflow = 'hidden';
			// Focus the close button when the modal opens
			closeButtonRef.current?.focus();

			// Trap focus within the modal
			const handleTabKey = (e: KeyboardEvent) => {
				if (e.key === 'Tab' && modalRef.current) {
					const focusableElements = modalRef.current.querySelectorAll(
						'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
					);
					const firstElement = focusableElements[0] as HTMLElement;
					const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

					if (e.shiftKey) {
						if (document.activeElement === firstElement) {
							lastElement.focus();
							e.preventDefault();
						}
					} else {
						if (document.activeElement === lastElement) {
							firstElement.focus();
							e.preventDefault();
						}
					}
				}
				if (e.key === 'Escape') {
					onClose();
				}
			};

			window.addEventListener('keydown', handleTabKey);
			return () => {
				body.style.overflow = 'unset';
				window.removeEventListener('keydown', handleTabKey);
			};
		} else {
			body.style.overflow = 'unset';
		}
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const activeCategory = menuData.find(cat => cat.id === activeTab);

	// noinspection LongLine
	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			onClick={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center p-[1em] bg-black/60 backdrop-blur-sm transition-opacity">
			<div
				ref={modalRef}
				onClick={(e) => e.stopPropagation()}
				className="relative w-full max-w-[56em] h-[90dvh] bg-white rounded-[1.5em] shadow-2xl overflow-hidden flex flex-col">

				{/* Close Button */}
				<button
					ref={closeButtonRef}
					onClick={onClose}
					aria-label="Chiudi menù"
					className="absolute top-[1em] right-[1em] z-10 p-[0.5em] text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer"
				>
					<svg className="w-[1.5em] h-[1.5em]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>

				{/* Header */}
				<div className="pt-[2em] px-[2em] pb-[1em] text-center">
					<h2 id="modal-title" className="text-[1.875em] font-bold text-zinc-900">Il Nostro Menù</h2>
				</div>

				{/* Tabs */}
				<div
					className="flex overflow-x-auto scrollbar-hide border-b border-zinc-100 px-[1em]">
					<div
						role="tablist"
						aria-label="Categorie del menù"
						className="flex mx-auto h-full">
						{menuData.map((category) => (
							<button
								key={category.id}
								id={`tab-${category.id}`}
								role="tab"
								aria-selected={activeTab === category.id}
								aria-controls={`panel-${category.id}`}
								onClick={() => setActiveTab(category.id)}
								className={`flex flex-col items-center justify-center min-w-[4.375em] sm:min-w-[5em] py-[0.75em] sm:py-[1em] px-[0.25em] sm:px-[0.5em] transition-all border-b-2 shrink-0 h-full cursor-pointer
									${activeTab === category.id
									? 'border-transparent'
									: 'border-transparent text-zinc-400 hover:text-zinc-600 hover:border-zinc-200'}`}
							>
								<MenuIcon type={category.icon} active={activeTab === category.id}/>
								<span className={`text-[0.75em] font-bold mt-[0.5em] uppercase tracking-wider 
									${activeTab === category.id ? 'text-accent' : 'text-zinc-500'}`}>
									{category.title}
								</span>
							</button>
						))}
					</div>
				</div>

				{/* Content */}
				<div
					ref={contentRef}
					id={`panel-${activeTab}`}
					role="tabpanel"
					aria-labelledby={`tab-${activeTab}`}
					className="flex-1 overflow-y-auto p-[2em]"
				>
					{activeCategory && (
						<div className="space-y-[3em] animate-in fade-in slide-in-from-bottom-4 duration-300">
							{activeCategory.sections.map((section, sIdx) => (
								<div key={sIdx}>
									<h3
										className="text-[1.25em] font-black text-accent mb-[1.5em] border-b-2 border-accent/10 pb-[0.5em] inline-block">
										{section.subtitle}
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-x-[3em] gap-y-[2em]">
										{section.items.map((item, idx) => (
											<div key={idx} className="group border-b border-zinc-50 pb-[1em]">
												<div className="flex justify-between items-start mb-[0.25em]">
													<h4
														className="text-[1.125em] font-bold text-zinc-800 group-hover:text-accent transition-colors">
														{item.name}
													</h4>
													<span className="text-accent font-bold ml-[1em]">
														{item.price}
													</span>
												</div>
												{item.description && (
													<p className="text-zinc-500 text-[0.875em] leading-relaxed">
														{item.description}
													</p>
												)}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Footer Info */}
				<div className="bg-zinc-50 p-[1.5em] text-center text-[0.875em] text-zinc-500 border-t border-zinc-100">
					{activeTab === 'pizza' ? (
						<p>Maggiorazione ingredienti € 1.00 / € 2.00 | Pizza Stesa € 2.50 | Impasto Integrale € 2.00 | Senza
							Glutine € 3.00. <br/>
							Tutti i nostri impasti hanno una lievitazione di almeno 30 ore.</p>
					) : (
						<p>I nostri menù variano periodicamente per garantire la massima freschezza. Pizza cotta in forno a
							legna.</p>
					)}
				</div>
			</div>
		</div>
	);
}
