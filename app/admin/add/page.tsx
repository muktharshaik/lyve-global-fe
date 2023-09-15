'use client';

import { Toaster } from 'react-hot-toast';
import RestaurantDetailsForm from '../../../components/RestaurantDetailsForm/RestaurantDetailsForm';

export default async function Index() {
  return (
    <div>
      <h1>ADD restaurant Page</h1>

      <div className="border border-black mt-10 px-4 py-2 flex flex-col justify-start items-center gap-5">
        <h3 className="self-start text-xl">Restraunt Details</h3>
        {/* Adding restaurant info */}
        <div className="w-[100%] p-2 shadow-sm bg-white rounded-lg">
          <RestaurantDetailsForm />
        </div>
        {/* adding category info accordian */}
        <div className="border border-black w-[100%]">
          <RestaurantDetailsForm />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
