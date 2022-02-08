import "./intro.css";

const Intro = () => {
  return (
    <div>
      <header class="max-h-full bg-white p-6 grid">
        <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
          <div class="grid justify-center items-center order-1 col-span-1">
            <img class="lg:h-80 md:h-64 h-40 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="" />
          </div>
          <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Ouissal, Web developper</h1>
            <p class="text-xl text-gray-800 text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique cupiditate, ducimus qui odit doloribus! Veritatis nihil, maxime, veniam perferendis vitae explicabo amet exercitationem sed quas inventore, consequatur ipsa necessitatibus!</p>
            <button type="button" class="text-white my-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See more</button>
          </div>
        </div>
      </header>
    </div>  
  );
};

export default Intro;

