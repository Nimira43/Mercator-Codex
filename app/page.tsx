import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <div>
      <h1 className='text-3xl font-medium p-6 bg-main-dark text-main-light border-b-4 border-main logo'>
        Mercator Codex
      </h1>
    </div>
    <div className='mt-10 p-6'>
      <Button variant='mainBtn' className='m-2 transitioning'>Login</Button>
      <Button variant='mainDarkBtn' className='m-2 transitioning'>Register</Button>
      <Button variant='mainLightBtn' className='m-2 transitioning'>Submit</Button>
    </div>
    </>
    
  )
}