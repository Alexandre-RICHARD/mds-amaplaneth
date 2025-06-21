import { createContext, PropsWithChildren, useContext, useState } from 'react';
import Toast, { ToastProps } from './Toast';

interface ToastContextType {
    addToast: (toast: Omit<ToastProps, 'id' | 'onClose'>) => void;
}

const ToastContext = createContext<ToastContextType>({
    addToast: () => {},
});

export function useToast() {
    return useContext(ToastContext);
}

export default function ToastProvider({ children }: PropsWithChildren) {
    const [toasts, setToasts] = useState<Omit<ToastProps, 'onClose'>[]>([]);

    const addToast = (toast: Omit<ToastProps, 'id' | 'onClose'>) => {
        const id = Date.now() + Math.random();
        setToasts((prev) => [...prev, { ...toast, id }]);
    };

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed right-4 top-4 z-50 flex flex-col items-end space-y-2">
                {toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} onClose={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}
