import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
const Socail = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {/* <div className="flex  flex-col items-center justify-center space-y-2 mt-4">
        <Button variant="outline" className="w-full">
          <FcGoogle className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button variant="outline" className="w-full">
          <FaGithub className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div> */}

      <div className="grid grid-cols-2 gap-6 mt-4">
        <Button variant="outline">
          <FaGithub className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button variant="outline">
          <FcGoogle className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
};

export default Socail;
