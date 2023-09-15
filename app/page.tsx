import Link from 'next/link';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <h1>
        please redirect here <Link href={'/admin'}>Click Here</Link>
      </h1>
    </div>
  );
}
