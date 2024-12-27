import { aboutus, services, contacts } from "../constants"

const footer = () => {
  return (
    <footer id="Contact" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Contacts</h3>
          <ul className="space-y-2">
            {contacts.map((link,index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((link,index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            {aboutus.map((link,index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer