import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import Socail from './social';
import BackButton from './back-button';

interface CardWrapperProps {
  children: React.ReactNode;
  name: string;
  desc: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  name,
  desc,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md p-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">{name}</CardTitle>
        <CardDescription className="pt-5 text-center">{desc}</CardDescription>
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
