import Contacts from '../constants/Contact.js'

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
     <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
     <div className='text-center tracking-tighter'>
        <p className='my-4'>
             {Contacts.address}
        </p>
        <p className='my-4'>
            {Contacts.phoneno}
        </p>
        <a href="#" className='border-b'>{Contacts.email}</a>
     </div>
    </div>
  )
}

export default Contact
