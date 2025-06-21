import { useEffect, useState } from 'react';

export type ToastVariant = 'success' | 'error';

export interface ToastProps {
    id: number;
    title?: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
    onClose: (id: number) => void;
}

export default function Toast({
    id,
    title,
    description,
    variant = 'success',
    duration = 7500,
    onClose,
}: ToastProps) {
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const start = Date.now();
        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const percentage = 100 - (elapsed / duration) * 100;
            if (percentage <= 0) {
                clearInterval(interval);
                onClose(id);
            } else {
                setProgress(percentage);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [duration, id, onClose]);

    const colorClasses =
        variant === 'success'
            ? 'bg-green-50 border-green-400 text-green-800'
            : 'bg-red-50 border-red-400 text-red-800';
    const barColor = variant === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div
            className={`relative w-64 overflow-hidden rounded border px-4 py-2 shadow ${colorClasses}`}
        >
            <button
                type="button"
                className="absolute left-2 top-2 text-xs font-bold"
                onClick={() => onClose(id)}
            >
                x
            </button>
            {title && <p className="font-bold">{title}</p>}
            {description && (
                <p className="text-sm leading-snug">{description}</p>
            )}
            <div
                className={`absolute bottom-0 left-0 h-1 ${barColor}`}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
