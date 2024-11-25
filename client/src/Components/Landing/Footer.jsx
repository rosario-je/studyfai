const Footer = () => {
  return (
    <footer className="font-primary text-white">
      <div className="h-[250px] bg-zinc-900">
        <div className="footer-container container flex items-start content-center h-full justify-between pt-14">
          <div className="services-tab">
            <h1 className="font-medium pb-4">Services</h1>
            <ul className="flex flex-col gap-y-[2px]">
              <li className="font-light text-zinc-400">Note Enhancer</li>
              <li className="font-light text-zinc-400">Quiz Creator</li>
            </ul>
          </div>
          <div className="company-tab">
            <h1 className="font-medium pb-4">Company</h1>
            <ul className="flex flex-col gap-y-[2px]">
              <li className="font-light text-zinc-400">About</li>
              <li className="font-light text-zinc-400">Contact</li>
              <li className="font-light text-zinc-400">AI Tool</li>
            </ul>
          </div>
          <div className="legal-tab">
            <h1 className="font-medium pb-4">Services</h1>
            <ul className="flex flex-col gap-y-[2px]">
              <li className="font-light text-zinc-400">Terms of use</li>
              <li className="font-light text-zinc-400">Privacy Policy</li>
              <li className="font-light text-zinc-400">Cookie Policy</li>
              <li className="font-light text-zinc-400">License</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
