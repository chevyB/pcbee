import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

import Template from '@/components/templates/Template';

const ChangePasswordPage = () => {
  return (
    <Template>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          {/* Insert your logo component here */}
          <Image src='/logo.png' width={30} height={30} alt='logo' />
        </div>
        <div className="text-2xl font-bold mb-4">Change Password</div>
        <form className="flex flex-col items-center justify-center gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="old_password" value="Old Password" />
            </div>
            <TextInput id="old_password" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="New Password" />
            </div>
            <TextInput id="password" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Confirm Password" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button type="submit">Confirm Password</Button>
        </form>
      </div>
    </Template>
  );
};

export default ChangePasswordPage;
