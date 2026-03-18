import { useEffect, RefObject } from 'react';

interface UseMenuModalProps {
	isOpen: boolean;
	onClose: () => void;
	activeTab: string;
	modalRef: RefObject<HTMLDivElement | null>;
	contentRef: RefObject<HTMLDivElement | null>;
	closeButtonRef: RefObject<HTMLButtonElement | null>;
}

export function useMenuModal ({ isOpen, onClose, activeTab, modalRef, contentRef, closeButtonRef }: UseMenuModalProps) {
	// Reset scroll when the active tab changes
	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.scrollTop = 0;
		}
	}, [activeTab, contentRef]);

	// Lock scroll and handle focus when modal is open
	// noinspection FunctionWithInconsistentReturnsJS
	useEffect(() => {
		const body = document.querySelector('body');
		if (!body) return;

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
				} else if (document.activeElement === lastElement) {
					firstElement.focus();
					e.preventDefault();
				}
			}
			if (e.key === 'Escape') onClose();
		};

		if (isOpen) {
			body.style.overflow = 'hidden';
			// Focus the close button when the modal opens
			closeButtonRef.current?.focus();
			window.addEventListener('keydown', handleTabKey);
		}

		return () => {
			body.style.overflow = 'unset';
			window.removeEventListener('keydown', handleTabKey);
		};
	}, [isOpen, onClose, modalRef, closeButtonRef]);
}
