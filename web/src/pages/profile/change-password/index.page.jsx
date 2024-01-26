import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

import Template from '@/components/templates/Template';

const ChangePasswordPage = () => {
  return (
    <Template>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-md shadow-md">
        <form className="flex flex-col gap-4">
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
    </div>
    </Template>
  );
}

export default ChangePasswordPage;
