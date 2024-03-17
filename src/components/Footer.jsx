const Footer = () => {
    return (
      <footer class="text-center p-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#00cddf]">Elele.</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="/contact" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-500 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center">© 2023 <a href="https://elele.team" class="hover:underline" target="_blank">Elele</a>. All Rights Reserved.</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  