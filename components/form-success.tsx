import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import FormError from './form-error';

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3  rounted-md flex item-center gap-x-2 text-xs	 text-emerald-500">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
