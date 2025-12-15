import LoaderSpinner from '@/components/loader/LoaderSpinner';

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <LoaderSpinner />
    </div>
  );
}
