import React from 'react';

const Product = () => {
  return (
    <div>
      
      <section class="bg-white py-20">
                <div class="max-w-5xl px-6 mx-auto text-center">
                    <h2 class="text-2xl font-semibold text-gray-800">Latest Posts</h2>

                    <div class="flex flex-col items-center justify-center mt-6">
                        <a class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/">
                            <div class="flex items-center justify-between px-4 py-2">
                                <h3 class="text-lg font-medium text-gray-700">Easy, Free Laravel CI Using GitHub Actions</h3>
                                <span class="block text-gray-600 font-light text-sm">20 Jan 2020</span>
                            </div>
                        </a>

                        <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/">
                            <div class="flex items-center justify-between px-4 py-2">
                                <h3 class="text-lg font-medium text-gray-700">Pest: a delightful PHP Testing Framework</h3>
                                <span class="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                            </div>
                        </a>

                        <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/">
                            <div class="flex items-center justify-between px-4 py-2">
                                <h3 class="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                                <span class="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                            </div>
                        </a>

                        <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="/">
                            <div class="flex items-center justify-between px-4 py-2">
                                <h3 class="text-lg font-medium text-gray-700">Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                                <span class="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                            </div>
                        </a>
                    </div>

                    <div class="flex items-center justify-center mt-12">
                        <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="/">
                            <span>View More</span>

                            <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section class="bg-gray-800 pattern py-20">
                <div class="max-w-5xl px-6 mx-auto text-center">
                    <h2 class="text-2xl font-semibold text-white">Projects</h2>

                    <div class="flex items-center justify-center mt-10">
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div class="max-w-xs w-full">
                                <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                    <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="" />
                                </div>

                                <a href="/" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    <div class="py-2 px-3 text-center text-sm">
                                        <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                        <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                    </div>
                                </a>
                            </div>

                            <div class="max-w-xs w-full">
                                <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                    <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="" />
                                </div>

                                <a href="/" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    <div class="py-2 px-3 text-center text-sm">
                                        <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                        <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                    </div>
                                </a>
                            </div>

                            <div class="max-w-xs w-full">
                                <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                    <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt="" />
                                </div>

                                <a href="/" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    <div class="py-2 px-3 text-center text-sm">
                                        <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                        <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center mt-12">
                        <a class="flex items-center text-white hover:underline hover:text-gray-200" href="/">
                            <span>View More On Github</span>

                            <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
    </div>
  );
}

export default Product;
