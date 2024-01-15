import { useToasts } from 'react-toast-notifications';

export default function useToastr() {
    const { addToast } = useToasts();

    const success = (message) => {
        addToast(message, { appearance: 'success', autoDismiss: true });
    }

    const error = (message) => {
        addToast(message, { appearance: 'error', autoDismiss: true });
    }

    const warning = (message) => {
        addToast(message, { appearance: 'warning', autoDismiss: true });
    }

    const info = (message) => {
        addToast(message, { appearance: 'info', autoDismiss: true });
    }

    return [success, error, warning, info];
}