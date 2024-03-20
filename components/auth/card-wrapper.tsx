import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Socail from '@/components/auth/social';
import BackButton from '@/components/auth/back-button';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';

interface CardWrapperProps {
  children: React.ReactNode;
  name: string;
  errorMessage?: string;
  backButtonLabel: string;
  backButtonHref: string;
  formError?: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  name,
  errorMessage,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md p-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">{name}</CardTitle>
        <CardDescription className="pt-3 text-center">
          <FormError message={errorMessage} />
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Socail />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
