function Footer() {
  const getYear = () => {
    const today = new Date();

    let year = today.getFullYear();

    return year;
  };

  return (
    <footer className=" fixed bottom-0 left-0 w-full bg-white h-[64px] border-t border-gray-200/80 shadow-inner rounded-t-2xl flex items-center pl-3 md:pl-8">
      <p className="text-sm md:text-base text-Primary">
        &copy; {getYear()} Designed & Built with 💙 by Winfred Waiguru
      </p>
    </footer>
  );
}

export default Footer;
