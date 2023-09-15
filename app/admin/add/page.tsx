'use client';

import { Toaster } from 'react-hot-toast';
import RestaurantDetailsForm from '../../../components/RestaurantDetailsForm/RestaurantDetailsForm';
import { ArrowBackIos, Home } from '@mui/icons-material';
import Link from 'next/link';

export default async function Index() {
  return (
    <div>
      <div className="bg-white shadow-md h-[50px] px-4 flex justify-between items-center">
        <Link href="/admin">
          <ArrowBackIos fontSize="medium" />
        </Link>
        <Link href="/admin">
          <Home fontSize="large" />
        </Link>
      </div>

      <div className="mt-10 px-4 py-2 flex flex-col justify-start items-center gap-5">
        <h3 className="text-gray-800 text-xl">Add your Restraunt</h3>
        {/* Adding restaurant info */}
        <div className="w-[100%] p-2 shadow-sm bg-white rounded-lg">
          <RestaurantDetailsForm />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
